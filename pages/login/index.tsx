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
    if (data.username && data.password) {
      // TODO: setup a dotenv .env file with the backend server url
      // TODO: call the auth/login with the username and password in the HTTP POST body
      // You need to figure out how to call fetch with a POST body (method).
      fetch("http://localhost:3000/auth/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
        .then((res) => res.json())
        .then((data) => {
          // This should have the access_token
          console.log("response for auth/login > ", data);
        })
        .catch((err) => {
          console.log("error for auth/login > ", err);
        });
    }
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
            registerId="username"
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
