import { css } from '@emotion/react';

export function getMaterialIcon(code: string) {
  return css`
    font-family: 'Material Symbols Outlined';
    content: '${code}';
  `;
}
