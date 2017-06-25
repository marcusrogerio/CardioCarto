import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, LandingRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import SubNav from './sub_nav/sub_nav';
import FrontPageContainer from './frontpage/front_page_container';
import SignUpFormContainer from './session/sign_up_form_container';
import LogInFormContainer from './session/log_in_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import RoutesIndexContainer from './routes/index/routes_index_container';
import RouteCreateContainer from './routes/create/route_create_container';
import RouteShowContainer from './routes/show/route_show_container';

import LoadingScreen from './loading/loading';
import NotFound from './not_found';

const App = () => (
  <div className='main-wrapper'>
    <HeaderContainer />
    <SubNav />
    <Switch>
      <LandingRoute exact path='/'
        component={ FrontPageContainer } />
      <AuthRoute path='/auth/signup'
        component={ SignUpFormContainer } />
      <AuthRoute path='/auth/login'
        component={ LogInFormContainer } />
      <ProtectedRoute path='/my_home/user_dashboard'
        component={ DashboardContainer } />
      <ProtectedRoute path='/my_home/user_routes'
        component={ RoutesIndexContainer } />
      <ProtectedRoute path='/routes/create'
        component={ RouteCreateContainer } />
      <ProtectedRoute path='/routes/view/:routeId'
        component={ RouteShowContainer } />
      <ProtectedRoute path='/loading'
        component={ LoadingScreen } />
    </Switch>
  </div>
);

export default App;

// <Route path='/404' component={ NotFound } />
// <Redirect from='*' to='/404' />
