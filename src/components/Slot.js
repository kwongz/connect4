import React from 'react'

function Slot({inputRef, rowId}) {
    return (
        <div className='slot' ref={inputRef} id={rowId}>
            
        </div>
    )
}

export default Slot
