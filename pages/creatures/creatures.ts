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

export const creatures2: MonsterType[] = [
  {
    index: "aboleth",
    name: "Aboleth",
    size: "Large",
    type: "aberration",
    alignment: "lawful evil",
    armor_class: [
      {
        type: "natural",
        value: 17,
      },
    ],
    hit_points: 135,
    hit_dice: "18d10",
    hit_points_roll: "18d10+36",
    speed: {
      walk: "10 ft.",
      swim: "40 ft.",
    } as object,
    strength: 21,
    dexterity: 9,
    constitution: 15,
    intelligence: 18,
    wisdom: 15,
    charisma: 18,
    proficiencies: [
      {
        value: 6,
        proficiency: {
          index: "saving-throw-con",
          name: "Saving Throw: CON",
          url: "/api/proficiencies/saving-throw-con",
        },
      },
      {
        value: 8,
        proficiency: {
          index: "saving-throw-int",
          name: "Saving Throw: INT",
          url: "/api/proficiencies/saving-throw-int",
        },
      },
      {
        value: 6,
        proficiency: {
          index: "saving-throw-wis",
          name: "Saving Throw: WIS",
          url: "/api/proficiencies/saving-throw-wis",
        },
      },
      {
        value: 12,
        proficiency: {
          index: "skill-history",
          name: "Skill: History",
          url: "/api/proficiencies/skill-history",
        },
      },
      {
        value: 10,
        proficiency: {
          index: "skill-perception",
          name: "Skill: Perception",
          url: "/api/proficiencies/skill-perception",
        },
      },
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: {
      darkvision: "120 ft.",
      passive_perception: 20,
    },
    languages: "Deep Speech, telepathy 120 ft.",
    challenge_rating: 10,
    xp: 5900,
    special_abilities: [
      {
        name: "Amphibious",
        desc: "The aboleth can breathe air and water.",
      },
      {
        name: "Mucous Cloud",
        desc: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
        dc: {
          dc_type: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          dc_value: 14,
          success_type: "none",
        },
      },
      {
        name: "Probing Telepathy",
        desc: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        multiattack_type: "actions",
        desc: "The aboleth makes three tentacle attacks.",
        actions: [
          {
            action_name: "Tentacle",
            count: 3,
            type: "melee",
          },
        ],
      },
      {
        name: "Tentacle",
        desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
        attack_bonus: 9,
        dc: {
          dc_type: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          dc_value: 14,
          success_type: "none",
        },
        damage: [
          {
            damage_type: {
              index: "bludgeoning",
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning",
            },
            damage_dice: "2d6+5",
          },
          {
            damage_type: {
              index: "acid",
              name: "Acid",
              url: "/api/damage-types/acid",
            },
            damage_dice: "1d12",
          },
        ],
        actions: [],
      },
      {
        name: "Tail",
        desc: "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
        attack_bonus: 9,
        damage: [
          {
            damage_type: {
              index: "bludgeoning",
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning",
            },
            damage_dice: "3d6+5",
          },
        ],
        actions: [],
      },
      {
        name: "Enslave",
        desc: "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
        usage: {
          type: "per day",
          times: 3,
        },
        dc: {
          dc_type: {
            index: "wis",
            name: "WIS",
            url: "/api/ability-scores/wis",
          },
          dc_value: 14,
          success_type: "none",
        },
        actions: [],
      },
    ],
    legendary_actions: [
      {
        name: "Detect",
        desc: "The aboleth makes a Wisdom (Perception) check.",
      },
      {
        name: "Tail Swipe",
        desc: "The aboleth makes one tail attack.",
      },
      {
        name: "Psychic Drain (Costs 2 Actions)",
        desc: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
        attack_bonus: 0,
        damage: [
          {
            damage_type: {
              index: "psychic",
              name: "Psychic",
              url: "/api/damage-types/psychic",
            },
            damage_dice: "3d6",
          },
        ],
      },
    ],
    image: "/api/images/monsters/aboleth.png",
    url: "/api/monsters/aboleth",
  },
  {
    index: "adult-black-dragon",
    name: "Adult Black Dragon",
    size: "Huge",
    type: "dragon",
    alignment: "chaotic evil",
    armor_class: [
      {
        type: "natural",
        value: 19,
      },
    ],
    hit_points: 195,
    hit_dice: "17d12",
    hit_points_roll: "17d12+85",
    speed: {
      walk: "40 ft.",
      fly: "80 ft.",
      swim: "40 ft.",
    },
    strength: 23,
    dexterity: 14,
    constitution: 21,
    intelligence: 14,
    wisdom: 13,
    charisma: 17,
    proficiencies: [
      {
        value: 7,
        proficiency: {
          index: "saving-throw-dex",
          name: "Saving Throw: DEX",
          url: "/api/proficiencies/saving-throw-dex",
        },
      },
      {
        value: 10,
        proficiency: {
          index: "saving-throw-con",
          name: "Saving Throw: CON",
          url: "/api/proficiencies/saving-throw-con",
        },
      },
      {
        value: 6,
        proficiency: {
          index: "saving-throw-wis",
          name: "Saving Throw: WIS",
          url: "/api/proficiencies/saving-throw-wis",
        },
      },
      {
        value: 8,
        proficiency: {
          index: "saving-throw-cha",
          name: "Saving Throw: CHA",
          url: "/api/proficiencies/saving-throw-cha",
        },
      },
      {
        value: 11,
        proficiency: {
          index: "skill-perception",
          name: "Skill: Perception",
          url: "/api/proficiencies/skill-perception",
        },
      },
      {
        value: 7,
        proficiency: {
          index: "skill-stealth",
          name: "Skill: Stealth",
          url: "/api/proficiencies/skill-stealth",
        },
      },
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: ["acid"],
    condition_immunities: [],
    senses: {
      blindsight: "60 ft.",
      darkvision: "120 ft.",
      passive_perception: 21,
    },
    languages: "Common, Draconic",
    challenge_rating: 14,
    xp: 11500,
    special_abilities: [
      {
        name: "Amphibious",
        desc: "The dragon can breathe air and water.",
      },
      {
        name: "Legendary Resistance",
        desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
        usage: {
          type: "per day",
          times: 3,
          rest_types: [],
        },
      },
    ],
    actions: [
      {
        name: "Multiattack",
        multiattack_type: "actions",
        desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        actions: [
          {
            action_name: "Frightful Presence",
            count: 1,
            type: "ability",
          },
          {
            action_name: "Bite",
            count: 1,
            type: "melee",
          },
          {
            action_name: "Claw",
            count: 2,
            type: "melee",
          },
        ],
      },
      {
        name: "Bite",
        desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
        attack_bonus: 11,
        damage: [
          {
            damage_type: {
              index: "piercing",
              name: "Piercing",
              url: "/api/damage-types/piercing",
            },
            damage_dice: "2d10+6",
          },
          {
            damage_type: {
              index: "acid",
              name: "Acid",
              url: "/api/damage-types/acid",
            },
            damage_dice: "1d8",
          },
        ],
        actions: [],
      },
      {
        name: "Claw",
        desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        attack_bonus: 11,
        damage: [
          {
            damage_type: {
              index: "slashing",
              name: "Slashing",
              url: "/api/damage-types/slashing",
            },
            damage_dice: "2d6+6",
          },
        ],
        actions: [],
      },
      {
        name: "Tail",
        desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        attack_bonus: 11,
        damage: [
          {
            damage_type: {
              index: "bludgeoning",
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning",
            },
            damage_dice: "2d8+6",
          },
        ],
        actions: [],
      },
      {
        name: "Frightful Presence",
        desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        dc: {
          dc_type: {
            index: "wis",
            name: "WIS",
            url: "/api/ability-scores/wis",
          },
          dc_value: 16,
          success_type: "none",
        },
        actions: [],
      },
      {
        name: "Acid Breath",
        desc: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
        usage: {
          type: "recharge on roll",
          dice: "1d6",
          min_value: 5,
        },
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          dc_value: 18,
          success_type: "half",
        },
        damage: [
          {
            damage_type: {
              index: "acid",
              name: "Acid",
              url: "/api/damage-types/acid",
            },
            damage_dice: "12d8",
          },
        ],
        actions: [],
      },
    ],
    legendary_actions: [
      {
        name: "Detect",
        desc: "The dragon makes a Wisdom (Perception) check.",
      },
      {
        name: "Tail Attack",
        desc: "The dragon makes a tail attack.",
      },
      {
        name: "Wing Attack (Costs 2 Actions)",
        desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        dc: {
          dc_type: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          dc_value: 19,
          success_type: "none",
        },
        damage: [
          {
            damage_type: {
              index: "bludgeoning",
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning",
            },
            damage_dice: "2d6+6",
          },
        ],
      },
    ],
    image: "/api/images/monsters/adult-black-dragon.png",
    url: "/api/monsters/adult-black-dragon",
  },
  {
    index: "lich",
    name: "Lich",
    size: "Medium",
    type: "undead",
    alignment: "any evil alignment",
    armor_class: [
      {
        type: "natural",
        value: 17,
      },
    ],
    hit_points: 135,
    hit_dice: "18d8",
    hit_points_roll: "18d8+54",
    speed: {
      walk: "30 ft.",
    },
    strength: 11,
    dexterity: 16,
    constitution: 16,
    intelligence: 20,
    wisdom: 14,
    charisma: 16,
    proficiencies: [
      {
        value: 10,
        proficiency: {
          index: "saving-throw-con",
          name: "Saving Throw: CON",
          url: "/api/proficiencies/saving-throw-con",
        },
      },
      {
        value: 12,
        proficiency: {
          index: "saving-throw-int",
          name: "Saving Throw: INT",
          url: "/api/proficiencies/saving-throw-int",
        },
      },
      {
        value: 9,
        proficiency: {
          index: "saving-throw-wis",
          name: "Saving Throw: WIS",
          url: "/api/proficiencies/saving-throw-wis",
        },
      },
      {
        value: 18,
        proficiency: {
          index: "skill-arcana",
          name: "Skill: Arcana",
          url: "/api/proficiencies/skill-arcana",
        },
      },
      {
        value: 12,
        proficiency: {
          index: "skill-history",
          name: "Skill: History",
          url: "/api/proficiencies/skill-history",
        },
      },
      {
        value: 9,
        proficiency: {
          index: "skill-insight",
          name: "Skill: Insight",
          url: "/api/proficiencies/skill-insight",
        },
      },
      {
        value: 9,
        proficiency: {
          index: "skill-perception",
          name: "Skill: Perception",
          url: "/api/proficiencies/skill-perception",
        },
      },
    ],
    damage_vulnerabilities: [],
    damage_resistances: ["cold", "lightning", "necrotic"],
    damage_immunities: [
      "poison",
      "bludgeoning, piercing, and slashing from nonmagical weapons",
    ],
    condition_immunities: [
      {
        index: "charmed",
        name: "Charmed",
        url: "/api/conditions/charmed",
      },
      {
        index: "exhaustion",
        name: "Exhaustion",
        url: "/api/conditions/exhaustion",
      },
      {
        index: "frightened",
        name: "Frightened",
        url: "/api/conditions/frightened",
      },
      {
        index: "paralyzed",
        name: "Paralyzed",
        url: "/api/conditions/paralyzed",
      },
      {
        index: "poisoned",
        name: "Poisoned",
        url: "/api/conditions/poisoned",
      },
    ],
    senses: {
      truesight: "120 ft.",
      passive_perception: 19,
    },
    languages: "Common plus up to five other languages",
    challenge_rating: 21,
    xp: 33000,
    special_abilities: [
      {
        name: "Legendary Resistance",
        desc: "If the lich fails a saving throw, it can choose to succeed instead.",
        usage: {
          type: "per day",
          times: 3,
          rest_types: [],
        },
      },
      {
        name: "Rejuvenation",
        desc: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.",
      },
      {
        name: "Spellcasting",
        desc: "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:\n\n- Cantrips (at will): mage hand, prestidigitation, ray of frost\n- 1st level (4 slots): detect magic, magic missile, shield, thunderwave\n- 2nd level (3 slots): acid arrow, detect thoughts, invisibility, mirror image\n- 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball\n- 4th level (3 slots): blight, dimension door\n- 5th level (3 slots): cloudkill, scrying\n- 6th level (1 slot): disintegrate, globe of invulnerability\n- 7th level (1 slot): finger of death, plane shift\n- 8th level (1 slot): dominate monster, power word stun\n- 9th level (1 slot): power word kill",
        spellcasting: {
          level: 18,
          ability: {
            index: "int",
            name: "INT",
            url: "/api/ability-scores/int",
          },
          dc: 20,
          modifier: 12,
          components_required: ["V", "S", "M"],
          school: "wizard",
          slots: {
            "1": 4,
            "2": 3,
            "3": 3,
            "4": 3,
            "5": 3,
            "6": 1,
            "7": 1,
            "8": 1,
            "9": 1,
          },
          spells: [
            {
              name: "Mage Hand",
              level: 0,
              url: "/api/spells/mage-hand",
            },
            {
              name: "Prestidigitation",
              level: 0,
              url: "/api/spells/prestidigitation",
            },
            {
              name: "Ray of Frost",
              level: 0,
              url: "/api/spells/ray-of-frost",
            },
            {
              name: "Detect Magic",
              level: 1,
              url: "/api/spells/detect-magic",
            },
            {
              name: "Magic Missile",
              level: 1,
              url: "/api/spells/magic-missile",
            },
            {
              name: "Shield",
              level: 1,
              url: "/api/spells/shield",
            },
            {
              name: "Thunderwave",
              level: 1,
              url: "/api/spells/thunderwave",
            },
            {
              name: "Acid Arrow",
              level: 2,
              url: "/api/spells/acid-arrow",
            },
            {
              name: "Detect Thoughts",
              level: 2,
              url: "/api/spells/detect-thoughts",
            },
            {
              name: "Invisibility",
              level: 2,
              url: "/api/spells/invisibility",
            },
            {
              name: "Mirror Image",
              level: 2,
              url: "/api/spells/mirror-image",
            },
            {
              name: "Animate Dead",
              level: 3,
              url: "/api/spells/animate-dead",
            },
            {
              name: "Counterspell",
              level: 3,
              url: "/api/spells/counterspell",
            },
            {
              name: "Dispel Magic",
              level: 3,
              url: "/api/spells/dispel-magic",
            },
            {
              name: "Fireball",
              level: 3,
              url: "/api/spells/fireball",
            },
            {
              name: "Blight",
              level: 4,
              url: "/api/spells/blight",
            },
            {
              name: "Dimension Door",
              level: 4,
              url: "/api/spells/dimension-door",
            },
            {
              name: "Cloudkill",
              level: 5,
              url: "/api/spells/cloudkill",
            },
            {
              name: "Scrying",
              level: 5,
              url: "/api/spells/scrying",
            },
            {
              name: "Disintegrate",
              level: 6,
              url: "/api/spells/disintegrate",
            },
            {
              name: "Globe of Invulnerability",
              level: 6,
              url: "/api/spells/globe-of-invulnerability",
            },
            {
              name: "Finger of Death",
              level: 7,
              url: "/api/spells/finger-of-death",
            },
            {
              name: "Plane Shift",
              level: 7,
              url: "/api/spells/plane-shift",
            },
            {
              name: "Dominate Monster",
              level: 8,
              url: "/api/spells/dominate-monster",
            },
            {
              name: "Power Word Stun",
              level: 8,
              url: "/api/spells/power-word-stun",
            },
            {
              name: "Power Word Kill",
              level: 9,
              url: "/api/spells/power-word-kill",
            },
          ],
        },
      },
      {
        name: "Turn Resistance",
        desc: "The lich has advantage on saving throws against any effect that turns undead.",
      },
    ],
    actions: [
      {
        name: "Paralyzing Touch",
        desc: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        attack_bonus: 12,
        damage: [
          {
            damage_type: {
              index: "cold",
              name: "Cold",
              url: "/api/damage-types/cold",
            },
            damage_dice: "3d6",
          },
        ],
        actions: [],
      },
    ],
    legendary_actions: [
      {
        name: "Cantrip",
        desc: "The lich casts a cantrip.",
      },
      {
        name: "Paralyzing Touch (Costs 2 Actions)",
        desc: "The lich uses its Paralyzing Touch.",
      },
      {
        name: "Frightening Gaze (Costs 2 Actions)",
        desc: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.",
        dc: {
          dc_type: {
            index: "wis",
            name: "WIS",
            url: "/api/ability-scores/wis",
          },
          dc_value: 18,
          success_type: "none",
        },
      },
      {
        name: "Disrupt Life (Costs 3 Actions)",
        desc: "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.",
        dc: {
          dc_type: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          dc_value: 18,
          success_type: "none",
        },
        damage: [
          {
            damage_type: {
              index: "necrotic",
              name: "Necrotic",
              url: "/api/damage-types/necrotic",
            },
            damage_dice: "6d6",
          },
        ],
      },
    ],
    url: "/api/monsters/lich",
  },
];

export const creatures = [
  {
    name: "Bat",
    challengerating: "0",
    type: "Beast",
    size: "Tiny",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "None",
  },

  {
    name: "Raven",
    challengerating: "0",
    type: "Beast",
    size: "Tiny",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "Hill,Swamp,Urban",
  },

  {
    name: "Rat",
    challengerating: "0",
    type: "Beast",
    size: "Tiny",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "Swamp,Urban",
  },

  {
    name: "Scorpion",
    challengerating: "0",
    type: "Beast",
    size: "Tiny",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "Desert",
  },

  {
    name: "Seal",
    challengerating: "0",
    type: "Beast",
    size: "Medium",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "None",
  },
  {
    name: "Badger",
    challengerating: "0",
    type: "Beast",
    size: "Tiny",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "Forest",
  },
  {
    name: "Sheep",
    challengerating: "0",
    type: "Beast",
    size: "Small",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "Grassland,Hill,Urban,Mountain",
  },
  {
    name: "Spider",
    challengerating: "0",
    type: "Beast",
    size: "Medium",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "None",
  },
  {
    name: "Cat",
    challengerating: "0",
    type: "Beast",
    size: "Tiny",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "Desert,Forest,Grassland,Urban",
  },
  {
    name: "Crab",
    challengerating: "0",
    type: "Beast",
    size: "Tiny",
    alignment: "Unaligned",
    creature: "Misc Creature",
    environment: "Coastal",
  },
];
