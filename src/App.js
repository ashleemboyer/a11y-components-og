import React, { useState } from "react";

import { Dialog, Button } from "./components";

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          if (!showDialog) {
            setShowDialog(true);
          }
        }}
      >
        Open Dialog
      </Button>
      {showDialog && (
        <Dialog
          closeDialog={() => {
            setShowDialog(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
