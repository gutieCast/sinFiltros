// import logo from './';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './screens'
import { Menu } from './screens';
import { Options } from './screens'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/menu' component={Menu} />
          <Route path='/options' component={Options} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
