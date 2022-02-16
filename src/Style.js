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
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

   
`



export const Trash = styled.i`
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    box-shadow:
        0 0 0 2px,
        inset -2px 0 0,
        inset 2px 0 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-top: 4px;

    &:after
    &:before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute
    }
    &:after {
        background: currentColor;
        border-radius: 3px;
        width: 16px;
        height: 2px;
        top: -4px;
        left: -5px
    }
    &:before {
        width: 10px;
        height: 4px;
        border: 2px solid;
        border-bottom: transparent;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        top: -7px;
        left: -2px
    }
`
export const TrashButton = styled.button`
     display: none;
     border: none;
     background: none;
`

export const Seclect = styled.div`
    &.selected-note{
        background-color: #4A4E74;
        color : #fff;
    }
    color: #4A4E74;

    &:hover  > ${TrashButton}{
        display: block;
    }
    
`

