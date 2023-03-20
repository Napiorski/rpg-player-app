import * as React from "react";
import { creaturesData } from "../../data/mock-creatures";
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

const HeaderDiv = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`;

const Cell = styled.div`
  margin: 10px;
`;

export default function Creatures() {
  const [person, setPerson] = React.useState();

  function getPerson(pId: number) {
    fetch("https://swapi.dev/api/people/" + pId)
      .then((data) => data.json())
      .then((json) => {
        setPerson(json.name);
      });
  }

  // componentDidMount, componentDidUpdate, componentWillUnmount
  React.useEffect(() => {
    getPerson(1);
  }, []);

  function additionalInfo(mId: number) {}

  return (
    <Box p={10}>
      <Box>
        <h2>Star Wars Person:</h2>
        {person ? <div>{person}</div> : <Spinner />}
      </Box>
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

        {creaturesData.map((c, i) => {
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
              <GridItem style={{ backgroundColor: isOdd ? "#ccc" : "inherit" }}>
                <Cell>
                  <Button onClick={() => additionalInfo(i)}>+</Button>
                </Cell>
              </GridItem>
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
}
