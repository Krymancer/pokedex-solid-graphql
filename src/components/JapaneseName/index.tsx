import type {Component} from 'solid-js';

interface JapaneseNameProps {
  name: string;
}
const JapaneseName: Component<JapaneseNameProps> = (props) => {
  return (
    <span
      class="block text-9xl font-bold break-all opacity-50 text-[rgba(0, 0, 0, 0.67)] translate-x-[-45%]"
    >
      {props.name}
    </span>
  );
};

export default JapaneseName;
