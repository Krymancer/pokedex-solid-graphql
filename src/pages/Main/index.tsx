import {Accessor, Component, createSignal, Show} from 'solid-js';
import {useNavigate, useParams} from '@solidjs/router';
import {createQuery} from 'solid-urql';

import getAverageRGB from '@utils/color';
import {pokemonQuery} from '@graphql/queries/pokemon';
import type {PokemonResult} from '@graphql/types/pokemon';

import JapaneseName from '@components/JapaneseName';
import PokemonSummary from '@components/PokemonSummary';
import PokemonStats from '@src/components/PokemonStats';

const Main: Component = () => {
  const {id} = useParams();

  const [numberId, setNumberId] = createSignal(parseInt(id) || 1);

  const [item, itemState] : [Accessor<PokemonResult>, any, any?] = createQuery({
    query: pokemonQuery,
    variables: {id: numberId()},
  });

  const [color, setColor] = createSignal('#ffffff');
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numberId()}.png`;
  let img;

  async function changeColor() {
    const color = await getAverageRGB(img);
    console.log(color);
    setColor(color);
  }

  function pokemon() {
    return item().pokemon_v2_pokemon[0];
  }

  function species() {
    return item().pokemon_v2_language[0].pokemon_v2_pokemonspeciesnames[0];
  }

  return (
    <Show when={!itemState().fetching} fallback={null}>
      <div id="main" style={{'background-color': `${color()}`}} class="h-screen w-screen flex flex-col items-center justify-center">
        <div class="w-full h-full justify-center items-center flex">
          <img src={imageUrl} ref={img} crossOrigin="anonymous" onLoad={changeColor} />
          <div>
            <PokemonSummary name={pokemon().name} number={pokemon().id} />
            <JapaneseName name={species().name} />
            <PokemonStats stats={pokemon().pokemon_v2_pokemonstats} types={pokemon().pokemon_v2_pokemontypes} />
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Main;
