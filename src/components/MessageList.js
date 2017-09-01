import React from 'react';

function MessageList(props) {

  const { timestamp, author, value } = props;

  return (
    <li>
      <span className="message-author">{author}</span> &nbsp;
      <span
        title={timestamp.toDateString()}
        className="message-time">{timestamp.toLocaleTimeString()}
      </span>
      <br/>
      <span className="message-text">{value}</span>
    </li>
  )
}

export default MessageList;
