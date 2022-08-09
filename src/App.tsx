import {Component, createSignal} from 'solid-js';

import getAverageRGB, {rgbToHex} from '@utils/color';

const App: Component = () => {
  const [color, setColor] = createSignal('#f00');
  const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
  let img;

  function changeColor() {
    const color = getAverageRGB(img);
    const hexColor = rgbToHex(...color);
    setColor(hexColor);
  }

  return (
    <div class="h-screen w-screen flex items-center justify-center">
      <div style={{'background-color': `#${color()}`}} class="w-full h-full justify-center items-center flex">
        <img src={imageUrl} ref={img} crossOrigin="anonymous" onLoad={changeColor} />
      </div>
    </div>
  );
};

export default App;
