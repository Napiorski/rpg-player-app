import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { CharacterSheetInputs } from "../../pages/character";
import styled from "@emotion/styled";

const WarningView = styled.span`
  padding: 6px;
`

const Warning = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 400;
`

interface StatCardProps {
  title: string;
  registerId: string;
  register: UseFormRegister<CharacterSheetInputs>;
  errors?: Partial<FieldErrorsImpl<CharacterSheetInputs>>
}

export function InputStatCard({ title, registerId, register, errors }: StatCardProps) {
  return (
    <Box>
      <Card variant="elevated">
        <CardBody py={"5px"}>
          <Center flexDirection={"column"}>
            <Box fontWeight={"bold"}>{title}</Box>
            <Input
              {...register(registerId, { required: true })}
              type="number"
              size="sm"
              variant="unstyled"
              width={"7px"}
              placeholder="-"
            />
          </Center>
        </CardBody>
        <Input
          bg="gray.100"
          type="number"
          size="sm"
          placeholder="-"
          textAlign="center"
        />
      {errors && errors[registerId] && (
        <WarningView>
          <Warning>* This field is required</Warning>
        </WarningView>
      )}        
      </Card>

    </Box>
  );
}
