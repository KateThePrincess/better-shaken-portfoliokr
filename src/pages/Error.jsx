import img from '../assets/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt='404' className='img' />
        <h3>Ohh!</h3>
        <p>We can't seem to find a page you're looking for.</p>
        <Link to='/' className='btn'>
          home page
        </Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong...</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
