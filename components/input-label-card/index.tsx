import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";

type InputLabelCardProps = {
  label: string;
  props?: any;
};

export function InputLabelCard({ label, props = {} }: InputLabelCardProps) {
  return (
    <Card {...props} variant="elevated" flexDirection={"row"} p={"10px"}>
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
