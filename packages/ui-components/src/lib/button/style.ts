import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface StyledButtonProps {
  size?: 's' | 'm' | 'l';
  $theme?: 'default' | 'primary' | 'secondary';
  outlined?: boolean;
  inline?: boolean;
}

function getStyleBySize(size: StyledButtonProps['size'] = 'm') {
  return css`
    padding: var(--button-${size}-padding, 0 1.6rem);
    height: var(--button-${size}-height, 3.6rem);
    font-size: var(--button-${size}-font-size, 1.2rem);
  `;
}

function getStyleByTheme(theme: StyledButtonProps['$theme'] = 'default') {
  return css`
    background-color: var(--button-${theme}-bg-color, #000);
    color: var(--button-${theme}-font-color, #fff);
  `;
}

function getStyleByInline(inline: StyledButtonProps['inline'] = true) {
  if (!inline) {
    return css`
      display: flex;
      width: 100%;
    `;
  }

  return `
  display: inline-flex;
  width: auto;
`;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ size }) => getStyleBySize(size)}
  ${({ $theme }) => getStyleByTheme($theme)}
  ${({ inline }) => getStyleByInline(inline)};

  place-content: center;
  align-items: center;
  border: ${({ outlined, $theme = 'default' }) =>
    `1px solid ${
      outlined ? `var(--button-${$theme}-outline-color, #000)` : 'transparent'
    }`};
  box-sizing: border-box;
  border-radius: 0.2rem;
  cursor: pointer;

  &:disabled {
    filter: opacity(0.5);
    cursor: not-allowed;
  }
`;

export const LinkAsButton = StyledButton.withComponent('a');
