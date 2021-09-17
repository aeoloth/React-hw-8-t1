import React from "react";

import CitiesList from "./CitiesList";
import City from "./City";

function App(props) {
  return (
    <div>
      <City />
      <CitiesList />
    </div>
  );
}

export default App;
