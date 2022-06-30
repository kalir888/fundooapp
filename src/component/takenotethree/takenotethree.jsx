import React from "react";
import "./takenotethree.css";
import "../takenotetwo/takenotetwo.css";
import ColorPopper from "../colorpopper/colorpopper";
import { archiveTheNote, updateNote } from "../../service/dataservice";
import Modal from '@mui/material/Modal';

function TakeNoteThree(props) {

  const [editNote, setEditNote] = React.useState({Title: '', Description: '', color: '', _id: ''});

  const [open, setOpen] = React.useState(false);

  const editTitle = (event) => {
    setEditNote((prevState) => ({...prevState, Title: event.target.value}));
  }

  const editDescription = (event) => {
    setEditNote((prevState) => ({...prevState, Description: event.target.value}));
  }

  const submitNote = () => {
    handleClose();
    updateNote(editNote,editNote._id).then((editedNote) => console.log(editedNote)).catch((error) => console.log(error));
  }

  const archiveNote = (noteId) => {
      archiveTheNote(noteId).then((updatedNote) => console.log(updatedNote)).catch((error) => console.log(error));
  }

  const getColor = (color) => {
    setEditNote((prevState) => ({...prevState, color: color}));
  }

  
  const handleOpen = (noteObj) => {
    setOpen(true);
    setEditNote(noteObj);
  }

  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="take-notethree-container" style={{backgroundColor: props.note.color}}>
        <div className="notethree-title-container">
          <input
            type="text"
            name="Title"
            defaultValue={props.note.Title}
            className="notethree-title-content"
            style={{backgroundColor: props.note.color}}
            onClick={() => handleOpen(props.note)}
            readOnly
          />
          <img
            src="./images/pinicon.SVG"
            alt="pin"
            className="notethree-pin-icon"
          />
        </div>
        <textarea
          cols="60"
          rows="2"
          defaultValue={props.note.Description}
          className="notethree-content"
          style={{backgroundColor: props.note.color}}
          onClick={() => handleOpen(props.note)}
          readOnly
        ></textarea>
        <div className="notethree-option-container">
          <img
            src="./images/remindme.SVG"
            alt="Remindme"
            className="notethree-option"
          />
          <img
            src="./images/collabarator.SVG"
            alt="collabarator"
            className="notethree-option"
          />
          <ColorPopper action="update" id={props.note._id}/>
          <img
            src="./images/addimageicon.SVG"
            alt="addimage"
            className="notethree-option"
          />
          <img
            src="./images/archiveicon.SVG"
            alt="archive"
            className="notethree-option"
            onClick={() => archiveNote(props.note._id)}
          />
          <img
            src="./images/moreicon.SVG"
            alt="more"
            className="notethree-option"
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="popup-box-container" style={{backgroundColor: editNote.color}}>
          <div className="notetwo-title-container">
            <input id="modal-modal-title" variant="h6" component="h2" onChange={editTitle} defaultValue={editNote.Title} 
            className="notetwo-title-content" style={{backgroundColor: editNote.color}}/>
            <img src="./images/pinicon.SVG" alt="pin" className="notetwo-pin-icon"/>
          </div>
          <textarea id="modal-modal-description" onChange={editDescription} defaultValue={editNote.Description} 
          className="note-content" style={{backgroundColor: editNote.color}}/>
          <div className="option-container">
            <div className="options">
                <img src="./images/remindme.SVG" alt="Remindme" className="option"/>
                <img src="./images/collabarator.SVG" alt="collabarator" className="option"/>
                <ColorPopper getColor={getColor} action="create"/>
                <img src="./images/addimageicon.SVG" alt="addimage" className="option"/>
                <img src="./images/archiveicon.SVG" alt="archive" className="option" onClick={archiveNote}/>
                <img src="./images/moreicon.SVG" alt="more" className="option"/>
                <img src="./images/undoicon.PNG" alt="undo" className="do-option"/>
                <img src="./images/redoicon.PNG" alt="redo" className="do-option"/>
            </div>
            <button className="close-option" onClick={submitNote}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TakeNoteThree;
