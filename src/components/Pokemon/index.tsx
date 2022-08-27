import type {Component} from 'solid-js';

import {PokemonProxy} from '@utils/pokemonProxy';

interface PokemonProps {
  pokemonProxy: PokemonProxy;
  setColor: (color: string) => void;
}

import JapaneseName from '@components/JapaneseName';
import PokemonSummary from '@components/PokemonSummary';
import PokemonStats from '@components/PokemonStats';
import PokemonImage from '@components/PokemonImage';
import PokemonInfo from '@src/components/PokemonInfo';

const Pokemon : Component<PokemonProps> = ({setColor, pokemonProxy}: PokemonProps) => {
  return (
    <div class="w-full h-full justify-center items-center flex">
      <div class="flex flex-col">
        <PokemonImage id={pokemonProxy.id} setColor={setColor} />
        <PokemonInfo weight={pokemonProxy.weight} height={pokemonProxy.height} />
      </div>
      <div>
        <PokemonSummary name={pokemonProxy.name} number={pokemonProxy.id} />
        <JapaneseName name={pokemonProxy.species.name} />
        <PokemonStats
          stats={pokemonProxy.stats}
          types={pokemonProxy.types}
        />
      </div>
    </div>
  );
};

export default Pokemon;
