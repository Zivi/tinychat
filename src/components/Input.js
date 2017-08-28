import React from 'react';

function Input(props) {
  return (
    <input
      id="chat-input"
      type="text"
      placeholder="add task and press enter to send"
      onKeyDown={props.onKeyDown}
    />
  )
}

export default Input;
