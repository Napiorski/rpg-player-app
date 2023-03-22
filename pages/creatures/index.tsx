import * as React from "react";
// import { creaturesData } from "../../data/mock-creatures";
import {
  Box,
  Grid,
  GridItem,
  Button,
  Image,
  Center,
  Spinner,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import MonsterType from "types/creatures";

const HeaderDiv = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`;

const Cell = styled.div`
  margin: 10px;
`;

export default function Creatures() {
  const { isLoading, isError, data } = useQuery("creatures", () =>
    fetch(`https://www.dnd5eapi.co/api/monsters/adult-black-dragon/`)
      .then((data) => data.json())
      .then((json) => json)
  );

  const creaturesData: any[] = [];

  // TODO: get all the other monsters. We need a backend API endpoint to graft the monsters into one request
  if (!isLoading && !isError && data) {
    creaturesData.push(data);
  }

  function additionalInfo(mId: number) {}

  return (
    <Box p={10}>
      <Grid gridTemplateColumns="repeat(8, 1fr)">
        <GridItem>
          <HeaderDiv>Image</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>Name</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>HP</HeaderDiv>
        </GridItem>
        <GridItem>
          <HeaderDiv>CR</HeaderDiv>
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
          <HeaderDiv>Additional Info</HeaderDiv>
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
        <GridItem>
          <HeaderDiv>
            <hr />
          </HeaderDiv>
        </GridItem>
        {isLoading ? (
          <Spinner />
        ) : (
          creaturesData.map((c, i) => {
            const isOdd = i % 2;
            return (
              <React.Fragment key={`creature-${i}`}>
                {/*TODO: get that beautiful thumbnail (image) here*/}
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>
                    {c.image ? (
                      <Image
                        alt={"monster image"}
                        src={`https://www.dnd5eapi.co${c.image}`}
                      />
                    ) : (
                      <Spinner />
                    )}
                  </Cell>
                </GridItem>
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>{c.name}</Cell>
                </GridItem>
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>{c.hit_points}</Cell>
                </GridItem>
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>{c.challenge_rating}</Cell>
                </GridItem>
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>{c.type}</Cell>
                </GridItem>
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>{c.size}</Cell>
                </GridItem>
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>{c.alignment}</Cell>
                </GridItem>
                <GridItem
                  style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}
                >
                  <Cell>
                    <Button onClick={() => additionalInfo(i)}>+</Button>
                  </Cell>
                </GridItem>
              </React.Fragment>
            );
          })
        )}
      </Grid>
    </Box>
  );
}
