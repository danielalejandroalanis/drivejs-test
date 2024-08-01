import React from "react";
import { getCharacters } from "../services";
import { RickAndMorty } from "../interfaces";

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
