import React from 'react';
//import PropTypes from 'prop-types';
import "./message.css";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: {
            text: 'Text'
          }
        }
      };

       render() {
   return <div className="text-field">{ this.props.text }</div>

   }
}


//export default class Message extends React.Component {
 //  static propTypes = {
  //     text: PropTypes.string.isRequired,
  // };
  // render() {
   //    return <div>{ this.props.text }</div>
   //}
//}