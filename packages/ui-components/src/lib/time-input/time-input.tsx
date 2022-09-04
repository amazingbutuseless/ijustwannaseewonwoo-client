import styled from '@emotion/styled';
import { useCallback, useState } from 'react';

import TextField, { StyledTextField } from '../text-field/text-field';

interface TimeInputOnChangeParams<T> {
  id: T;
  time: number;
  errorMessage?: string;
}

export interface TimeInputProps<T extends string> {
  label?: string;
  id: T;
  timeInSeconds: number;
  onChange: (params: TimeInputOnChangeParams<T>) => void;
}

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const StyledTimeInput = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--typography-body-font-size-m);

  ${StyledTextField} {
    width: 4.8rem;
  }
`;

export function TimeInput<K extends string>({
  label,
  id,
  timeInSeconds,
  onChange,
}: TimeInputProps<K>) {
  const [isMinutesInvalid, setMinutesInvalid] = useState<boolean>();
  const [isSecondsInvalid, setSecondsInvalid] = useState<boolean>();

  const currentMinutes = Math.floor(timeInSeconds / 60);
  const currentSeconds = timeInSeconds % 60;

  const handleMinutesChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const minutes = parseInt(e.currentTarget.value, 10) * 60;
        const errorMessage =
          Number.isNaN(minutes) || minutes < 0
            ? '분은 0 또는 0 보다 커야 합니다.'
            : undefined;
        setMinutesInvalid(!!errorMessage);
        onChange({ id, time: minutes + currentSeconds, errorMessage });
      },
      [currentSeconds, onChange, id]
    );

  const handleSecondsChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const seconds = parseInt(e.currentTarget.value, 10);
        const errorMessage =
          Number.isNaN(seconds) || seconds < 0 || seconds > 59
            ? '초는 0-59 사이의 숫자여야 합니다.'
            : undefined;
        setSecondsInvalid(!!errorMessage);
        onChange({ id, time: currentMinutes * 60 + seconds, errorMessage });
      },
      [currentMinutes, onChange, id]
    );

  return (
    <Wrapper>
      {label && <label htmlFor={`${id}:minutes`}>{label}</label>}

      <StyledTimeInput>
        <TextField
          key={`${id}:minutes`}
          type="number"
          name={`${id}:minutes`}
          min={0}
          onChange={handleMinutesChange}
          defaultValue={currentMinutes.toString().padStart(2, '0')}
          invalid={isMinutesInvalid}
          $size="m"
          placeholder="00"
        />
        :
        <TextField
          key={`${id}:seconds`}
          type="number"
          name={`${id}:seconds`}
          min={0}
          max={59}
          onChange={handleSecondsChange}
          defaultValue={currentSeconds.toString().padStart(2, '0')}
          invalid={isSecondsInvalid}
          $size="m"
          placeholder="00"
        />
      </StyledTimeInput>
    </Wrapper>
  );
}

export default TimeInput;
