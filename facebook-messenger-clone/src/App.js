import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState('');

	// useState = variable in react
	// useEffect = run code on a condition in REACT

	useEffect(() => {
		//run once when the app component loads
		db.collection('messages').onSnapshot((snapshot) => {
			setMessages(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);

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

		db.collection('messages').add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp,
		});
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
						onClick={sendMessage}>
						Send
					</Button>
				</FormControl>
			</form>

			{/* messages */}

			{messages.map((message) => (
				<Message username={username} message={message} />
			))}
		</div>
	);
}

export default App;
