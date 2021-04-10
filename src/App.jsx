// import logo from './';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, AboutUs, Education, Parents, Multimedia, Colaboration, Placer } from "./screens";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/acerca-de' component={AboutUs} />
          <Route path='/educación' component={Education} />
          <Route path='/padres' component={Parents} />
          <Route path='/multimedia' component={Multimedia} />
          <Route path='/colabora' component={Colaboration} />
          <Route path='/placer' component={Placer} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
