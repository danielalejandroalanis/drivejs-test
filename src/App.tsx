import "driver.js/dist/driver.css";
import { useCharacters } from "./hooks";
import { CharactersList } from "./components";
import { Stack } from "@chakra-ui/react";
import { CharacterCardSkeleton } from "./components/CharacterCardSkeleton";
import { MainLayout } from "./layouts/MainLayout";
const App = () => {
  const { characters, loading } = useCharacters();

  return (
    <MainLayout>
      {loading ? (
        <Stack>
          <CharacterCardSkeleton />
          <CharacterCardSkeleton />
          <CharacterCardSkeleton />
        </Stack>
      ) : (
        <CharactersList characters={characters!} />
      )}
    </MainLayout>
  );
};

export default App;
