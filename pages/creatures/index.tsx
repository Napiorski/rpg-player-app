import * as React from "react";
import { Box, Grid, GridItem, Button, Image, Spinner } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import AdditionalInfo from "components/additional-info";

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

  if (!isLoading && !isError && data && data.monsterData) {
    creaturesData = [...data.monsterData];
    const newButtons: boolean[] = new Array(creaturesData.length).fill(false);

    // If the expanded rows metadata has never been set then set it here (initialize):
    if (!buttons) {
      setButtons(newButtons);
    }
  }

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
                          const originalButtonVal = buttons[i];
                          const defaultButtons = buttons.map((b) => false);

                          defaultButtons[i] = !originalButtonVal;
                          setButtons([...defaultButtons]);
                        }
                      }}
                    >
                      <ButtonIcon i={i} />
                    </Button>
                  </Cell>
                </GridItem>
                {buttons && buttons[i] && <AdditionalInfo data={c} />}
              </React.Fragment>
            );
          })
        )}
      </Grid>
    </Box>
  );
}
