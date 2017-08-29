import React from 'react';

function Input(props) {
  return (
    <input
      id="chat-input"
      type="text"
      placeholder="add text and press enter to send"
      onKeyDown={props.onKeyDown}
    />
  )
}

export default Input;
