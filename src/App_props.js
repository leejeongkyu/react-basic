import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Counter from './components/Counter';

function App() {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);

  // const increment = () =>{
  //   console.log('increment');
  //   setCount(count + 1);
  // }

  // const increment1 = () =>{
  //   console.log('increment1');
  //   setCount1(count1 + 1);
  // }

  const [buttonName, setButtonName]= useState('클릭');
  const clickButton = () =>{
    setButtonName('click');
  }

  return (
    <div className="App">
      <h1>header</h1>
      {/* <button onClick={increment}>click{count}</button>
      <button onClick={increment1}>click{count1}</button> */}
      <Counter click='click1' />
      <Counter click={buttonName}/>
      <Counter />
      <button onClick={clickButton}>Click</button>
      
    </div>
  );
}

export default App;
