import React from "react";

import brandingColors from "../images/BrandingColors.svg"
import funGamesDesign from "../images/FunGamesDesign.svg"
import badgeLogo from "../images/BadgeLogo.svg"
import newsPostLogo from "../images/NewsPostsLogos.svg"
import pawtasticDesign from "../images/PawtasticProfilesDesign.svg"

function Design() {

    return (
        <div className="Design">
            <section id="site-branding">
                <div className="horizontal-line"></div>
                <div className="content">
                    <h1>Design</h1>
                    <div className="branding">
                        <h2>Site Branding</h2>
                        <h4> Colors</h4>
                        <img src={brandingColors} alt="Branding Colors"/>
                        </div>

                    <h4> Blount Scholars Logo</h4>

                    <div className="container">

                        <img 
                            src={badgeLogo} 
                            alt="Blount Scholars Logo"
                            style={{ marginTop: "12%", display: "inline-block;" }}
                        />
                        <p> When designing the Blount Scholar's logo, I wanted to make sure some elements used showed different aspects of the Blount Scholar organization. For example, the book and the paint brush relate to liberal arts and the graduation caps relate to it being a university organization.</p>

                    </div>
                    <h4> News Posts Publisher Logos</h4>
                    <img src={newsPostLogo} alt="News Posts Publisher Logos"/>
                    
                </div>
            </section>

            <section id= "blue-line">
                <div className="horizontal-line"></div>
                <div className="content">
                    <div className="container">
                        <div className="line">
                            
                        </div>
                    </div>
                </div>
            </section>

            <section id= "bento-box">
                <div className="horizontal-line"></div>
                    <div className="content">
                        <h2>Bento Box Style</h2>

                        <p> In order to allow further expansion to the web app, I used a bento box styling to the various webpage to allow new boxes to be added to the site as its features grow.  This styling also made responsiveness easy since the blocks could shift in size or number viewable depending on screen size. Below are two examples:</p>
                        <h4>Fun & Games Design:</h4>
                        <img src={funGamesDesign} alt="Fun & Games Design"/>
                        <h4>Pawtastic Profiles Design:</h4>
                        <img src={pawtasticDesign} alt="Pawtastic Profiles Design"/>
                    </div>
            </section>

        </div>
    )
}
export default Design
