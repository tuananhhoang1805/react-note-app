import React from 'react'
import { NewNoteButton, Sidesbar, TextSnippet } from '../../Style'
const Sidebar = (props) => {

    const newNote = () => {
        return true
    }
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
                    onClick={newNote}
                >
                    +
                </NewNoteButton>
            </div>
            <div>
                <div>
                    <TextSnippet>Note 1</TextSnippet>
                </div>
            </div>
        </Sidesbar>
  )
}

export default Sidebar