import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username : 'irfan', message : 'hey guys'},
    {username : 'shayento', message : 'heloooooo'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    });
  }, [] )

  useEffect(() => {
    //const username = prompt('please enter your name')
    setUsername(prompt('please enter your name'))
  }, [])
  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message
    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      
      <form>
        <FormControl>
        <InputLabel>Enter a message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
