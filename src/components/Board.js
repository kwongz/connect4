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

    const checkWinner = (slotId,columnId) => {
        checkRowWinner(slotId)
        checkColumnWinner(columnId)
    }
    const checkRowWinner = (slotId) => {
        let consecutiveCoin = 0
        boardMatrix.forEach(row => {
            if (row[slotId] === playerNumber) {
                consecutiveCoin++
            }
        })
        if (consecutiveCoin >= 4) {
            alert(`Player ${playerNumber} wins by row`)
        }
    }

    const checkColumnWinner = (columnId) => {
        let consecutiveCoin = 0
        boardMatrix[columnId].forEach(slot => {
            if(slot === playerNumber) {
                consecutiveCoin++
            }
        })
        if (consecutiveCoin >= 4) {
            alert(`Player ${playerNumber} wins by column`)
        }
}

    return (
    <>    
        <div className='board'>
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn} 
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={0}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={1}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn} 
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={2}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={3}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={4}
            />
        </div>
        <button>Reset</button>
    </>
    )
}

export default Board
