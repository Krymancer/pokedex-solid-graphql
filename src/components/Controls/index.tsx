import type {Component} from 'solid-js';

import {HiSolidArrowLeft, HiSolidArrowRight} from 'solid-icons/hi';

import Input from '@components/Input';

interface ControlsProps {
  next: () => void;
  prev: () => void;
  current: number;
  setId: (id: number) => void;
  setName: (name: string) => void;
}

const Controls : Component<ControlsProps> = (props) => {
  return (
    <div class="text-black flex lg:gap-5 font-bold p-3 text-sm lg:text-md gap-1">
      <div onClick={props.prev} class="flex items-center gap-3 bg-white p-3 rounded-lg opacity-50 cursor-pointer">
        <HiSolidArrowLeft/>
        Prev
      </div>
      <Input setName={props.setName} setId={props.setId} value={props.current.toString()}/>
      <div onClick={props.next} class="flex items-center gap-3 bg-white p-3 rounded-lg opacity-50 cursor-pointer">
        Next
        <HiSolidArrowRight/>
      </div>
    </div>
  );
};

export default Controls;
