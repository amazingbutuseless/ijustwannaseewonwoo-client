import { ComponentMeta, ComponentStory } from '@storybook/react';

import PreviewSceneForm from './preview-scene-form';

export default {
  title: 'Organisms/PreviewSceneForm',
  component: PreviewSceneForm,
} as ComponentMeta<typeof PreviewSceneForm>;

const Template: ComponentStory<typeof PreviewSceneForm> = (args) => (
  <PreviewSceneForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultValues: {
    startTime: 347,
    endTime: 593,
  },
  onSubmit: (data) => {
    console.log(data);
  },
};
