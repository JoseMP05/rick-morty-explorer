# Prueba técnica

## Assignments

### HU01 - Búsqueda de personajes

Como usuario, quiero ingresar el nombre de un personaje y buscarlo, para ver su información básica.

- Campo de entrada y botón de búsqueda. ✅
- Manejo de errores si el nombre no existe. ✅
- Indicador de carga durante la búsqueda. ✅

### HU02 - Visualización de atributos

Como usuario, quiero ver los atributos más importantes del personaje, para conocerlo mejor:

- **Nombre (name)**  ✅
- **Imagen (image)**  ✅
- **Especie (Species)**  ✅
- **Estado (Alive, Dead, Unknown)**  ✅
- **Origen (Origin name)**  ✅

Documentación: [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest)

### HU03 - Historial de búsquedas

Como usuario, quiero ver los últimos personajes que he buscado, para poder acceder rápidamente a ellos nuevamente.

- Mostrar lista con los últimos 3 personajes buscados.
- Permitir volver a consultar haciendo clic en uno.

### HU04 - Diseño accesible y responsive

Como usuario, quiero que la aplicación se vea bien en distintos dispositivos y sea fácil de usar.

- Uso de Vuetify para los componentes visuales.
- Diseño responsive y centrado en usabilidad.
- Referencia de diseño: [React Projects](https://react-projects-psi.vercel.app/).

El diseño es libre, se sugiere realizar algo simple, minimalista y no dedicar mucho tiempo a esta parte.

## Pending improves

- Refactor and componentize
- Debounce on input search input
- Pagination
- Add correct validations for response fetchAPI
- Testing
