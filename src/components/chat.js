import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';

export default function Chat({ chats }) {
  const { chatId } = useParams();
  const chat = useMemo(() => chats.find(t => t.id === chatId), [chatId, chats]);

  if (!chat) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <h3>Chat ID: {chat.id}</h3>
      <h4>Chat Text: {chat.text}</h4>
    </>
  );
}