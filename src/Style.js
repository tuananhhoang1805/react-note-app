import styled from 'styled-components'

export const NoNote = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`

export const FirstNoteButton = styled.button`
    cursor: pointer;
    background-color: #4A4E74;
    border: none;
    color: white;
    border-radius: 3px;
    padding: 1rem;
`

export const NewNoteButton = styled(FirstNoteButton)`
    height: 30px;
    width: 30px;
    padding: 0;
`

export const Sidesbar = styled.section`
    width: 20%;
    height: 100vh;
`
export const Editorsbar = styled(Sidesbar)`
    width: 80%;
`
export const TextSnippet = styled.h4`
    padding-inline: 5px;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.2rem;
    color: #4A4E74;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
