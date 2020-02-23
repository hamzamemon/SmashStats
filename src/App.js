import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import ComingSoon from './ComingSoon';
import MeleeList from './components/MeleeList';
import CharacterView from './components/CharacterView';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <Header />
      <Switch>
      <Route path="/patch/:patch" component={Navigation}/>
      <Route path="/diff/:diff" component={Navigation}/>
      <Route component={Navigation}/>
      </Switch>

      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Smash64" component={ComingSoon} />
      <Route exact path="/Melee" component={MeleeList} />
      <Route exact path="/Melee/:name" component={CharacterView}/>

      <Route exact path="/Brawl" component={ComingSoon}/>
      <Route exact path="/Smash4" component={ComingSoon}/>
      <Route exact path="/Ultimate" component={ComingSoon} />
      </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
