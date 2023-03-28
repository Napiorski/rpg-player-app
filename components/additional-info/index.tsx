import { GridItem, Heading } from "@chakra-ui/react";
import * as React from "react";

type AdditionalInfoProps = {
  data: any;
};

function AdditionalInfo({ data }: AdditionalInfoProps) {
  return (
    <GridItem colSpan={8}>
      <div>HP: {data.hit_points}</div>
      <div>Difficulty: {data.challenge_rating}</div>
      <div>XP: {data.xp}</div>
      <div>Walk Speed: {data.speed.walk}</div>
      <div>Swim Speed: {data.speed.swim}</div>
      <div>Fly Speed: {data.speed.fly}</div>
      <div>STR: {data.strength}</div>
      <div>DEX: {data.dexterity}</div>
      <div>CON: {data.constitution}</div>
      <div>INT: {data.intelligence}</div>
      <div>WIS: {data.wisdom}</div>
      <div>CHA: {data.charisma}</div>
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
