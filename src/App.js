import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Simple Form</h1>
    <Form>
      <label>Name:</label>
      <input type="text" name="name" /><br /> <br />
      <label>Email:</label>
      <input type="email" name="email" /><br /> <br />
      <button type="submit">Submit</button>
      </Form>
    </div>
  );
 }

export default App;
