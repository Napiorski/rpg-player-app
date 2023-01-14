import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { CheckboxGroupCard } from ".";

export default {
  title: "Components/CheckboxGroupCard",
  component: CheckboxGroupCard,
  parameters: {
    componentSubtitle: "Hero CheckboxGroupCard",
  },
  argTypes: {
    title: {
      description: "The CheckboxGroupCard story",
    },
  },
} as ComponentMeta<typeof CheckboxGroupCard>;

export const CheckboxGroupCardStory: ComponentStory<typeof CheckboxGroupCard> =
  (args) => {
    return <CheckboxGroupCard {...args} />;
  };

CheckboxGroupCardStory.args = {
  label: "Strength",
};
