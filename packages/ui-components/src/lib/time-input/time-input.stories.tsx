import { ComponentMeta, ComponentStory } from '@storybook/react';
import TimeInput from './time-input';

export default {
  title: 'Molecules/TimeInput',
  components: TimeInput,
} as ComponentMeta<typeof TimeInput>;

const Template: ComponentStory<typeof TimeInput> = (args) => (
  <TimeInput {...args} />
);

function timeControl({ time }: { time: number }) {
  return {
    timeInSeconds: time,
    onChange: timeControl,
  };
}

export const Default = Template.bind({});
Default.args = {
  id: 'testTime',
  label: '시작 시간',
  ...timeControl({ time: 180 }),
};
