import { useState } from "react";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";

function PokeList() {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
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
