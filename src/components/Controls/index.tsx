import type {Component} from 'solid-js';

import {HiSolidArrowLeft, HiSolidArrowRight} from 'solid-icons/hi';


interface ControlsProps {
  next: () => void;
  prev: () => void;
  current: number;
  setCurrent: (current: number) => void;
}

const Controls : Component<ControlsProps> = (props) => {
  function handleKeyDown(e) {
    console.log(e.key);
    if (e.key === 'Enter') {
      props.setCurrent(parseInt(e.currentTarget.value));
    }
  }

  return (
    <div class="text-blac flex gap-5 font-bold p-3">
      <div onClick={props.prev} class="flex items-center gap-3 bg-white p-3 rounded-lg opacity-50 cursor-pointer">
        <HiSolidArrowLeft size={32}/>
        Prev
      </div>
      <input type="number" class="opacity-50 flex text-center" value={props.current} onKeyDown={handleKeyDown}></input>
      <div onClick={props.next} class="flex items-center gap-3 bg-white p-3 rounded-lg opacity-50 cursor-pointer">
        Next
        <HiSolidArrowRight size={32}/>
      </div>
    </div>
  );
};

export default Controls;
