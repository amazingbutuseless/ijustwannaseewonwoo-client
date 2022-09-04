import { ComponentMeta, ComponentStory } from '@storybook/react';

import InfoPanel from './info-panel';

export default {
  title: 'Atoms/InfoPanel',
  component: InfoPanel,
  args: {
    children: 'This is an info panel',
  },
  argTypes: {
    withIcon: { control: 'boolean' },
    $type: {
      contol: 'select',
      options: ['default', 'info', 'warning', 'danger'],
    },
  },
} as ComponentMeta<typeof InfoPanel>;

const Template: ComponentStory<typeof InfoPanel> = (args) => (
  <InfoPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  $type: 'default',
};

export const Info = Template.bind({});
Info.args = {
  $type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  $type: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  $type: 'danger',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  $type: 'default',
  title: 'This is an important note',
};

export const WithNoIcon = Template.bind({});
WithNoIcon.args = {
  $type: 'default',
  withIcon: false,
};
