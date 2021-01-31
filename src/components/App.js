import React from "react";

import './App.css';

import Message from "./message";
import Input from "./input";

export default class App extends React.Component {
     state = {
       messages: [{ author: 'me', text: 'Hi!' }, { author: 'me', text: 'How are you?' }]
     }
  
     componentWillUnmount() {
       clearTimeout(this.timeout);
     }
  
     componentDidUpdate(prevProps, prevState) {
       const lastAuthor = this.state.messages[this.state.messages.length - 1].author;
  
       if (prevState.messages.length < lastAuthor !== 'bot' && this.state.messages.length) {
         this.timeout = setTimeout(() => {
           this.handleAddMessage('bot', 'Im a robot');
         }, 1500);
       }
     }
  
     renderMessage = (message, i) => {
       return (
         <Message message={message} key={i} />
       )
     }
  
     handleAddMessage = ( author = 'me', text) => {
       this.setState(state => ({
         messages: [...state.messages, { author, text }]
       }));
     }
  
     render() {
       return (
         <> 
         <div className="MessageText"> 
           {this.state.messages.map(this.renderMessage)}
           <Input onAddMessage={this.handleAddMessage} />
           </div>
    
         </>
       );
     }
   }