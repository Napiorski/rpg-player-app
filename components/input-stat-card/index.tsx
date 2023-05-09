import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { CharacterSheetInputs } from "../../pages/character";
import styled from "@emotion/styled";
import { Warning } from "components/warning";

interface StatCardProps {
  title: string;
  registerId: string;
  register: UseFormRegister<CharacterSheetInputs>;
  errors?: Partial<FieldErrorsImpl<CharacterSheetInputs>>;
  defaultValue?: string;
}

export function InputStatCard({
  title,
  defaultValue,
  registerId,
  register,
  errors,
}: StatCardProps) {
  return (
    <Box>
      <Card variant="elevated">
        <CardBody py={"5px"}>
          <Center flexDirection={"column"}>
            <Box fontWeight={"bold"}>{title}</Box>
            <Input
              defaultValue={defaultValue}
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
          <Warning>* This field is required</Warning>
        )}
      </Card>
    </Box>
  );
}
