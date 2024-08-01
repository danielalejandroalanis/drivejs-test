import React from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  Image,
  Box,
  Icon,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
import { Result } from "../interfaces";

interface CharacterProps {
  character: Result;
  onClick?: () => void;
}

export const CharacterCard: React.FC<CharacterProps> = ({
  character,
  onClick,
}) => {
  const statusIndicatorStyles = {
    backgroundColor:
      character.status === "Alive" ? "rgb(85, 204, 68)" : "rgb(214, 61, 46)",
    borderRadius: "50%",
    height: "0.5rem",
    width: "0.5rem",
    marginRight: "0.5rem",
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      my={4}
      onClick={onClick}
    >
      <Box position="absolute" top="2" right="2" id="fav-info">
        <Icon as={AiFillHeart} color="red.500" w={6} h={6} />
      </Box>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={character.image}
        alt={character.name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{character.name}</Heading>
          <Text py="2">
            <Box display="flex" alignItems="center">
              <Box style={statusIndicatorStyles}></Box>
              {character.status} - {character.species}
            </Box>
          </Text>
          <Box display="flex" alignItems="center">
            <Icon as={FaLocationPin} color="blue.500" w={3} h={4} mr={2} />
            <Text>{character.origin.name}</Text>
          </Box>
        </CardBody>
      </Stack>
    </Card>
  );
};
