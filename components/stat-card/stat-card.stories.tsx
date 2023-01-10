import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { StatCard } from ".";

export default {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    componentSubtitle: "Hero StatCard",
  },
  argTypes: {
    title: {
      description:
        "Give us a title (string) for othe stat card. For example Strength could be STR.",
    },
    quantifier: {
      description: "Hero badge quantifier",
    },
  },
} as ComponentMeta<typeof StatCard>;

// : ComponentStory<typeof StatCard> 
export const StatCardStory = () => {
  const attributes = ['STR', 'DEX', 'CON', 'WIS', 'CHA']
  return attributes.map((attr, i) => <StatCard key={`attribute-${i}`} title={attr}/>);
};
