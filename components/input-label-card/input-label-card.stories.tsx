import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { InputLabelCard } from ".";

export default {
  title: "Components/StatCard",
  component: InputLabelCard,
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
} as ComponentMeta<typeof InputLabelCard>;

export const StatCardStory: ComponentStory<typeof InputLabelCard> = (args) => {
  return <InputLabelCard {...args} />;
};

StatCardStory.args = {
  title: "STR",
  quantifier: 6,
};
