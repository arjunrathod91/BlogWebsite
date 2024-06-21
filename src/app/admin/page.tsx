"use client"
import axios from 'axios';
import React, { useState, ChangeEvent } from 'react';

const Admin: React.FC = () => {
  const [inputtitle, setInputTitle] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('');
  const [inputimg,setInputImg] = useState<string>('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputImg(e.target.value);
  };

  const submit = async () => {
    try {
      const response = await axios.post('https://restapi-hsoe.onrender.com/blogs', {
        title: inputtitle,
        img:inputimg,
        content: inputContent,
      });
      console.log('Response:', response.data); 
      setInputTitle('');
      setInputImg('');
      setInputContent('');
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  return (
    <div>
      <input
        placeholder='title'
        value={inputtitle}
        onChange={handleTitleChange}
        name='title'
      />
      <input
        placeholder='img'
        value={inputimg}
        onChange={handleImgChange}
        name='img'
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
