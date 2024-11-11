import React from 'react';
import { useSelector} from 'react-redux';
import { RootState } from './store'
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './landingPage/LandingPage';
import Layout from './layout';
import UsersDashboard from './Users/UsersDashboard';

function App() {

  const {isCorrectPassword } = useSelector(
    (state: RootState) => state.admins
  );
  return (

    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/lendsqr" element={isCorrectPassword ? <Layout /> : <LandingPage />} >
      <Route path="/lendsqr/users" element={<UsersDashboard />} />
    </Route>
  </Routes>
  );
}

export default App;
