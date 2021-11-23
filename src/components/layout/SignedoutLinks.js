import React from "react";
import { NavLink } from "react-router-dom";

const SignedoutLinkes = () => {
  return (
    <>
      <NavLink
        to='/signin'
        className='btn text-light me-3'
        activeClassName='btn-success'
      >
        Sign in
      </NavLink>
      <NavLink
        to='/signup'
        className='btn text-light'
        activeClassName='btn-success'
      >
        Sign Up
      </NavLink>
    </>
  );
};

export default SignedoutLinkes;
