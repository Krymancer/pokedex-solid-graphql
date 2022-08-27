import {PokemonResult, PokemonBase, PokemonStats, PokemonTypes, PokemonSpeciesName} from '@src/graphql/types/pokemon';
import {Resource} from 'solid-js';

export interface PokemonProxy {
  id: number;
  pokemon: PokemonBase;
  name: string;
  species: PokemonSpeciesName;
  height: number;
  weight: number;
  stats: PokemonStats[];
  types: PokemonTypes[];
};

function makePokemonProxy(data : Resource<PokemonResult>) : PokemonProxy {
  const target = {
    id: () => data().pokemon_v2_pokemon[0].id,
    pokemon: () => data().pokemon_v2_pokemon[0],
    name: () => data().pokemon_v2_pokemon[0].name,
    species: () => data().pokemon_v2_language[0].pokemon_v2_pokemonspeciesnames[0],
    height: () => data().pokemon_v2_pokemon[0].height,
    weight: () => data().pokemon_v2_pokemon[0].weight,
    stats: () => data().pokemon_v2_pokemon[0].pokemon_v2_pokemonstats,
    types: () => data().pokemon_v2_pokemon[0].pokemon_v2_pokemontypes,
  };

  const handler = {
    get: function(target, prop) {
      return target[prop]();
    },
  };

  return new Proxy(target, handler);
};

export default makePokemonProxy;
