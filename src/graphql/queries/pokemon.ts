import {gql} from '@solid-primitives/graphql';

export const pokemonQuery = gql`
query Pokemon($id: Int!, $name: String) {
  pokemon_v2_pokemon(where: {_or: {name: {_like: $name}, id: {_gte: $id}}}, limit: 1, distinct_on: id) {
    id
    name
    height
    weight
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonstats {
      pokemon_v2_stat {
        name
      }
      base_stat
    }
  }
  pokemon_v2_language(where: {id: {_eq: 11}}) {
    id
    name
    pokemon_v2_pokemonspeciesnames(where: {pokemon_species_id: {_eq: $id}}) {
      id
      name
      genus
      pokemon_species_id
    }
  }
}

`;
