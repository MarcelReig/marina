# Portfolio minimalista para artistas hecho con la plantilla de ZURB


Esta plantilla utiliza la plantilla official de ZURB para utilizar con [Foundation for Sites](http://foundation.zurb.com/sites).

Estas son las tareas que hace Gulp:

- Handlebars HTML templates con Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Instalación
Para utilizar esta plantilla, tu máquina necesita:


- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)


Puedes hacerte un Fork y hacer lo que quieras con la plantilla, los derechos de autor de las ilustraciones son de Marina Ibarra.
### 


```

Ejecuta `npm start` para correr Gulp. Tu sitio terminado se creará en la carpeta `dist`, visible en la URL:

```
http://localhost:8000
```

Para crear una versión comprimida, lista para producción, ejecuta `npm run build`.
