import { useEffect, useState } from "react";
import { getPokemonList } from "../services/pokemonApi";
import type { PokemonListResponse } from "../types/types";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

interface Props {
  search?: string;
}

const PokemonList = ({ search = "" }: Props) => {
  const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonList(limit, offset);
        setPokemonList(data);
      } catch (error) {
        console.error("Error fetching Pokémon: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [offset]);

  if (loading) return <p>cargando....</p>;

  const all = pokemonList?.results ?? [];
  const filtered =
    search.trim() === ""
      ? all
      : all.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      {pokemonList && (
        <Pagination
          count={pokemonList.count}
          limit={limit}
          offset={offset}
          onChange={setOffset}
        />
      )}
    </>
  );
};

export default PokemonList;