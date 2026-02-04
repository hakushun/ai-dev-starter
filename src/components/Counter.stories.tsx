import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "jotai";
import { createStore } from "jotai";
import { Counter } from "./Counter";

const meta = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={createStore()}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
