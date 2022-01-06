import './index.css';
import Cell from '../cell';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
    const rows = [0, 1, 2];
    const cols = [0, 1, 2];
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

    console.log(values)
    return (
        <>
            <div className='homePage'>
                <h1>Live Tic-Tac-Toe</h1>

                {rows.map((x) => (
                    <div className='rows' key={uuidv4()}>
                        {cols.map((y) => (
                            <div className='cols' key={uuidv4()}>
                                <Cell x={x} y={y} myChar={myChar} setValues={setValues} values={values} setYourTurn={setYourTurn} yourTurn={yourTurn}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
