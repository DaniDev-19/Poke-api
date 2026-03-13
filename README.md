# PokeAPI Frontend

Una aplicación web frontend construida con React y TypeScript para explorar y buscar Pokémon utilizando la API de PokeAPI. Incluye funcionalidades como listado de Pokémon, búsqueda, paginación y detalles individuales de cada Pokémon.

## Características

- **Listado de Pokémon**: Muestra una lista paginada de Pokémon con tarjetas que incluyen imagen, nombre y tipos.
- **Búsqueda**: Barra de búsqueda para filtrar Pokémon por nombre.
- **Paginación**: Navegación entre páginas para explorar más Pokémon.
- **Detalles de Pokémon**: Página dedicada con información detallada de un Pokémon seleccionado (estadísticas, habilidades, etc.).
- **Responsive**: Diseño adaptativo usando TailwindCSS.
- **Enrutamiento**: Navegación entre páginas con React Router.

## Tecnologías Utilizadas

- **React 19**: Biblioteca para la interfaz de usuario.
- **TypeScript**: Para tipado estático.
- **Vite**: Herramienta de construcción rápida.
- **TailwindCSS**: Framework CSS para estilos.
- **Axios**: Para llamadas a la API.
- **React Router DOM**: Para enrutamiento del lado cliente.
- **ESLint**: Para linting del código.

## Instalación y Uso

1. **Clona el repositorio**:
   ```bash
   git clone <URL-del-repositorio>
   cd poke-api/frontend
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta en modo desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Construye para producción**:
   ```bash
   npm run build
   ```

5. **Vista previa de producción**:
   ```bash
   npm run preview
   ```

## Despliegue

Este proyecto está configurado para desplegarse en Vercel. Asegúrate de tener el archivo `vercel.json` en la raíz del proyecto (carpeta `frontend/`) con la configuración adecuada para Vite y el base path `/PokeApi`.

- Conecta tu repositorio a Vercel y despliega automáticamente.
- Para más detalles, consulta la documentación de Vercel.

## Estructura del Proyecto

```
frontend/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables (PokemonCard, PokemonList, etc.)
│   ├── pages/              # Páginas principales (Pokelist, PokemonDetail, etc.)
│   ├── services/           # Servicios para API (pokemonApi.ts)
│   ├── types/              # Definiciones de tipos TypeScript
│   ├── utils/              # Utilidades (BaseUrl, typePokemon)
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Punto de entrada
├── package.json            # Dependencias y scripts
├── vite.config.ts          # Configuración de Vite
└── vercel.json             # Configuración para Vercel
```

## API Utilizada

- [PokeAPI](https://pokeapi.co/): API gratuita para datos de Pokémon.

## Contribución

Si quieres contribuir:
1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto es de código abierto y está bajo la Licencia MIT.

## Autor DaniDev
---

Para más información sobre Vite, visita [vite.dev](https://vite.dev/).