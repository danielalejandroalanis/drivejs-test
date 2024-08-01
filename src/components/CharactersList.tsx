import React from "react";
import { RickAndMorty } from "../interfaces";
import { CharacterCard } from "./CharacterCard";

interface CharacterListProps {
  characters: RickAndMorty;
}

export const CharactersList: React.FC<CharacterListProps> = ({
  characters,
}) => {

  return characters.results.map((character) => (
    <div id="card-info">
      <CharacterCard
        key={character.id}
        character={character}
      />
    </div>
  ));
};
