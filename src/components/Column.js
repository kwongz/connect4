import React, { useRef, useState } from 'react'
import Slot from './Slot'

function Column({ handleTurn, playerOneTurn }) {

    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const [tracker, setTracker] = useState(1)
    const playerColor = () => playerOneTurn ? 'red' : 'yellow'

    const handleCoinDrop = (e) => {
        console.log('coin dropped')

        const columnDivs = [
            inputRef1.current,
            inputRef2.current,
            inputRef3.current,
            inputRef4.current
        ]

        const targetDiv = columnDivs.find(div => div.id == tracker)

        if(tracker > columnDivs.length) {
            console.log('no more moves left')
        } else if (targetDiv.id == tracker) {
            console.log(`coin dropped into ${targetDiv.id} position`)
            setTracker(tracker + 1)
            targetDiv.style.backgroundColor = playerColor()
        }
        handleTurn()
        console.log('///////////End of Turn//////////////')
    }

    return (
        <div className='column' onClick={e => handleCoinDrop(e)}>
            <Slot inputRef={inputRef4} rowId={4}/>
            <Slot inputRef={inputRef3} rowId={3}/>
            <Slot inputRef={inputRef2} rowId={2}/>
            <Slot inputRef={inputRef1} rowId={1}/>
        </div>
    )
}

export default Column
