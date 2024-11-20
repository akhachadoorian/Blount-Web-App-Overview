import React from "react";
import { wordpressTable, laravelTable, codeigniteTable } from "./info/tableInfo";
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
            <section id="laravel">
                <div className="horizontal-line"></div>
                <div className="content">
                    <Tables 
                        title={laravelTable.title}
                        numSection={2}
                        subtitles={laravelTable.subtitles}
                        content={laravelTable.content}
                    />
                    </div>
            </section>
            <section id="code-ignite">
                <div className="horizontal-line"></div>
                <div className="content">
                    <Tables 
                        title={codeigniteTable.title}
                        numSection={2}
                        subtitles={codeigniteTable.subtitles}
                        content={codeigniteTable.content}
                    />
                </div>
            </section>
        </div>
    )
}
export default ProblemsSolutions