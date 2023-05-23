import type { Meta, StoryObj } from '@storybook/react';
import { GoPlus } from 'react-icons/go';

import { Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const buttonText = '+ Add New Column';
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: buttonText,
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    label: buttonText,
    light: true,
  },
};

export const Disabled: Story = {
  args: {
    label: buttonText,
    disabled: true,
  },
};

export const IconButton: Story = {
  args: {
    label: '',
    disabled: false,
    Icon: GoPlus,
  },
};
