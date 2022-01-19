import React, {useState} from 'react'
import Column from './Column'

function Board({boardMatrix, setBoardMatrix}) {

    const [playerOneTurn, setPlayerOneTurn] = useState(true)
    const [resetTracker, setResetTracker] = useState(false)
    const playerNumber = playerOneTurn ? 1 : 2

    // toggle between player one and player 2
    const handleTurn = () => {
        if(playerOneTurn){
            setPlayerOneTurn(false)
        } else {
            setPlayerOneTurn(true)
        }
    }
    // receive the slot id and column id of where the coin was dropped, and update the board matrix 
    const getCoinPosition = (slotId, columnId) => {
        setBoardMatrix(boardMatrix, boardMatrix[columnId][slotId] = playerNumber)
    }

    // check the if there are coin next to the dropped coin
    // if they are the same track the number of consecutive coins
        // if they equal 4 WINNER
        // if they don't stop

    const checkWinner = (slotId, columnId) => {
        let count = 0
        let firstDirection = true
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
        checkDirectionWinner(slotId, columnId, manuel.up, manuel.down, count, firstDirection)
        // check left to right diagonal \
        checkDirectionWinner(slotId, columnId, manuel.leftUpDiag, manuel.leftDownDiag, count, firstDirection)
        // Check right to left diagonal /
        checkDirectionWinner(slotId, columnId, manuel.rightUpDiag, manuel.rightDownDiag, count, firstDirection)
    }

    const checkDirectionWinner = (slotId, columnId, firstDirectionManuel, secondDirectionManuel, count, firstDirection) => {

        // Set the position value of the left and right coin of the current coin being checked
        const firstDirectionColPos = columnId + firstDirectionManuel[0]
        const firstDirectionSlotPos = slotId + firstDirectionManuel[1]
        const secondDirectionColPos = columnId + secondDirectionManuel[0]
        const secondDirectionSlotPos = slotId + secondDirectionManuel[1]
        // when more then 3 coins have been counted
        if(count === 3){
            return alert('winner')
        }
        // Check left side of coin if at the edge of the right side of board
        if(firstDirectionColPos === boardMatrix.length || firstDirectionColPos < 0 ) {
            firstDirection = false;
            count = 0
        }
        // Check Left side of coin
        if(secondDirectionColPos < boardMatrix.length && secondDirectionColPos > -1 && !firstDirection) {
            if(boardMatrix[secondDirectionColPos][secondDirectionSlotPos] === playerNumber){
                count++;
                checkDirectionWinner(secondDirectionSlotPos, secondDirectionColPos, firstDirectionManuel, secondDirectionManuel, count, firstDirection);
            }
        }
        // check right side of coin
        if(firstDirectionColPos < boardMatrix.length && firstDirectionColPos > -1 && firstDirection) {
            if(boardMatrix[firstDirectionColPos][firstDirectionSlotPos] === playerNumber){
                count++;
                checkDirectionWinner(firstDirectionSlotPos, firstDirectionColPos, firstDirectionManuel, secondDirectionManuel, count, firstDirection);
            } else {
                firstDirection = false;
                count = 0
                checkDirectionWinner(slotId, columnId, firstDirectionManuel, secondDirectionManuel, count, firstDirection);
            }
        }
    }

    const buttonReset = () => {
        setPlayerOneTurn(true)
        setResetTracker(true)
        setBoardMatrix([
            [0,0,0,0,0,0],//0
            [0,0,0,0,0,0],//1
            [0,0,0,0,0,0],//2
            [0,0,0,0,0,0],//3
            [0,0,0,0,0,0],//4
            [0,0,0,0,0,0],//5
            [0,0,0,0,0,0] //6
        ])
        setResetTracker(false)
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
                resetTracker={resetTracker}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={1}
                resetTracker={resetTracker}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn} 
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={2}
                resetTracker={resetTracker}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={3}
                resetTracker={resetTracker}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={4}
                resetTracker={resetTracker}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={5}
                resetTracker={resetTracker}
            />
            <Column 
                handleTurn={handleTurn} 
                playerOneTurn={playerOneTurn}
                getCoinPosition={getCoinPosition}
                checkWinner={checkWinner}
                columnId={6}
                resetTracker={resetTracker}
            />
        </div>
        <button onClick={buttonReset}>Reset</button>
    </>
    )
}

export default Board
