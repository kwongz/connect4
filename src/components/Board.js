import React, {useState} from 'react'
import Column from './Column'

function Board({boardMatrix}) {

    const [playerOneTurn, setPlayerOneTurn] = useState(true)
    const playerNumber = playerOneTurn ? 1 : 2
    const [consecutiveDiagonalCoin, setConsecutiveDiagonalCoin] = useState(0)

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

    const checkWinner = (slotId, columnId) => {
        let count = 0
        let checkRight = true
        console.log(boardMatrix)
        const manuel = {
            leftUpDiag: [-1, 1],
            leftDownDiag: [1, -1],
            rightUpDiag: [-1, -1],
            rightDownDiag: [1,1],
            up: [1,0],
            down:[-1,0],
            right: [0,1],
            left: [0,-1]
        } 
        // Check Row winner
        checkDirectionWinner(slotId, columnId, manuel.right, manuel.left, count, checkRight)
        // Check ColumnWinner
        // checkDirectionWinner(slotId, columnId, manuel.up, manuel.down, count, checkRight)

    }

    const checkDirectionWinner = (slotId, columnId, manuelRight, manuelLeft, count, checkRight) => {
        console.log('New Function Execution')
        console.log('checking current column',columnId)

        
        // Set the position value of the left and right coin of the current coin being checked
        const rightCoinPos = columnId + manuelRight[1]
        const leftCoinPos = columnId + manuelLeft[1]
        // when more then 3 coins have been counted
        if(count === 3){
            return alert('winner')
        }

        // Check left side of coin if at the edge of the right side of board
        if(rightCoinPos === boardMatrix.length) {
            checkRight = false;
        }
        // Check Left side of coin
        if(leftCoinPos > -1 && !checkRight) {
            console.log('checking left');
            if(boardMatrix[leftCoinPos][slotId] === playerNumber){
                count++;
                console.log('left',count);
                checkDirectionWinner(slotId, leftCoinPos, manuelRight, manuelLeft, count, checkRight);
            }
        }
        
        // check right side of coin
        if(rightCoinPos < boardMatrix.length && checkRight) {
            if(boardMatrix[rightCoinPos][slotId] === playerNumber){
                count++;
                console.log('right',count);
                checkDirectionWinner(slotId, rightCoinPos, manuelRight, manuelLeft, count, checkRight);
            } else {
                console.log('check left');
                checkRight = false;
                count = 0;
                checkDirectionWinner(slotId, columnId, manuelRight, manuelLeft, count, checkRight);
            }
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
