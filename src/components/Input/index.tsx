import {Component, createSignal} from 'solid-js';

interface InputProps{
  setName: (name: string) => void;
  setId: (id: number) => void;
  value: string;
}

const Input: Component<InputProps> = (props) => {
  const [value, setValue] = createSignal(props.value);

  function checkIfIsName(text: string) {
    // return if is a string with only letters
    return /^[a-zA-Z]+$/.test(text);
  }

  function checkIfIsId(text: string) {
    // return if is a string with only numbers
    return /^[0-9]+$/.test(text);
  }

  function handleKeyDown(e) {
    setValue(e.target.value);
    if (e.key === 'Enter') {
      const text = e.currentTarget.value;
      console.log('Value', text);
      if (checkIfIsId(text)) {
        props.setId(parseInt(text));
        props.setName('%%');
        setValue(text);
        console.log('Stat', 'is Id');
      } else if (checkIfIsName(text)) {
        props.setName(`%${text}%`);
        props.setId(1);
        setValue(text);
        console.log('Stat', 'is Name');
        console.log('Name', `%${text}%`);
      } else {
        props.setId(1);
        props.setName('%%');
        setValue('1');
        console.log('Stat', 'is wrong');
      }
    }
  }

  return <input class="opacity-50 flex text-center rounded-md" value={value()} onKeyDown={handleKeyDown}></input>;
};

export default Input;
