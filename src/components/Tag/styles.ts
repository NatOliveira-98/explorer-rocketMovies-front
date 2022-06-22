import styled from 'styled-components';

const Container = styled.span`
  padding: 5px 1.6rem;

  color: ${({ theme }) => theme.colors.gray_light};
  font-size: 1.2rem;
  line-height: 1.4rem;

  background-color: ${({ theme }) => theme.colors.gray_veryDark};
  border-radius: 8px;
`;

export default Container;
