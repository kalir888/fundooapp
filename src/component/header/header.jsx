import React from "react";
import './header.css';
import { connect } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';

function Header(props) {

    const clickHandler = () => {
        props.showDrawer();
    }

    const getSearchNotes = (event) => {
        props.showSearchNotes(event.target.value);
    }

    return (
        <div>
            <div className="parent-container">
                <div className="section-content-one">
                    <MenuIcon fontSize='medium' className='menu-icon' onClick={clickHandler}/>
                    <img src="./images/buld.PNG" alt="" className="keep-icon"/>
                    <div id="keep">{props.title}</div>
                </div>
                <div className="section-content-two">
                    <SearchIcon fontSize='large'/>
                    <input type="search" placeholder="Search" className="search-field" onChange={getSearchNotes}/>
                </div>
                <div className="section-content-three">
                    <RefreshIcon fontSize='large'/>
                    <DnsOutlinedIcon fontSize='large'/>
                    <SettingsOutlinedIcon fontSize='large'/>
                    {/* <img src="./images/refreshicon.PNG" alt="Refresh" className="refresh-icon"/>
                    <img src="./images/listicon.PNG" alt="List" className="list-icon"/>
                    <img src="./images/settingsicon.PNG" alt="Settings" className="settings-icon"/> */}
                </div>
                <div className="section-content-four">
                    <AppsIcon fontSize='large'/>
                    {/* <img src="./images/appsicon.PNG" alt="Apps" className="apps-icon"/> */}
                    <img src="./images/account.PNG" alt="Account" className="accounts-icon"/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.drawerReducer.title,
    };
};
export default connect(mapStateToProps)(Header);