import React from 'react'

function Slot({inputRef, rowId}) {

    // const [playerColor, setPlayerColor] = useState(null)
    return (
        <div className='slot' ref={inputRef} id={rowId}>
            
        </div>
    )
}

export default Slot
