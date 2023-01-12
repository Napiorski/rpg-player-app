import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";

type InputLabelCardProps = {
  label: string;
};

export function InputLabelCard({ label }: InputLabelCardProps) {
  return (
    <Box>
      <Card width="60px" variant="elevated">
        <CardBody py={"5px"}>
          <Center flexDirection={"row"}>
            <Input
              type="number"
              size="sm"
              variant="unstyled"
              width={"7px"}
              placeholder="-"
            />
            <Box fontWeight={"bold"}>{label}</Box>
          </Center>
        </CardBody>
        <Input bg="gray.100" type="number" size="sm" placeholder="-" />
      </Card>
      <br />
    </Box>
  );
}
