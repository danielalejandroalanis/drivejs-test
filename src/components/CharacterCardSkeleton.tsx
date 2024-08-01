import React from "react";
import { Skeleton, Stack, Box, SkeletonText } from "@chakra-ui/react";

export const CharacterCardSkeleton: React.FC = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="dark">
      <Stack direction={{ base: "column", sm: "row" }}>
        <Skeleton height="200px" width={{ base: "100%", sm: "200px" }} />
        <Stack spacing="4" width="full" p="6">
          <SkeletonText mt="4" noOfLines={2} spacing="4" />
        </Stack>
      </Stack>
    </Box>
  );
};
