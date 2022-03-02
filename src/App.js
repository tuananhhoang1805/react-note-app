import React, { useState, useEffect }from 'react';
import { customAlphabet } from 'nanoid';
import Split from 'react-split';
import Editor from './components/editor/Editor';
import Sidebar from './components/sidebar/Sidebar';
import { NoNote, FirstNoteButton } from './Style'




function App() {

  const [ notes , setNotes ] = useState(() => 
    JSON.parse(localStorage.getItem('notes')) || []
  )
  const [ currentNoteID, setCurrentNoteID ] = useState([notes[0] && notes[0].id] || 0)
  const nanoid = customAlphabet('1234567890', 10)

  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
      console.log("run")
  },[notes])

  function createNotes(){
    const newNote ={
      id: nanoid(),
      body: "# Type note's title in here"
    }
    setNotes(prevNote => [newNote , ...prevNote])
    setCurrentNoteID(newNote.id)
  }

  function findCurrentNote(){
      return notes.find(note => {
        return note.id === currentNoteID
      }) || notes[0]
  }

  function updateNote(text){
      setNotes(oldNotes => {
        const newArry = [];
        for (let i = 0; i < oldNotes.length; i++) {
            const oldNote = oldNotes[i];
            if (oldNote.id === currentNoteID) {
                newArry.unshift({ ...oldNote, body: text })
            }
            else{
              newArry.push(oldNote)
            }
        }
        return newArry
      })
  }

  function deleteNote(noteID){
    setNotes(oldNote => oldNote.filter(note => note.id !== noteID))
    console.log(noteID)
  }
  console.log(notes)
  console.log(currentNoteID)
  return (
   <main>
     
      {notes.length > 0 
      ?
      <Split
        sizes={[30, 70]} 
        direction="horizontal" 
        style={{ display: 'flex'}}
      >
          <Sidebar 
              notes={notes}
              currentNote={findCurrentNote()}
              newNote ={createNotes}
              setcurrentNoteID={setCurrentNoteID}
              deleteNote={deleteNote}
          />
          <Editor 
              currentNote={findCurrentNote()}
              updateNote={updateNote}
          />
      </Split>
      :
      <NoNote>
          <h1>You have no notes</h1>
          <FirstNoteButton 
            onClick={createNotes}
          >
            Create one now
          </FirstNoteButton>
      </NoNote> 
      }
   </main>
  );
}

export default App;
