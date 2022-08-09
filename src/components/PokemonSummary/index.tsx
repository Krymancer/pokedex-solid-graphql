import type {Component} from 'solid-js';

interface PokemonSummaryProps {
  name: string;
  number: number;
}

const PokemonSummary: Component<PokemonSummaryProps> = (props) => {
  return (
    <div class="flex flex-col">
      <span class="text-white font-bold text-2xl">{`#${props.number.toString().padStart(3, '0')}`}</span>
      <span class="text-white font-bold text-5xl capitalize">{props.name}</span>
    </div>
  );
};

export default PokemonSummary;
