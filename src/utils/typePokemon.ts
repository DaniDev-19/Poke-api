export const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    fire: 'bg-red-500',      
    water: 'bg-blue-500',    
    grass: 'bg-green-500',   
    electric: 'bg-yellow-400', 
    psychic: 'bg-purple-500', 
    ice: 'bg-cyan-400',      
    dragon: 'bg-indigo-600', 
    dark: 'bg-gray-800',     
    fairy: 'bg-pink-400',    
    normal: 'bg-gray-400',   
    fighting: 'bg-orange-600', 
    poison: 'bg-purple-600', 
    ground: 'bg-yellow-600', 
    flying: 'bg-sky-400',    
    bug: 'bg-lime-500',      
    rock: 'bg-stone-500',    
    ghost: 'bg-violet-700',  
    steel: 'bg-slate-500',   
  };
  return colors[type] || 'bg-gray-300'; 
};