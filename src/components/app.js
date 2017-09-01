import React, { Component } from 'react';
import Login from './Login';
import Input from './Input';
import MessageList from './MessageList';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatList: [],
      author: '',
      nameEntered: false
    }
  }

  componentDidMount() {
    fetch('/fakedata.json')
    .then((response) => response.json())
    .then(chatList => {
      this.setState({
        chatList: chatList.messages
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  setName(event) {
    // Hide the name prompt, set the state to nameEntered = true
    this.setState({
      author: event.target.value
    })
  }

  hideLogin(event) {
    // Prevent page from refreshing
    event.preventDefault();
    this.setState({
      nameEntered: true
    }, () => this.scrollToBottom());
  }

  addItem(event) {
    const { chatList, author} = this.state;

    if (event.key === 'Enter') {
      const inputText = event.target.value;
      if (inputText.length > 0) {
        const currentMessageId = uuid();
        this.setState({
          chatList: chatList.concat({
            id: currentMessageId,
            author,
            timestamp: Date.now(),
            content: inputText
          })
        }, () => this.scrollToBottom());
      }
      event.target.value = '';
    }
  }

  scrollToBottom() {
    // Show most recent chat message above the message input box
    this.chatListEl.scrollTop = this.chatListEl.scrollHeight;
  }

  render() {
    const { nameEntered, chatList, author } = this.state;
    return (
      <div>
        <h1>TinyChat</h1>
        {!nameEntered ?
          <section className="user-login">
            <Login
              onChange={this.setName.bind(this)}
              onClick={this.hideLogin.bind(this)}
              isDisabled={author === ''}
            />
          </section>
        :
          <section className="chat-container">
            <ul className="chat-list" ref={el => this.chatListEl = el}>
              {chatList ?
                chatList.map((message) =>
                  <MessageList
                    key={message.id}
                    value={message.content}
                    author={message.author}
                    timestamp={new Date(message.timestamp)}
                  />
                )
              : ''}
            </ul>
            <Input className="chat-input" onKeyDown={this.addItem.bind(this)}/>
          </section>
        }
      </div>
    );
  }
}

export default App;
