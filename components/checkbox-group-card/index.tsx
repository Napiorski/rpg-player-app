import * as React from "react";
import {
  Card,
  Box,
  CardBody,
  Center,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Flex,
} from "@chakra-ui/react";

type CheckboxGroupCardProps = {
  label: string;
};

export function CheckboxGroupCard({ label }: CheckboxGroupCardProps) {
  const [value, setValue] = React.useState("");

  return (
    <Flex>
      <Checkbox size="md" defaultChecked marginLeft={2} marginRight={-3}>
        {" "}
      </Checkbox>
      <Box px="15px" fontWeight={"bold"}>
        <Input placeholder="-" w={10} marginRight={2} />
        {value}
        {label}
      </Box>
    </Flex>
  );
}
