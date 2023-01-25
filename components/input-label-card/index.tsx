import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";
import { isRegularExpressionLiteral } from "typescript";
import { useForm, UseFormRegister } from "react-hook-form";
import { CharacterSheetInputs } from "../../pages/character";

type InputLabelCardProps = {
  label: string;
  placeholder?: string;
  registerId: keyof CharacterSheetInputs;
  register: UseFormRegister<CharacterSheetInputs>;
};

export function InputLabelCard({
  label,
  placeholder,
  registerId,
  register,
}: InputLabelCardProps) {
  return (
    <Card variant="elevated" flexDirection={"row"} p={"10px"} mb={"30px"}>
      <Center>
        <Box>
          <Input
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
    </Card>
  );
}
