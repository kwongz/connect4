import React, {useState} from 'react'
import Column from './Column'

function Board() {

    const [playerOneTurn, setPlayerOneTurn] = useState(true)

    const handleTurn = () => {
        if(playerOneTurn){
            console.log('Player 1 went, now Player 2 turn')
            setPlayerOneTurn(false)
        } else {
            console.log('Player 2 went, now Player 1 turn')
            setPlayerOneTurn(true)
        }
    }

    return (
    <>    
        <div className='board'>
            <Column handleTurn={handleTurn} playerOneTurn={playerOneTurn}/>
            <Column handleTurn={handleTurn} playerOneTurn={playerOneTurn}/>
            <Column handleTurn={handleTurn} playerOneTurn={playerOneTurn}/>
            <Column handleTurn={handleTurn} playerOneTurn={playerOneTurn}/>
        </div>
        <button>Reset</button>
    </>
    )
}

export default Board
