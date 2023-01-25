import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { CharacterSheetInputs } from "../../pages/character";

interface StatCardProps {
  title: string;
  registerId: keyof CharacterSheetInputs;
  register: UseFormRegister<CharacterSheetInputs>;
}

export function StatCard({ title, registerId, register }: StatCardProps) {
  return (
    <Box>
      <Card variant="elevated">
        <CardBody py={"5px"}>
          <Center flexDirection={"column"}>
            <Box fontWeight={"bold"}>{title}</Box>
            <Input
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
      </Card>
      <br />
    </Box>
  );
}
