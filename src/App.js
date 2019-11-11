import React from "react";

import { Listbox } from "./components";

const App = () => (
  <div style={{ maxWidth: 600, margin: "0 auto" }}>
    <h1>{"Currently showing the <Listbox> component"}</h1>
    <Listbox
      options={[
        { label: "one", value: 1 },
        { label: "two", value: 2 },
        { label: "three", value: 3 },
        { label: "four", value: 4 },
        { label: "five", value: 5 }
      ]}
    />
  </div>
);

export default App;
