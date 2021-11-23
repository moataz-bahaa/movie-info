import React, { useState } from 'react';
import { Modal, Button, ListGroup, FormControl } from 'react-bootstrap';
import {
  handleUpdateUserInfoWithImage,
  handleUpdateUserInfoWithouImage,
} from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

const UpdateUserProfileModal = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => {
    return {
      user: state.user,
      loading: state.shared.user
    }
  });
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [secondName, setSecondName] = useState(user.secondName);
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(user.imageURL);

  const update = (id, data, image=null, cb) => {
    if (image) {
      dispatch(handleUpdateUserInfoWithImage(image, id, data, cb));
    } else {
      dispatch(handleUpdateUserInfoWithouImage(id, data, cb));
    }
  }

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeSecondName = (e) => {
    setSecondName(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    update(user.uid, { firstName, secondName }, image, handleClose);
  };

  const handleSelectImageClick = (e) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
      const img = e.target.files[0];
      setImage(img);
      setImageURL(URL.createObjectURL(img));
    };
    input.click();
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Update Prifile
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update User Informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={imageURL}
            alt='user profile pic'
            className='mb-4 d-block m-auto'
            style={{
              maxHeight: '200px',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '10px',
            }}
          />
          <Button variant='success' onClick={handleSelectImageClick}>
            Select Image
          </Button>
          <ListGroup variant='flush' className='fs-3 mt-5 py-3'>
            <ListGroup.Item>
              First Name:{' '}
              <FormControl
                required
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Second Name:{' '}
              <FormControl
                required
                value={secondName}
                onChange={handleChangeSecondName}
              />
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSave} disabled={loading}>
            {loading ? 'Loading...' : 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateUserProfileModal;
