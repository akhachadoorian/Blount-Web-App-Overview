import React from "react";
import { wordpressTable, laravelTable, codeigniteTable } from "./info/tableInfo";
import Tables from "../components/Tables";
import LargeIconBlock from "../components/LargeIconBlock";
import { X } from "@phosphor-icons/react";

function ProblemsSolutions() {

    return (
        <div className="problems-solutions">
            <section id="problems-faced">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h1>problems Faced & Solutions</h1>
                    <div className="block-and-text">
                        <LargeIconBlock 
                            iconName={"RocketLaunch"}
                            header={"deploy to Clients Server"}
                        />
                        <div className="text">
                            <div className="status">
                                <X size={40} />
                                <h5>Failed</h5>
                            </div>
                            <p>Our original plan was to deploy the project to the client’s server. Amid project development we learned that the client’s server required the program to be in PHP and use a NoSQL database which was not the tech stack are project uses. </p>
                        </div>
                    </div>
                </div>
            </section>

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