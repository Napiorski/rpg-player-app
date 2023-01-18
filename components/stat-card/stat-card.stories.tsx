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
        "Give us a title (string) for other stat card. For example Strength could be STR.",
    },
    quantifier: {
      description: "Hero badge quantifier",
    },
  },
} as ComponentMeta<typeof StatCard>;

export const StatCardStory: ComponentStory<typeof StatCard> = (args) => {
  return <StatCard {...args} />;
};

StatCardStory.args = {
  title: "STR",
};
