import React from "react";
import { render } from "react-dom";
import MyTitle from "./MyTitle.jsx";

const App = () => {
  return (
    <div>
      <MyTitle title="Title 1" />
      <MyTitle title="Title 2" />
      <MyTitle title="Title 3" />
      <MyTitle title="Title 4" />
      <MyTitle title="Title 5" />
      <MyTitle title="Title 6" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
