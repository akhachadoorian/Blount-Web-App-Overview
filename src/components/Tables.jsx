import React from "react";

function Tables({ title, numSection = 1, subtitles, content }) {

    if (numSection !== 1) {
        return (
            <div className="tables">
                <h3>{title}</h3>
                {(() => {
                const tableWithSubtitles = [];
                for (let i = 0; i < subtitles.length; i++) {
                    // Push the current subtitle
                    tableWithSubtitles.push(<h5 key={`subtitle-${i}`}>{subtitles[i]}</h5>);

                    // Map and push the related content (assuming content[i] is an array)
                    if (content[i]) {
                        tableWithSubtitles.push(
                            content[i].map((item, index) => (
                                <div
                                    key={`content-${i}-${index}`}
                                    className="table-item"
                                >
                                    <h4>{item.label}</h4>
                                    <p>{item.info}</p>
                                </div>
                            ))
                        );
                    }
                }
                return tableWithSubtitles;
            })()}
                
            </div>
        )
    }

    return (
        <div className="tables">
            <h3>{title}</h3>
            {subtitles && <h5>{subtitles}</h5>}
            {content.map(( item, index) => (
                <div
                    key={index}
                    className="table-item"
                >
                    <h4>{item.label}</h4>
                    <p>{item.info}</p>
                </div>
            ))}
        </div>
    )

}

export default Tables;