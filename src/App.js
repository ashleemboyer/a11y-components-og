import React from "react";

import { Listbox } from "./components";

const App = () => (
  <div style={{ maxWidth: 600, margin: "0 auto" }}>
    <h1>{"Currently showing the <Listbox> component"}</h1>
    <Listbox
      label="Choose an element"
      options={[
        { name: "one", value: 1 },
        { name: "two", value: 2 },
        { name: "three", value: 3 },
        { name: "four", value: 4 },
        { name: "five", value: 5 }
      ]}
    />
  </div>
);

export default App;
