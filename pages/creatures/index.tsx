import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { creatures } from "./creatures";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Divider,
  List,
  ListItem,
  Heading,
  Textarea,
  Checkbox,
  Flex,
  VStack,
  HStack,
  Select,
  Input,
  Button,
  Text,
  chakra,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const HeaderDiv = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`;

const Cell = styled.div`
  margin: 10px;
`;

export default function Creatures() {
  return (
    <Box p={10}>
      <Grid gridTemplateColumns="repeat(7, 1fr)">
        <GridItem>
          <HeaderDiv>Name</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Rating</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Type</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Size</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Environment</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Alignment</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Creature Tag</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>

        {creatures.map((creature, i) => {
          const isOdd = i % 2;
          return (
            <React.Fragment key={`creature-${i}`}>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{creature.name}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{creature.challengerating}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{creature.type}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{creature.size}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{creature.environment}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{creature.alignment}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{creature.creature}</Cell>
              </GridItem>
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
}
