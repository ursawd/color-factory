import "./App.css";
import Color from "./Color";
import ColorForm from "./ColorForm";
import Colors from "./Colors";
import React, { useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  useHistory,
} from "react-router-dom";

function App(props) {
  const initColors = [
    { name: "red", colorVal: "#ff0000" },
    { name: "green", colorVal: "#00ff00" },
    { name: "blue", colorVal: "#0000ff" },
  ];
  const [picked, setPicked] = useState(initColors);
  let history = useHistory();
  console.log("history", history);

  const addColor = (colorInfo) => {
    setPicked((picked) => [colorInfo, ...picked]);

    history.push("/colors");
  };
  const renderCurrentColor = (props) => {
    const colorName = props.match.params.color;
    const colorHex = picked.find((pick) => pick.name === colorName).colorVal;
    return <Color name={colorName} hex={colorHex} />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <ColorForm addColor={addColor} />
          </Route>
          <Route exact path="/colors">
            <Colors picked={picked} />
          </Route>
          <Route path="/colors/:color" render={renderCurrentColor} />
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
