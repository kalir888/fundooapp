import React from "react";
import Header from "../../component/header/header";
import TakeNoteOne from "../../component/takenoteone/takenoteone";
import TakeNoteTwo from "../../component/takenotetwo/takenotetwo";
import './dashboard.css';
import { getAllNotes } from '../../service/dataservice';
import TakeNoteThree from "../../component/takenotethree/takenotethree";
import MiniDrawer from "../../component/drawer/minidrawer";
import { Grid } from "@mui/material";

function Dashboard() {

    const [allNotes, setAllNotes] = React.useState([]);

    const [takeNoteStatus, setTakeNoteStatus] = React.useState(true);

    const [drawer, setDrawer] = React.useState(false);

    const [closeClick, setCloseClick] = React.useState(0);

    const [takeNote, setTakeNote] = React.useState(true);

    const [showNotes, setShowNotes] = React.useState([]);

    const showArchivedNotes = () => {
        let archivedNotes = allNotes.filter((note) => note.isArchived === true);
        setTakeNote(false);
        setShowNotes(archivedNotes);
    }

    const showTrashedNotes = () => {
        let trashedNotes = allNotes.filter((note) => note.isDeleted === true);
        setTakeNote(false);
        setShowNotes(trashedNotes);
    }

    const showNormalNotes = (books) => {
        setAllNotes(books);
        let normalNotes = books.filter((note) => note.isArchived === false && note.isDeleted === false);
        setTakeNote(true);
        setShowNotes(normalNotes);
    }

    const showSearchNotes = (string) => {
        let searchNotes = showNotes.filter((note) => note.Title.toLowerCase().includes(string.toLowerCase()));
        setShowNotes(searchNotes);
        if(string.trim().length === 0) {
            showNormalNotes(allNotes);
        }
    }

    const manageClickCount = () => {
        setCloseClick((prevState) => prevState + 1);
        console.log(closeClick);
    }

    const showDrawer = () => {
        setDrawer(!drawer);
        return drawer;
    }

    const showNoteTwo = () => {
        setTakeNoteStatus(false);
    }

    const showNoteOne = () => {
        setTakeNoteStatus(true);
    }

    const getNotes = () => {
        getAllNotes().then((response) => {
            console.log(response)
            showNormalNotes(response.data.data);
        }).catch((error) => console.log(error));
    }

    React.useEffect(() => {
        getNotes();
    }, [closeClick])

    return(
        <div className="dashboard-container">
            <Header showDrawer={showDrawer} showSearchNotes={showSearchNotes}/>
            <MiniDrawer books={allNotes} showArchivedNotes={showArchivedNotes} showNormalNotes={showNormalNotes} showTrashedNotes={showTrashedNotes} status={drawer}/>
            {
               takeNote
               ? 
               <div className="dash-notes-container">
                {
                    takeNoteStatus ? <TakeNoteOne showNoteTwo={showNoteTwo}/> : <TakeNoteTwo getNotes={getNotes} manageClickCount={manageClickCount} showNoteOne={showNoteOne}/>
                }
                </div>
                :
                <div></div>
            }
            <Grid container id='all-notes-container'spacing={2} columns={{ xs: 8, sm: 12, md: 12 }}>
                {showNotes.map(note => <Grid item lg={9}>
                     <TakeNoteThree getNotes={getNotes} manageClickCount={manageClickCount} key={note._id} note={note}/>
                     </Grid>)}
            </Grid>
        </div>
    )
}

export default Dashboard;