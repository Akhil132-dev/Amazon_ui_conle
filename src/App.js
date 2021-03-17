
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cheackout from './Cheackout';
import Login from './Sinein';
import Sinein from './Sinein';
function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
        <Switch>


          <Route path="/checkout">
            <Header />
            <Cheackout />
          </Route>


          <Route path="/Login">
            <Header />
            <Sinein />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyADxX8TvIz3nsZoWzLbTQxM_PEkKrmLbSk",
//   authDomain: "clone-c2c2e.firebaseapp.com",
//   projectId: "clone-c2c2e",
//   storageBucket: "clone-c2c2e.appspot.com",
//   messagingSenderId: "104497253026",
//   appId: "1:104497253026:web:7c3d9395d182fd63e0a5fb",
//   measurementId: "G-W13B119Q16"
// };