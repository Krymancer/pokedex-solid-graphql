import {Component, createSignal, Show} from 'solid-js';

import {createGraphQLClient} from '@solid-primitives/graphql';
import {PokemonResult} from '@graphql/types/pokemon';
import {pokemonQuery} from '@graphql/queries/pokemon';
import makePokemonProxy from '@utils/pokemonProxy';

import Controls from '@components/Controls';
import Pokemon from '@src/components/Pokemon';

const MAX_POKEMON_ID = 898;

const Main: Component = () => {
  const [id, setId] = createSignal(1);
  const [name, setName] = createSignal('%%');
  const [color, setColor] = createSignal('#ffffff');

  const query = createGraphQLClient('https://beta.pokeapi.co/graphql/v1beta');

  const [data] = query<PokemonResult>(pokemonQuery, () => ({
    id: id(),
    name: name(),
  }));

  const pokemonProxy = makePokemonProxy(data);

  function setQueryParameters(id: number, name: string = '') {
    setId(id);
    setName(`%${name}%`);
  }

  function next() {
    pokemonProxy.id < MAX_POKEMON_ID ? setQueryParameters(pokemonProxy.id + 1) : setQueryParameters(1);
  }

  function prev() {
    pokemonProxy.id > 1 ? setQueryParameters(pokemonProxy.id - 1) : setQueryParameters(MAX_POKEMON_ID);
  }

  return (
    <Show when={data()} fallback={null}>
      <div
        id="main"
        style={{'background-color': `${color()}`}}
        class="h-screen w-screen flex flex-col items-center justify-center transition-all duration-300 ease-linear"
      >
        <Pokemon pokemonProxy={pokemonProxy} setColor={setColor} />
        <Controls
          next={next}
          prev={prev}
          value={pokemonProxy.id}
          setId={setId}
          setName={setName}
        />
      </div>
    </Show>
  );
};

export default Main;
