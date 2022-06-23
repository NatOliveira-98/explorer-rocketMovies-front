import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 8px;
  padding: 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 1rem;
  border: none;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 3px;
  }

  > button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: none;
    border-radius: 9999px;

    svg {
      stroke: ${({ theme }) => theme.colors.brand};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.brand};
      outline-offset: 3px;
    }
  }

  > input {
    width: 100%;

    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_mediumDark};
    }
  }
`;

export { Container };
