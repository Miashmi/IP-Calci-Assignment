import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleChange1 = (event) => {
    setNum1(Number(event.target.value));  // Convert input to number
  };

  const handleChange2 = (event) => {
    setNum2(Number(event.target.value));  // Convert input to number
  };

  const addNumbers = () => {
    setResult(num1 + num2);
  };

  const subtractNumbers = () => {
    setResult(num1 - num2);
  };

  const multiplyNumbers = () => {
    setResult(num1 * num2);
  };

  const divideNumbers = () => {
    setResult(num1 / num2);
  };

  return (
    <>
      <h1>Simple Calculator</h1>
      <input
        type='number'
        onChange={handleChange1}
        value={num1}
        placeholder='Enter number 1'
      />

      <input
        type='number'
        onChange={handleChange2}
        value={num2}
        placeholder='Enter number 2'
      />
      
      <p>Result: {result}</p>
      
      <button onClick={addNumbers}>Add</button>
      <button onClick={subtractNumbers}>Subtract</button>
      <button onClick={multiplyNumbers}>Multiply</button>
      <button onClick={divideNumbers}>Divide</button>
    </>
  );
}

export default App;
