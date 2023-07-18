import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Select } from '@/components/molecules/Select';

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs<typeof ctx.args>();

      function handleSelect(option: string) {
        if (typeof ctx.args.selectedOption !== 'undefined') {
          setArgs({ selectedOption: option });
        }
      }

      return (
        <div style={{ width: '400px' }}>
          <Story args={{ ...ctx.args, onSelect: handleSelect }} />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    options: ['Todo', 'Doing', 'Done'],
    selectedOption: 'Todo',
    onSelect(option) {
      console.log(option);
    },
  },
};
