import { useEffect, useState } from "react";
import { Note } from "./note";
import axios from "axios";
import "./index.css"

export const App = () => {
//   if (typeof notes === 'undefined' || notes.length === 0 ){
//     return 'No hay notas que mostrar'
//   }
const [notes, setNotes] = useState([]);
const [newNote, setNewNote] = useState('')
const [loading, setLoading] = useState(false)

useEffect(() => {
  setLoading(true)
  setTimeout(()=>{
  console.log('useEffect')
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    setNotes(json)
    setLoading(false)
  })
}, 2000);
}, []);

const handleChange = (event) =>{
  setNewNote(event.target.value)

};

const handleSubmit =(event)=>{
  event.preventDefault();
  console.log('crear nota')

  const noteToAddToState ={
    id: notes.length + 1,
    title: newNote,
    body: newNote,
  }
  console.log(noteToAddToState)

  setNotes(notes.concat(noteToAddToState))
  setNewNote('')
};


  return (
    <div>
    <h1>Notes</h1>
    {
      loading ? 'Cargando...' : ''
    }
    <ol>
      {notes.map(note => (
      <Note key={note.id} {...note} />
      ))}
    </ol>
    <br/>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} value={newNote}/>
    <button>Crear Nota</button>
    </form>
    </div>
  );
};

