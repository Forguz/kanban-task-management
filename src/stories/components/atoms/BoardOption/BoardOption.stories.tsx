import { Meta, StoryObj } from '@storybook/react';
import { BoardOption } from '@/components/atoms/BoardOption';

const meta: Meta<typeof BoardOption> = {
  title: 'Atoms/BoardOption',
  component: BoardOption,
};

export default meta;

type Story = StoryObj<typeof BoardOption>;
export const Default: Story = {
  args: {
    boardName: 'BoardName',
    groupName: 'GroupName',
    isChecked: true,
  },
};
