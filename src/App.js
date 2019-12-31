import React from 'react';
import HeadCaption from './components/HeadCaption'
import TaskList from './components/TaskList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadCaption />
      </header>
        <div className="contnent">
<TaskList/>
        </div>
    </div>
  );
}


export default App;
