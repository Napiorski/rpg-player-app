import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useAuth } from "hooks/use-auth";

export default function Inventory() {
  const accessToken = useAuth();

  if (!accessToken) {
    return null;
  }

  return (
    <Box p={10}>
      <Heading>Inventory</Heading>
    </Box>
  );
}
