import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    align-items: stretch;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.brand};
    font-size: 4.8rem;
    line-height: 6.3rem;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.gray_medium};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;

    margin: 4.8rem 0;
  }

  a {
    margin-top: 1.6rem;

    color: ${({ theme }) => theme.colors.brand};
    text-align: center;

    &:focus {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

export { Container, Form };
