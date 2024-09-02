import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import ImageGrid from './ImageGrid.vue'
import axios from 'axios'

vi.mock('axios')

describe('ImageGrid.vue', () => {
  let wrapper

  beforeEach(async () => {
    const mockImages = [
      { id: 1, title: 'Image 1', thumbnailUrl: 'http://example.com/1.jpg' },
      { id: 2, title: 'Image 2', thumbnailUrl: 'http://example.com/2.jpg' },
    ]
    axios.get.mockResolvedValue({ data: mockImages })

    wrapper = mount(ImageGrid)

    await wrapper.vm.$nextTick()
  })

  it('renders grid layout correctly', () => {
    expect(wrapper.find('.grid').exists()).toBe(true)
  })

  it('loads images on mount', () => {
    expect(wrapper.findAll('.image-container').length).toBe(2)
  })

  it('removes an image when clicked', async () => {
    await wrapper.vm.$nextTick()

    await wrapper.find('.image-container img').trigger('click')

    expect(wrapper.findAll('.image-container').length).toBe(1)
  })
})