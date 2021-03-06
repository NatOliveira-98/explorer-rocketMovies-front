import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';
import backgroundImg from '../../assets/cinema.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    align-items: stretch;
  }

  @media ${device.desktop} {
    max-width: 1920px;
    margin: 0 auto;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop_m} {
    padding: 0 10rem;
  }

  @media ${device.laptop_l} {
    padding: 0 16.3rem;
  }

  @media ${device.desktop} {
    margin-right: 5rem;
  }

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

const Background = styled.div`
  display: none;

  @media ${device.laptop_m} {
    display: block;
    flex: 1;

    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
  }
`;

export { Container, Form, Background };
