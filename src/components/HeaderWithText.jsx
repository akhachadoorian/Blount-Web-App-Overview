import React from "react";

function HeaderWithText({ header, text }) {
    return (
        <div className="header-w-text">
            <h5>{header}</h5>
            <p>{text}</p>
        </div>
    )
}

export default HeaderWithText