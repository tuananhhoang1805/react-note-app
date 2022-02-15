import React, { useState }from 'react';
import { customAlphabet } from 'nanoid';
import Split from 'react-split';
import Editor from './components/editor/Editor';
import Sidebar from './components/sidebar/Sidebar';
import { NoNote, FirstNoteButton } from './Style'





function App() {

  const [ notes , setNotes ] = useState([])
  const [ currentNoteID, setCurrentNoteID ] = useState([notes[0] && notes[0].id] || 0)
  const nanoid = customAlphabet('1234567890', 10)
  function createNotes(){
    const newNote ={
      id: nanoid(),
      body: "# Type note's title in here"
    }
    setNotes(prevNote => [...prevNote, newNote])
    setCurrentNoteID(newNote.id)
    console.log(notes)
    console.log(currentNoteID)
  }

  function findCurrentNote(){
      return notes.find(note => {
        return note.id === currentNoteID
      }) || notes[0]
  }

  function updateNote(text){
      setNotes(oldNote => oldNote.map(oldNote => {
        return oldNote.id === currentNoteID ?
                {...oldNote, body: text} :
                oldNote
      }))
  }
  console.log(findCurrentNote())
  console.log(notes[0])
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
