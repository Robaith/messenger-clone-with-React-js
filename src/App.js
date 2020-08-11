import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hi', 'hello', 'hey']);
  console.log(input);
  console.log(messages)

  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello</h1>
      
      <form>
        <FormControl>
        <InputLabel>Enter a message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message text={message}/>
        ))
      }
    </div>
  );
}

export default App;
