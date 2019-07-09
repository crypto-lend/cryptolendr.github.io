// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import LandingPage  from '../pages/LandingPage';
import  LoanRequest from '../pages/LoanRequest';
import  LoanOffer from '../pages/LoanOffer';
import  MyLoans  from '../pages/MyLoans';

// COMPONENT

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path='/' component={LandingPage} exact={true} />
        <Route path='/myloans' component={MyLoans} />
        <Route path='/request' component={LoanRequest} />
        <Route path='/offer' component={LoanOffer} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  </BrowserRouter>
);