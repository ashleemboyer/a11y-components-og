import React from "react";

import { Listbox } from "./components";

const App = () => (
  <>
    <h1>Hello, World!!!</h1>
    <Listbox
      options={[{ label: "one", value: 1 }, { label: "two", value: 2 }]}
    />
  </>
);

export default App;
