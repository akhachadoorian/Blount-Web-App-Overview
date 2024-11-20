import React from "react";
import { frontEndTech, backEndTech } from "./info/techstackInfo";
import TechStackBlock from "../components/TechStackBlock";
import SpacerLine from "../components/SpacerLine";

function TechStack() {

    return (
        <div className="tech-stack">
            <section id="tech-stack-front">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h1>TechStack</h1>
                    <h2>Front End</h2>
                    <div className="multiple-tsb">
                        {frontEndTech.map((t, index) => (
                            <TechStackBlock 
                                iconName={t.iconName}
                                techName={t.techName}
                                techType={t.techType}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <SpacerLine 
                // backgroundColor={"var(--offWhite)"}
                spacerColor={"var(--mediumBlue)"}
            />

            <section id="tech-stack-back">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h2>Back End</h2>
                    <div className="multiple-tsb">

                        {frontEndTech.map((t, index) => (
                            <TechStackBlock 
                                iconName={t.iconName}
                                techName={t.techName}
                                techType={t.techType}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default TechStack