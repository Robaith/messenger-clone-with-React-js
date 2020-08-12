import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username : 'irfan', text : 'hey guys'},
    {username : 'shayento', text : 'heloooooo'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //const username = prompt('please enter your name')
    setUsername(prompt('please enter your name'))
  }, [])
  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message
    setMessages([...messages, {username: username, text: input}]);
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
          <Message username={message.username} text={message.text}/>
        ))
      }
    </div>
  );
}

export default App;
