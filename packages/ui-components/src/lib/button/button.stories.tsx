import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CSSProperties } from 'react';
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

const Template: ComponentStory<typeof Button> = (args) => (
  <div
    style={
      {
        '--button-s-padding': '0 1.2rem',
        '--button-s-height': '2.4rem',
        '--button-s-font-size': '1.2rem',
        '--button-m-padding': '0 1.6rem',
        '--button-m-height': '3.6rem',
        '--button-m-font-size': '1.2rem',
        '--button-l-padding': '0 2.4rem',
        '--button-l-height': '4.8rem',
        '--button-l-font-size': '2rem',
        '--button-default-outline-color': 'red',
        '--button-default-bg-color': '#000',
        '--button-default-font-color': '#fff',
        '--button-primary-bg-color': 'purple',
        '--button-primary-font-color': 'yellow',
        '--button-secondary-bg-color': 'blue',
        '--button-secondary-font-color': 'orange',
      } as CSSProperties
    }
  >
    <Button {...args} />
  </div>
);

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
