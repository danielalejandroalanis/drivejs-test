import { useCharacterById } from "../hooks";
import { useParams } from "react-router-dom";
import { DetailsCard, DetailsSkeleton } from "../components";

export const Details = () => {
  const { id } = useParams();

  const { character, loading } = useCharacterById(id ? parseInt(id) : 1);
  return loading ? <DetailsSkeleton /> : <DetailsCard character={character!} />;
};
