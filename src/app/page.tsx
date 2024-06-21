"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define a TypeScript interface for Task object
interface Task {
  name: string;
  content: string;
}

const Home: React.FC = () => {
  // State to hold tasks fetched from API
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from API on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>('https://restapi-hsoe.onrender.com/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <h1>Blog Website</h1>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.name}</h3>
            <p>{task.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
