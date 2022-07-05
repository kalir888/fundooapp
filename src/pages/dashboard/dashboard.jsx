import React from "react";
import Header from "../../component/header/header";
import TakeNoteOne from "../../component/takenoteone/takenoteone";
import TakeNoteTwo from "../../component/takenotetwo/takenotetwo";
import './dashboard.css';
import { getAllNotes } from '../../service/dataservice';
import TakeNoteThree from "../../component/takenotethree/takenotethree";
import MiniDrawer from "../../component/drawer/minidrawer";

function Dashboard() {

    const [allNotes, setAllNotes] = React.useState([]);

    const [takeNoteStatus, setTakeNoteStatus] = React.useState(true);

    const [drawer, setDrawer] = React.useState(false);

    const noteList = allNotes.map(note => <TakeNoteThree key={note._id} note={note}/>);

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
    }, [])

    return(
        <div className="dashboard-container">
            <Header showDrawer={showDrawer}/>
            <MiniDrawer status={drawer}/>
            <div className="dash-notes-container">
                {
                    takeNoteStatus ? <TakeNoteOne showNoteTwo={showNoteTwo}/> : <TakeNoteTwo showNoteOne={showNoteOne}/>
                }
            </div>
            <div className="all-notes-container">{noteList}</div>
        </div>
    )
}

export default Dashboard;