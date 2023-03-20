type MonsterType = {
  _id?: string;
  index: string;
  name: string;
  size: string;
  type: string;
  subtype?: string;
  forms?: object[];
  reactions?: object[];
  alignment: string;
  proficiencies: {
    value: number;
    proficiency: { index: string; name: string; url: string };
  }[];
  armor_class: {
    type: string;
    value: number;
  }[];
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  speed: object;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  damage_vulnerabilities?: string[];
  damage_resistances?: string[];
  damage_immunities?: string[];
  condition_immunities?: object[];
  senses?: object;
  languages: string;
  challenge_rating: number;
  xp: number;
  special_abilities?: object[];
  actions: object[];
  legendary_actions?: object[];
  image?: string;
  url: string;
};

export default MonsterType;
