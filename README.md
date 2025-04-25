# Prueba técnica

## Instalación

Pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd rick-morty-explorer
    ```

3. Instala las dependencias utilizando `pnpm`:
    ```bash
    pnpm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    pnpm dev
    ```

5. Abre tu navegador y ve a `http://localhost:5173` para ver la aplicación en funcionamiento.

## Estructura del proyecto


### Explicación de las carpetas principales

- **`src/`**: Código fuente de la aplicación.
  - **`api/`**: Lógica al interactuar con las API's, en este caso Rick & Morty API.
  - **`components/`**: Componentes reutilizables como tarjetas y formularios.
  - **`views/`**: Vistas principales que representan páginas completas.
  - **`assets/`**: Archivos estáticos como estilos e imágenes.
- **`e2e/`**: Pruebas end-to-end con Playwright.
- **`public/`**: Archivos estáticos que se sirven directamente, como el favicon.
- **Configuraciones**: Archivos como `vite.config.ts`, `eslint.config.ts` y `tsconfig.json` para configurar herramientas del proyecto.

## Tareas

### HU01 - Búsqueda de personajes

Como usuario, quiero ingresar el nombre de un personaje y buscarlo para ver su información básica.

- Campo de entrada y botón de búsqueda. ✅
- Manejo de errores si el nombre no existe. ✅
- Indicador de carga durante la búsqueda. ✅

### HU02 - Visualización de atributos

Como usuario, quiero ver los atributos más importantes del personaje para conocerlo mejor:

- **Nombre (name)** ✅
- **Imagen (image)** ✅
- **Especie (Species)** ✅
- **Estado (Alive, Dead, Unknown)** ✅
- **Origen (Origin name)** ✅

Documentación: [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest)

### HU03 - Historial de búsquedas

Como usuario, quiero ver los últimos personajes que he buscado para poder acceder rápidamente a ellos nuevamente.

- Mostrar lista con los últimos 3 personajes buscados. ✅
- Permitir volver a consultar haciendo clic en uno. ✅

### HU04 - Diseño accesible y responsive

Como usuario, quiero que la aplicación se vea bien en distintos dispositivos y sea fácil de usar.

- Uso de Vuetify para los componentes visuales. ✅
- Diseño responsive y centrado en usabilidad. ✅
- Referencia de diseño: [React Projects](https://react-projects-psi.vercel.app/). 

El diseño es libre, se sugiere realizar algo simple, minimalista y no dedicar mucho tiempo a esta parte.

## ¿Qué podría mejorar?

- **Paginación:** Agregaría paginación tipo infinite scroll al identificar cuando el usuario esté terminando de hacer scroll en la lista de cartas de los personajes, usando Intersection Observer.

- **Debounce:** Haría que la consulta de los personajes se realizara a medida que el usuario escribe un nombre en el input, agregando un debounce para no estar realizando una petición por cada carácter, sino solo al terminar de escribir.

- **Testing:** Agregaría principalmente tests unitarios y end-to-end. Dada la oportunidad, agregaría también los de integración.

- **Cartas por defecto:** Agregaría algunos personajes ya predeterminados tan solo al entrar a la página, para que el usuario se dé una idea del contenido que espera. Además, mostraría dichos personajes predeterminados también cuando se realice una petición que no sea resuelta correctamente.

- **SEO**: Agregaría un meta-description y open graph tags

- Para evitar que mientras se cargan las cartas de los personajes haya un salto en el contenido, le agregaría al `img` de las cartas un `aspect-ratio` por defecto.

- **Desplegar la web.**

## Aclaraciones

Dada la oportunidad, agregaría testing, razón por la cual dejé las configuraciones de vitest y playwright.
