import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  padding: 1.6rem;
  margin: 2.4rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.gray_veryDark};

  background-color: ${({ theme }) => theme.colors.brand};
  border-radius: 1rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 3px;
  }
`;

export { Container };
