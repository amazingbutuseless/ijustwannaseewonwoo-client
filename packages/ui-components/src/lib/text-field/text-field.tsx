import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { InputHTMLAttributes } from 'react';

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    StyledTextFieldProps {}

interface StyledTextFieldProps {
  invalid?: boolean;
  $size?: 's' | 'm';
}

function getStyleBySize(size: StyledTextFieldProps['$size'] = 'm') {
  if (size === 's') {
    return `
    padding: 0.6rem 0.8rem;
    font-size: var(--typography-body-font-size-s, 1.4rem);
    `;
  }

  return css`
    padding: 0.8rem 1.2rem;
    font-size: var(--typography-body-font-size-m, 1.6rem);
  `;
}

export const StyledTextField = styled.div<StyledTextFieldProps>`
  position: relative;
  overflow: hidden;

  input {
    ${({ $size }) => getStyleBySize($size)}

    display: inline-block;
    width: 100%;
    height: 100%;
    border: 0;
    box-sizing: border-box;
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
    background-color: var(--theme-color-primary);
    content: '';
    transition: transform 0.2s;

    ${({ invalid }) =>
      invalid &&
      css`
        transform: translate(0, 0);
        background-color: var(--theme-color-danger);
      `}
  }

  :focus-within {
    ::after {
      transform: translate(0, 0);
    }
  }
`;

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ invalid, $size, ...rest }, ref) => {
    return (
      <StyledTextField $size={$size} invalid={invalid}>
        <input {...rest} ref={ref} />
      </StyledTextField>
    );
  }
);

export default TextField;
