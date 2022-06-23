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
`;

const MovieInfo = styled.div`
  height: 600px;
  margin-top: 4rem;
  padding-right: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  overflow-y: scroll;
  overflow-x: hidden;

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

  .movie-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      max-width: 80%;

      color: ${({ theme }) => theme.colors.gray_veryLight};
      font-size: 3.6rem;
      line-height: 4.75rem;
      font-weight: 500;

      overflow-wrap: break-word;
    }

    .stars-rate-container {
      display: flex;
      align-items: center;
      gap: 6px;

      svg {
        stroke: ${({ theme }) => theme.colors.brand};
      }

      svg.rate {
        fill: ${({ theme }) => theme.colors.brand};
      }
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        color: ${({ theme }) => theme.colors.gray_veryLight};
        font-size: 1.6rem;
        line-height: 1.87rem;
      }
    }

    div:nth-child(1) {
      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;

        object-fit: cover;
      }
    }
  }

  .tags-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 8px;

    text-align: center;

    span {
      padding: 8px 1.6rem;
      background-color: ${({ theme }) => theme.colors.background_gray_warm};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.gray_veryLight};
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: justify;
  }

  @media ${device.tablet_s} {
    height: 550px;

    .user-info {
      flex-direction: row;
      gap: 2rem;
    }

    .tags-container {
      grid-template-columns: repeat(3, auto);
    }
  }

  @media ${device.tablet} {
    .movie-header {
      flex-direction: row;
      gap: 2rem;
    }

    .tags-container {
      grid-template-columns: repeat(5, auto);
    }
  }

  @media ${device.laptop_m} {
    .tags-container {
      grid-template-columns: repeat(10, auto);
    }
  }
`;

export { Container, Main, MovieInfo };
