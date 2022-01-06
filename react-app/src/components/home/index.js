import './index.css'
import Cell from '../cell';
const Home = () => {
    const rows = [0, 1, 2];
    const cols = [0, 1, 2];
    return (
        <>
            <div className='homePage'>
                <h1>Live Tic-Tac-Toe</h1>
                {rows.map((x) => (
                    <div className='rows'>
                        {cols.map((y) => (
                            <div className='cols'>
                                <Cell value={`${x}, ${y}`}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
