import React, { useState } from "react";
import "./../styles/App.css";
import ShowModal from "./ShowModal";

const App = () => {
  const [show, setShowModal] = useState(false);
  return (
    <div>
      <ShowModal value={{ show: show, setShowModal: setShowModal }} />
    </div>
  );
};

export default App;
