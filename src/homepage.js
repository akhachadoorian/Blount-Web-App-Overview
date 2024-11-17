import React from "react";

import badgeLogo from "./images/BadgeLogo.svg"


function Home() {

    return (
        <div>
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
                <div className="info">
                    <h2>High-level Project Overview</h2>
                </div>
            </section>

            <section id="tech-stack">
                <div className="horizontal-line"></div>
                <div className="info">
                    <h2>Tech Stack</h2>
                </div>
            </section>

            <section id="code-documentation">
                <div className="horizontal-line"></div>
                <div className="info">
                    <h2>Code Documentation</h2>
                </div>
            </section>

            <section id="site-map">
                <div className="horizontal-line"></div>
                <div className="info">
                    <h2>Site Map</h2>
                </div>
            </section>

            <section id="design">
                <div className="horizontal-line"></div>
                <div className="info">
                    <h2>Design</h2>
                </div>
            </section>

            <section id="problems">
                <div className="horizontal-line"></div>
                <div className="info">
                    <h2>problems Faced</h2>
                </div>
            </section>

            <section id="solutions">
                <div className="horizontal-line"></div>
                <div className="info">
                    <h2>Solutions</h2>
                </div>
            </section>


        </div>
    )
}

export default Home;
