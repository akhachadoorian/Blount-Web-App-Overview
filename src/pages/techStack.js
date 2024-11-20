import React from "react";
import TechStackBlock from "../components/TechStackBlock";

function TechStack() {

    return (
        <div className="tech-stack">
            <section id="tech-stack">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h1>TechStack</h1>
                    <div className="multiple-tsb">
                        <TechStackBlock 
                            iconName={"FileJsx"}
                            techName={"Next.js"}
                            techType={"Framework/Library"}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default TechStack