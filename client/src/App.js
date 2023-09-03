import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/courses')
  //     .then(response => response.json())
  //     .then(responseData => console.log(setCourses));
  //     .catch()
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        setCourses(response.data)
        // handle success
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }, []);


  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        {courses.map(course => (
          <li key= {course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
