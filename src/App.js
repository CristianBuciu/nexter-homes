import Sidebar from "./components/sidebar/Sidebar.jsx";

import Realtors from "./pages/realtors/Realtors.jsx";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
//!==========================================================

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/realtors">
          <Realtors />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
