import { Container, Box, Stack, SkeletonCircle, Skeleton, SkeletonText, Divider } from '@chakra-ui/react'

export const DetailsSkeleton = () => {
  return (
    <Container maxW="container.md" p={4}>
        <Box borderRadius="lg" overflow="hidden" boxShadow="lg" p={5}>
          <Stack direction={["column", "row"]} spacing={6}>
            <SkeletonCircle size="150px" />
            <Box flex="1">
              <Skeleton height="28px" mb={4} />
              <SkeletonText mt="4" noOfLines={3} spacing="4" />
            </Box>
          </Stack>
          <Divider my={4} />
          <SkeletonText mt="6" noOfLines={4} spacing="4" />
        </Box>
      </Container>
  )
}
