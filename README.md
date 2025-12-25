# 🌱 Cooperativa Agrícola - Landing Page

Landing page profesional para cooperativa agrícola desarrollada con HTML5, CSS3, Bootstrap 5 y JavaScript Vanilla.

## 📋 Descripción

Sitio web estático diseñado para promover productos agrícolas frescos y conectar directamente a productores locales con consumidores a través de WhatsApp.

### Características principales:

- ✅ Diseño responsive (mobile-first)
- ✅ Secciones: Hero, Nosotros, Cultivos, Cómo Funciona, Contacto
- ✅ Cards de productos con información de proveedores
- ✅ Botones de WhatsApp con mensajes predefinidos
- ✅ Chatbot básico informativo
- ✅ Animaciones suaves y efectos hover
- ✅ Navegación smooth scroll
- ✅ 100% sitio estático (sin backend)

## 🛠️ Tecnologías

- HTML5
- CSS3
- Bootstrap 5.3.2
- JavaScript Vanilla
- Bootstrap Icons
- Google Fonts (Poppins, Merriweather)

## 📁 Estructura del Proyecto

```
cooperativa-agricola/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   └── script.js           # Funcionalidad JavaScript
├── images/                 # Carpeta para imágenes
│   ├── hero/              # Imágenes de portada
│   ├── cultivos/          # Fotos de productos
│   ├── proveedores/       # Fotos de productores
│   └── logos/             # Logo de la cooperativa
└── README.md              # Este archivo
```

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue con GitHub (Recomendado)

1. **Crear repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Cooperativa Agrícola"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/cooperativa-agricola.git
   git push -u origin main
   ```

2. **Desplegar en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Click en "Add New Project"
   - Selecciona tu repositorio "cooperativa-agricola"
   - Click en "Deploy"
   - ¡Listo! Tu sitio estará disponible en: `https://cooperativa-agricola.vercel.app`

### Opción 2: Despliegue directo sin GitHub

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Desplegar:**
   ```bash
   cd cooperativa-agricola
   vercel
   ```

3. **Seguir las instrucciones:**
   - Confirma el directorio del proyecto
   - Selecciona tu cuenta
   - Acepta las configuraciones por defecto
   - ¡Tu sitio estará en línea!

### Opción 3: Arrastrar y Soltar

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Arrastra la carpeta completa del proyecto
3. Vercel detectará automáticamente que es un sitio estático
4. Click en "Deploy"

## ⚙️ Configuración de Vercel

Crea un archivo `vercel.json` en la raíz del proyecto (opcional):

```json
{
  "version": 2,
  "name": "cooperativa-agricola",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

## 📱 Personalización

### Cambiar números de WhatsApp:

1. Abre `index.html`
2. Busca los botones con clase `btn-whatsapp`
3. Modifica el atributo `data-numero` con el número real (formato: 57XXXXXXXXXX)

Ejemplo:
```html
<button class="btn btn-success btn-whatsapp" 
        data-proveedor="Don Pedro" 
        data-producto="Café Premium"
        data-numero="573001234567">
    <i class="bi bi-whatsapp me-2"></i>Consultar
</button>
```

### Cambiar colores:

1. Abre `css/styles.css`
2. Modifica las variables CSS en `:root`:

```css
:root {
    --primary-color: #2d5016;      /* Verde oscuro */
    --secondary-color: #5a8c3a;    /* Verde medio */
    --accent-color: #8bc34a;       /* Verde claro */
}
```

### Agregar más productos:

1. Copia una sección de cultivo existente en `index.html`
2. Modifica el contenido (título, descripción, proveedores)
3. Actualiza las imágenes y datos de contacto

## 🖼️ Imágenes

Las imágenes actuales son de Unsplash (placeholder). Para usar tus propias imágenes:

1. Coloca tus imágenes en las carpetas correspondientes:
   - `images/hero/` - Imagen de fondo del hero
   - `images/cultivos/` - Fotos de productos
   - `images/proveedores/` - Fotos de productores
   - `images/logos/` - Logo de la cooperativa

2. Actualiza las rutas en `index.html`:
   ```html
   <!-- Antes -->
   <img src="https://images.unsplash.com/photo-..." alt="...">
   
   <!-- Después -->
   <img src="images/cultivos/cafe.jpg" alt="...">
   ```

## 🌐 Dominio Personalizado

Para usar tu propio dominio:

1. En Vercel, ve a tu proyecto
2. Click en "Settings" > "Domains"
3. Agrega tu dominio
4. Configura los DNS según las instrucciones de Vercel

## 📊 Analíticas (opcional)

Para agregar Google Analytics:

1. Obtén tu ID de medición (G-XXXXXXXXXX)
2. Agrega este código antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔄 Actualizaciones

Para actualizar el sitio después del despliegue:

**Con GitHub:**
```bash
git add .
git commit -m "Descripción de cambios"
git push
```
Vercel desplegará automáticamente los cambios.

**Sin GitHub (Vercel CLI):**
```bash
vercel --prod
```

## 📝 Notas Importantes

- **Números de WhatsApp:** Recuerda actualizar todos los números de contacto con los reales
- **SEO:** Personaliza las meta tags en `<head>` con tu información
- **Imágenes:** Optimiza las imágenes antes de subirlas (usa TinyPNG o similar)
- **Responsive:** El diseño está optimizado para móviles, pero prueba en diferentes dispositivos
- **Sin Backend:** Este es un sitio estático, no incluye base de datos ni pagos en línea

## 🎨 Colores de la Paleta

- **Verde Oscuro (Primary):** `#2d5016`
- **Verde Medio (Secondary):** `#5a8c3a`
- **Verde Claro (Accent):** `#8bc34a`
- **Gris Oscuro (Texto):** `#2c3e50`
- **Gris Claro (Texto secundario):** `#6c757d`

## 📞 Soporte

Para preguntas o problemas con el despliegue:
- Documentación de Vercel: https://vercel.com/docs
- Bootstrap 5: https://getbootstrap.com/docs/5.3

## 📄 Licencia

Este proyecto es de uso libre para fines comerciales de la cooperativa.

---

**Desarrollado para Cooperativa Agrícola** 🌱
Versión 1.0 - Diciembre 2025
