import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { creatures2 } from "./creatures";
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
  Image,
  Center,
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
          <HeaderDiv>Image</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Name</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Hit Points</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Challenge Rating</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Type</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Size</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Alignment</HeaderDiv>
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

        {creatures2.map((c, i) => {
          const isOdd = i % 2;
          return (
            <React.Fragment key={`creature-${i}`}>
              {/*TODO: get that beautiful thumbnail (image) here*/}
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>
                  {c.image ? (
                    <Image
                      alt={"monster image"}
                      src={`https://www.dnd5eapi.co${c.image}`}
                    />
                  ) : (
                    <Center>
                      <span>
                        <b>-</b>
                      </span>
                    </Center>
                  )}
                </Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{c.name}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{c.hit_points}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{c.challenge_rating}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{c.type}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{c.size}</Cell>
              </GridItem>
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>{c.alignment}</Cell>
              </GridItem>
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
}
