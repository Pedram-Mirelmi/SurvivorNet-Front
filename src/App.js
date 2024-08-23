import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthenticationPage from "./components/pages/AuthenticationPage";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import SearchPage from "./components/pages/SearchPage";
import TestPage from "./components/test-components/TestPage";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/test" render={(props => <TestPage {...props} /> )} />
          <Route path="/login" render={(props) => <AuthenticationPage step="login" {...props} />}/>
          <Route path="/register" render={(props) => <AuthenticationPage step="sign-up-1" {...props} />}/>
          <Route path="/profile" render={(props) => {
            if(localStorage.getItem("userInfo") !== null) {
              return <ProfilePage {...props} />
            }
            props.history.replace("/login");
          }}/>
          <Route path="/users/:username" render={props => <ProfilePage {...props} /> } />
          <Route path="/search" render={props => <SearchPage {...props}/> } />
          <Route path="/" render={(props) => <HomePage {...props} />}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
