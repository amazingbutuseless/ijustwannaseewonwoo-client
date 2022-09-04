import styled from '@emotion/styled';
import { AddSceneRequestData } from '@ijustwannaseewonwoo-client/types';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { getMaterialIcon } from '../helper';
import { StyledButton } from '../button/style';
import TimeInput, { TimeInputProps } from '../time-input/time-input';
import InfoPanel, { StyledInfoPanel } from '../info-panel/info-panel';

export interface PreviewSceneFormProps {
  defaultValues?: Partial<AddSceneRequestData>;
  onSubmit: (data: AddSceneRequestData) => void;
}

const Wrapper = styled.section`
  header {
    margin-bottom: 2.4rem;

    h3 {
      margin-bottom: 0.8rem;
      font-size: var(--typography-heading-font-size-s);
      color: var(--typography-heading-font-color-secondary);

      ::before {
        font-size: 2.4rem;
        margin-right: 0.8rem;
        content: '😿';
      }
    }

    p {
      font-size: var(--typography-body-font-size-s);
    }
  }

  ${StyledInfoPanel} {
    margin-top: 1.6rem;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    display: inline-block;
    padding: 0 1.6rem;
    font-size: var(--typography-body-font-size-m);
  }
`;

const PreviewButton = styled(StyledButton)`
  ::before {
    ${getMaterialIcon('\\e1c4')}
    display: inline-block;
    margin-right: 0.8rem;
  }
`;

export function AddSceneForm({
  defaultValues = { startTime: 0, endTime: 0 },
  onSubmit,
}: PreviewSceneFormProps) {
  const {
    watch,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<AddSceneRequestData>({
    defaultValues,
  });

  const startTime = watch('startTime');
  const endTime = watch('endTime');

  const handleTimeChange: TimeInputProps<'startTime' | 'endTime'>['onChange'] =
    useCallback(
      ({ id, time, errorMessage }) => {
        if (errorMessage) {
          setError(id, { message: errorMessage });
        } else {
          clearErrors(id);
        }
        setValue(id, time);
      },
      [setValue, setError, clearErrors]
    );

  return (
    <Wrapper>
      <header>
        <h3>아직 등록되지 않은 장면이 있나요?</h3>
        <p>시작 시간, 끝나는 시간을 입력해서 장면을 등록 할 수 있어요.</p>
      </header>

      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TimeInputContainer>
          <TimeInput
            key="startTime"
            id="startTime"
            timeInSeconds={startTime}
            onChange={handleTimeChange}
            label={'시작 시간'}
          />
          <span>~</span>
          <TimeInput
            key="endTime"
            id="endTime"
            timeInSeconds={endTime}
            onChange={handleTimeChange}
            label={'끝나는 시간'}
          />
        </TimeInputContainer>

        <PreviewButton type="submit" $theme="primary" size="s">
          preview
        </PreviewButton>
      </Form>

      {errors.startTime || errors.endTime ? (
        <InfoPanel
          $type="danger"
          title="시작 시간 또는 끝나는 시간이 잘못 지정되었습니다."
        >
          {errors.startTime && <div>{errors.startTime.message}</div>}
          {errors.endTime && <div>{errors.endTime.message}</div>}
        </InfoPanel>
      ) : null}
    </Wrapper>
  );
}

export default AddSceneForm;
