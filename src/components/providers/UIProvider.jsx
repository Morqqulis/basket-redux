// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

const UIProvider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default UIProvider;
