import React, { useState } from 'react';
import './App.css';

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
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type='submit' onClick={sendMessage}>Send</button>
      </form>

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
