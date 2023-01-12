import * as React from "react";
import {
  Card,
  Badge,
  Box,
  CardBody,
  Center,
  CardHeader,
  Input,
} from "@chakra-ui/react";

interface StatCardProps {
  title: string;
}

export function StatCard({ title }: StatCardProps) {
  return (
    <Box>
      <Card width="60px" variant="elevated">
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
        <Input bg="gray.100" type="number" size="sm" placeholder="-" />
      </Card>
      <br />
    </Box>
  );
}
