import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/components/atoms/Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cardTitle: 'Build UI for onboarding flow',
    subtasks: '0 of 3 substasks',
  },
};
