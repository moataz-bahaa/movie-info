import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import UpdateUserProfileModal from './UpdateUserProfileModal';

const UserProfile = () => {

  const { user, loading } = useSelector(state => {
    return {
      user: state.user,
      loading: state.shared.loading
    };
  });

  return (
    <div>
      <h1 className='text-center mb-5 text-danger border shadow py-2'>
        User Proflile Information
      </h1>
      <div className='row'>
        <div className='col-lg-4'>
        <img
        src={user.imageURL}
        alt='user profile pic'
        className='mb-4 d-block m-auto'
        style={{
          maxHeight: '400px',
          maxWidth: '100%',
          objectFit: 'contain',
          borderRadius: '10px',
        }}
      />
        </div>
        <div className='col-lg-8'>
          <ListGroup variant='flush' className='fs-3 mt-5 py-3'>
            <ListGroup.Item>First Name: {user.firstName}</ListGroup.Item>
            <ListGroup.Item>Second Name: {user.secondName}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <UpdateUserProfileModal />
    </div>
  );
};

export default UserProfile;
