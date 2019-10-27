import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrafficLight from '../TrafficLight';

const App = ({ history }) => {
  const renderComponent = activeLight => props => <TrafficLight {...props} active={activeLight} />;

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={renderComponent('red')} />
        <Route path="/red" render={renderComponent('red')} />
        <Route path="/yellow" render={renderComponent('yellow')} />
        <Route path="/green" render={renderComponent('green')} />
        <Route render={renderComponent('red')} />
      </Switch>
    </Router>
  );
};

export default App;
