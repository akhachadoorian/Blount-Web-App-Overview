import React from "react";

import { designTable, webAppTable } from "./info/tableInfo";


import badgeLogo from "../images/BadgeLogo.svg"
import Tables from "../components/Tables";



function Overview() {

    return (
        <div className="overview">
            <section id="title">
                <div className="horizontal-line"></div>
                <div className="info">
                    <div className="text">
                        <div className="names">
                            <div className="first">
                                <h4>Alex</h4>
                                <h4>Katie</h4>
                                <h4>Sofie</h4>
                                <h4>Nate</h4>
                            </div>
                            <div className="last">
                                <h4>Khachadoorian</h4>
                                <h4>Heath</h4>
                                <h4>Durham</h4>
                                <h4>Paul</h4>
                            </div>
                        </div>
                        
                        <h1>Blount Scholars Web app</h1>
                    </div>
                    <img src={badgeLogo} alt="Blount Scholars Badge logo"/>
                </div>
            </section>

            <section id="high-level-overview">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h2>High-level Project Overview</h2>
                    <Tables 
                        title={designTable.title}
                        content={designTable.content}
                    />
                    <Tables 
                        title={webAppTable.title}
                        content={webAppTable.content}
                    />
                </div>
                
            </section>


        </div>
    )
}

export default Overview;
