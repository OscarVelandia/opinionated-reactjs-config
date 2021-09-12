import React from 'react';
import { Counter } from '@features/counter';
import { PokemonInformation } from '@features/pokemonInformation';
import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <main>
        <Counter />
        <PokemonInformation />
      </main>
    </div>
  );
}
