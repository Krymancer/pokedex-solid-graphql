export type PokemonResult = {
  pokemon_v2_pokemon: {
    id: number;
    name: string;
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        name: string;
      }[];
    }[];
    pokemon_v2_pokemonstats: {
      pokemon_v2_stat: {
        name: string;
      }[];
      base_stat: number;
    }[];
  }[];
  pokemon_v2_language: {
    id: number;
    name: string;
    pokemon_v2_pokemonspeciesnames: {
      id: number;
      name: string;
      genus: string;
      pokemon_species_id: number;
    }[];
  }[];
};
