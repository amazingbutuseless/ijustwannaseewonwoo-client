import { ComponentMeta, ComponentStory } from '@storybook/react';

import Logo from './logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    direction: { control: 'select', options: ['column', 'row'] },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  $size: 'l',
};
