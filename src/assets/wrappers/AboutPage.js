import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  p {
    line-height: 2;
    color: var(--primary-300);
    margin-top: 2rem;
    text-align: justify;
  }

  img {
    width: 50%;
  }

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      width: 90%;
    }
  }
`;

export default Wrapper;
