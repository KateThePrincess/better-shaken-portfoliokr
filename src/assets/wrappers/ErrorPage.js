import styled from 'styled-components/macro';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem 15rem 2rem;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    /* margin-bottom: 2rem;
    margin-top: -3rem; */
    padding: 2rem 2rem 3rem 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--primary-300);
  }
`;

export default Wrapper;
