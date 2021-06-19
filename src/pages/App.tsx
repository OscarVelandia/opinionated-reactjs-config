import React from 'react';
import { incrementBy, incremented } from '@features/counter';
import { useGetMoveBattleStyleByNameQuery } from '@services';
import { useAppDispatch, useAppSelector } from '@store';
import styles from './App.module.scss';

export function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const { data, isFetching } = useGetMoveBattleStyleByNameQuery(1);

  return (
    <div className={styles.container}>
      <main>
        <div>
          <button onClick={() => dispatch(incremented())} type="button" aria-label="Increment by 1">
            Increment by 1
          </button>
          <button onClick={() => dispatch(incrementBy(10))} type="button" aria-label="Add 10">
            Increment by 10
          </button>
          <span>{counter}</span>
        </div>
        <div>{isFetching}</div>
        <div>
          <p>{data?.id}</p>
          <p>{data?.name}</p>
          {data?.names.map(({ name, language }) => {
            return (
              <div key={language.name}>
                <p>{name}</p>
                <a href={language.url}>{language.name}</a>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
