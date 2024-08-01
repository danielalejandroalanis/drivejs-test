import React from "react";
import { getCharacterById, getCharacters } from "../services";
import { Result, RickAndMorty } from "../interfaces";

export const useCharacters = () => {
  const [characters, setCharacters] = React.useState<RickAndMorty>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    getCharacters()
      .then((res) => {
        setCharacters(res);
      })
      .catch(console.error)
      .finally(() => setTimeout(() => setLoading(false), 2000));
  }, []);

  return { characters, loading };
};

export const useCharacterById = (id: number) => {
  const [character, setCharacter] = React.useState<Result>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    getCharacterById(id)
      .then((res) => {
        setCharacter(res);
      })
      .catch(console.error)
      .finally(() => setTimeout(() => setLoading(false), 2000));
  }, [id]);

  return { character, loading };
}
