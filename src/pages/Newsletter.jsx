import { Form, redirect, useNavigation } from 'react-router-dom';
import newsletter from '../assets/newsletter.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { PiWarningDiamondFill } from 'react-icons/pi';
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await axios.post(newsletterUrl, data);

    toast.success(`${response.data.msg}.`, {
      icon: (
        <FiCheckCircle
          style={{ color: 'var(--primary-500)', fontSize: '20px' }}
        />
      ),
      style: {
        color: 'var(--primary-700)',
        fontFamily: 'Comfortaa, sans-serif',
        fontVariant: 'all-small-caps',
        fontSize: '15px',
      },
    });
    return null;
  } catch (error) {
    console.log(error);
    toast.error(`${error?.response?.data?.msg}.`, {
      icon: (
        <PiWarningDiamondFill
          style={{ color: 'var(--primary-500)', fontSize: '20px' }}
        />
      ),
      style: {
        color: 'var(--primary-700)',
        fontFamily: 'Comfortaa, sans-serif',
        fontVariant: 'all-small-caps',
        fontSize: '15px',
      },
    });
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <>
      <section className='form-section'>
        <img src={newsletter} alt='newsletter' className='img form-img' />
        <Form className='form' method='POST'>
          <h4
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              color: 'var(--primary-700)',
            }}
          >
            our newsletter
          </h4>
          {/* name */}
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              name
            </label>
            <input
              type='text'
              className='form-input'
              name='name'
              id='name'
              required
            />
          </div>
          {/* lastName */}
          <div className='form-row'>
            <label htmlFor='lastName' className='form-label'>
              last name
            </label>
            <input
              type='text'
              className='form-input'
              name='lastName'
              id='lastName'
              required
            />
          </div>
          {/* name */}
          <div className='form-row'>
            <label htmlFor='email' className='form-label'>
              e-mail
            </label>
            <input
              type='text'
              className='form-input'
              name='email'
              id='email'
              placeholder='test@test.com'
              defaultValue='test@test.com'
              required
            />
          </div>
          <button
            className='btn btn-block'
            type='submit'
            style={{ alignSelf: 'center', marginTop: '.5rem' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'sign up'}
          </button>
        </Form>
      </section>
      <hr />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link className='btn' to='/'>
          home page
        </Link>
      </main>
    </>
  );
};
export default Newsletter;
