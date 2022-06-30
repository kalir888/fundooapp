import React from "react";
import './takenoteone.css';

function TakeNoteOne(props) {

    const openTakeNoteTwo = () => {
        props.showNoteTwo();
    }

    return(
        <div className="take-noteone-container">
            <textarea cols="60" rows="1" placeholder="Take a note..." className="note-one-text" readOnly onClick={openTakeNoteTwo}/>
            <div className="noteone-options-container">
                <img src="./images/newlisticon.SVG" alt="newlist" className="note-one-option"/>
                <img src="./images/drawing.SVG" alt="adddrawing" className="note-one-option"/>
                <img src="./images/addimageicon.SVG" alt="addimage" className="note-one-option"/>
            </div>
        </div>
    )
}

export default TakeNoteOne;