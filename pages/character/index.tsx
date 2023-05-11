import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { Inter } from "@next/font/google";
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
  Spinner,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { InputStatCard } from "../../components/input-stat-card";
import { InputLabelCard } from "../../components/input-label-card";
import { CheckboxGroupCard } from "../../components/checkbox-group-card";
import { attackTypes } from "../../data/attack-types";
import { languages } from "../../data/languages";
import { equippedItems } from "../../data/equipped-items";
import { LabelInput } from "../../components/label-input";
import { AppContext } from "context/providers/app-provider";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { LabelWithText } from "components/label-with-text";
import { Warning } from "components/warning";
import Alignment from "components/alignment";

const CharacterCard = styled(Card)`
  margin-top: 10px;
  padding: 10px;
`;
// Primary div container element
const Primary = styled.div`
  margin: 20px;
`;

const inter = Inter({ subsets: ["latin"] });

const rowIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

export type CharacterSheetInputs = {
  [key: string]: string;
};

export default function Character() {
  // TODO: check for character sheet in db and if it exists
  // then populate the form with the data from the db

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CharacterSheetInputs>();

  const onSubmit: SubmitHandler<CharacterSheetInputs> = (data) => {
    // TODO: offload to our database - if the character sheet
    // is not in the db then create it else update it
    console.log(data);
    event.preventDefault();
    mutate();
  };

  // protected route check:
  const router = useRouter();
  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  // Get the username:
  const { username } = React.useContext(AppContext);

  const { isLoading, isError, data } = useQuery("character", () =>
    fetch(`http://localhost:3000/character/${username}`)
      .then((data) => data.json())
      .then((json) => json)
  );
  const UpdateCharacter = ({ username, updatedCharacterData }) => {
    const [mutate, { isLoading, isError, data }] = useMutation(
      () =>
        fetch(`http://localhost:3000/character/${username}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCharacterData),
        }).then((res) => res.json()),
      {
        onSuccess: (data) => {
          console.log("Updated character:", data);
          // Handle success behavior here
        },
        onError: (error) => {
          console.error("Error updating character:", error);
          // Handle error behavior here
        },
      }
    );
  

  // This code ensures that we have a valid access token
  // before rendering the page
  React.useEffect(() => {
    const storageToken = localStorage.getItem("accessToken");

    // This should be a check for a valid access token when the component first mounts
    if (storageToken && !accessToken) {
      setAccessToken(storageToken);
    } else if (!accessToken) {
      router.push("/login");
    } else {
      // Call the /profile endpoint with the access token to check if it is stale
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            // Access token is stale, redirect to login page
            localStorage.removeItem("accessToken");
            router.push("/login");
          } else if (response.ok) {
            // TODO: call the /character endpoint to get the
            // character sheet so the app is more performant (not a big deal now)

            // Access token is valid, continue rendering the page
            return response.json();
          }
        })
        .catch((err) => {
          console.error(err);
          // Access token is stale, redirect to login page
          localStorage.removeItem("accessToken");
          router.push("/login");
        });
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Text>There was an error loading your character sheet.</Text>;
  }

  // At this point we should have the data with an existing character:
  const { characterData } = data;
  const character = characterData ? characterData[0] : null;

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading>Character Sheet</Heading>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
            <Box>
              <Grid gridTemplateColumns={"50% 50%"} gap={5}>
                <GridItem w="100%">
                  <LabelInput
                    registerId="characterName"
                    register={register}
                    label="Character Name:"
                    errors={errors}
                    defaultValue={character.characterName}
                  />
                </GridItem>
                <GridItem w="100%" pr="15px">
                  <LabelInput
                    registerId="playerName"
                    register={register}
                    label="Player Name:"
                    errors={errors}
                    defaultValue={character.playerName}
                  />
                </GridItem>

                <GridItem w="100%">
                  <LabelInput
                    registerId="class"
                    register={register}
                    label="Class:"
                    errors={errors}
                    defaultValue={character.class}
                  />
                </GridItem>
                <GridItem w="100%" pr={"15px"}>
                  <LabelInput
                    registerId="race"
                    register={register}
                    label="Race:"
                    errors={errors}
                    defaultValue={character.race}
                  />
                </GridItem>
                <GridItem w="100%">
                  <LabelInput
                    registerId="level"
                    register={register}
                    label="Level:"
                    errors={errors}
                    defaultValue={character.level}
                  />
                </GridItem>
                <GridItem w="100%" pr="15px">
                  <LabelInput
                    registerId="experience"
                    register={register}
                    label="Experience:"
                    errors={errors}
                    defaultValue={character.experience}
                  />
                </GridItem>
              </Grid>
            </Box>
            <Grid gridTemplateColumns="33.3333% 66.6666%" gap={10}>
              <GridItem w="100%">
                <Grid
                  gridTemplateColumns="repeat(5, 1fr)"
                  gridTemplateRows="repeat(2, 1fr)"
                >
                  <GridItem colStart={3} colEnd={5} bg="black200"></GridItem>{" "}
                </Grid>
                <CharacterCard textAlign="center" fontWeight="bold">
                  <Grid
                    templateAreas={`
                  "stat next"
                  "perception perception"
                  "proficiency proficiency"`}
                    gridTemplateColumns={"70px 1fr"}
                    gap="1"
                    fontWeight="bold"
                  >
                    <GridItem pl="2" area={"stat"} mb={3}>
                      <List>
                        {listItems.map(({ title }) => {
                          return (
                            <ListItem
                              key={`list-item-${title}`}
                              paddingBottom={"10px"}
                            >
                              <InputStatCard
                                register={register}
                                registerId={title}
                                title={title}
                                errors={errors}
                              />
                            </ListItem>
                          );
                        })}
                      </List>
                    </GridItem>
                    <GridItem pl="2" area={"next"}>
                      <InputLabelCard
                        register={register}
                        registerId="inspiration"
                        label="INSPIRATION"
                        errors={errors}
                        defaultValue={character.inspiration}
                      />
                      {errors.inspirationRequired && (
                        <Warning>This field is required</Warning>
                      )}

                      <InputLabelCard
                        registerId="proficiency"
                        register={register}
                        label="PROFICIENCY BONUS"
                        errors={errors}
                        defaultValue={character.proficiencyBonus}
                      />
                      <Card mb={"30px"}>
                        SAVING THROWS
                        <CheckboxGroupCard
                          label="Strength"
                          defaultValue={character.strength}
                        />
                        <CheckboxGroupCard
                          label="Dexterity"
                          defaultValue={character.dexterity}
                        />
                        <CheckboxGroupCard
                          label="Constitution"
                          defaultValue={character.constitution}
                        />
                        <CheckboxGroupCard
                          label="Intelligence"
                          defaultValue={character.intelligence}
                        />
                        <CheckboxGroupCard
                          label="Wisdom"
                          defaultValue={character.wisdom}
                        />
                        <CheckboxGroupCard
                          label="Charisma"
                          defaultValue={character.charisma}
                        />
                      </Card>
                      <Card>
                        SKILLS
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Acrobatics"
                          subLabel={"Dex"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Animal Handling"
                          subLabel={"Wis"}
                        />
                        <CheckboxGroupCard
                          label="Arcana"
                          subLabel={"Int"}
                          defaultValue={character.skills}
                        />
                        <CheckboxGroupCard
                          label="Athletics"
                          subLabel={"Str"}
                          defaultValue={character.skills}
                        />
                        <CheckboxGroupCard
                          label="Deception"
                          subLabel={"Cha"}
                          defaultValue={character.skills}
                        />
                        <CheckboxGroupCard
                          label="History"
                          subLabel={"Int"}
                          defaultValue={character.skills}
                        />
                        <CheckboxGroupCard
                          label="Insight"
                          subLabel={"Wis"}
                          defaultValue={character.skills}
                        />
                        <CheckboxGroupCard
                          label="Intimidation"
                          subLabel={"Cha"}
                          defaultValue={character.skills}
                        />
                        <CheckboxGroupCard
                          label="Investigation"
                          subLabel={"Int"}
                          defaultValue={character.skills}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Medicine"
                          subLabel={"Wis"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Nature"
                          subLabel={"Int"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Perception"
                          subLabel={"Wis"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Performance"
                          subLabel={"Cha"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Persuasion"
                          subLabel={"Cha"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Religion"
                          subLabel={"Int"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Sleight of Hand"
                          subLabel={"Dex"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Stealth"
                          subLabel={"Dex"}
                        />
                        <CheckboxGroupCard
                          defaultValue={character.skills}
                          label="Survival"
                          subLabel={"Wis"}
                        />
                      </Card>
                    </GridItem>
                    <GridItem pl="2" area={"perception"}>
                      <InputLabelCard
                        defaultValue={character.perception}
                        registerId="perception"
                        register={register}
                        placeholder="-"
                        label="PASSIVE WISDOM (PERCEPTION)"
                        errors={errors}
                      />
                    </GridItem>
                    <GridItem pl="2" area={"proficiency"}>
                      <Card mt={"30px"} p={"10px"}>
                        <Heading
                          as="h4"
                          mt={"15px"}
                          mb={"15px"}
                          size={"md"}
                          textAlign={"center"}
                        >
                          PROFICIENCIES
                        </Heading>
                        <Text
                          defaultValue={character.proficiencies}
                          fontWeight="bold"
                        >
                          Armor Proficiencies:
                        </Text>
                        <Input></Input>
                        <Text
                          defaultValue={character.proficiencies}
                          fontWeight="bold"
                        >
                          Weapon Proficiencies:
                        </Text>
                        <Input></Input>
                        <Text
                          defaultValue={character.proficiencies}
                          fontWeight="bold"
                        >
                          Vehicle Proficiencies:
                        </Text>
                        <Input></Input>
                        <Text
                          defaultValue={character.proficiencies}
                          fontWeight="bold"
                        >
                          Tool Proficiencies:
                        </Text>
                        <Input></Input>
                        <Text
                          defaultValue={character.proficiencies}
                          fontWeight="bold"
                        >
                          Other Proficiencies:
                        </Text>
                        <Input></Input>
                        <Text
                          defaultValue={character.proficiencies}
                          fontWeight="bold"
                        >
                          Other Speeds:
                        </Text>
                        <Input></Input>
                      </Card>
                    </GridItem>
                  </Grid>
                </CharacterCard>
              </GridItem>
              <GridItem w="100%">
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <CharacterCard>
                    <CardBody>
                      <Flex gap={4} paddingBottom={4}>
                        <InputStatCard
                          defaultValue={character.armorClass}
                          registerId="AC"
                          register={register}
                          title="AC"
                          errors={errors}
                        />
                        <InputStatCard
                          defaultValue={character.initiative}
                          registerId="INIT"
                          register={register}
                          title="INIT"
                          errors={errors}
                        />
                        <InputStatCard
                          defaultValue={character.speed}
                          registerId="SPEED"
                          register={register}
                          title="SPEED"
                          errors={errors}
                        />
                      </Flex>
                      <Flex mb={"30px"}>
                        <Textarea
                          defaultValue={character.maxHp}
                          placeholder="Max Hit Points"
                        />
                      </Flex>
                      <Flex mb={"30px"}>
                        <Textarea
                          defaultValue={character.currentHp}
                          placeholder="Current Hit Points"
                        />
                      </Flex>
                      <Flex>
                        <Box p={4}>
                          <InputStatCard
                            defaultValue={character.hitDice}
                            registerId="HIT_DICE"
                            register={register}
                            title="HIT DICE"
                            errors={errors}
                          />
                        </Box>
                        <Card p={4}>
                          <VStack>
                            <Box>
                              SUCCESSES:
                              <Checkbox
                                defaultValue={character.deathSaves}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultValue={character.deathSaves}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultValue={character.deathSaves}
                                padding="3px"
                              ></Checkbox>
                            </Box>
                            <Box>
                              FAILURES:
                              <Checkbox
                                defaultValue={character.deathSaves}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultValue={character.deathSaves}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultValue={character.deathSaves}
                                padding="3px"
                              ></Checkbox>
                            </Box>
                            <Box>DEATH SAVES</Box>
                          </VStack>
                        </Card>
                      </Flex>
                    </CardBody>
                    <Divider />
                  </CharacterCard>
                  <CharacterCard fontWeight="bold">
                    <LabelWithText
                      label="Background"
                      register={register}
                      registerId="background"
                      placeholder={character.background || "Background"}
                    />
                    <List>
                      <Textarea
                        mb={"30px"}
                        placeholder={
                          character.personality || "Personality Traits"
                        }
                      />
                      <Textarea
                        mb={"30px"}
                        placeholder={character.ideals || "Ideals"}
                      />
                      <Textarea
                        mb={"30px"}
                        placeholder={character.bonds || "Bonds"}
                      />
                      <Textarea
                        mb={"30px"}
                        placeholder={character.flaws || "Flaws"}
                      />
                    </List>
                    <Alignment
                      registerId="alignment"
                      register={register}
                      errors={errors}
                      defaultValue={character.alignment}
                    />
                  </CharacterCard>
                  {/*One big row spanning both of our Grid columns*/}
                  <GridItem w="100%" colSpan={2}>
                    <Card mb={"30px"} mt={"30px"}>
                      <Heading
                        as="h4"
                        mt={"15px"}
                        size={"md"}
                        textAlign={"center"}
                      >
                        ATTACKS & NOTES
                      </Heading>
                      <Box p={10}>
                        <Grid gridTemplateColumns="30% 20% 50%" gap={5}>
                          <GridItem>NAME</GridItem>
                          <GridItem>ATK BONUS</GridItem>
                          <GridItem>DAMAGE/TYPE</GridItem>
                          <GridItem>
                            <Select placeholder="Attack Type">
                              {attackTypes.map(({ value, name }, i) => {
                                return (
                                  <option
                                    value={value}
                                    key={`attack-type-${i}`}
                                  >
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
                                  <option
                                    value={value}
                                    key={`attack-type-${i}`}
                                  >
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
                                  <option
                                    value={value}
                                    key={`attack-type-${i}`}
                                  >
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
                                  <option
                                    value={value}
                                    key={`attack-type-${i}`}
                                  >
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
                                  <option
                                    value={value}
                                    key={`attack-type-${i}`}
                                  >
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
                                  <option
                                    value={value}
                                    key={`attack-type-${i}`}
                                  >
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
                                  <option
                                    value={value}
                                    key={`attack-type-${i}`}
                                  >
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
                            <Textarea textAlign="center" />
                          </GridItem>
                        </Grid>
                      </Box>
                    </Card>
                  </GridItem>

                  <GridItem colSpan={2}>
                    <Card mt={"30px"} p={"10px"}>
                      <Heading
                        as="h4"
                        mt={"15px"}
                        mb={"15px"}
                        size={"md"}
                        textAlign={"center"}
                      >
                        LANGUAGES & EQUIPPED ITEMS
                      </Heading>
                      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <GridItem w="100%">
                          {rowIndexes.map((n) => {
                            return (
                              <React.Fragment key={`languages-${n}`}>
                                <Select
                                  {...register(`languages-${n}`)}
                                  fontWeight="bold"
                                  value="Language"
                                >
                                  {languages.map(({ name }, i) => {
                                    return i === 0 ? (
                                      <option disabled key={`languages-${i}`}>
                                        {name}
                                      </option>
                                    ) : (
                                      <option
                                        value={name}
                                        key={`languages-${i}`}
                                      >
                                        {name}
                                      </option>
                                    );
                                  })}
                                </Select>
                                <br />
                              </React.Fragment>
                            );
                          })}
                        </GridItem>
                        <GridItem>
                          {rowIndexes.map((n) => {
                            return (
                              <React.Fragment key={`equipped-items-${n}`}>
                                <Select
                                  {...register(`equipped-items-${n}`)}
                                  fontWeight="bold"
                                  value="Equipped Item"
                                >
                                  {equippedItems.map(({ name }, i) => {
                                    return i === 0 ? (
                                      <option
                                        disabled
                                        key={`equipped-items-${i}`}
                                      >
                                        {name}
                                      </option>
                                    ) : (
                                      <option
                                        value={name}
                                        key={`equipped-items-${i}`}
                                      >
                                        {name}
                                      </option>
                                    );
                                  })}
                                </Select>
                                <br />
                              </React.Fragment>
                            );
                          })}
                        </GridItem>
                      </Grid>
                    </Card>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </form>
        </Primary>
      </main>
    </>
  );
}
