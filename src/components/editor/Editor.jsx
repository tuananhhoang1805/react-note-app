import React, { useState } from 'react'
import ReactMde from 'react-mde'
import Showdown from "showdown";
import { Editorsbar } from '../../Style'
import "react-mde/lib/styles/css/react-mde-all.css";
import '../../App.css'


const Editor = ({currentNote , updateNote }) => {
    const [ selectedTab , setSelectedTab ] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })
    return (
        <Editorsbar>
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                  Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </Editorsbar>
    )
}

export default Editor
