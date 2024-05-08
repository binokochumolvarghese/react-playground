import { useState, useEffect } from 'react'
import { db } from '../firebase/firebase';
import { collection, query, orderBy, onSnapshot, QuerySnapshot } from "firebase/firestore"
import EditNotes from './Note';
import Note from './Note';

const NotesManager = () => {

  const [noteData, setNoteData] = useState([{ id: '', noteTitle: '', note: '' }]);

  useEffect(() => {
    const q = query(collection(db, 'notes'), orderBy('created', 'desc'))

    onSnapshot(q, (querySnapshot) => {
      setNoteData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        noteTitle: doc.data().noteTitle,
        note: doc.data().note
      })))
    })
  }, [])
 

  return (
    <>
    <div className='container mx-auto px-4 ' >
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {noteData.map((note) => {
          return (
            <Note key={note.id} props={{ id: note.id, noteTitle: note.noteTitle, note: note.note }} />
          )
        })}
      </div>
      </div>
    </>
   
  )
}

export default NotesManager;