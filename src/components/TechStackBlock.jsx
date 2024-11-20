import React from "react";
import * as PIcons from "@phosphor-icons/react";

function TechStackBlock({ iconName, techName, techType }) {
    var IconComponent = PIcons[iconName];

    
    return (
        <div className="tech-stack-block">
            <IconComponent size={60} />
            <div className="tech-info">
                <p className="tech-name">{techName}</p>
                <p className="tech-type">{techType}</p>
            </div>
        </div>
    )
}

export default TechStackBlock