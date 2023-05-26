import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/atoms/Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NoLabel: Story = {
  args: {
    placeholder: 'e.g. Take coffee break',
    name: 'Title',
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'E.g. Take coffee break',
    name: 'Title',
    label: 'Title',
  },
};
