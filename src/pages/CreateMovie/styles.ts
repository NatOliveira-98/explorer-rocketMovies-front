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

const Form = styled.form`
  height: 700px;
  margin-top: 1.5rem;
  padding: 5px;

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

  .flex-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    width: 97%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.2rem;
    line-height: 4.22rem;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media ${device.laptop_m} {
    /* height: 100%; */

    .flex-container {
      gap: 2.5rem;
    }

    .inputs-container {
      flex-direction: row;
      gap: 4rem;
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 27.4rem;
  margin-bottom: 8px;
  padding: 1.8rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  color: ${({ theme }) => theme.colors.white};
  text-align: justify;

  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 1rem;
  border: none;

  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 3px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.brand};
    border-radius: 9999px;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.brand} transparent;
`;

const Markers = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.gray_warm};
    font-size: 2rem;
    line-height: 2.64rem;

    margin-bottom: 2.4rem;
  }

  .movies-genre-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1.6rem;

    background-color: ${({ theme }) => theme.colors.background_dark};
    border-radius: 8px;
  }

  @media ${device.tablet_s} {
    .movies-genre-container {
      display: grid;
      grid-template-columns: repeat(2, auto);
    }
  }

  @media ${device.tablet} {
    .movies-genre-container {
      grid-template-columns: repeat(3, auto);
    }
  }

  @media ${device.laptop_m} {
    .movies-genre-container {
      grid-template-columns: repeat(5, auto);
    }
  }
`;

const FormButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    margin: 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 4rem;
  }
`;

export { Container, Main, Form, Textarea, Markers, FormButtons };
