import * as React from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { CharacterSheetInputs } from "../../pages/character";
import styled from "@emotion/styled";
import { Box, Flex, Input, Text } from "@chakra-ui/react";

const Warning = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;

type LabelInputProps = {
  label: string;
  placeholder?: string;
  registerId: string;
  register: UseFormRegister<CharacterSheetInputs>;
  errors?: Partial<FieldErrorsImpl<CharacterSheetInputs>>;
};

export function LabelInput({
  label,
  registerId,
  register,
  errors,
}: LabelInputProps) {
  return (
    <>
      <Text mb="8px" fontWeight={"bold"}>
        {label}
        {errors && errors[registerId] && (
          <Box pl={"15px"} display="inline-flex">
            <Warning>* This field is required</Warning>
          </Box>
        )}
      </Text>
      <Input
        borderColor={errors && errors[registerId] ? "red" : "inherit"}
        {...register(registerId, { required: true })}
      />
    </>
  );
}
