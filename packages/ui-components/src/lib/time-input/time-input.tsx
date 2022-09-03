import styled from '@emotion/styled';
import { useCallback } from 'react';

export interface TimeInputProps {
  label?: string;
  id: string;
  timeInSeconds: number;
  onChange: (time: number) => void;
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
    color: var(--theme-color-form-label, #666);
  }
`;

const StyledTimeInput = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  input {
    display: inline-block;
    padding: 0.6rem 0.8rem;
    width: 100%;
    height: 100%;
    border: 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    text-align: center;

    :focus {
      outline: none;
    }
  }

  div {
    position: relative;
    width: 3.6rem;
    overflow: hidden;

    ::after {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.2rem;
      transform: translate(-100%, 100%);
      background-color: var(--theme-color-primary, #000);
      content: '';
      transition: transform 0.2s;
    }

    :focus-within {
      ::after {
        transform: translate(0, 0);
      }
    }
  }
`;

export function TimeInput({
  label,
  id,
  timeInSeconds,
  onChange,
}: TimeInputProps) {
  const currentMinutes = Math.floor(timeInSeconds / 60);
  const currentSeconds = timeInSeconds % 60;

  const handleMinutesChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        onChange(Number(e.currentTarget.value) * 60 + currentSeconds);
      },
      [currentSeconds, onChange]
    );

  const handleSecondsChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        onChange(currentMinutes * 60 + Number(e.currentTarget.value));
      },
      [currentMinutes, onChange]
    );

  return (
    <Wrapper>
      {label && <label htmlFor={`${id}:minutes`}>{label}</label>}

      <StyledTimeInput>
        <div>
          <input
            type="text"
            name={`${id}:minutes`}
            onChange={handleMinutesChange}
            defaultValue={currentMinutes.toString().padStart(2, '0')}
          />
        </div>
        :
        <div>
          <input
            type="text"
            name={`${id}:seconds`}
            onChange={handleSecondsChange}
            defaultValue={currentSeconds.toString().padStart(2, '0')}
          />
        </div>
      </StyledTimeInput>
    </Wrapper>
  );
}

export default TimeInput;
