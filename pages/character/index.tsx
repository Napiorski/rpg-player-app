import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  List,
  ListItem,
  Select,
  Spinner,
  Text,
  Textarea,
  VStack,
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
import { AlignmentOptions } from "components/alignment";
import { listItems, rowIndexes } from "./constants";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useAuth } from "hooks/use-auth";

const CharacterCard = styled(Card)`
  margin-top: 10px;
  padding: 10px;
`;
// Primary div container element
const Primary = styled.div`
  margin: 20px;
`;

export type CharacterSheetInputs = {
  [key: string]: string | boolean | number | AlignmentOptions[] | undefined;
};

type CharacterType = {
  characterName: string;
  playerName: string;
  class: string;
  race: string;
  level: string;
  experience: string;
  inspiration: string;
  proficiencyBonus: string;
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
  skills: string;
  perception: string;
  proficiencies?: string;
  armorClass: string;
  initiative: string;
  speed: string;
  maxHp: number;
  currentHp: string;
  hitDice: string;
  deathSaves?: boolean;
  background: string;
  personality: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
  alignment?: AlignmentOptions;
};

export default function Character() {
  const [character, setCharacter] = React.useState<CharacterType>({
    characterName: "",
    playerName: "",
    class: "",
    race: "",
    level: "",
    experience: "",
    inspiration: "",
    proficiencyBonus: "",
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    skills: "",
    perception: "",
    proficiencies: "",
    armorClass: "",
    initiative: "",
    speed: "",
    maxHp: 0,
    currentHp: "",
    hitDice: "",
    deathSaves: false,
    background: "",
    personality: "",
    ideals: "",
    bonds: "",
    flaws: "",
    alignment: "Neutral",
  });

  const { accessToken, isAuthLoading } = useAuth();

  // const [accessToken, setAccessToken] = React.useState<string | null>(null);

  // TODO: check for character sheet in db and if it exists
  // then populate the form with the data from the db
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CharacterSheetInputs>({
    defaultValues: React.useMemo(() => {
      return {
        characterName: character?.characterName ?? "",
        playerName: character?.playerName ?? "",
        class: character?.class ?? "",
        race: character?.race ?? "",
        level: character?.level ?? "",
        experience: character?.experience ?? "",
        inspiration: character?.inspiration ?? "",
        proficiencyBonus: character?.proficiencyBonus ?? "",
        strength: character?.strength ?? "",
        dexterity: character?.dexterity ?? "",
        constitution: character?.constitution ?? "",
        intelligence: character?.intelligence ?? "",
        wisdom: character?.wisdom ?? "",
        charisma: character?.charisma ?? "",
        skills: character?.skills ?? "",
        perception: character?.perception ?? "",
        proficiencies: character?.proficiencies ?? "",
        armorClass: character?.armorClass ?? "",
        initiative: character?.initiative ?? "",
        speed: character?.speed ?? "",
        maxHp: character?.maxHp ?? 0,
        currentHp: character?.currentHp ?? "",
        hitDice: character?.hitDice ?? "",
        deathSaves: character?.deathSaves ?? false,
        background: character?.background ?? "",
        personality: character?.personality ?? "",
        ideals: character?.ideals ?? "",
        bonds: character?.bonds ?? "",
        flaws: character?.flaws ?? "",
        alignment: character?.alignment ?? "Neutral",
      };
    }, [character]),
  });

  // Get the username:
  const { username } = React.useContext(AppContext);

  const { isLoading, isError } = useQuery("character", () =>
    fetch(`http://localhost:3000/character/${username}`)
      .then((res) => res.json())
      .then((data) => {
        // At this point we should have the data with an existing character:
        const fulfilledCharacter = data?.characterData
          ? data.characterData[0]
          : null;
        setCharacter({ ...fulfilledCharacter });
        reset(fulfilledCharacter);
        return fulfilledCharacter;
      })
  );

  const saveUserData = useMutation({
    mutationKey: "saveUserData",
    mutationFn: (data) => {
      return fetch(`http://localhost:3000/character/${username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
  });

  const onSubmit: SubmitHandler<CharacterSheetInputs> = (data) => {
    // TODO: offload to our database - if the character sheet
    // is not in the db then create it else update it
    console.log(data);
    saveUserData.mutate(data as any);
  };

  if (!accessToken || isAuthLoading) {
    return null;
  }

  debugger;

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Text>There was an error loading your character sheet.</Text>;
  }

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
                  />
                </GridItem>
                <GridItem w="100%" pr="15px">
                  <LabelInput
                    registerId="playerName"
                    register={register}
                    label="Player Name:"
                    errors={errors}
                  />
                </GridItem>

                <GridItem w="100%">
                  <LabelInput
                    registerId="class"
                    register={register}
                    label="Class:"
                    errors={errors}
                  />
                </GridItem>
                <GridItem w="100%" pr={"15px"}>
                  <LabelInput
                    registerId="race"
                    register={register}
                    label="Race:"
                    errors={errors}
                  />
                </GridItem>
                <GridItem w="100%">
                  <LabelInput
                    registerId="level"
                    register={register}
                    label="Level:"
                    errors={errors}
                  />
                </GridItem>
                <GridItem w="100%" pr="15px">
                  <LabelInput
                    registerId="experience"
                    register={register}
                    label="Experience:"
                    errors={errors}
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
                      />
                      {errors.inspirationRequired && (
                        <Warning>This field is required</Warning>
                      )}

                      <InputLabelCard
                        registerId="proficiency"
                        register={register}
                        label="PROFICIENCY BONUS"
                        errors={errors}
                      />
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
                        <CheckboxGroupCard
                          label="Acrobatics"
                          subLabel={"Dex"}
                        />
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
                        <CheckboxGroupCard
                          label="Perception"
                          subLabel={"Wis"}
                        />
                        <CheckboxGroupCard
                          label="Performance"
                          subLabel={"Cha"}
                        />
                        <CheckboxGroupCard
                          label="Persuasion"
                          subLabel={"Cha"}
                        />
                        <CheckboxGroupCard label="Religion" subLabel={"Int"} />
                        <CheckboxGroupCard
                          label="Sleight of Hand"
                          subLabel={"Dex"}
                        />
                        <CheckboxGroupCard label="Stealth" subLabel={"Dex"} />
                        <CheckboxGroupCard label="Survival" subLabel={"Wis"} />
                      </Card>
                    </GridItem>
                    <GridItem pl="2" area={"perception"}>
                      <InputLabelCard
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
                        <Text fontWeight="bold">Armor Proficiencies:</Text>
                        <Input></Input>
                        <Text fontWeight="bold">Weapon Proficiencies:</Text>
                        <Input></Input>
                        <Text fontWeight="bold">Vehicle Proficiencies:</Text>
                        <Input></Input>
                        <Text fontWeight="bold">Tool Proficiencies:</Text>
                        <Input></Input>
                        <Text fontWeight="bold">Other Proficiencies:</Text>
                        <Input></Input>
                        <Text fontWeight="bold">Other Speeds:</Text>
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
                          registerId="AC"
                          register={register}
                          title="AC"
                          errors={errors}
                        />
                        <InputStatCard
                          registerId="INIT"
                          register={register}
                          title="INIT"
                          errors={errors}
                        />
                        <InputStatCard
                          registerId="SPEED"
                          register={register}
                          title="SPEED"
                          errors={errors}
                        />
                      </Flex>
                      <Flex mb={"30px"}>
                        <Textarea placeholder="Max Hit Points" />
                      </Flex>
                      <Flex mb={"30px"}>
                        <Textarea placeholder="Current Hit Points" />
                      </Flex>
                      <Flex>
                        <Box p={4}>
                          <InputStatCard
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
                                defaultChecked={character?.deathSaves ?? false}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultChecked={character?.deathSaves ?? false}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultChecked={character?.deathSaves ?? false}
                                padding="3px"
                              ></Checkbox>
                            </Box>
                            <Box>
                              FAILURES:
                              <Checkbox
                                defaultChecked={character?.deathSaves ?? false}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultChecked={character?.deathSaves ?? false}
                                padding="3px"
                              ></Checkbox>
                              <Checkbox
                                defaultChecked={character?.deathSaves ?? false}
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
                      placeholder={character?.background ?? "Background"}
                    />
                    <List>
                      <Textarea
                        mb={"30px"}
                        placeholder={
                          character?.personality ?? "Personality Traits"
                        }
                      />
                      <Textarea
                        mb={"30px"}
                        placeholder={character?.ideals ?? "Ideals"}
                      />
                      <Textarea
                        mb={"30px"}
                        placeholder={character?.bonds ?? "Bonds"}
                      />
                      <Textarea
                        mb={"30px"}
                        placeholder={character?.flaws ?? "Flaws"}
                      />
                    </List>
                    <Alignment
                      registerId="alignment"
                      register={register}
                      errors={errors}
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
