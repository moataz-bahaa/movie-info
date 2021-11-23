import { loading } from './shared';
import { doc, getDoc, updateDoc, setDoc } from '@firebase/firestore';
import { db, storage, auth } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export const singIn = (currentUser) => {
  return {
    type: SIGN_IN,
    currentUser,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const updateUserInfo = (data) => {
  return {
    type: UPDATE_USER_INFO,
    data,
  };
};

export const handleSignIn = (id) => (dispatch) => {
  if (id) {
    getDoc(doc(db, 'users', id))
      .then((doc) => {
        dispatch(singIn(doc.data()));
      })
      .catch((err) => {
        alert(err.message);
        dispatch(loading(false));
      });
  } else {
    dispatch(signOut());
    dispatch(loading(false));
  }
};

export const handleSignUp = (email, password, data, cb) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, 'users', user.uid), { ...data, uid: user.uid });
    cb('');
  } catch (err) {
    dispatch(loading(false));
    cb(err.message);
  }
};

export const handleUpdateUserInfoWithImage =
  (image, id, data, cb) => (dispatch) => {
    dispatch(loading(true));
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (err) => {
        alert(err.message);
        dispatch(loading(false));
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (imageURL) => {
          dispatch(handleUpdateUserInfoWithouImage(id, { ...data, imageURL }, cb));
        });
      }
    );
  };

export const handleUpdateUserInfoWithouImage =
  (id, data, cb) => async (dispatch) => {
    dispatch(loading(true));
    try {
      await updateDoc(doc(db, 'users', id), data);
      dispatch(updateUserInfo(data));
      dispatch(loading(false));
      cb();
    } catch (err) {
      alert(err.message);
      dispatch(loading(false));
      cb();
    }
  };
