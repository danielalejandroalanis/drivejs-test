import React from "react";
import { Result } from "../interfaces";
import {
  Container,
  Box,
  Stack,
  Heading,
  Divider,
  List,
  ListItem,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

interface DetailsCardProps {
  character: Result;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({ character }) => {
  return (
    <Container maxW="container.md" p={4}>
      <Box borderRadius="lg" overflow="hidden" boxShadow="lg" p={5}>
        <Stack direction={["column", "row"]} spacing={6}>
          <Image
            src={character!.image}
            alt={character!.name}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Box flex="1">
            <Heading as="h2" size="xl">
              {character!.name}
            </Heading>
            <Text fontSize="lg">
              {character!.status} - {character!.species}
            </Text>
            <Text fontSize="lg">Gender: {character!.gender}</Text>
            <Text mt={2}>
              <strong>Origin:</strong> {character!.origin.name}
            </Text>
            <Text>
              <strong>Current Location:</strong>
              <Link href={character!.location.url} isExternal ml={1}>
                {character!.location.name}
              </Link>
            </Text>
          </Box>
        </Stack>
        <Divider my={4} />
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Episodes
          </Heading>
          <List spacing={2} styleType="disc" pl={5} overflow="scroll" maxH={300}>
            {character!.episode.map((episode, index) => (
              <ListItem key={index}>
                <Link href={episode} isExternal>
                  {episode}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};
