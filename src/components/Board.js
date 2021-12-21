import React, {useState} from 'react'
import Column from './Column'

function Board({boardMatrix}) {

    const [playerOneTurn, setPlayerOneTurn] = useState(true)
    const playerNumber = playerOneTurn ? 1 : 2

    // toggle between player one and player 2
    const handleTurn = () => {
        if(playerOneTurn){
            console.log('Player 1 went, now Player 2 turn')
            setPlayerOneTurn(false)
        } else {
            console.log('Player 2 went, now Player 1 turn')
            setPlayerOneTurn(true)
        }
    }
    // receive the slot id and column id of where the coin was dropped, and update the board matrix 
    const getCoinPosition = (slotId, columnId) => {
        boardMatrix[columnId][slotId] = playerNumber
    }

    // check the if there are coin next to the dropped coin
    // if they are the same track the number of consecutive coins
        // if they equal 4 WINNER
        // if they don't stop
    const checkRowWinner = (slotId, columnId) => {
        console.log('checking...')
        console.log(boardMatrix)
        let consecutiveCoin = 0
        boardMatrix.map(row => {
            if (row[slotId] === playerNumber) {
                consecutiveCoin++
                console.log(consecutiveCoin)
            } 
        })
        if (consecutiveCoin === 4) {
            alert('winner')
        }
    }

    const checkColumnWinner = (slotId, columnId) => {
    console.log('checking...')
    console.log(boardMatrix)
    let consecutiveCoin = 0
    boardMatrix.map(row => {
        if (row[slotId] === playerNumber) {
            consecutiveCoin++
            console.log(consecutiveCoin)
        } 
    })
    if (consecutiveCoin === 4) {
        alert('winner')
    }
}

    return (
    <>    
        <div className='board'>
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn} 
                getCoinPosition={getCoinPosition}
                checkRowWinner={checkRowWinner}
                columnId={0}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkRowWinner={checkRowWinner}
                columnId={1}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn} 
                getCoinPosition={getCoinPosition}
                checkRowWinner={checkRowWinner}
                columnId={2}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkRowWinner={checkRowWinner}
                columnId={3}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkRowWinner={checkRowWinner}
                columnId={4}
            />
        </div>
        <button>Reset</button>
    </>
    )
}

export default Board
