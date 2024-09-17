# Proyecto CRUD con Angular, .NET Core, Entity Framework Core y SQL Server

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada utilizando un stack tecnológico completo, que incluye **Angular 9** para el frontend, **.NET Core 3.1** para el backend, **Entity Framework Core 3.1** para el acceso a datos, y **SQL Server** para la base de datos. El proyecto está desplegado en **Azure** para el backend y en **Netlify** para el frontend.

## Descripción

Este proyecto muestra cómo construir una aplicación web completa desde cero utilizando tecnologías modernas para el desarrollo frontend y backend. La aplicación incluye:

- **Frontend**: Desarrollado con Angular 9, utilizando HTML, CSS, JavaScript y Bootstrap 4 para la creación de una interfaz de usuario interactiva.
- **Backend**: Implementado con .NET Core 3.1, proporcionando una API RESTful con métodos GET, POST, PUT y DELETE.
- **ORM**: Entity Framework Core 3.1 para el manejo de datos y la conexión con SQL Server.
- **Base de Datos**: SQL Server para la gestión de datos persistentes.
- **Deploy**: Implementación en Azure para el backend y en Netlify para el frontend.

## Tecnologías Utilizadas

- **Angular 9**: Para el desarrollo del frontend, incluyendo la creación de componentes, servicios y validación de formularios.
- **HTML5 & CSS3**: Para la estructura y el diseño visual de la aplicación.
- **JavaScript**: Para la lógica del frontend.
- **Bootstrap 4**: Para un diseño responsive y estético.
- **.NET Core 3.1**: Para el desarrollo del backend y la creación de la API.
- **Entity Framework Core 3.1**: Para el mapeo objeto-relacional y la comunicación con SQL Server.
- **SQL Server**: Para el almacenamiento de datos.
- **Azure**: Para el despliegue del backend.
- **Netlify**: Para el despliegue del frontend.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

### Frontend

- **src/app/**: Contiene los módulos, componentes y servicios de Angular.
- **src/assets/**: Carpeta para los archivos estáticos como imágenes y estilos.
- **src/environments/**: Configuraciones para diferentes entornos (desarrollo y producción).
- **styles.css**: Archivo de estilos globales para la aplicación.

### Backend

- **Controllers/**: Contiene los controladores de la API.
- **Models/**: Define las entidades del modelo de datos.
- **Data/**: Contiene el contexto de Entity Framework y la configuración de la base de datos.
- **Startup.cs**: Configuración de servicios y middleware.
- **Program.cs**: Punto de entrada de la aplicación.

## Instalación y Ejecución

### Requisitos Previos

- Angular CLI
- Node.js
- .NET Core SDK 3.1
- SQL Server
- Visual Studio 2019
- VS Code (para el frontend)

### Configuración del Frontend

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tuusuario/frontend-backend-project.git
