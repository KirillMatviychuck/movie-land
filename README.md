# 🎬 MovieLand

A responsive movie discovery app built with React and TypeScript. Browse popular, top-rated, now playing and upcoming movies, search by title, and explore detailed information about movies, cast and actors — powered by [The Movie Database (TMDB) API](https://www.themoviedb.org/).

**[Live Demo →](https://KirillMatviychuck.github.io/movie-land)**

## Features

- 🎥 Browse movies by category: Popular, Top Rated, Now Playing, Upcoming
- 🔍 Search movies by title
- 📄 Movie details page: overview, genres, runtime, budget, revenue, rating
- 🎭 Cast list with links to individual actor pages
- 👤 Actor details page with filmography
- 📑 Pagination for movie lists
- ⏳ Skeleton loaders for a smooth loading experience
- 🎞️ Animated page transitions
- 📱 Responsive layout

## Tech Stack

- **React 18** + **TypeScript**
- **Redux Toolkit** for state management, `createAsyncThunk` for async data fetching
- **React Router v6** for client-side routing
- **Axios** for HTTP requests
- **Material UI** for base UI components
- **Framer Motion** for page transition animations
- **SCSS Modules** for component-scoped styling
- **react-loading-skeleton** for loading states

## Getting Started

### Prerequisites

- Node.js and Yarn installed
- A free API key from [TMDB](https://www.themoviedb.org/settings/api)

### Installation

```bash
# Clone the repository
git clone https://github.com/KirillMatviychuck/movie-land.git
cd movie-land

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env
# Then open .env and paste your TMDB API key

# Start the development server
yarn start
```

The app will be available at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---|---|
| `yarn start` | Runs the app in development mode |
| `yarn build` | Builds the app for production |
| `yarn test` | Runs the test suite |
| `yarn deploy` | Deploys the production build to GitHub Pages |

## Project Structure