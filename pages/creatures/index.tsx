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
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import MonsterType from "types/creatures";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const HeaderDiv = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`;

const Cell = styled.div`
  margin: 10px;
`;

export default function Creatures() {
  const [buttons, setButtons] = React.useState<boolean[] | null>(null);
  const { isLoading, isError, data } = useQuery("creatures", () =>
    fetch(`http://localhost:3000/monster`)
      .then((data) => data.json())
      .then((json) => json)
  );

  let creaturesData: any[] = [];

  // TODO: get all the other monsters. We need a backend API endpoint to graft the monsters into one request
  if (!isLoading && !isError && data) {
    creaturesData = [...data.monsterData];
    const newButtons: boolean[] = new Array(creaturesData.length).fill(false);

    // If the expanded rows metadata has never been set then set it here (initialize):
    if (!buttons) {
      setButtons(newButtons);
    }
  }

  function additionalInfo(mId: number) {}

  function ButtonIcon({ i }: { i: number }) {
    if (!buttons) return <></>;

    return buttons[i] === false ? <AddIcon /> : <MinusIcon />;
  }

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
                      <span>-</span>
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
                    <Button
                      onClick={() => {
                        if (buttons) {
                          buttons[i] = !buttons[i];
                          setButtons([...buttons]);
                        }
                      }}
                    >
                      <ButtonIcon i={i} />
                    </Button>
                  </Cell>
                </GridItem>
                {buttons && buttons[i] && (
                  <GridItem colSpan={8}>
                    <div>HP: {c.hit_points}</div>
                    <div>Difficulty: {c.challenge_rating}</div>
                    <div>XP: {c.xp}</div>
                    <div>Walk Speed: {c.speed.walk}</div>
                    <div>Swim Speed: {c.speed.swim}</div>
                    <div>Fly Speed: {c.speed.fly}</div>
                    <div>STR: {c.strength}</div>
                    <div>DEX: {c.dexterity}</div>
                    <div>CON: {c.constitution}</div>
                    <div>INT: {c.intelligence}</div>
                    <div>WIS: {c.wisdom}</div>
                    <div>CHA: {c.charisma}</div>
                    <div>Actions: {c.actions.map}</div>
                  </GridItem>
                )}
              </React.Fragment>
            );
          })
        )}
      </Grid>
    </Box>
  );
}
