import * as React from "react";
import {
  Card,
  Badge,
  Box,
  CardBody,
  CardHeader,
  Heading,
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
interface StatCardProps {
  quantifier: number;
  title: string;
}

export function StatCard({ quantifier, title }: StatCardProps) {
  return (
    <>
      <Box>
        <StyledCard>
          {title}
          <br />
          <Badge>{quantifier}</Badge>
        </StyledCard>
      </Box>
      <div>
        <br />
        <hr />
        <br />
      </div>
      <Box>
        <Card>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>
          <CardBody>
            {title}
            <br />
            <Badge>{quantifier}</Badge>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
