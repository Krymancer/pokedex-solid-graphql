import {Component} from 'solid-js';

interface PokemonInfoProps {
  weight: number;
  height: number;
}

const PokemonInfo: Component<PokemonInfoProps> = (props: PokemonInfoProps) => {
  return (
    <div class="flex gap-3 text-white font-bold items-center justify-center lg:flex-row flex-col">
      <span>Height: {props.height}</span>
      <span>Weight: {props.weight}</span>
    </div>

  );
};

export default PokemonInfo;
