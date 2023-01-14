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
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const SubLabel = styled.span`
  color: ${(props) => props.color};
`;

type CheckboxGroupCardProps = {
  label: string;
  subLabel?: string;
};

export function CheckboxGroupCard({
  label,
  subLabel = "",
}: CheckboxGroupCardProps) {
  return (
    <Flex>
      <Checkbox size="md" defaultChecked marginLeft={2} marginRight={-3}>
        {" "}
      </Checkbox>
      <Box px="15px" fontWeight={"bold"}>
        <Input placeholder="-" w={10} mr={2} variant="flushed" mb={2} />
        {label}
        {subLabel && <SubLabel color={"#D3D3D3"}> ({subLabel})</SubLabel>}
      </Box>
    </Flex>
  );
}
