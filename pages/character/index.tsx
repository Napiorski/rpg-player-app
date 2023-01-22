import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Divider,
  Heading,
  Textarea,
  Checkbox,
  Flex,
  VStack,
  HStack,
  Select,
  Input,
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

// TODO: offload to our database
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

/*
<option value="1">Unarmed Strike</option>
<option value="2">Two-Handed Unarmed Strike</option>
<option value="3">Natural Attack</option>
<option value="4">Improvised Weapon</option>
<option value="...">Club</option>
<option value="option1">Offhand Club</option>
<option value="option1">Dagger</option>
<option value="option1">Offhand Dagger</option>
<option value="option1">Greatclub</option>
<option value="option1">Handaxe</option>
<option value="option1">Offhand Handaxe</option>
<option value="option1">Javelin</option>
<option value="option1">Light Hammer</option>
<option value="option1">Offhand Light Hammer</option>
<option value="option1">Mace</option>
<option value="option1">Offhand Mace</option>
<option value="option1">Quarterstaff</option>
<option value="option1">Two-Handed Quarterstaff</option>
<option value="n">
*/

type AttackTypeProp = Array<{
  value: string | number;
  name: string;
}>;

// Data structure that is an array of objects
const attackTypes: AttackTypeProp = [
  {
    value: "1",
    name: "Unarmed Strike",
  },
  {
    value: "2",
    name: "Two-Handed Unarmed Strike",
  },
  {
    value: "3",
    name: "Natural Attack",
  },
  {
    value: "4",
    name: "Improvised Weapon",
  },
  {
    value: "5",
    name: "Club",
  },
  {
    value: "6",
    name: "Offhand Club",
  },
  {
    value: "7",
    name: "Dagger",
  },
  {
    value: "8",
    name: "Offhand Dagger",
  },
  {
    value: "9",
    name: "Greatclub",
  },
  {
    value: "10",
    name: "Handaxe",
  },
  {
    value: "11",
    name: "Offhand Handaxe",
  },
  {
    value: "12",
    name: "Javelin",
  },
  {
    value: "13",
    name: "Light Hammer",
  },
  {
    value: "14",
    name: "Offhand Light Hammer",
  },
  {
    value: "15",
    name: "Mace",
  },
  {
    value: "16",
    name: "Offhand Mace",
  },
  {
    value: "17",
    name: "Quarterstaff",
  },
  {
    value: "18",
    name: "Two-Handed Quarterstaff",
  },
  {
    value: "19",
    name: "Quarterstaff (Opposite End)",
  },
  {
    value: "20",
    name: "Sickle",
  },
  {
    value: "21",
    name: "Offhand Sickle",
  },
  {
    value: "22",
    name: "Spear",
  },
  {
    value: "23",
    name: "Spear (Opposite End)",
  },
  {
    value: "24",
    name: "Two-Handed Spear",
  },
  {
    value: "25",
    name: "Light Crossbow",
  },
  {
    value: "26",
    name: "Dart",
  },
  {
    value: "27",
    name: "Shortbow",
  },
  {
    value: "28",
    name: "Sling",
  },
  {
    value: "29",
    name: "Battleaxe",
  },
  {
    value: "30",
    name: "Two-Handed Battleaxe",
  },
  {
    value: "31",
    name: "Offhand Battleaxe",
  },
  {
    value: "32",
    name: "Flail",
  },
  {
    value: "33",
    name: "Offhand Flail",
  },
  {
    value: "34",
    name: "Glaive",
  },
  {
    value: "35",
    name: "Glaive (Opposite End)",
  },
  {
    value: "36",
    name: "Greataxe",
  },
  {
    value: "37",
    name: "Greatsword",
  },
  {
    value: "38",
    name: "Halberd",
  },
  {
    value: "39",
    name: "Halberd (Opposite End)",
  },
  {
    value: "40",
    name: "Lance",
  },
  {
    value: "41",
    name: "Longsword",
  },
  {
    value: "42",
    name: "Two-Handed Longsword",
  },
  {
    value: "43",
    name: "Offhand Longsword",
  },
  {
    value: "44",
    name: "Maul",
  },
  {
    value: "45",
    name: "Morningstar",
  },
  {
    value: "46",
    name: "Offhand Morningstar",
  },
  {
    value: "47",
    name: "Pike",
  },
  {
    value: "48",
    name: "Pike (Opposite End)",
  },
  {
    value: "49",
    name: "Rapier",
  },
  {
    value: "50",
    name: "Offhand Rapier",
  },
  {
    value: "51",
    name: "Scimitar",
  },
  {
    value: "52",
    name: "Offhand Scimitar",
  },
  {
    value: "53",
    name: "Shortsword",
  },
  {
    value: "54",
    name: "Offhand Shortsword",
  },
  {
    value: "55",
    name: "Trident",
  },
  {
    value: "56",
    name: "Two-Handed Trident",
  },
  {
    value: "57",
    name: "War Pick",
  },
  {
    value: "58",
    name: "Offhand War Pick",
  },
  {
    value: "59",
    name: "Warhammer",
  },
  {
    value: "60",
    name: "Two-Handed Warhammer",
  },
  {
    value: "61",
    name: "Offhand Warhammer",
  },
  {
    value: "62",
    name: "Whip",
  },
  {
    value: "63",
    name: "Blowgun",
  },
  {
    value: "64",
    name: "Hand Crossbow",
  },
  {
    value: "65",
    name: "Club",
  },
  {
    value: "66",
    name: "Heavy Crossbow",
  },
  {
    value: "67",
    name: "Longbow",
  },
  {
    value: "68",
    name: "Net",
  },
  {
    value: "69",
    name: "Eldritch Blast",
  },
  {
    value: "70",
    name: "Dagger +1",
  },
  {
    value: "71",
    name: "Offhand Dagger +1",
  },
  {
    value: "72",
    name: "Flame Tongue Longsword",
  },
  {
    value: "73",
    name: "Two-Handed Flame Tongue Longsword",
  },
  {
    value: "74",
    name: "Fire Bolt",
  },
  {
    value: "75",
    name: "Luck Blade Rapier",
  },
  {
    value: "76",
    name: "Hammer of Thunderbolts",
  },
  {
    value: "77",
    name: "Longbow +1",
  },
  {
    value: "78",
    name: "Silvered Rapier",
  },
];

export default function Home() {
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
                    <Card mb={"30px"}>
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
                    <InputLabelCard
                      placeholder="-"
                      label="PASSIVE WISDOM (PERCEPTION)"
                    />
                  </GridItem>
                </Grid>
              </CharacterCard>
            </GridItem>
            <GridItem w="100%">
              <CharacterCard>
                <CardBody>
                  <Flex gap={4}>
                    <StatCard title="AC" />
                    <StatCard title="INIT" />
                    <StatCard title="SPEED" />
                  </Flex>
                  <Flex mb={"30px"}>
                    <Textarea placeholder="Current hit points" />
                  </Flex>
                  <Flex mb={"30px"}>
                    <Textarea placeholder="Temporary hit points" />
                  </Flex>
                  <Flex>
                    <Box p={4}>
                      <StatCard title="HIT DICE" />
                    </Box>
                    <Card p={4}>
                      <VStack>
                        <Box>
                          SUCCESSES:
                          <Checkbox padding="3px"></Checkbox>
                          <Checkbox padding="3px"></Checkbox>
                          <Checkbox padding="3px"></Checkbox>
                        </Box>
                        <Box>
                          FAILURES:
                          <Checkbox padding="3px"></Checkbox>
                          <Checkbox padding="3px"></Checkbox>
                          <Checkbox padding="3px"></Checkbox>
                        </Box>
                        <Box>DEATH SAVES</Box>
                      </VStack>
                    </Card>
                  </Flex>
                </CardBody>
                <Divider />
              </CharacterCard>
            </GridItem>
            <GridItem w="100%">
              <CharacterCard fontWeight="bold">
                <Select placeholder="Background">
                  <option value="option1">Acolyte</option>
                  <option value="option1">Charlatan</option>
                  <option value="option1">Criminal</option>
                  <option value="option1">Entertainer</option>
                  <option value="option1">Folk Hero</option>
                  <option value="option1">Guild Artisan</option>
                  <option value="option1">Hermit</option>
                  <option value="option1">Noble</option>
                  <option value="option1">Outlander</option>
                  <option value="option1">Sage</option>
                  <option value="option1">Sailor</option>
                  <option value="option1">Soldier</option>
                  <option value="option1">Urchin</option>
                </Select>
                <List>
                  <Textarea mb={"30px"} placeholder="Personality traits" />
                  <Textarea mb={"30px"} placeholder="Ideals" />
                  <Textarea mb={"30px"} placeholder="Bonds" />
                  <Textarea mb={"30px"} placeholder="Flaws" />
                </List>
                <Select placeholder="Alignment">
                  <option value="option1">Lawful Good</option>
                  <option value="option2">Lawful Neutral</option>
                  <option value="option3">Lawful Evil</option>
                  <option value="option1">Neutral Good</option>
                  <option value="option2">True Neutral</option>
                  <option value="option3">Neutral Evil</option>
                  <option value="option3">Chaotic Good</option>
                  <option value="option1">Chaotic Neutral</option>
                  <option value="option2">Chaotic Evil</option>
                  <option value="option3">Lawful Jerk</option>
                  <option value="option1">Chaotic Stupid</option>
                  <option value="option2">Neutral Wuss</option>
                </Select>
              </CharacterCard>
            </GridItem>
            <GridItem w="100%" colStart={2} colSpan={2}>
              <Box bg="">
                <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                  <GridItem>NAME</GridItem>
                  <GridItem>ATK BONUS</GridItem>
                  <GridItem>DAMAGE/TYPE</GridItem>
                  <GridItem>
                    <Select placeholder="Attack Type">
                      {attackTypes.map(({ value, name }, i) => {
                        return (
                          <option value={value} key={`attack-type-${i}`}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "40px" }}
                      mr={"10px"}
                      w={"100px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "50px" }}
                      mr={"10px"}
                      w={"200px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Select placeholder="Attack Type">
                      {attackTypes.map(({ value, name }, i) => {
                        return (
                          <option value={value} key={`attack-type-${i}`}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "40px" }}
                      mr={"10px"}
                      w={"100px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "50px" }}
                      mr={"10px"}
                      w={"200px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Select placeholder="Attack Type">
                      {attackTypes.map(({ value, name }, i) => {
                        return (
                          <option value={value} key={`attack-type-${i}`}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "40px" }}
                      mr={"10px"}
                      w={"100px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "50px" }}
                      mr={"10px"}
                      w={"200px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Select placeholder="Attack Type">
                      {attackTypes.map(({ value, name }, i) => {
                        return (
                          <option value={value} key={`attack-type-${i}`}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "40px" }}
                      mr={"10px"}
                      w={"100px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "50px" }}
                      mr={"10px"}
                      w={"200px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Select placeholder="Attack Type">
                      {attackTypes.map(({ value, name }, i) => {
                        return (
                          <option value={value} key={`attack-type-${i}`}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "40px" }}
                      mr={"10px"}
                      w={"100px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "50px" }}
                      mr={"10px"}
                      w={"200px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Select placeholder="Attack Type">
                      {attackTypes.map(({ value, name }, i) => {
                        return (
                          <option value={value} key={`attack-type-${i}`}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "40px" }}
                      mr={"10px"}
                      w={"100px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "50px" }}
                      mr={"10px"}
                      w={"200px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Select placeholder="Attack Type">
                      {attackTypes.map(({ value, name }, i) => {
                        return (
                          <option value={value} key={`attack-type-${i}`}>
                            {name}
                          </option>
                        );
                      })}
                    </Select>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "40px" }}
                      mr={"10px"}
                      w={"100px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="string"
                      size="sm"
                      variant="unstyled"
                      placeholder="-"
                      _placeholder={{ paddingLeft: "50px" }}
                      mr={"10px"}
                      w={"200px"}
                      border={"1px solid black"}
                    />
                  </GridItem>
                  <GridItem w="100%" colStart={1} colSpan={3} p="5px">
                    <Textarea
                      fontSize="small"
                      mb={"30px"}
                      textAlign="center"
                      placeholder="ATTACKS & NOTES"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>
          </Grid>
        </Primary>
      </main>
    </>
  );
}
