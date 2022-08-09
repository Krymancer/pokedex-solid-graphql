import type {Component} from 'solid-js';

interface PokemonStatProps {
  name: string;
  value: number;
}

const PokemonStat: Component<PokemonStatProps> = (props) => {
  return <div class="bg-white w-fit h-fit p-2 rounded-lg m-1">
    <span class="font-bold uppercase">{props.name}: {props.value}</span>
  </div>;
};

export default PokemonStat;
