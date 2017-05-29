import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

export default (
 <div>
  <Route path="/" component={App} />
  <Route exact path="/" component={Greetings} />
  <Route path="/signup" component={SignupPage} />
 </div>
 )﻿
 
