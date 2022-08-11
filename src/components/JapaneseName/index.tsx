import type {Component} from 'solid-js';

interface JapaneseNameProps {
  name: string;
}
const JapaneseName: Component<JapaneseNameProps> = (props) => {
  return (
    <span
      class="block text-4xl lg:text-9xl font-bold break-all opacity-50 text-[rgba(0, 0, 0, 0.67)] lg:translate-x-[-45%] lg:p-0 p-1 lg:py-0 py-2"
    >
      {props.name}
    </span>
  );
};

export default JapaneseName;
