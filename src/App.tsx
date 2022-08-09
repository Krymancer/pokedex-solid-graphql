import type {Component} from 'solid-js';
import {Routes, Route} from '@solidjs/router';
import {createClient, Provider} from 'solid-urql';

import Main from '@pages/Main';

const client = createClient({
  url: 'https://beta.pokeapi.co/graphql/v1beta',
});

const App: Component = () => {
  return (
    <Provider value={client}>
      <Routes>
        <Route path="/" component={Main} />
      </Routes>
    </Provider>
  );
};

export default App;
