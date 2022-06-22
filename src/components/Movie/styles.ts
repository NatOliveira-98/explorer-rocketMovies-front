import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.section`
  width: 98%;
  padding: 3.2rem;

  background-color: ${({ theme }) => theme.colors.background_pink};
  border-radius: 1.6rem;

  h3 {
    color: ${({ theme }) => theme.colors.gray_veryLight};
    font-size: 2.4rem;
    line-height: 3.16rem;
    font-weight: 700;

    margin-bottom: 1rem;
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

  p {
    margin: 1.5rem 0;

    color: ${({ theme }) => theme.colors.gray_warm};
    font-size: 1.6rem;
    line-height: 1.87rem;
    text-align: justify;
  }

  .tags-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 3px;
  }

  @media ${device.mobile_l} {
    .tags-container {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export { Container };
