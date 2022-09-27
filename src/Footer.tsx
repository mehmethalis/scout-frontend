import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "start", md: "space-between" }}
        align={{ base: "start", md: "center" }}
      >
        <Text>© 2022 haliscicek.com</Text>
      </Container>
    </Box>
  );
}
