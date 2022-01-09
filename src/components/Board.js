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
        let firstDirection = true
        console.log(boardMatrix)
        const manuel = {
            leftUpDiag: [-1, 1],
            leftDownDiag: [1, -1],
            rightUpDiag: [1, 1],
            rightDownDiag: [-1,-1],
            up: [0,1],
            down:[0,-1],
            right: [1,0],
            left: [-1,0]
        } 
        // Check Row winner
        checkDirectionWinner(slotId, columnId, manuel.right, manuel.left, count, firstDirection)
        // Check ColumnWinner
        // checkDirectionWinner(slotId, columnId, manuel.up, manuel.down, count, firstDirection)
        // check left to right diagonal \
        // checkDirectionWinner(slotId, columnId, manuel.leftUpDiag, manuel.leftDownDiag, count, firstDirection)
        // Check right to left diagonal /
        // checkDirectionWinner(slotId, columnId, manuel.rightUpDiag, manuel.rightDownDiag, count, firstDirection)

    }

    const checkDirectionWinner = (slotId, columnId, firstDirectionManuel, secondDirectionManuel, count, firstDirection) => {
        console.log('New Function Execution')
        console.log('checking current column',columnId)
        // debugger;

        // Set the position value of the left and right coin of the current coin being checked
        const firstDirectionColPos = columnId + firstDirectionManuel[1]
        const firstDirectionSlotPos = slotId + firstDirectionManuel[0]
        const secondDirectionColPos = columnId + secondDirectionManuel[1]
        const secondDirectionSlotPos = slotId + secondDirectionManuel[0]
        // when more then 3 coins have been counted
        if(count === 3){
            return alert('winner')
        }

        // Check left side of coin if at the edge of the right side of board
        if(firstDirectionColPos === boardMatrix.length ) {
            firstDirection = false;
        }

        // Check Left side of coin
        if(secondDirectionColPos > -1 && !firstDirection) {
            console.log('checking left');
            if(boardMatrix[secondDirectionColPos][secondDirectionSlotPos] === playerNumber){
                count++;
                console.log('left',count);
                checkDirectionWinner(secondDirectionSlotPos, secondDirectionColPos, firstDirectionManuel, secondDirectionManuel, count, firstDirection);
            }
        }
        
        // check right side of coin
        if(firstDirectionColPos < boardMatrix.length && firstDirection) {
            if(boardMatrix[firstDirectionColPos][firstDirectionSlotPos] === playerNumber){
                count++;
                console.log('right',count);
                checkDirectionWinner(firstDirectionSlotPos, firstDirectionColPos, firstDirectionManuel, secondDirectionManuel, count, firstDirection);
            } else {
                console.log('check left');
                firstDirection = false;
                count = 0;
                checkDirectionWinner(slotId, columnId, firstDirectionManuel, secondDirectionManuel, count, firstDirection);
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
