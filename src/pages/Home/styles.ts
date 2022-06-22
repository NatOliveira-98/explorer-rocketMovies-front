import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'main';

  overflow-y: hidden;

  @media ${device.desktop} {
    max-width: 1920px;
  }
`;

const Main = styled.main`
  grid-area: main;

  width: 80%;
  margin: 4.74rem auto 6rem;

  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3.7rem;

    h2 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.2rem;
      line-height: 4.22rem;
    }

    button {
      width: 18rem;
      margin: 0;
    }
  }

  .movie-tags-container {
    height: 650px;
    padding: 5px;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.brand};
      border-radius: 9999px;
    }

    /* Firefox */
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.colors.brand} transparent;
  }

  @media ${device.tablet} {
    div.main-header {
      h2 {
        font-size: 2.6rem;
      }
    }
  }

  @media ${device.laptop_m} {
    div.main-header {
      h2 {
        font-size: 3.2rem;
      }

      button {
        width: 20.7rem;
      }
    }
  }

  @media ${device.laptop_l} {
    .movie-tags-container {
      display: grid;
      grid-template-columns: repeat(2, 49%);

      overflow-x: hidden;
    }
  }
`;

export { Container, Main };
