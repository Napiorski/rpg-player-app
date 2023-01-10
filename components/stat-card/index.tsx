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

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border: 1px solid lightGrey;
  border-radius: 5px;
  width: 40px;
  font-weight: bold;
  text-align: center;
`;

const StyledBadge = styled(Badge)`
  display: flex;
`

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
