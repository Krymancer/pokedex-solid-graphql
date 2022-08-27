import {Component, For} from 'solid-js';

import {PokemonStatsType, PokemonTypes} from '@graphql/types/pokemon';

import PokemonStat from '@components/PokemonStat';
import PokemonTypeIcon from '@components/PokemonTypeIcon';

interface PokemonStatsProps {
  stats: PokemonStatsType[];
  types: PokemonTypes[];
};

const PokemonStats: Component<PokemonStatsProps> = (props) => {
  console.log(props.stats);

  return (
    <div class="flex flex-col gap-3">
      <div class="flex gap-3">
        <For each={props.types} fallback={null}>
          {(item : PokemonTypes) => <PokemonTypeIcon type={item.pokemon_v2_type.name} />}
        </For>
      </div>
      <div>
        <div class="flex gap-3 items-center">
          <div class="bg-[rgba(255,255,255,0.5)] w-1 h-[120px] rounded-sm"></div>
          <div class="flex flex-wrap max-w-lg">
            <For each={props.stats} fallback={null}>
              {(item : PokemonStatsType) => <PokemonStat name={item.pokemon_v2_stat.name} value={item.base_stat} />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
