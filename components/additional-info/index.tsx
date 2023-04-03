import { Grid, GridItem, Heading, useListStyles } from "@chakra-ui/react";
import { GiCheckedShield } from "react-icons/gi";
import * as React from "react";

type AdditionalInfoProps = {
  data: any;
};

function AdditionalInfo({ data }: AdditionalInfoProps) {
  return (
    <GridItem colSpan={8}>
      <Grid templateColumns="repeat(8, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Heading as="h6" size="md">
            Name:
          </Heading>
        </GridItem>
        <GridItem colSpan={6}>
          <span>{data.name}</span>
        </GridItem>
        <GridItem colSpan={2}>
          <Heading as="h6" size="md">
            Type:
          </Heading>
        </GridItem>
        <GridItem colSpan={6}>
          <span>{data.type}</span>
        </GridItem>
        <GridItem colSpan={2}>
          <Heading as="h6" size="md">
            Armor Class:
          </Heading>
        </GridItem>
        <GridItem colSpan={6}>
          <ul style={{ listStyleType: "none" }}>
            {data.armor_class.map(
              (ac: { type: number; value: string }, i: number) => {
                return (
                  <li key={`armor-class-item-${i}`}>
                    <GiCheckedShield style={{ display: "inline-block" }} />
                    <span>{" " + ac.type + " " + ac.value}</span>
                  </li>
                );
              }
            )}
          </ul>
        </GridItem>
        <GridItem colSpan={2}>Size:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.size}</span>
        </GridItem>
        <GridItem colSpan={2}>HP:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.hit_points}</span>
        </GridItem>
        <GridItem colSpan={2}>Difficulty:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.challenge_rating}</span>
        </GridItem>
        <GridItem colSpan={2}>XP:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.xp}</span>
        </GridItem>
        {data.speed.walk && (
          <>
            <GridItem colSpan={2}>Walk Speed:</GridItem>

            <GridItem colSpan={6}>
              <span>{data.speed.walk}</span>
            </GridItem>
          </>
        )}
        {data.speed.swim && (
          <>
            <GridItem colSpan={2}>Swim Speed:</GridItem>
            <GridItem colSpan={6}>
              <span>{data.speed.swim}</span>
            </GridItem>
          </>
        )}
        {data.speed.fly && (
          <>
            <GridItem colSpan={2}>Fly Speed:</GridItem>
            <GridItem colSpan={6}>
              <span>{data.speed.fly}</span>
            </GridItem>
          </>
        )}
        <GridItem colSpan={2}>STR:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.strength}</span>
        </GridItem>
        <GridItem colSpan={2}>DEX:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.dexterity}</span>
        </GridItem>
        <GridItem colSpan={2}>CON:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.constitution}</span>
        </GridItem>
        <GridItem colSpan={2}>INT:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.intelligence}</span>
        </GridItem>
        <GridItem colSpan={2}>WIS:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.wisdom}</span>
        </GridItem>
        <GridItem colSpan={2}>CHA:</GridItem>
        <GridItem colSpan={6}>
          <span>{data.charisma}</span>
        </GridItem>
      </Grid>
      <div>
        <br />
        <hr />
        <br />
        <Heading as="h4" size="md">
          Actions:
        </Heading>
        {data.actions.length && (
          <>
            <br />
            <ul>
              {data.actions.map(
                ({ name, desc }: { name: string; desc: string }, i: number) => {
                  return (
                    <li key={`monster-action-${i}`}>
                      <span>
                        Name: <b>{name}</b>
                      </span>
                      <br></br>
                      <span>
                        Description: <i>{desc}</i>
                      </span>
                      <br />
                      <br />
                    </li>
                  );
                }
              )}
            </ul>
          </>
        )}
      </div>
    </GridItem>
  );
}

export default AdditionalInfo;
