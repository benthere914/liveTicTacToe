import { useEffect, useState } from 'react'
import './index.css'
const Cell = ({x, y, values, setValues, myChar, setYourTurn, yourTurn, socket, roomId, nextTurn}) => {
    const cellClickHandler = () => {
        // if (nextTurn === myChar) return
        setValues((prev) => {
            prev[`${x},${y}`] = myChar;
            socket.emit('updateBoard', {'values': prev, 'room': roomId, 'lastPlayed': myChar})
            return prev
        })
        // setYourTurn(prev => !prev)
    }

    return (
        <>
            <div className='cell' onClick={cellClickHandler}>
                <p className='cellValue'>{values[`${x},${y}`]}</p>
            </div>
        </>
    )
}

export default Cell
