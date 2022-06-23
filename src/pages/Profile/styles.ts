import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    'header'
    'form';

  .background-header {
    grid-area: header;
    height: 11.4rem;
    padding: 0 3rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_pink};
  }

  @media ${device.laptop_m} {
    .background-header {
      height: 14.4rem;
    }
  }

  @media ${device.desktop} {
    max-width: 1920px;
  }
`;

const Form = styled.form`
  grid-area: form;
  max-width: 34rem;
  margin: -2rem auto 0;

  display: flex;
  flex-direction: column;

  .user-info {
    margin-bottom: 2.4rem;
  }

  @media ${device.laptop_m} {
    margin-top: -38rem;
  }
`;

const UserImg = styled.div`
  position: relative;

  text-align: center;
  margin-bottom: 6rem;

  > img {
    width: 19rem;
    height: 19rem;
    object-fit: cover;

    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 7px;
    right: 9.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.brand};

    cursor: pointer;

    input {
      width: 0px;
      height: 0px;
    }

    svg {
      font-size: 2rem;
      stroke: ${({ theme }) => theme.colors.gray_veryDark};
    }

    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.colors.brand};
      outline-offset: 3px;
    }
  }
`;

export { Container, Form, UserImg };
