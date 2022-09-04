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

function getStyleByTheme(
  theme: StyledButtonProps['$theme'] = 'default',
  outlined = false
) {
  if (outlined) {
    return css`
      border-color: var(--button-${theme}-bg-color);
      background-color: transparent;
      color: var(--button-${theme}-bg-color);
    `;
  }

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
  ${({ inline }) => getStyleByInline(inline)};
  ${({ size }) => getStyleBySize(size)}

  border: 1px solid transparent;
  ${({ $theme, outlined }) => getStyleByTheme($theme, outlined)}

  place-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    filter: opacity(0.5);
    cursor: not-allowed;
  }
`;

export const LinkAsButton = StyledButton.withComponent('a');
