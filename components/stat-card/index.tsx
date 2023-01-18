import * as React from "react";
import { Card, Box, CardBody, Center, Input } from "@chakra-ui/react";

interface StatCardProps {
  title: string;
}

export function StatCard({ title }: StatCardProps) {
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
