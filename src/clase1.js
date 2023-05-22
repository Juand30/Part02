import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Exercise1 from './ejercicio1.6';

const WarningNotUsed = ()=>{
    return <h1>Todavía no se ha usado</h1>
}

const ListOfClicks = ({clicks})=>{
    console.log({clicks})
    // debugger;
    return <p>{clicks.join(", ")}</p>
}
const App= ()=>{

// const [left, setLeft] = useState(0)
// const [rigth, setRigth] = useState(0)

const [counters, setCounters] = useState({
    left: 0,
    rigth: 0,
    mensaje: 'Mensaje en el estado'
})

const [clicks, setClicks] = useState([])

const handleClickLeft=(e)=>{
    console.log(e)
   const newCountersState = {
        ...counters,
        left: counters.left + 1,
      
    };
 
    setCounters(newCountersState);
    setClicks((prevClicks) => [...prevClicks, 'L']);
};

const handleClickRigth=()=>{
    setCounters({
        ...counters,
        rigth: counters.rigth + 1,
        
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
        <p>Clicks totales:{clicks.length}</p>
        {clicks.length === 0 ? (
            <WarningNotUsed />
        ) : (
            <ListOfClicks clicks={clicks} />
        )}
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Exercise1 />
    );