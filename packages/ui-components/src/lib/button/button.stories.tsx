import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Click me!',
  },
  argTypes: {
    $theme: { control: 'select', options: ['default', 'primary', 'secondary'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
    outlined: { control: 'boolean' },
    inline: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  $theme: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  $theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  $theme: 'secondary',
};
