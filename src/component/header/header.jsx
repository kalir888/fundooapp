import React from "react";
import './header.css';

function Header() {
    return (
        <div>
            <div className="parent-container">
                <div className="section-content-one">
                    <img src="./images/menuicon.PNG" alt="Menu" className="menu-icon"/>
                    <img src="./images/buld.PNG" alt="" className="keep-icon"/>
                    <div id="keep">Keep</div>
                </div>
                <div className="section-content-two">
                    <img src="./images/searchimage.PNG" alt="search" className="search-icon"/>
                    <input type="search" placeholder="Search" className="search-field"/>
                </div>
                <div className="section-content-three">
                    <img src="./images/refreshicon.PNG" alt="Refresh" className="refresh-icon"/>
                    <img src="./images/listicon.PNG" alt="List" className="list-icon"/>
                    <img src="./images/settingsicon.PNG" alt="Settings" className="settings-icon"/>
                </div>
                <div className="section-content-four">
                    <img src="./images/appsicon.PNG" alt="Apps" className="apps-icon"/>
                    <img src="./images/account.PNG" alt="Account" className="accounts-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Header;