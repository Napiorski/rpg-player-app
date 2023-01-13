import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { RadioGroupCard } from ".";

export default {
  title: "Components/RadioGroupCard",
  component: RadioGroupCard,
  parameters: {
    componentSubtitle: "Hero RadioGroupCard",
  },
  argTypes: {
    title: {
      description: "The RadioGroupCard story",
    },
  },
} as ComponentMeta<typeof RadioGroupCard>;

export const RadioGroupCardStory: ComponentStory<typeof RadioGroupCard> = (
  args
) => {
  return <RadioGroupCard {...args} />;
};

RadioGroupCardStory.args = {
  label: "Strength",
};
