import { Flex, Select } from "@chakra-ui/react";
import { Warning } from "components/warning";
import { CharacterSheetInputs } from "pages/character";
import React from "react";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

export type AlignmentOptions =
  | "Neutral"
  | "Lawful Good"
  | "Lawful Neutral"
  | "Lawful Evil"
  | "Neutral Good"
  | "True Neutral"
  | "Neutral Evil"
  | "Chaotic Good"
  | "Chaotic Neutral"
  | "Chaotic Evil"
  | "Lawful Jerk"
  | "Chaotic Stupid"
  | "Neutral Wuss";

interface AlignmentSelectProps {
  defaultValue?: AlignmentOptions;
  registerId: string;
  register: UseFormRegister<CharacterSheetInputs>;
  errors?: Partial<FieldErrorsImpl<CharacterSheetInputs>>;
}

const Alignment: React.FC<AlignmentSelectProps> = ({
  defaultValue,
  registerId,
  register,
  errors,
}) => {
  return (
    <>
      <Flex pl={"10px"} mb={"10px"}>
        {errors && errors[registerId] && (
          <Warning>* This field is required</Warning>
        )}
      </Flex>
      <Select
        defaultValue={defaultValue}
        {...register(registerId, { required: true })}
      >
        <option value="">Alignment</option>
        <option value="Lawful Good">Lawful Good</option>
        <option value="Lawful Neutral">Lawful Neutral</option>
        <option value="Lawful Evil">Lawful Evil</option>
        <option value="Neutral">Neutral</option>
        <option value="Neutral Good">Neutral Good</option>
        <option value="True Neutral">True Neutral</option>
        <option value="Neutral Evil">Neutral Evil</option>
        <option value="Chaotic Good">Chaotic Good</option>
        <option value="Chaotic Neutral">Chaotic Neutral</option>
        <option value="Chaotic Evil">Chaotic Evil</option>
        <option value="Lawful Jerk">Lawful Jerk</option>
        <option value="Chaotic Stupid">Chaotic Stupid</option>
        <option value="Neutral Wuss">Neutral Wuss</option>
      </Select>
    </>
  );
};

export default Alignment;
