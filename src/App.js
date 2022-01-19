import './App.css';
import Board from './components/Board'
import {useState} from 'react'

function App() {

  const [boardMatrix, setBoardMatrix] = useState([
        [0,0,0,0,0,0],//0
        [0,0,0,0,0,0],//1
        [0,0,0,0,0,0],//2
        [0,0,0,0,0,0],//3
        [0,0,0,0,0,0],//4
        [0,0,0,0,0,0],//5
        [0,0,0,0,0,0] //6
    ])

  return (
    <div className="App">
      <div className='wrapper'>
        <Board boardMatrix={boardMatrix} setBoardMatrix={setBoardMatrix}/>
      </div>
    </div>
  );
}

export default App;
