import React from "react";
import { RickAndMorty } from "../interfaces";
import { CharacterCard } from "./CharacterCard";
import { useNavigate } from "react-router-dom";

interface CharacterListProps {
  characters: RickAndMorty;
}

export const CharactersList: React.FC<CharacterListProps> = ({
  characters,
}) => {
  const navigate = useNavigate();
  return characters.results.map((character) => (
    <div id="card-info" key={character.id}>
      <CharacterCard
        character={character}
        onClick={() => navigate(`/details/${character.id}`)}
      />
    </div>
  ));
};
