import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Movie from './components/movies/Movie';
import Search from './components/movies/Search';
import Home from './components/movies/Home';
import NotFound from './components/layout/NotFound';
import ScrollToTop from './components/movies/ScrollToTop';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { handleSignIn, signOut } from './redux/actions/user';
import PrivateRoute from './components/auth/PrivateRoute';
import UserProfile from './components/layout/UserProfile';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(handleSignIn(user.uid))
      } else {
        dispatch(signOut())
      }
    });
    return unsubscribe;
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <div className='container padding-y-150' style={{ minHeight: '90vh' }}>
        <Switch>
          <PrivateRoute user={user} exact path='/' component={Home} />
          <PrivateRoute user={user} exact path='/search' component={Search} />
          <PrivateRoute user={user} exact path='/movie/:id' component={Movie} />
          <PrivateRoute
            user={user}
            exact
            path='/user/profile'
            component={UserProfile}
          />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route path={['*', '/404']} component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
