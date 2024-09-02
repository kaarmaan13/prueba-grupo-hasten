<template>
  <div>
    <div class="grid">
      <div v-for="image in images" :key="image.id" class="image-container">
        <img :src="image.thumbnailUrl" :alt="image.title" @click="removeImage(image.id)" />
      </div>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      images: [],
      page: 1,
      limit: 20,
      loading: false,
    }
  },
  created() {
    this.loadImages()
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async loadImages() {
      this.loading = true
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=${this.page}&_limit=${this.limit}`
        )
        this.images.push(...response.data)
        this.page++
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        this.loading = false
      }
    },
    handleScroll() {
      const bottomOfWindow =
        window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100
      if (bottomOfWindow && !this.loading) {
        this.loadImages()
      }
    },
    removeImage(id) {
      this.images = this.images.filter(image => image.id !== id)
    },
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 10px;
}

.image-container {
  cursor: pointer;
}

.image-container img {
  width: 100%;
  height: auto;
  transition: opacity 0.5s ease-in-out;
}

.loading {
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
}
</style>
