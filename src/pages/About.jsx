import Wrapper from '../assets/wrappers/AboutPage';
import about from '../assets/about2.svg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <Wrapper>
        <img src={about} alt='about us' className='img' />
        <div>
          <h3>About us</h3>
          <p>
            In the heart of a bustling city, where dreams intertwine with the
            rhythm of life, there exists a hidden sanctuary known only to a
            select few. This sanctuary, nestled amidst the chaos of urban
            existence, is a place of refuge and contemplation. Here, time seems
            to slow down, and the worries of the world melt away. The air is
            thick with the scent of jasmine and sandalwood, and the sound of
            distant laughter drifts through the streets like a sweet melody.
          </p>
        </div>
      </Wrapper>
      <hr />
      <Link
        to='/'
        className='btn'
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        home page
      </Link>
    </>
  );
};
export default About;
