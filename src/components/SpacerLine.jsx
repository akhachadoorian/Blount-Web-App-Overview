import React from "react";

function SpacerLine({ backgroundColor, spacerColor }) {

    return (
        <section 
            className="spacer-line" 
            style={{
                backgroundColor: backgroundColor,
                // padding: '0 60px'
                // padding: "40px 0",
            }}
        >
            <div className="horizontal-line" style={{backgroundColor: spacerColor}}></div>
            <div className="content" >
                <div 
                    className="s-line"
                    style={{
                        // margin: "60px 0 60px 60px",
                        height: '3px',
                        backgroundColor: spacerColor
                    }}
                ></div>
            </div>
        </section>
    )
}

export default SpacerLine