import { useState } from "react";
import { Helmet } from "../utils/helmet";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";
import { useSeo } from "../hooks/useSeo";

const BASE_URL = "https://poke-api-six-theta.vercel.app";

function PokeList() {
  const [searchTerm, setSearchTerm] = useState("");

  useSeo({
    title: "PokeAPI - Lista de Pokémon",
    description:
      "Explora la lista completa de Pokémon con búsqueda y paginación. Encuentra tu Pokémon favorito en PokeAPI.",
    keywords: "lista Pokémon, PokeAPI, búsqueda Pokémon, paginación",
    canonicalUrl: `${BASE_URL}/PokeApi`,
    ogTitle: "PokeAPI - Lista de Pokémon",
    ogImage: `${BASE_URL}/poke.svg`,
    twitterTitle: "PokeAPI - Lista de Pokémon",
    twitterDescription:
      "Explora la lista completa de Pokémon con búsqueda y paginación.",
  });

  return (
    <>
      <Helmet>
        <title>PokeAPI - Lista de Pokémon</title>
        <meta
          name="description"
          content="Explora la lista completa de Pokémon con búsqueda y paginación. Encuentra tu Pokémon favorito en PokeAPI."
        />
        <meta name="keywords" content="lista Pokémon, PokeAPI, búsqueda Pokémon, paginación" />
        <link rel="canonical" href={`${BASE_URL}/PokeApi`} />
      </Helmet>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8 mt-10">PokeApi App</h1>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <PokemonList search={searchTerm} />
      </main>
      <Footer />
    </>
  );
}

export default PokeList;

