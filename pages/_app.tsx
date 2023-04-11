// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from "../components/navbar";
import { AppProvider } from "context/providers/app-provider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default MyApp;
