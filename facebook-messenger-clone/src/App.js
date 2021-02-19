import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'Annika', text: 'hi' },
    { username: 'Stephen', text: 'hey' },
  ]);
  const [username, setUsername] = useState('');

  // useState = variable in react
  // useEffect = run code on a condition in REACT

  useEffect(() => {
    //run code here...
    //const username = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));
  }, []); //condition
  //if its blank inside [], this code runs ONCE when app component loads
  //if there is a variable like input inside [] e.g.[input], it runs every time input changes

  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Hello</h1>
      <h2>Welcome {username}</h2>

      {/* input field and send button */}
      <form>
        <FormControl>
          <InputLabel>Write message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>

      {/* messages */}

      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
