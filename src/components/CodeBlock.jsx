import React from "react";

function CodeBlock({ code }) {

    return (
        <div className="code-block">
            <div className="code-block-inner">
                <p dangerouslySetInnerHTML={{ __html: code }} />
            </div>
        </div>
    )
}

export default CodeBlock