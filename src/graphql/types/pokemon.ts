export type PokemonType = {
  name: string;
}

export type PokemonTypes = {
  pokemon_v2_type: PokemonType;
}

export type PokemonStat = {
  name: string;
}

export type PokemonStats = {
  base_stat: number;
  pokemon_v2_stat: PokemonStat;
}

export type PokemonBase = {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: PokemonTypes[];
  pokemon_v2_pokemonstats: PokemonStats[];
}

export type PokemonSpeciesName = {
  id: number;
  name: string;
  genus: string;
  pokemon_species_id: number;
}

export type PokemonLanguage = {
  id: number;
  name: string;
  pokemon_v2_pokemonspeciesnames: PokemonSpeciesName[];
}

export type PokemonResult = {
  pokemon_v2_pokemon: PokemonBase;
  pokemon_v2_language: PokemonLanguage;
};
