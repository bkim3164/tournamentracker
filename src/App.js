import './App.css';
import knight from './chessknight.png';
import { useState } from 'react';

function App() {
  const [id, setID] = useState("");

  function handleChange(event) {
    setID(event.target.value);
  }
  function clickButton(event) {
    event.preventDefault();


  }
  return (
    <div className="container">
      <img className="knight" src={knight} alt="knight pic" />
      <form>
        <label>
          Enter Tournament ID:
          <input onChange={handleChange} type="text" name="id" />
        </label>
        <input onClick={clickButton} className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
