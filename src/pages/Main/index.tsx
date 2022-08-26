import { Component, createSignal, Show } from 'solid-js';

import { createGraphQLClient } from '@solid-primitives/graphql';
import { PokemonResult } from '@graphql/types/pokemon';
import { pokemonQuery } from '@graphql/queries/pokemon';

import JapaneseName from '@components/JapaneseName';
import PokemonSummary from '@components/PokemonSummary';
import PokemonStats from '@components/PokemonStats';
import PokemonImage from '@components/PokemonImage';
import Controls from '@components/Controls';
import PokemonInfo from '@src/components/PokemonInfo';


const Main: Component = () => {
  const [id, setId] = createSignal(1);
  const [name, setName] = createSignal('%%');

  const [color, setColor] = createSignal('#ffffff');

  const query = createGraphQLClient('https://beta.pokeapi.co/graphql/v1beta');

  const [data] = query<PokemonResult>(
    pokemonQuery,
    () => ({ id: id(), name: name() }),
  );

  function pokemon() {
    return data().pokemon_v2_pokemon[0];
  }

  function pokemonId() {
    return data().pokemon_v2_pokemon[0].id;
  }

  function species() {
    return data().pokemon_v2_language[0].pokemon_v2_pokemonspeciesnames[0];
  }

  function height() {
    return data().pokemon_v2_pokemon[0].height;
  }

  function weight() {
    return data().pokemon_v2_pokemon[0].weight;
  }


  function next() {
    if (pokemonId() < 807) {
      setId(pokemonId() + 1);
      setName('%%');
    } else {
      setId(1);
      setName('%%');
    }
  }

  function prev() {
    if (pokemonId() <= 1) {
      setId(800);
      setName('%%');
    } else {
      setId(pokemonId() - 1);
      setName('%%');
    }
  }

  return (
    <Show when={data()} fallback={null}>
      <div id="main" style={{ 'background-color': `${color()}` }} class="h-screen w-screen flex flex-col items-center justify-center transition-all duration-300 ease-linear">
        <div class="w-full h-full justify-center items-center flex">
          <div class="flex flex-col">
            <PokemonImage id={pokemonId()} setColor={setColor} />
            <PokemonInfo weight={weight()} height={height()} />
          </div>
          <div>
            <PokemonSummary name={pokemon().name} number={pokemonId()} />
            <JapaneseName name={species().name} />
            <PokemonStats stats={pokemon().pokemon_v2_pokemonstats} types={pokemon().pokemon_v2_pokemontypes} />
          </div>
        </div>
        <Controls next={next} prev={prev} value={pokemonId()} setId={setId} setName={setName} />
      </div>
    </Show>
  );
};

export default Main;
