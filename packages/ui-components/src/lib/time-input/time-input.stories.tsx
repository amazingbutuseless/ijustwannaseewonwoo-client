import { ComponentMeta, ComponentStory } from '@storybook/react';
import TimeInput from './time-input';

export default {
  title: 'TimeInput',
  components: TimeInput,
} as ComponentMeta<typeof TimeInput>;

const Template: ComponentStory<typeof TimeInput> = (args) => (
  <TimeInput {...args} />
);

function timeControl(updatedTimeInSeconds: number) {
  return {
    timeInSeconds: updatedTimeInSeconds,
    onChange: timeControl,
  };
}

export const Default = Template.bind({});
Default.args = {
  label: '시작 시간',
  ...timeControl(180),
};
