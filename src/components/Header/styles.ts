import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.header`
  grid-area: header;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_dark};

  > div {
    height: 11.6rem;

    display: flex;
    align-items: center;
    gap: 2rem;

    width: 80%;
    margin: 0 auto;

    h1 {
      display: none;
    }

    div {
      margin-bottom: 0;

      input {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    button.menu {
      display: flex;
      align-items: center;

      background: none;

      transition: all 0.3s;

      svg {
        stroke: ${({ theme }) => theme.colors.gray_mediumDark};
      }

      &:focus {
        transform: rotate(90deg);

        svg {
          stroke: ${({ theme }) => theme.colors.brand};
        }
      }
    }
  }

  @media ${device.laptop_m} {
    > div {
      gap: 6.4rem;

      h1 {
        display: block;
        padding: 5rem 0;

        color: ${({ theme }) => theme.colors.brand};
        font-size: 2.4rem;
        line-height: 3.16rem;
        font-weight: 700;
      }

      button.menu {
        display: none;
      }
    }
  }
`;

const Profile = styled.div`
  display: none;

  @media ${device.laptop_m} {
    display: flex;
    align-items: center;
    gap: 1rem;

    min-width: 20rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      span {
        color: ${({ theme }) => theme.colors.gray_veryLight};
        font-size: 1.4rem;
        line-height: 1.85rem;
        font-weight: 700;
      }

      button {
        background: none;

        color: ${({ theme }) => theme.colors.gray_mediumDark};
        font-size: 1.4rem;
        line-height: 1.85rem;

        &:focus {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      }
    }

    button.user-avatar-desktop {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;

      background: none;

      border: 1px solid ${({ theme }) => theme.colors.gray_dark};

      img {
        width: 6.2rem;
        height: 6.2rem;
        border-radius: 50%;

        object-fit: cover;
      }

      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.brand};
        outline-offset: 3px;
      }
    }
  }
`;

export { Container, Profile };
