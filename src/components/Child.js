import React from "react";

const Child = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setShowModal(false);
        }}
      >
        Close
      </button>
      <p>This is the content of modal</p>
    </div>
  );
};

export default Child;
