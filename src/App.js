import React from 'react';
import useFetch from './hooks/useFetch';

const App = () => {
  const [{ ditto, pikachu, charmander }, isLoading] = useFetch((fetch) => ({
    ditto: fetch('https://pokeapi.co/api/v2/pokemon/ditto'),
    pikachu: fetch('https://pokeapi.co/api/v2/pokemon/pikachu'),
    charmander: fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  }));

  console.log(ditto, pikachu, charmander)

  return (
    <div>
      Pokemon
    </div>
  );
};

export default App;
