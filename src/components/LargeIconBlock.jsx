import React from "react";
import * as PIcons from "@phosphor-icons/react";

function LargeIconBlock({ iconName, header, subtext }) {
    var IconComponent = PIcons[iconName];

    return (
        <div className="large-icon-block">
            <div className="head">
                <IconComponent size={80} />
                <h5>{header}</h5>
            </div>
            {subtext && <p>{subtext}</p>}
        </div>
    )
}

export default LargeIconBlock