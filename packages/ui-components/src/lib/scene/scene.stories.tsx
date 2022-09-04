import { ComponentMeta, ComponentStory } from '@storybook/react';
import Scene, { SceneProps } from './scene';

export default {
  title: 'Atoms/Scene',
  component: Scene,
} as ComponentMeta<typeof Scene>;

const Template: ComponentStory<typeof Scene> = (args) => <Scene {...args} />;

const onPlay: SceneProps['onPlay'] = (data) => {
  console.log({ ...data });
};

export const Default = Template.bind({});
Default.args = {
  videoId: 'testVid',
  startTime: 430,
  endTime: 487,
  onPlay,
  thumbnailUrl:
    'https://ijustwannaseewonwoo-training-set.s3.ap-northeast-2.amazonaws.com/public/thumbnail/YyX0OYD5dfA--210.jpg',
};
