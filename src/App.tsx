import { Routes, BrowserRouter, Route } from "react-router-dom";
import Pokelist from './pages/Pokelist';
import PokemonDetail from "./pages/PokemonDetail";
import Error from './pages/Error';

function App() {

  return (
    <>
      <BrowserRouter basename="PokeApi">
        <Routes>
          <Route
            path="/"
            element={
              <Pokelist/>
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
            <Error/>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
