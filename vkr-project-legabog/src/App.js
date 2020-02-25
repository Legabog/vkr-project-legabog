import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Elo from './container/Elo/Elo';
import Trueskill from './container/TrueSkill/Trueskill'
import Glicko from './container/Glicko/Glicko'
import MainPage from './container/MainPage/MainPage'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/elo" component={Elo} />
          <Route path="/trueskill" component={Trueskill} />
          <Route path="/glicko" component={Glicko} />
          <Route path="/" exact component={MainPage} />
          <Route render={() => <h1 style={{color:'red', textAlign: 'center'}}>Error 404 - Page not found</h1>} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
