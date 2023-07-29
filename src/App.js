import './App.css';
import knight from './chessknight.png';
import { useState } from 'react';

function App() {
  const [id, setID] = useState("");
  const [data, setData] = useState("");

  function handleChange(event) {
    setID(event.target.value);
  }
  function clickButton(event) {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(`https://lichess.org/api/broadcast/${id}.pgn`, {
          headers: {
            accept: 'application/x-ndjson'
          }
        });
        const responseData = await response.json();
        setData(responseData);

      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    if (fetchData) {
      console.log(data);
    }

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
