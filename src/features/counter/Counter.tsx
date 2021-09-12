import React from 'react';
import { incrementBy, incremented } from '@features/counter';
import { useAppDispatch, useAppSelector } from '@store';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(incremented())} type="button" aria-label="Increment by 1">
        Increment by 1
      </button>
      <button onClick={() => dispatch(incrementBy(10))} type="button" aria-label="Add 10">
        Increment by 10
      </button>
      <span>{counter}</span>
    </div>
  );
};
