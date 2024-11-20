import React from "react";
import CodeBlock from "../components/CodeBlock";

function RunProject() {

    return (
        <div className="run-project">
            <section id="dependencies">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h2>Install Dependencies</h2>
                    <p>In both folders, npm must be install and can be done by entering the following commands into separate terminals:</p>
                    <CodeBlock 
                        code={"<p>cd blount</p><p>npm install</p>"}
                    />
                </div>
            </section>
        </div>
    )
}
export default RunProject