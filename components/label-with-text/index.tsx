import * as React from "react";
import { Card, Box, CardBody, Center, Input, Textarea } from "@chakra-ui/react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import character, { CharacterSheetInputs } from "../../pages/character";
import styled from "@emotion/styled";

const WarningView = styled.span`
  padding: 6px;
`;

const Warning = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;
interface LabelWithTextProps {
  label: string;
  registerId: string;
  register: UseFormRegister<CharacterSheetInputs>;
  errors?: Partial<FieldErrorsImpl<CharacterSheetInputs>>;
  placeholder?: string;
}

export function LabelWithText({
  label,
  registerId,
  register,
  errors,
  placeholder = "Enter some text...",
}: LabelWithTextProps) {
  return (
    <Textarea
      {...register(registerId, { required: true })}
      mb={"30px"}
      placeholder={placeholder}
    />
  );
}
