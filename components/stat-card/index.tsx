import * as React from "react";
import {
  Card,
  Badge,
  Box,
  CardBody,
  Center,
  CardHeader,
  Input,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const BoldHeader = styled.div`
  font-weight: bold;
`
interface StatCardProps {
  title: string;
}

export function StatCard({ title }: StatCardProps) {
  return (
    <Box>
      <Card width='60px' variant="elevated">
        <CardBody py={'5px'} >
          <Center flexDirection={'column'}>
              <BoldHeader>{title}</BoldHeader>
              <Input type="number" size='sm' variant="unstyled" width={'7px'} placeholder="-"/>
            </Center>
        </CardBody>
        <Input bg='gray.100' type="number" size='sm'  placeholder="-"/>
      </Card>
      <br/>
    </Box>
  );
}
