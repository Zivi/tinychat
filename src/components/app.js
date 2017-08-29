import React, { Component } from 'react';
import Input from './Input';
import MessageList from './MessageList';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatList: []
    }
  }

  componentDidMount() {
    fetch('/fakedata.json')
    .then((response) => response.json())
    .then(chatList => {
      this.setState({
        chatList: chatList.messages
      }, () => this.scrollToBottom());
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  addItem(event) {
    if (event.key === 'Enter') {
      var inputText = event.target.value;
      if (inputText.length > 0) {
        var currentMessages = this.state.chatList;
        var currentMessageId = uuid();
        this.setState({
          chatList: currentMessages.concat({
            id: currentMessageId,
            author: 'me',
            timestamp: Date.now(),
            content: inputText
          })
        }, () => this.scrollToBottom());
      }
      event.target.value = '';
    }
  }

  scrollToBottom() {
    var scrollChat = document.getElementById('chat-list');
    scrollChat.scrollTop = scrollChat.scrollHeight;
  }

  render() {
    return (
      <div>
        <h1>Tiny Chat</h1>
        <section id="chat-container">
          <ul id="chat-list">
            {this.state.chatList ?
              this.state.chatList.map((message) =>
                <MessageList
                  key={message.id}
                  value={message.content}
                  author={message.author}
                  timestamp={new Date(message.timestamp).toLocaleTimeString()}
                />
              )
            : ''}
          </ul>
        </section>
        <Input onKeyDown={this.addItem.bind(this)}/>
      </div>
    )
  }
}

export default App;
