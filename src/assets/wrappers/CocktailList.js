import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  gap: 2rem;
  place-items: stretch;
`;

export default Wrapper;
