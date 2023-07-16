import React from "react";
import Child from "./Child";
const ShowModal = (props) => {
  console.log(props.value.show);
  return (
    <div className="model-overlay">
      <button
        onClick={() => {
          props.value.setShowModal(true);
        }}
      >
        Show Modal
      </button>
      {props.value.show && <Child setShowModal={props.value.setShowModal} />}
    </div>
  );
};
export default ShowModal;
