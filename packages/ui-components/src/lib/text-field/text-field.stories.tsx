import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './text-field';

export default {
  title: 'Atoms/TextField',
  component: TextField,
  argTypes: {
    invalid: { control: 'boolean' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type something...',
};
