import './App.scss';
//React elements
import { Route, Switch } from 'react-router';

//Pages
import Welcome from './Pages/Welcome/welcome';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Welcome} exact />
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
