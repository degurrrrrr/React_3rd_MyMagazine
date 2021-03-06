import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { Main, Login, SignUp, Write, Detail } from '../pages/PagesIndex'; //강의 내 postlist = 나의 Main
import Header from '../components/Header';
import Layout from '../elements/Layout';

import { history } from '../redux/Store';
import { Grid } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';
import { apiKey } from './firebase';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <>
      <Grid>
          <Header />
        <ConnectedRouter history={history}>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/write" component={Write} exact />
          {/* 게시물수정 */}
          <Route path="/write/:id" component={Write} />  
          <Route path="/detail/:id" component={Detail} />
          <Route path="/layout" component={Layout} />
        </ConnectedRouter>
      </Grid>
    </>
  );
}

export default App;
