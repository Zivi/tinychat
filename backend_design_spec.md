# TinyChat backend spec

A websocket service such as https://socket.io/, or one implemented in-house
should be used so that there can be realtime updates for the chat participants.

Set up a backend with the following API endpoints:

1. Retrieve messages
Method: GET
Path: /messages?chatroom=[chatroom_id]&latest=[message_id]
Fetch the 30 most recent messages from the chatroom with chatroom_id.

Latest specifies the messages to be returned earlier than the specified
message_id (optional).

Return json format like this:
{
    "messages": [
        {
            "id": <string>,
            "author": <string>,
            "timestamp": <string:iso8601>,
            "content": <string>
        }
    ]
}

2. Send a message
Method: POST
Path: /messages?chatroom=[chatroom_id]

Adds a message to the specified chatroom_id.

Body of post contains json of the following format:

{
  "message": {
    "author": <string>,
    "content": <string>
  }
}
