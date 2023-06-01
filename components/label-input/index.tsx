import * as React from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { CharacterSheetInputs } from "../../pages/character";
import styled from "@emotion/styled";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { Warning } from "components/warning";

type LabelInputProps = {
  defaultValue?: string;
  label: string;
  placeholder?: string;
  registerId: string;
  register: UseFormRegister<CharacterSheetInputs>;
  errors?: Partial<FieldErrorsImpl<CharacterSheetInputs>>;
  type?:
    | "tel"
    | "text"
    | "number"
    | "password"
    | "email"
    | "search"
    | "url"
    | "date"
    | "datetime-local"
    | "month"
    | "time"
    | "week"
    | "color"
    | "file"
    | "range"
    | "image"
    | "checkbox"
    | "radio"
    | "submit"
    | "reset"
    | "button"
    | "hidden"
    | "file"
    | "file[]"
    | undefined;
};

export function LabelInput({
  defaultValue,
  placeholder,
  label,
  registerId,
  register,
  errors,
  type = "text",
}: LabelInputProps) {
  // const [value, setValue] = React.useState(defaultValue ?? "");
  // const handleChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setValue(event.target.value);
  // };

  return (
    <>
      <Text fontWeight={"bold"}>{label}</Text>
      {errors && errors[registerId] && (
        <Box pl={"10px"} display="inline-flex">
          <Warning>* This field is required</Warning>
        </Box>
      )}
      <Input
        placeholder={placeholder}
        type={type}
        borderColor={errors && errors[registerId] ? "red" : "inherit"}
        {...register(registerId, { required: true })}
        // onChange={handleChange}
      />
    </>
  );
}
