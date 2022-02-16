import React from 'react'
import { NewNoteButton, Sidesbar, TextSnippet, Seclect, Trash , TrashButton} from '../../Style'


const Sidebar = (props) => {
    const noteElement = props.notes.map((note) => (
        <div key={note.id} >
            <Seclect
                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""} `}
                onClick={() => props.setcurrentNoteID(note.id)}
                >
                    <TextSnippet>{ note.body.split('\n')[0]}</TextSnippet>
                    <TrashButton
                      
                        onClick={() => props.deleteNote(note.id)}
                    >
                        <Trash className="gg-trash trash-icon"></Trash>
                    </TrashButton>
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