import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
  padding: 1.8rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 1rem;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 3px;
  }

  svg {
    stroke: ${({ theme }) => theme.colors.gray_mediumDark};
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_light};

    color: ${({ theme }) => theme.colors.white};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;

    &:focus {
      > svg {
        stroke: ${({ theme }) => theme.colors.brand};
      }
    }
  }
`;

export { Container };
