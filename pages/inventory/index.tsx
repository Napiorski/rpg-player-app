import { Heading, Grid } from "@chakra-ui/react";
import { CharacterSheetInputs } from "pages/character";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CharacterSheetInputs>();
  const onSubmit: SubmitHandler<CharacterSheetInputs> = (data) => {
    debugger;

    console.log(data);
  };
}
