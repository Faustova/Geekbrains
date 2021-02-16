import React from "react";
import Message from "./messageField";
import Input from "./input";

import './App.css';

export default class App extends React.Component {
     state = {
      chats: [{ title: 'Чат 1', messageList: [1] }, { title: 'Чат 2', messageList: [2] }],
      messages: [{ text: 'message1', author: 'me' }, { text: 'message2', author: 'me' }]
     }
  
     componentWillUnmount() {
       clearTimeout(this.timeout);
     }
  
     componentDidUpdate(prevProps, prevState) {
      const lastAuthor = this.state.messages[this.state.messages.length - 1].author;

  
      if (prevState.messages.length < this.state.messages.length && lastAuthor !== 'robot') {
              this.timeout = setTimeout(() => {
                 this.handleAddMessage('Im a robot', 'robot');
               }, 1500);
             }
           }
  
     renderMessage = (message, i) => {
       return (
        <Message message={message} key={i} />
       )
     }
  
     handleAddMessage = (text, author = 'me') => {
           this.setState(state => ({
             messages: [...state.messages, {text, author}]
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