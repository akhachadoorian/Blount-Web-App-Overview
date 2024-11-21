import React from "react";
import { collectionTable, globalTable } from "./info/tableInfo";
import Tables from "../components/Tables";
import SpacerLine from "../components/SpacerLine";

import userLoginSiteMap from "../images/UserLoginSiteMap.svg"
import dashboardSiteMap from "../images/DashboardSiteMap.svg"

function SiteMap() {

    return (
        <div className="site-map">
            <section id="users">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h1>Site Map</h1>
                    <h2>Users</h2>
                    <p> When at the login screen, users are faced with the two possiblities demonstated by the site map below.</p>
                   <img src={userLoginSiteMap} alt="User Login Site Map"/>   
                   <p>When at the dashboard, users are able to access a navigational menu with the following paths:</p> 
                     <img src={dashboardSiteMap} alt="Dashboard Site Map"/>

                </div>
            </section>
            <SpacerLine
                backgroundColor={"var(--lightBlue)"}
                spacerColor={"var(--offWhite)"}
                            />
            <section id="admin">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h2>Admin</h2>
                    <Tables
                        title={collectionTable.title}
                        content={collectionTable.content}
                    />
                    <Tables
                        title={globalTable.title}
                        content={globalTable.content}
                    />
                </div>
            </section>
        </div>
    )
}
export default SiteMap
