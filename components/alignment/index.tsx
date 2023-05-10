import React from "react";

type Alignment =
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
  value: Alignment;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AlignmentSelect: React.FC<AlignmentSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Alignment</option>
      <option value="Lawful Good">Lawful Good</option>
      <option value="Lawful Neutral">Lawful Neutral</option>
      <option value="Lawful Evil">Lawful Evil</option>
      <option value="Neutral Good">Neutral Good</option>
      <option value="True Neutral">True Neutral</option>
      <option value="Neutral Evil">Neutral Evil</option>
      <option value="Chaotic Good">Chaotic Good</option>
      <option value="Chaotic Neutral">Chaotic Neutral</option>
      <option value="Chaotic Evil">Chaotic Evil</option>
      <option value="Lawful Jerk">Lawful Jerk</option>
      <option value="Chaotic Stupid">Chaotic Stupid</option>
      <option value="Neutral Wuss">Neutral Wuss</option>
    </select>
  );
};

export default AlignmentSelect;
