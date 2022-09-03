import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { StyledButtonProps, LinkAsButton, StyledButton } from './style';

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>;

export type Props = (ButtonAttributes | AnchorAttributes) & StyledButtonProps;

function assertAnchorAttributes(props: unknown): props is AnchorAttributes {
  return Object.prototype.hasOwnProperty.call(props, 'href');
}

export function Button({ children, ...rest }: React.PropsWithChildren<Props>) {
  if (assertAnchorAttributes(rest)) {
    return (
      <LinkAsButton css={{ textDecoration: 'none' }} {...rest}>
        <span>{children}</span>
      </LinkAsButton>
    );
  }

  return (
    <StyledButton {...(rest as ButtonAttributes)}>
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
