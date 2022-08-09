import {Component, createSignal, Show} from 'solid-js';

import {createGraphQLClient} from '@solid-primitives/graphql';
import {PokemonResult} from '@graphql/types/pokemon';
import {pokemonQuery} from '@graphql/queries/pokemon';

import JapaneseName from '@components/JapaneseName';
import PokemonSummary from '@components/PokemonSummary';
import PokemonStats from '@components/PokemonStats';
import PokemonImage from '@components/PokemonImage';
import Controls from '@components/Controls';


const Main: Component = () => {
  const [id, setId] = createSignal(1);

  const [color, setColor] = createSignal('#ffffff');

  const query = createGraphQLClient('https://beta.pokeapi.co/graphql/v1beta');

  const [data] = query<PokemonResult>(
      pokemonQuery,
      () => ({id: id()}),
  );

  function pokemon() {
    return data().pokemon_v2_pokemon[0];
  }

  function species() {
    return data().pokemon_v2_language[0].pokemon_v2_pokemonspeciesnames[0];
  }

  function next() {
    id() >= 800 ? setId(1) : setId(id() + 1);
  }

  function prev() {
    id() <= 1 ? setId(800) : setId(id() - 1);
  }

  return (
    <Show when={data()} fallback={null}>
      <div id="main" style={{'background-color': `${color()}`}} class="h-screen w-screen flex flex-col items-center justify-center transition-all duration-300 ease-linear">
        <div class="w-full h-full justify-center items-center flex">
          <PokemonImage id={id()} setColor={setColor} />
          <div>
            <PokemonSummary name={pokemon().name} number={id()} />
            <JapaneseName name={species().name} />
            <PokemonStats stats={pokemon().pokemon_v2_pokemonstats} types={pokemon().pokemon_v2_pokemontypes} />
          </div>
        </div>
        <Controls next={next} prev={prev} current={id()} setCurrent={setId} />
      </div>
    </Show>
  );
};

export default Main;
