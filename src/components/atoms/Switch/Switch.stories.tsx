import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Switch> = {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs<typeof ctx.args>();

      function handleToggle() {
        if (typeof ctx.args.isOn !== 'undefined') {
          setArgs({ isOn: !ctx.args.isOn });
        }
      }

      return <Story args={{ ...ctx.args, handleToggle }} />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Switch>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isOn: false,
  },
};
