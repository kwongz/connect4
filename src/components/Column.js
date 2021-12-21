import React, { useRef, useState } from 'react'
import Slot from './Slot'

function Column({ handleTurn, playerOneTurn, columnId, getCoinPosition, checkRowWinner }) {

    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const columnRef = useRef()
    const [tracker, setTracker] = useState(0)
    const playerColor = () => playerOneTurn ? 'red' : 'yellow'

    // handle the onClick of the column or slot(event bubbling) and run the functions required for each players turn
    const handleCoinDrop = (e) => {
        const columnSlots = []
        // using column ref to find child nodes (slots), and putting them into an array to be manipulated
        const columnChildNodes = columnRef.current.childNodes
        columnChildNodes.forEach(div => columnSlots.push(div))

        const targetDiv = columnSlots.find(div => div.id == tracker)
        dropCoinIntoPosition(columnSlots, targetDiv)
        getCoinPosition(targetDiv.id, columnRef.current.id)
        checkRowWinner(targetDiv.id, columnRef.current.id)
        handleTurn()
        console.log('///////////End of Turn//////////////')
    }

    // this function styles the coin to the color of the player, and increases the tracker by 1 to indicate the bottom slot has been filled, and the slot above is where the next coin should fall.
    const dropCoinIntoPosition = (columnSlots, targetDiv) => {
        if(tracker > columnSlots.length - 1) {
            alert('invalid move, column is full')
        } else if (targetDiv.id == tracker) {
            console.log('coin dropped')
            setTracker(tracker + 1)
            targetDiv.style.backgroundColor = playerColor()
        }
    }



    return (
        <div className='column' onClick={e => handleCoinDrop(e)} id={columnId} ref={columnRef}>
            <Slot inputRef={inputRef4} rowId={4}/>
            <Slot inputRef={inputRef4} rowId={3}/>
            <Slot inputRef={inputRef3} rowId={2}/>
            <Slot inputRef={inputRef2} rowId={1}/>
            <Slot inputRef={inputRef1} rowId={0}/>
        </div>
    )
}

export default Column
