import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";

type InputLabelCardProps = {
  label: string;
};

export function InputLabelCard({ label }: InputLabelCardProps) {
  return (
    <Card variant="elevated" flexDirection={"row"} p={"10px"} mb={"30px"}>
      <Center>
        <Box>
          <Input
            type="number"
            size="sm"
            variant="unstyled"
            placeholder=""
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
