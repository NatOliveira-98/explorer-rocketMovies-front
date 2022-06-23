import styled from 'styled-components';

const Container = styled.a`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.brand};

  &:focus {
    &::after {
      content: '';
      width: 7.1rem;
      height: 1px;

      position: absolute;
      bottom: -1px;
      left: 3px;

      background-color: ${({ theme }) => theme.colors.brand};
    }
  }
`;

export { Container };
