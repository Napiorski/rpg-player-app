import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const ThemeDecorator = (Story) => {
  return (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  );
};

export const decorators = [ThemeDecorator];
