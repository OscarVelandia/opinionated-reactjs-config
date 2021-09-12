import React from 'react';
import { MoveBattleStyle, useGetMoveBattleStyleByNameQuery } from '@services';

export const PokemonInformation = () => {
  const { data, isFetching } = useGetMoveBattleStyleByNameQuery(1);

  return (
    <>
      <div>{isFetching}</div>
      {data ? <PokemonCard pokemonData={data} /> : <div>Is loading</div>}
    </>
  );
};

interface PokemonCardProps {
  pokemonData: MoveBattleStyle;
}

function PokemonCard({ pokemonData }: PokemonCardProps) {
  const { id, name: mainName, names } = pokemonData;

  return (
    <div>
      <p>{id}</p>
      <p>{mainName}</p>
      {names.map(({ name, language }) => {
        return (
          <div key={language.name}>
            <p>{name}</p>
            <a href={language.url}>{language.name}</a>
          </div>
        );
      })}
    </div>
  );
}
