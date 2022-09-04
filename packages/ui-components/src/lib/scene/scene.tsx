import styled from '@emotion/styled';
import { Scene as SceneType } from '@ijustwannaseewonwoo-client/types';
import {
  formatSecondsToDuration,
  formatSecondsToMmss,
} from '@ijustwannaseewonwoo-client/util-format';
import React from 'react';
import { useCallback } from 'react';

export interface SceneProps extends SceneType {
  videoId: string;
  onPlay: ({
    videoId,
    startTime,
    endTime,
  }: Omit<SceneType, 'id' | 'thumbnailUrl'> & { videoId: string }) => void;
  selected?: boolean;
}

const Details = styled.div`
  font-size: var(--typography-body-font-size-s);
  color: var(--typography-body-color-light);

  strong {
    display: block;
    margin-bottom: 0.4rem;
    color: var(--typography-body-color);
  }
`;

const StyledScene = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    display: inline-block;
    margin-right: 0.8rem;
    width: 120px;
    height: auto;
    max-height: 90px;
  }
`;

const Wrapper = styled.div`
  position: relative;

  input {
    display: none;

    :checked ~ ${StyledScene} {
      strong {
        color: var(--theme-color-primary);
      }

      ::after {
        position: absolute;
        top: 50%;
        right: 0;
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
        background-color: var(--theme-color-primary);
        transform: translateY(-50%);
        content: '';
      }
    }
  }
`;

export const Scene = React.forwardRef<HTMLInputElement, SceneProps>(
  (
    { thumbnailUrl, startTime, endTime, videoId, selected = false, onPlay },
    ref
  ) => {
    const sceneId = `${videoId}:scene:${startTime}`;

    const humanReadableStartTime = formatSecondsToMmss(startTime);

    const handlePlay: React.ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        if (!e.currentTarget.checked) {
          return;
        }
        onPlay({ videoId, startTime, endTime });
      },
      [videoId, startTime, endTime, onPlay]
    );

    return (
      <Wrapper>
        <input
          id={sceneId}
          type="radio"
          name={`${videoId}:scene`}
          value={sceneId}
          defaultChecked={selected}
          aria-labelledby={sceneId}
          onChange={handlePlay}
          ref={ref}
        />
        <StyledScene
          htmlFor={sceneId}
          aria-label={`${humanReadableStartTime}부터 재생`}
        >
          <img src={thumbnailUrl} alt="" />
          <Details>
            <strong>{humanReadableStartTime}</strong>
            {formatSecondsToDuration(endTime - startTime)}
          </Details>
        </StyledScene>
      </Wrapper>
    );
  }
);

export default Scene;
