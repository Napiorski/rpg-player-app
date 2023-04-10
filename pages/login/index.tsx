import * as React from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Card,
  Center,
  Grid,
  GridItem,
  Heading,
  Input,
} from "@chakra-ui/react";
import { AppContext } from "context/providers/app-provider";
import { LabelInput } from "components/label-input";
import { useForm, SubmitHandler } from "react-hook-form";

const inter = Inter({ subsets: ["latin"] });

export type LoginInputs = {
  [key: string]: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    // TODO: send the data to the server and get a response
    console.log(data);
  };

  const { user, login, logout } = React.useContext(AppContext);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {user && <Heading>Welcome {user}</Heading>}
      <Grid
        gridTemplateColumns="repeat(7, 1fr)"
        gridTemplateRows="20% 20% 20% 20% 20%"
        gap={5}
        margin={5}
      >
        <GridItem gridColumnStart={4}>
          <Heading>Login</Heading>
        </GridItem>
        <GridItem gridColumnStart={4} mb={50}>
          <LabelInput
            registerId="userName"
            register={register}
            label="Username:"
            errors={errors}
            type="email"
          />
        </GridItem>
        <GridItem gridColumnStart={4}>
          <LabelInput
            registerId="password"
            register={register}
            label="Password:"
            type="password"
            errors={errors}
          />
        </GridItem>
        <GridItem gridColumnStart={4}>
          <Button type="submit">Login</Button>
        </GridItem>
      </Grid>
    </form>
  );
}
