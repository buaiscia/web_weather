import { useSelector } from 'react-redux';
import { InitialState } from './app/reducer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './app/components/Form/Form'
import { Li, Nav, StyledError, Ul } from './app.styles';

import './app.styles.ts';
import Main from './app/components/Main/Main';
import { Homepage } from './app/components/Homepage/Homepage';

function App() {
  const weather = useSelector((state: InitialState) => state.weather)
  const location = useSelector((state: InitialState) => state.location)
  const error = useSelector((state: InitialState) => state.error)

  const Error = () => (
    <StyledError>Sorry, the location does not exist</StyledError>
  )

  return (
    <Router>
      <div className="App">
        <main>
          <Nav>
            <Ul>
              <Li>
                <Link to="/">Home</Link>
              </Li>
              <Li>
                <Link to="/weather">Weather</Link>
              </Li>

            </Ul>
          </Nav>

          <Switch>
            <Route path="/weather">
              <Form />
              {error ? <Error /> : <Main weather={weather} location={location} />}
            </Route>

            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </main>
      </div>

    </Router>
  );
}

export default App;
