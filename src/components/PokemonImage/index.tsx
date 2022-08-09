import {Component} from 'solid-js';

import getAverageRGB from '@utils/color';

interface PokemonImageProps {
  id: number;
  setColor: (color: string) => void;
}

const PokemonImage: Component<PokemonImageProps> = (props) => {
  let img;

  async function changeColor() {
    const color = await getAverageRGB(img);
    props.setColor(color);
  }

  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
      ref={img}
      crossOrigin="anonymous" onLoad={changeColor} />
  );
};

export default PokemonImage;
