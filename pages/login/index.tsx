import * as React from "react";
import { useRouter } from 'next/router';
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
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export type LoginInputs = {
  [key: string]: string;
};

export default function Login() {
  const { username, setUsername } = React.useContext(AppContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (form) => {
    if (form.username && form.password) {
      fetch(`${publicRuntimeConfig.apiUrl}auth/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((data) => {
          // At this point, we have a valid access token and we know the user's username (login works)
          localStorage.setItem("accessToken", data.access_token);
          setUsername(form.username);
          router.push("/");
        })
        .catch((err) => {
          console.log("error for auth/login > ", err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {username && <Heading>Welcome {username}</Heading>}
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
