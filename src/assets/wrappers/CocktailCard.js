import styled from 'styled-components/macro';

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  width: 100%;
  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
      font-variant: all-small-caps;
    }
    h4 {
      font-weight: 700;
      color: var(--primary-600);
    }
    p {
      margin-bottom: 1rem;
      color: var(--primary-400);
      font-variant: all-small-caps;
    }
  }
`;

export default Wrapper;
