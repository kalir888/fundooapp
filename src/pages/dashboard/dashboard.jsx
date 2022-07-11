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

    React.useEffect(() => {
        getAllNotes().then((response) => {
            console.log(response)
            setAllNotes(response.data.data);
        }).catch((error) => console.log(error));
    }, [closeClick])

    return(
        <div className="dashboard-container">
            <Header showDrawer={showDrawer}/>
            <MiniDrawer status={drawer}/>
            <div className="dash-notes-container">
                {
                    takeNoteStatus ? <TakeNoteOne showNoteTwo={showNoteTwo}/> : <TakeNoteTwo manageClickCount={manageClickCount} showNoteOne={showNoteOne}/>
                }
            </div>
            <Grid container style={{width: '80vw', height: 'auto'}} spacing={2} columns={{ xs: 8, sm: 12, md: 12 }}>
                {allNotes.map(note => <Grid item lg={9}>
                     <TakeNoteThree manageClickCount={manageClickCount} key={note._id} note={note}/>
                     </Grid>)}
            </Grid>
        </div>
    )
}

export default Dashboard;