import React, { Component } from 'react';
import Input from './Input';
import MessageList from './MessageList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatList: {} // change to array of messages from chatList.messages
    }
  }

  componentDidMount() {
    fetch('/fakedata.json')
    .then((response) => response.json())
    .then(chatList => {
      this.setState({
        chatList
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  addItem(event) {
    if (event.key === 'Enter') {
      // update state with text, user name, date stamp
    }
  }

  render() {

    return (
      <div>
        <h1>Tiny Chat</h1>
        <section id="chat-container">
          {this.state.chatList.messages ?
            this.state.chatList.messages.map((message) =>
              <ul>
                <MessageList
                  key={message.id}
                  value={message.content}
                  author={message.author}
                  timestamp={new Date(message.timestamp).toLocaleTimeString()}
                />
              </ul>
            )
          : ''}
        </section>
        <Input onKeyDown={this.addItem.bind(this)}/>
      </div>
    )
  }
}

export default App;
