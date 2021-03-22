import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "./components/Menu";
import Songs from './pages/songs';
import Todos from './pages/todos';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/songs" component={Songs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
