import './index.css';
import Cell from '../cell';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
let socket;
const Home = () => {
    const rows = [0, 1, 2];
    const cols = [0, 1, 2];
    const [nextTurn, setNextTurn] = useState('X')
    const [roomId, setRoomId] = useState(0)
    const [yourTurn, setYourTurn] = useState(true);
    const [myChar, setMyChar] = useState('X')
    const [values, setValues] = useState({
        '0,0': '',
        '0,1': '',
        '0,2': '',
        '1,0': '',
        '1,1': '',
        '1,2': '',
        '2,0': '',
        '2,1': '',
        '2,2': '',
    })

    useEffect(() => {
        socket = io('http://localhost:5000');
        socket.emit('setUp')
        socket.on('setUpChar', (data) => {setMyChar(data['char']); setRoomId(data['room']); console.log(data)})
        socket.on('updateBoard', (data) => {setValues(data['values']); setNextTurn(data['turn']); console.log(data)})
        return (() => {socket.disconnect()})
    }, [])
    return (
        <>
            <div className='homePage'>
                <h1>Live Tic-Tac-Toe</h1>
                <h2>{myChar}</h2>
                {rows.map((x) => (
                    <div className='rows' key={uuidv4()}>
                        {cols.map((y) => (
                            <div className='cols' key={uuidv4()}>
                                <Cell
                                    x={x}
                                    y={y}
                                    myChar={myChar}
                                    setValues={setValues}
                                    values={values}
                                    setYourTurn={setYourTurn}
                                    yourTurn={yourTurn}
                                    socket={socket}
                                    roomId={roomId}
                                    nextTurn={nextTurn}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
