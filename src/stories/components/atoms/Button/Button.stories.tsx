import type { Meta, StoryObj } from '@storybook/react';
import { GoPlus } from 'react-icons/go';

import { Button } from '@/components/atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const buttonText = '+ Add New Column';
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: buttonText,
    disabled: false,
    light: false,
    ariaLabel: 'Primary-Button',
    onClick: () => {
      console.log('clicked');
    },
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
    light: false,
    Icon: GoPlus,
    ariaLabel: 'Icon-Button',
    onClick: () => {
      console.log('Icon Button click');
    },
  },
};
