import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  color,
  HStack,
  Textarea,
  Checkbox,
  Flex,
  Input,
  Center,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  List,
  Badge,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { StatCard } from "../../components/stat-card";
import { InputLabelCard } from "../../components/input-label-card";
import { CheckboxGroupCard } from "../../components/checkbox-group-card";

const CharacterCard = styled(Card)`
  margin-top: 10px;
  padding: 10px;
`;
// Primary div container element
const Primary = styled.div`
  margin: 20px;
`;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const listItems = [
    {
      title: "STR",
      quantifier: 0,
    },
    {
      title: "DEX",
      quantifier: 0,
    },
    {
      title: "CON",
      quantifier: 0,
    },
    {
      title: "INT",
      quantifier: 0,
    },
    {
      title: "WIS",
      quantifier: 0,
    },
    {
      title: "CHA",
      quantifier: 0,
    },
  ];

  // JSX is really the view-layer (put any data or logic above this)
  return (
    <>
      <Head>
        <title>Character Sheet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Primary>
          <Heading>Character Sheet</Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            <GridItem w="100%">
              <CharacterCard textAlign="center" fontWeight="bold">
                <Grid
                  templateAreas={`
                  "stat next"
                  "footer footer"`}
                  gridTemplateColumns={"70px 1fr"}
                  gap="1"
                  fontWeight="bold"
                >
                  <GridItem pl="2" area={"stat"} mb={3}>
                    <List>
                      {listItems.map(({ title }) => {
                        return (
                          <ListItem key={`list-item-${title}`}>
                            <StatCard title={title} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </GridItem>
                  <GridItem pl="2" area={"next"}>
                    <InputLabelCard label="INSPIRATION" />
                    <InputLabelCard label="PROFICIENCY BONUS" />
                    <Card>
                      SAVING THROWS
                      <CheckboxGroupCard label="Strength" />
                      <CheckboxGroupCard label="Dexterity" />
                      <CheckboxGroupCard label="Constitution" />
                      <CheckboxGroupCard label="Intelligence" />
                      <CheckboxGroupCard label="Wisdom" />
                      <CheckboxGroupCard label="Charisma" />
                    </Card>
                    <Card>
                      SKILLS
                      <CheckboxGroupCard label="Acrobatics" subLabel={"Dex"} />
                      <CheckboxGroupCard
                        label="Animal Handling"
                        subLabel={"Wis"}
                      />
                      <CheckboxGroupCard label="Arcana" subLabel={"Int"} />
                      <CheckboxGroupCard label="Athletics" subLabel={"Str"} />
                      <CheckboxGroupCard label="Deception" subLabel={"Cha"} />
                      <CheckboxGroupCard label="History" subLabel={"Int"} />
                      <CheckboxGroupCard label="Insight" subLabel={"Wis"} />
                      <CheckboxGroupCard
                        label="Intimidation"
                        subLabel={"Cha"}
                      />
                      <CheckboxGroupCard
                        label="Investigation"
                        subLabel={"Int"}
                      />
                      <CheckboxGroupCard label="Medicine" subLabel={"Wis"} />
                      <CheckboxGroupCard label="Nature" subLabel={"Int"} />
                      <CheckboxGroupCard label="Perception" subLabel={"Wis"} />
                      <CheckboxGroupCard label="Performance" subLabel={"Cha"} />
                      <CheckboxGroupCard label="Persuasion" subLabel={"Cha"} />
                      <CheckboxGroupCard label="Religion" subLabel={"Int"} />
                      <CheckboxGroupCard
                        label="Sleight of Hand"
                        subLabel={"Dex"}
                      />
                      <CheckboxGroupCard label="Stealth" subLabel={"Dex"} />
                      <CheckboxGroupCard label="Survival" subLabel={"Wis"} />
                    </Card>
                  </GridItem>

                  <GridItem pl="2" area={"footer"}>
                    <Card>PASSIVE WISDOM (PERCEPTION)</Card>
                  </GridItem>
                </Grid>
              </CharacterCard>
            </GridItem>
            <GridItem w="100%">
              <CharacterCard>
                <CardBody>
                  <HStack mt="6" spacing="3">
                    <StatCard title="AC" />
                    <StatCard title="INIT" />
                    <StatCard title="SPEED" />
                  </HStack>

                  <Box>CURRENT HIT POINTS</Box>
                  <Box>TEMPORARY HIT POINTS</Box>
                  <HStack>
                    <StatCard title="HIT DICE" />
                    <Flex>
                      <Card
                        fontWeight="bold"
                        flexDirection="row"
                        textAlign="center"
                      >
                        SUC:
                        <Checkbox padding="3px"></Checkbox>
                        <Checkbox padding="3px"></Checkbox>
                        <Checkbox padding="3px"></Checkbox>
                        FAIL:
                        <Checkbox padding="3px"></Checkbox>
                        <Checkbox padding="3px"></Checkbox>
                        <Checkbox padding="3px"></Checkbox>
                        DEATH SAVES
                      </Card>
                    </Flex>
                  </HStack>
                </CardBody>
                <Divider />
              </CharacterCard>
            </GridItem>
            <GridItem w="100%">
              <CharacterCard fontWeight="bold">
                Background:
                <List>
                  <Textarea placeholder="Personality Traits" />
                  <Textarea placeholder="Ideals" />
                  <Textarea placeholder="Bonds" />
                  <Textarea placeholder="Flaws" />
                </List>
                Alignment:
              </CharacterCard>
            </GridItem>
          </Grid>
        </Primary>
      </main>
    </>
  );
}
