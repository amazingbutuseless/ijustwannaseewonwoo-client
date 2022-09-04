import styled from '@emotion/styled';

export interface LogoProps {
  $size?: 'm' | 'l';
  direction?: 'column' | 'row';
}

const StyledLogo = styled.h1<{ direction: LogoProps['direction'] }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  font-family: Raleway, sans-serif;
  color: var(--theme-color-black);
  font-size: 2.4rem;
  line-height: ${({ direction }) => (direction === 'column' ? 1 : 'normal')};

  ::before {
    margin-right: ${({ direction }) => (direction === 'row' ? '0.8rem' : '0')};
    font-size: ${({ direction }) =>
      direction === 'column' ? '4rem' : '3.2rem'};
    content: '😸';
  }
`;

const LargeLogo = styled(StyledLogo)`
  font-size: 4rem;

  ::before {
    display: block;
    font-size: ${({ direction }) =>
      direction === 'column' ? '6.4rem' : '4.8rem'};
  }
`;

export function Logo({ $size = 'm', direction = 'row' }: LogoProps) {
  if ($size === 'l') {
    return <LargeLogo direction={direction}>ijustwannasee</LargeLogo>;
  }
  return <StyledLogo direction={direction}>ijustwannasee</StyledLogo>;
}

export default Logo;
