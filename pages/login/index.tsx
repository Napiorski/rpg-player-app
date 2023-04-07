import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Button,
  Card,
  Center,
  Grid,
  GridItem,
  Heading,
  Input,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <Grid
        gridTemplateColumns="repeat(7, 1fr)"
        gridTemplateRows="20% 20% 20% 20% 20%"
        gap={5}
        margin={5}
      >
        <GridItem gridColumnStart={4}>
          <Heading>Login</Heading>
        </GridItem>
        <GridItem gridColumnStart={4}>
          Username: <Input></Input>
        </GridItem>
        <GridItem gridColumnStart={4}>
          Password: <Input type="password"></Input>
        </GridItem>
        <GridItem gridColumnStart={4}>
          <Button>Login</Button>
        </GridItem>
      </Grid>
    </>
  );
}
