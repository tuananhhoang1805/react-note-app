import React, { useState }from 'react';
import { customAlphabet } from 'nanoid';
import Split from 'react-split';
import Editor from './components/editor/Editor';
import Sidebar from './components/sidebar/Sidebar';
import { NoNote, FirstNoteButton } from './Style'





function App() {

  const [ notes , setNotes ] = useState([])
  const nanoid = customAlphabet('1234567890', 10)
  function createNotes(){
    const newNote ={
      id: nanoid(),
      body: "Xin chào"
    }
    setNotes(prevNote => [...prevNote, newNote])
  }
  console.log(notes)
  return (
   <main>
      {notes.length > 0 
      ?
      <Split
        sizes={[30, 70]} 
        direction="horizontal" 
        style={{ display: 'flex'}}
      >
          <Sidebar />
          <Editor />
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
