import type { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (term: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Busca un Pokémon…"
        className="
    w-full
    max-w-md              /* ancho base (teléfono) */
    sm:max-w-lg           /* tablets */
    lg:max-w-xl           /* escritorio */
    xl:max-w-2xl          /* pantallas muy grandes */
    mx-auto px-4 py-3
    rounded-full          /* pill shape */
    border-2 border-gray-300
    bg-gray-800 text-white placeholder-gray-400
    focus:outline-none focus:ring-4 focus:ring-blue-500
    shadow-lg
    transition-all
  "
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchBar;
