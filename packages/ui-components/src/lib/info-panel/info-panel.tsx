import styled from '@emotion/styled';

import { getMaterialIcon } from '../helper';

/* eslint-disable-next-line */
export interface InfoPanelProps {
  $type?: 'default' | 'info' | 'warning' | 'danger';
  withIcon?: boolean;
  title?: string;
}

const Icon = styled.span`
  margin-right: 0.8rem;
  font-size: 1.6rem;
`;

export const StyledInfoPanel = styled.div<Pick<InfoPanelProps, '$type'>>`
  display: flex;
  padding: 1.2rem 1.6rem;
  border: 1px solid
    ${({ $type }) => `var(--theme-color-${$type}, --theme-color-gray)`};
  border-radius: 0.4rem;
  box-sizing: border-box;
  font-size: var(--typography-body-font-size-s);
  color: ${({ $type }) => `var(--theme-color-${$type}, --theme-color-gray)`};

  strong {
    display: block;
    margin-bottom: 0.8rem;
    color: ${({ $type }) => `var(--theme-color-${$type}, --theme-color-gray)`};
  }

  p {
    white-spce: pre-wrap;
    color: var(--theme-color-gray);
  }

  ${Icon} {
    ::before {
      ${({ $type = 'default' }) => {
        if ($type === 'warning') {
          return getMaterialIcon('\\e000');
        }
        if ($type === 'danger') {
          return getMaterialIcon('\\e99a');
        }
        return getMaterialIcon('\\e88e');
      }}
    }
  }
`;

export function InfoPanel({
  $type = 'default',
  withIcon = true,
  title,
  children,
}: React.PropsWithChildren<InfoPanelProps>) {
  return (
    <StyledInfoPanel $type={$type} role="status">
      {withIcon && <Icon role="img" />}
      <p>
        {title && <strong>{title}</strong>}
        {children}
      </p>
    </StyledInfoPanel>
  );
}

export default InfoPanel;
