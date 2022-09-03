import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { InputHTMLAttributes } from 'react';

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    StyledTextFieldProps {}

interface StyledTextFieldProps {
  invalid?: boolean;
}

export const StyledTextField = styled.div<StyledTextFieldProps>`
  position: relative;
  overflow: hidden;

  input {
    display: inline-block;
    padding: 0.6rem 0.8rem;
    width: 100%;
    height: 100%;
    border: 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    text-align: center;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    :focus {
      outline: none;
    }
  }

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

    ${({ invalid }) =>
      invalid &&
      css`
        transform: translate(0, 0);
        background-color: var(--theme-color-danger, #f00);
      `}
  }

  :focus-within {
    ::after {
      transform: translate(0, 0);
    }
  }
`;

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ invalid, ...rest }, ref) => {
    return (
      <StyledTextField invalid={invalid}>
        <input {...rest} ref={ref} />
      </StyledTextField>
    );
  }
);

export default TextField;
