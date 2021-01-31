
import React from 'react';
import './message.css';

export default function Message({ message }) {
  return (
  <div className="MessageText">{message.author}:{message.text}</div>
  )
}