import './App.css';
import Board from './components/Board'

function App() {

    const boardMatrix = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
    ]
  return (
    <div className="App">
      <Board boardMatrix={boardMatrix}/>
    </div>
  );
}

export default App;
