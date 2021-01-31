import React, { useState, useCallback } from 'react';
import Button from './button';

export default function Input({ onAddMessage }) {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onAddMessage(value);
    setValue('');
  }, [onAddMessage, value]);

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={value} />
      <Button children={<span>PotatoOrange</span>}  type='submit'/>
    </form>
  )
}