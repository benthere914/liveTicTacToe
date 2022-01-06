import { useEffect, useState } from 'react'
import './index.css'
const Cell = ({x, y, values, setValues, myChar, setYourTurn, yourTurn}) => {
    const cellClickHandler = () => {
        if (!yourTurn) return
        setValues((prev) => {
            prev[`${x},${y}`] = myChar;
            return prev
        })
        setYourTurn((prev) => !prev)
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
