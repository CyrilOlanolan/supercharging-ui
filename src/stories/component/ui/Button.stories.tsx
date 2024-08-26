import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "success", "destructive"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type StoryType = StoryObj<typeof Button>;

export const Default: StoryType = {
  name: "Default Button",
  args: {
    variant: "default",
    text: "Click me",
    className: "im-a-custom-classname",
  },
  render: (args) => <Button {...args} />,
};

export const Success: StoryType = {
  name: "Success Button",
  args: {
    variant: "success",
    text: "Success button",
    hasSubline: true,
  },
  render: (args) => <Button {...args} />,
};
