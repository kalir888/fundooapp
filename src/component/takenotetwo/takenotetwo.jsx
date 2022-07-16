import React from "react";
import './takenotetwo.css';
import { addNote } from '../../service/dataservice';
import ColorPopper from "../colorpopper/colorpopper";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const IS_EMPTY = 0;

function TakeNoteTwo(props) {

    const [note, setNote] = React.useState({Title: '', Description: '', color: 'white', isArchived: false, isDeleted: false})

    const openTakeNoteOne = () => {
        props.showNoteOne();
    }

    const updateClick = () => {
        props.manageClickCount();
    }

    const getTitle = (event) => {
        setNote((prevState) => ({...prevState, Title: event.target.value}));
    }

    const getDescription = (event) => {
        setNote((prevState) => ({...prevState, Description: event.target.value}));
    }

    const createNote = () => {
        openTakeNoteOne();
        if(note.Title.trim().length !== IS_EMPTY && note.Description.trim().length !== IS_EMPTY) {
            addNote(note).then((response) => {
                console.log(response.data);
                props.getNotes();
                updateClick();
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    const getColor = (color) => {
        setNote((prevState) => ({...prevState, color: color}));
    }

    const archiveNote = () => {
        setNote((prevState) => ({...prevState, isArchived: true}));
    }

    return (
        <div className="take-notetwo-container" style={{backgroundColor: note.color}}>
            <div className="notetwo-title-container">
                <input type="text" name="Title" placeholder="Title" className="notetwo-title-content"
                onChange={getTitle} style={{backgroundColor: note.color}}/>
                <img src="./images/pinicon.SVG" alt="pin" className="notetwo-pin-icon"/>
            </div>
                <textarea cols="60" rows="1" placeholder="Take a note..." className="note-content"
                onChange={getDescription} style={{backgroundColor: note.color}}></textarea>
             <div className="option-container">
                <div className="options">
                    <AddAlertOutlinedIcon fontSize=''/>
                    <PersonAddAltOutlinedIcon fontSize='small' />
                    <ColorPopper getColor={getColor} action="create"/>
                    <InsertPhotoOutlinedIcon fontSize='small' />
                    <ArchiveOutlinedIcon fontSize="small" onClick={archiveNote}/>
                    <MoreVertOutlinedIcon fontSize="small"/>
                    <img src="./images/undoicon.PNG" alt="undo" className="do-option"/>
                    <img src="./images/redoicon.PNG" alt="redo" className="do-option"/>
                </div>
                <button className="close-option" onClick={createNote}>Close</button> 
            </div>
        </div>
    )
}

export default TakeNoteTwo;