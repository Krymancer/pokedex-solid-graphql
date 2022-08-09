import type {Component} from 'solid-js';

const baseUrl = 'src/assets/icons/';

const typesIcons = {
  bug: `${baseUrl}bug.svg`,
  dark: `${baseUrl}dark.svg`,
  dragon: `${baseUrl}dragon.svg`,
  electric: `${baseUrl}electric.svg`,
  fairy: `${baseUrl}fairy.svg`,
  fighting: `${baseUrl}fighting.svg`,
  fire: `${baseUrl}fire.svg`,
  flying: `${baseUrl}flying.svg`,
  ghost: `${baseUrl}ghost.svg`,
  grass: `${baseUrl}grass.svg`,
  ground: `${baseUrl}ground.svg`,
  ice: `${baseUrl}ice.svg`,
  normal: `${baseUrl}normal.svg`,
  poison: `${baseUrl}poison.svg`,
  psychic: `${baseUrl}psychic.svg`,
  rock: `${baseUrl}rock.svg`,
  steel: `${baseUrl}steel.svg`,
  water: `${baseUrl}water.svg`,
};

interface PokemonTypeIcon {
  type?: string;
}

const PokemonTypeIcon: Component<PokemonTypeIcon> = (props) => {
  const type = props.type || 'normal';
  return (
    <div class="rounded-full p-2 bg-white w-[60px] h-[60px]">
      <img src={typesIcons[type]} alt={type} />
    </div>
  );
};

export default PokemonTypeIcon;
