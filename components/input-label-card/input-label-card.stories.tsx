import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { InputLabelCard } from ".";

export default {
  title: "Components/InputLabelCard",
  component: InputLabelCard,
  parameters: {
    componentSubtitle: "Hero InputLabelCard",
  },
  argTypes: {
    title: {
      description: "The InputLabelCard story",
    },
    quantifier: {
      description: "Hero badge quantifier",
    },
  },
} as ComponentMeta<typeof InputLabelCard>;

export const InputLabelCardStory: ComponentStory<typeof InputLabelCard> = (
  args
) => {
  return <InputLabelCard {...args} />;
};

InputLabelCardStory.args = {
  label: "INSPIRATION",
};
