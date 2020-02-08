import React, { useState, useRef } from "react";

import { Dialog, Button } from "./components";

const App = () => {
  const openDialogRef = useRef();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <Button
        providedRef={openDialogRef}
        onClick={() => {
          if (!showDialog) {
            setShowDialog(true);
          }
        }}
      >
        Open Dialog
      </Button>
      <Button onClick={() => {}}>Hi</Button>
      <Button onClick={() => {}}>I'm a Button</Button>
      {showDialog && (
        <Dialog
          openerRef={openDialogRef}
          closeDialog={() => {
            setShowDialog(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
