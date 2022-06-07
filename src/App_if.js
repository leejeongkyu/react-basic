import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Counter from './components/Counter';

function App() {
  
  const [condition, setCondition] = useState(false);
  const toggle = () =>{
    setCondition(!condition);
  }

  useEffect(()=>{
    console.log(condition);
  }, [condition])

  const renderCondition = condition ? 'True' : 'False'
  console.log('111');

  return (
    <div className="App">
      <h1>header</h1>
      <div>{renderCondition}</div>
      <button onClick={toggle}>Toggle</button>
      
    </div>
  );
}

export default App;
