import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleSignUp } from '../../redux/actions/user';

const Signup = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(state => {
    return {
      user: state.user,
      isLoading: state.shared.loading
    }
  })
  const [errorText, setErrorText] = useState('');

  const createAccout = (email, password, data, cb) => {
    dispatch(handleSignUp(email, password, data, cb));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      email,
      firstName: e.target.firstName.value,
      secondName: e.target.secondName.value,
      imageURL: 'imgs/avatar.jfif'
    };
    createAccout(email, password, data, setErrorText);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='mx-auto' style={{ maxWidth: '700px' }}>
      <h1 className='fw-bold text-danger text-center border border-2 shadow py-2 mb-5'>
        Sing Up
      </h1>
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
        <Form.Group className='mb-4'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            name='firstName'
            type='text'
            placeholder='First Name'
          />
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label>Second Name</Form.Label>
          <Form.Control
            required
            name='secondName'
            type='text'
            placeholder='Second Name'
          />
        </Form.Group>
        <Button type='submit' variant='danger' size='lg' disabled={isLoading}>
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
            'Sing Up'
          )}
        </Button>
      </form>
      <div className='mt-3'>
        Already Have An Account{' '}
        <Link to='/signin' className='text-primary'>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
