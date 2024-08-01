import { Stack } from "@chakra-ui/react";
import { CharactersList } from "../components";
import { CharacterCardSkeleton } from "../components/CharacterCardSkeleton";
import { useCharacters } from "../hooks";

export const Home = () => {
  const { characters, loading } = useCharacters();
  return loading ? (
    <Stack>
      <CharacterCardSkeleton />
      <CharacterCardSkeleton />
      <CharacterCardSkeleton />
    </Stack>
  ) : (
    <CharactersList characters={characters!} />
  );
};
