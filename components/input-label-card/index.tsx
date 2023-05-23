import * as React from "react";
import { Card, Box, CardBody, Center, Input, Flex } from "@chakra-ui/react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { CharacterSheetInputs } from "../../pages/character";
import styled from "@emotion/styled";

const Warning = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;

type InputLabelCardProps = {
  label: string;
  placeholder?: string;
  registerId: string;
  register: UseFormRegister<CharacterSheetInputs>;
  errors?: Partial<FieldErrorsImpl<CharacterSheetInputs>>;
  defaultValue?: string | number;
};

export function InputLabelCard({
  label,
  placeholder,
  registerId,
  register,
  defaultValue,
  errors,
}: InputLabelCardProps) {
  return (
    <Card variant="elevated" mb={"30px"}>
      <Flex flexDirection={"row"} p={"10px"}>
        <Center>
          <Box>
            <Input
              defaultValue={defaultValue}
              {...register(registerId, { required: true })}
              type="number"
              size="sm"
              variant="unstyled"
              placeholder={placeholder ?? ""}
              _placeholder={{ paddingLeft: "25px" }}
              mr={"10px"}
              w={"60px"}
              border={"1px solid black"}
            />
          </Box>
        </Center>
        <Center>
          <Box px="15px" fontWeight={"bold"}>
            {label}
          </Box>
        </Center>
      </Flex>
      <Flex pl={"10px"} mb={"10px"}>
        {errors && errors[registerId] && (
          <Warning>* This field is required</Warning>
        )}
      </Flex>
    </Card>
  );
}
