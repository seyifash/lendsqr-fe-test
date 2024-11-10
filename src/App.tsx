import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './landingPage/LandingPage';
import Layout from './layout';
import UsersDashboard from './Users/UsersDashboard';

function App() {
  return (

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route  path="/lendsqr" element={<Layout/>} >
          <Route path="/lendsqr/users" element={<UsersDashboard/>} />
        </Route>
      </Routes>
  );
}

export default App;
