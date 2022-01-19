import React from 'react'

function Slot({rowId, hoverStyle}) {
    return (
        <div className={`slot ${hoverStyle}`} id={rowId}>
            
        </div>
    )
}

export default Slot
