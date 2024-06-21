"use client"
import axios from 'axios';
import React, { useState, ChangeEvent } from 'react';

const Admin: React.FC = () => {
  const [inputName, setInputName] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  const submit = async () => {
    try {
      const response = await axios.post('https://restapi-hsoe.onrender.com/tasks', {
        name: inputName,
        content: inputContent,
      });
      console.log('Response:', response.data); 
      setInputName('');
      setInputContent('');
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  return (
    <div>
      <input
        placeholder='name'
        value={inputName}
        onChange={handleNameChange}
        name='name'
      />
      <input
        placeholder='content'
        value={inputContent}
        onChange={handleContentChange}
        name='content'
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Admin;
