import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Room from "views/Room/Room.jsx";
import Home from "views/Home/Home.jsx";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="appContainer">
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          timeout={800}
          classNames={pathname == "/" ? "appAnimDown" : "appAnimUp"}
        >
          <Switch location={{ pathname: pathname }}>
            <Route path="/Room/:id">
              <div className="appAnimContainer">
                <Room />
              </div>
            </Route>
            <Route exact path="/">
              <div className="appAnimContainer">
                <Home />
              </div>
            </Route>
            <Route path="/*">
              <h1>error!</h1>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
