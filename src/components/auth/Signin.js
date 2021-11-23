import React, { useState } from 'react';
import { Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { loading } from '../../redux/actions/shared';



const Signin = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(state => {
    return {
      user: state.user,
      isLoading: state.shared.loading,
    }
  })

  const [errorText, setErrorText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(loading(true));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorText('');
    } catch (error) {
      dispatch(loading(false));
      setErrorText(error.message);
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <Card className='py-5 m-auto shadow' style={{ maxWidth: '500px' }}>
      <Card.Title className='text-center text-danger'>
        <h1>Sing In</h1>
      </Card.Title>
      <Card.Body>
        {errorText && <Alert variant='danger'>{errorText}</Alert>}
        <form onSubmit={handleSubmit}>
          <Form.Group className='mb-4'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              name='email'
              type='email'
              placeholder='name@example.com'
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              type='password'
              placeholder='Enter Your Password'
            />
          </Form.Group>
          <Button
            type='submit'
            className='w-100 mb-3'
            variant='outline-danger'
            size='lg'
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className='me-3'>Loading</span>
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
              </>
            ) : (
              'Sign In'
            )}
          </Button>
          <div>
            Don't Have An Account{' '}
            <Link to='/signup' className='text-primary'>
              Create One
            </Link>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default Signin;
