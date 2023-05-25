import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/components/atoms/Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};
