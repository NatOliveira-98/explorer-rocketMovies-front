import styled from 'styled-components';
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

const Menu = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  div.header {
    height: 11.4rem;
    padding: 0 3rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_pink};

    a {
      position: relative;

      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.colors.brand};

      &:focus {
        &::after {
          content: '';
          width: 7.1rem;
          height: 1px;

          position: absolute;
          bottom: -1px;
          left: 3px;

          background-color: ${({ theme }) => theme.colors.brand};
        }
      }
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 34%;

    h1 {
      padding: 5rem 0;

      color: ${({ theme }) => theme.colors.brand};
      font-size: 2.4rem;
      line-height: 3.16rem;
      font-weight: 700;
    }
  }
`;

const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;

  button.user-avatar {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;

    background: none;

    img {
      object-fit: cover;
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.brand};
      outline-offset: 3px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    margin-top: 6rem;

    h2 {
      font-size: 2rem;
    }

    button {
      width: 10rem;

      margin: 2.4rem auto;
      padding: 1rem 0;
    }
  }
`;

export { Container, Profile, Menu, ProfileMenu };
