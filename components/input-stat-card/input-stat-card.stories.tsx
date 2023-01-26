import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { InputStatCard } from ".";

export default {
  title: "Components/InputStatCard",
  component: InputStatCard,
  parameters: {
    componentSubtitle: "Hero InputStatCard",
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
} as ComponentMeta<typeof InputStatCard>;

export const InputStatCardStory: ComponentStory<typeof InputStatCard> = (args) => {
  return <InputStatCard {...args} />;
};

InputStatCardStory.args = {
  title: "STR",
};
