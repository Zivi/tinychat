import React from 'react';

function MessageList(props) {

  return (
    <li>
      <span className="message-author">{props.author}</span> &nbsp;
      <span className="message-time">{props.timestamp}</span><br/>
      <span className="message-text">{props.value}</span>
    </li>
  )
}

export default MessageList;
