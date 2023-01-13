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
} from "@chakra-ui/react";

type RadioGroupCardProps = {
  label: string;
};

export function RadioGroupCard({ label }: RadioGroupCardProps) {
  const [value, setValue] = React.useState("");

  return (
    <Card variant="elevated" flexDirection={"row"} p={"3px"}>
      <Center>
        <Checkbox
          size="md"
          colorScheme="yellow"
          defaultChecked
          marginLeft={2}
          marginRight={-3}
        >
          {" "}
        </Checkbox>
        <Box px="15px" fontWeight={"bold"}>
          <Input placeholder="-" w={10} marginRight={2} />
          {value}
          {label}
        </Box>
      </Center>
    </Card>
  );
}
