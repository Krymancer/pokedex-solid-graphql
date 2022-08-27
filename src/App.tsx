import type {Component} from 'solid-js';
import {Routes, Route} from '@solidjs/router';
import Main from '@pages/Main';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Main} />
    </Routes>
  );
};

export default App;
