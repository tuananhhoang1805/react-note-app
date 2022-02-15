import React from 'react'
import { NewNoteButton, Sidesbar, TextSnippet, Seclect } from '../../Style'


const Sidebar = (props) => {
    const noteElement = props.notes.map((note, index) => (
        <div key={note.id}>
            <Seclect
                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""} `}
                onClick={() => props.setcurrentNoteID(note.id)}
            >
                <TextSnippet>Note {index + 1} </TextSnippet>
            </Seclect>
        </div>
    ))
    return (
        <Sidesbar>
            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-around',
                    alignItems: 'center', 
                      
                }}>
                <h3 style={{ fontSize: '1.75rem'}}>Notes</h3>
                <NewNoteButton
                    onClick={props.newNote}
                >
                    +
                </NewNoteButton>
            </div>
            {noteElement}
        </Sidesbar>
  )
}

export default Sidebar