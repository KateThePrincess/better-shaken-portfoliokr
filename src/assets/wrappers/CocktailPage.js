import styled from 'styled-components/macro';

const Wrapper = styled.div`
  header {
    /* text-align: center; */
    /* margin-bottom: 5rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* grid-template-areas: 'img h2 a'; */

    /* gap: 2rem; */
    /* place-items: center; */
    /* border-bottom: 1px solid var(--primary-300);
    padding-bottom: 2rem; */

    .btn {
      /* margin-bottom: 1rem; */
    }

    h2 {
      text-align: right;
    }
  }
  .img-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .icon {
    width: 25%;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .flex-container h2 {
    line-height: 1.3;
  }
  .img {
    border-radius: var(--borderRadius);
    max-width: 100%;
    height: 100%;
  }
  .drink-info {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }

  .drink p {
    font-weight: 500;
    font-variant: all-small-caps;
    padding: 0.5rem 0;
  }

  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-200);
    padding: 0.5rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
    font-variant: all-small-caps;
    font-weight: 600;
    height: fit-content;
    /* width: fit-content; */
    width: 100%;
  }

  ul {
    list-style-position: outside;
  }
  .main-list {
    /* display: flex; */
    border-radius: var(--borderRadius);
    padding: 10px;
    color: var(--primary-700);
  }

  .after-header {
    display: flex;
    justify-content: space-between;
  }
  .ing {
    /* display: inline-block;
    margin-right: 0.5rem; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    font-variant: all-small-caps;
    padding: 0.7rem 0;
    position: relative;
  }
  input {
    cursor: pointer;
    -webkit-cursor: pointer;
  }
  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    color: yellow;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--borderRadius);
    border: 1px solid var(--primary-300);
    position: relative;
  }

  input[type='checkbox']:checked {
    color: var(--primary-700);
    background: var(--primary-300);
  }

  label {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-cursor: pointer;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-bottom: 1rem;
    }
    .drink-info {
      padding-top: 1rem;
    }
  }

  @media (max-width: 991.9px) {
    .drink-info div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    .drink p {
      text-align: justify;
    }
  }
`;

export default Wrapper;
