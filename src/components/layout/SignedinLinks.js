import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { loading } from '../../redux/actions/shared';

const SignedinLinks = (props) => {

  const handleSignOut = async(e) => {
    props.dispatch(loading(true));
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
    props.dispatch(loading(false));
  };

  return (
    <>
      <NavDropdown
        title={<FaUserAlt className='fs-4' />}
        id='basic-nav-dropdown'
      >
        <li className='dropdown-item'>
          <NavLink to='/user/profile' className='d-block'>
            Profile
          </NavLink>
        </li>
        <li className='dropdown-item cursor-pointer' onClick={handleSignOut}>
          Sign Out
        </li>
      </NavDropdown>
    </>
  );
};

export default SignedinLinks;
