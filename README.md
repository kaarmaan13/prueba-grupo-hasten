# vue-image-grid

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Testing
```
pnpm run test
```

### Estructura del Proyecto
vue-image-grid/ ├── public/ │ └── favicon.ico # Icono de la aplicación │ └── index.html # Archivo HTML principal ├── src/ │ ├── assets/ # Recursos estáticos como imágenes y estilos │ ├── components/ # Componentes Vue.js reutilizables │ │ └── ImageGrid.vue # Componente principal para la cuadrícula de imágenes │ ├── App.vue # Componente raíz de la aplicación │ ├── main.js # Punto de entrada de la aplicación │ ├── setupTests.js # Configuración global para pruebas │ └── styles/ # Archivos de estilo global ├── tests/ │ └── components/ # Pruebas específicas para los componentes │ └── ImageGrid.test.js # Pruebas para el componente ImageGrid ├── .gitignore # Archivos y carpetas que Git debe ignorar ├── package.json # Gestión de dependencias y scripts del proyecto ├── vite.config.js # Configuración de Vite └── README.md #