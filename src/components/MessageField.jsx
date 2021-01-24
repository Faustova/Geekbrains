import React from 'react';
//mport Message from './Message';


//export default class MessageField extends React.Component {
  // state = {
   //    messages: []
  // };

  // handleClick = () => {
  //     this.setState({ messages: [ ...this.state.messages, 'I am fine' ] });
  // };

  // componentDidUpdate() {
  //  if (this.state.messages.length % 2 === 1) { 
  //      setTimeout(() =>
  //      this.setState(
  //          { messages: [ ...this.state.messages, 'Sorry, I am busy' ] }),
  //      1000);
  //  }
//}

  // render() {
  //     const messageElements = this.state.messages.map((text, index) => (
  //         <Message key={ index } text={ text } />));

   //    return <div>
   //        { messageElements }
   //        <button className="button-text" onClick={ this.handleClick }>Send a message</button>
   //    </div>
  // }
//}

export default function MessageField ({message}) {
    return (
        <div> {message}</div>
    )
    
} 
