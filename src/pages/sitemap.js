import React from "react";
import { collectionTable, globalTable } from "./info/tableInfo";
import Tables from "../components/Tables";

function SiteMap() {

    return (
        <div className="site-map">
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