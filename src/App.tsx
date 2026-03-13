import { Routes, BrowserRouter, Route } from "react-router-dom";
import { HelmetProvider } from "./utils/helmet";
import Pokelist from './pages/Pokelist';
import PokemonDetail from "./pages/PokemonDetail";
import Error from './pages/Error';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Pokelist />
            }
          />
          <Route
            path="/pokemon/:id"
            element={
              <PokemonDetail />
            }
          />
          <Route
            path="*"
            element={
              <Error />
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App
