import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import { LiaGlassCheersSolid } from 'react-icons/lia';
import { GiGlassCelebration } from 'react-icons/gi';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>
          {/* <LiaGlassCheersSolid
            style={{
              width: '5rem',
              height: '5rem',
              marginRight: '1rem',
              color: 'var(--primary-700)',
            }}
          /> */}
          <span style={{ color: 'var(--primary-700)' }}>Better</span>Shaken
        </span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            about
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
