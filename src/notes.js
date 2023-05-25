import { useEffect, useState } from "react";
import { Note } from "./note";
import "./index.css"
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNotes";

export const App = () => {
//   if (typeof notes === 'undefined' || notes.length === 0 ){
//     return 'No hay notas que mostrar'
//   }
const [notes, setNotes] = useState([]);
const [newNote, setNewNote] = useState('')
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

useEffect(() => {
  setLoading(true)
  console.log('useEffect')
  getAllNotes().then((notes) =>{
    setNotes(notes);
    setLoading(false)
  });
}, []);

const handleChange = (event) =>{

  setNewNote(event.target.value)

};
  
const handleSubmit =(event)=>{
  event.preventDefault();
  console.log('crear nota')
  const noteToAddToState ={
    title: newNote,
    body: newNote,
    userId: 1
  };

  setError('');

  createNote(noteToAddToState)
    .then(newNote=>{
      setNotes((notes) => notes.concat(newNote))
    })
    .catch((error) =>{
      console.error(error);
      setError('la API ha petado')
    })
  
  setNewNote('')
};


  return (
    <div>
    <h1>Notes</h1>
    {
      loading ? 'Cargando...' : ''
    }

    {error ? error : ''}
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

