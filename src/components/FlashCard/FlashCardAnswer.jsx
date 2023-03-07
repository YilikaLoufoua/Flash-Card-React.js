import React from "react";

function FlashCardAnswer(props) {
  return <div className="back" style={{ backgroundColor: props.color }}>{props.answer}</div>;
}

export default FlashCardAnswer;