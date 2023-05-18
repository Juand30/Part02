import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

const App= ()=>{

// const [left, setLeft] = useState(0)
// const [rigth, setRigth] = useState(0)

const [counters, setCounters] = useState({
    left: 0,
    rigth: 0,
    clicks: 0,
    mensaje: 'Mensaje en el estado'
})

const [clicks, setClicks] = useState([])

const handleClickLeft=()=>{
   const newCountersState = {
        ...counters,
        left: counters.left + 1,
        clicks: counters.clicks +1
    };

    setCounters(newCountersState);
    setClicks((prevClicks) => [...prevClicks, 'L']);
};

const handleClickRigth=()=>{
    setCounters({
        ...counters,
        rigth: counters.rigth + 1,
        clicks: counters.clicks +1
    });
    setClicks((prevClicks) => [...prevClicks, 'R']);
}
return(
    <div>
        {counters.left}
        <button onClick={handleClickLeft}>
            Left
        </button>
        <button onClick={handleClickRigth}>
            Rigth
        </button>
        {counters.rigth}
        <p>Clicks totales:{counters.clicks}</p>
        {clicks}
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
    );