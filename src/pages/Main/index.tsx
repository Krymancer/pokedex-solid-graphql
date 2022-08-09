import {Accessor, Component, createSignal, For, Show} from 'solid-js';
import {useParams} from '@solidjs/router';
import {createQuery} from 'solid-urql';

import getAverageRGB, {rgbToHex} from '@utils/color';

const pokemonQuery = `
query Pokemon($id: Int!) {
  pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
    id
    name
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
  pokemon_v2_language(where: { id: { _eq:11 } }) {
    id
    name
    pokemon_v2_pokemonspeciesnames(where: { pokemon_species_id: { _eq:$id } }) {
      id
      name
      genus
      pokemon_species_id
    }
  }
}
`;

type PokemonResult = {
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

const Main: Component = () => {
  const {id} = useParams();

  const numberId = parseInt(id) || 1;

  console.log('Id:', id, numberId);

  const [item, itemState] : [Accessor<PokemonResult>, any, any?]= createQuery({
    query: pokemonQuery,
    variables: {id},
  });

  const [color, setColor] = createSignal('#ffffff');
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  let img;

  function changeColor() {
    const color = getAverageRGB(img);
    const hexColor = rgbToHex(...color);
    setColor(hexColor);
  }

  function pokemon(acessor: Accessor<PokemonResult>) {
    return item().pokemon_v2_pokemon[0];
  }

  function species(acessor: Accessor<PokemonResult>) {
    return item().pokemon_v2_language[0].pokemon_v2_pokemonspeciesnames[0];
  }

  return (
    <Show when={!itemState().fetching} fallback={null}>
      <div class="h-screen w-screen flex items-center justify-center">
        <div style={{'background-color': `#${color()}`}} class="w-full h-full justify-center items-center flex">
          <img src={imageUrl} ref={img} crossOrigin="anonymous" onLoad={changeColor} />
          <div>
            <h1>Id: {pokemon(item).id}</h1>
            <h1>Name: {pokemon(item).name}</h1>
            <h1>JP Name:{species(item).name}</h1>
            <For each={pokemon(item).pokemon_v2_pokemonstats} fallback={null}>
              {(item : any) => <h1>{item.pokemon_v2_stat.name}:{item.base_stat}</h1>}
            </For>
            <For each={pokemon(item).pokemon_v2_pokemontypes} fallback={null}>
              {(item : any) => <h1>Type: {item.pokemon_v2_type.name}</h1>}
            </For>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Main;
