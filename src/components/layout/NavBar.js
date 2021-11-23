import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchSearchMovies } from '../../redux/actions/movies';
import SignedinLinks from './SignedinLinks';
import SignedoutLinkes from './SignedoutLinks';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [inputValue, setInputValue] = useState('');
  let history = useHistory();

  const handleChangeInput = (ev) => setInputValue(ev.target.value);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if (inputValue === '') {
      return alert('Enter Key Word to Search');
    }
    dispatch(handleFetchSearchMovies(inputValue));
    setInputValue('');
    if (history.location.pathname !== '/search') {
      history.push('/search');
    }
  };

  return (
    <Navbar
      style={{ backgroundColor: '#343a40' }}
      variant='dark'
      expand='lg'
      fixed='top'
      className='py-3'
    >
      <Container>
        <Navbar.Brand className='me-lg-4 fs-2 text-light'>
          <FaReact
            className='me-lg-2 fs-1'
            style={{
              color: '#00d8ff',
            }}
          />
          <NavLink to='/'>MovieSeriesInfo</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='w-100'>
            {user ? (
              <>
                <form
                  className='d-flex flex-fill me-lg-4 my-3 my-lg-0'
                  onSubmit={handleFormSubmit}
                >
                  <input
                    type='search'
                    placeholder='Search'
                    className='form-control'
                    value={inputValue}
                    onChange={handleChangeInput}
                  />
                  <Button variant='outline-success' type='submit' size='md'>
                    Search
                  </Button>
                </form>
                <SignedinLinks dispatch={dispatch} />
              </>
            ) : (
              <div className='m-lg-auto'>
                <SignedoutLinkes />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
