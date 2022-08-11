import type {Component} from 'solid-js';

import bugIconUrl from '@assets/icons/bug.svg';
import darkIconUrl from '@assets/icons/dark.svg';
import dragonIconUrl from '@assets/icons/dragon.svg';
import electricIconUrl from '@assets/icons/electric.svg';
import fairyIconUrl from '@assets/icons/fairy.svg';
import fightingIconUrl from '@assets/icons/fighting.svg';
import fireIconUrl from '@assets/icons/fire.svg';
import flyingIconUrl from '@assets/icons/flying.svg';
import ghostIconUrl from '@assets/icons/ghost.svg';
import grassIconUrl from '@assets/icons/grass.svg';
import groundIconUrl from '@assets/icons/ground.svg';
import iceIconUrl from '@assets/icons/ice.svg';
import normalIconUrl from '@assets/icons/normal.svg';
import poisonIconUrl from '@assets/icons/poison.svg';
import psychicIconUrl from '@assets/icons/psychic.svg';
import rockIconUrl from '@assets/icons/rock.svg';
import steelIconUrl from '@assets/icons/steel.svg';
import waterIconUrl from '@assets/icons/water.svg';

const typesIcons = {
  bug: bugIconUrl,
  dark: darkIconUrl,
  dragon: dragonIconUrl,
  electric: electricIconUrl,
  fairy: fairyIconUrl,
  fighting: fightingIconUrl,
  fire: fireIconUrl,
  flying: flyingIconUrl,
  ghost: ghostIconUrl,
  grass: grassIconUrl,
  ground: groundIconUrl,
  ice: iceIconUrl,
  normal: normalIconUrl,
  poison: poisonIconUrl,
  psychic: psychicIconUrl,
  rock: rockIconUrl,
  steel: steelIconUrl,
  water: waterIconUrl,
};

interface PokemonTypeIcon {
  type?: string;
}

const PokemonTypeIcon: Component<PokemonTypeIcon> = (props) => {
  const type = props.type || 'normal';
  return (
    <div class="rounded-full p-1 lg:p-2 bg-white lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]">
      <img src={typesIcons[type]} alt={type} />
    </div>
  );
};

export default PokemonTypeIcon;
