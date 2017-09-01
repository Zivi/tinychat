import React from 'react';

function Input(props) {
  return (
    <input
      className="chat-input"
      type="text"
      placeholder="Type a message, and press return to send"
      onKeyDown={props.onKeyDown}
    />
  );
}

export default Input;
