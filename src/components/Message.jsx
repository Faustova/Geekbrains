import React, { useCallback, useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import "./message.css";
import Input from "./input";
import 'bootstrap/dist/css/bootstrap.css';


export default function Message(){
    const [messages, setMessages] = useState([
        {text: "message1", author: 'me'},
        {text: "message2", author: 'me'},
    ]);

    const renderMessage = useCallback((message, i) => {
        return(
            <Message message={message} key={i} />
        );
    }, []);

    const handleAddMessage = useCallback((text, author = 'me') => {
        setMessages((oldMessages) => ([...oldMessages, {text, author}]));
    }, []);
    
    useEffect(() => {
        let timeout;
    if (messages[messages.length-1].author !== 'robot' ){
        timeout = setTimeout(() => {
            handleAddMessage ('some answer', 'robot')
        }, 1500);
    }

    return () => {
        clearTimeout(timeout);
    }
    }, [messages, handleAddMessage]);


       return (
           <>
           {messages.map(this.renderMessage)}
           <Input onAddMessage={handleAddMessage} />
           </>
       )
}


//export default class Message extends React.Component {
  //  constructor(props) {
    //    super(props);
      //  this.state = {
        //  messages: {
          //  text: 'Text'
        //  }
       // }
     // };

      // render() {
   // return <div className="text-field">{ this.props.text }</div>

  // }
// }


//export default class Message extends React.Component {
 //  static propTypes = {
  //     text: PropTypes.string.isRequired,
  // };
  // render() {
   //    return <div>{ this.props.text }</div>
   //}
//}