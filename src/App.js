import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from "./Sidebar";
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [user] = useStateValue(null);

  return user ? (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Switch>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
              <Sidebar />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  ) :
    (<div className="app"><Login /></div>);
}

export default App;
