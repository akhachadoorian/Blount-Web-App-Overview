import React from "react";
import { wordpressTable } from "./info/tableInfo";
import Tables from "../components/Tables";

function ProblemsSolutions() {

    return (
        <div className="problems-solutions">
            <section  id="wordpress">
                <div className="horizontal-line"></div>
                <div className="content">
                    <Tables 
                        title={wordpressTable.title}
                        numSection={2}
                        subtitles={wordpressTable.subtitles}
                        content={wordpressTable.content}
                    />
                </div>
            </section>
        </div>
    )
}
export default ProblemsSolutions