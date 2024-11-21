import React from "react";
import CodeBlock from "../components/CodeBlock";

function Documentation() {
    return (
        <div className="code-documentation">
            {/* Title Section */}
            <div className="content">
                <h1>Code Documentation</h1>
                <div className="subtitle">
                    <h1>Typescript</h1>
                    <h1>Comments:</h1>
                </div>
            </div>

            {/* TypeScript Comments Section */}
            <section id="typescript-comments-section">
                <div className="code-block-container">
                    <CodeBlock 
                        code={`/*
* Short Description
*
* Longer Description (in some cases)
*
* @constant
* @type { Collection/Block/Field }
* 
* @author
*    Author(s) name
*
* @property { string/object/boolean/number/Array<object> } PropertyName description of property
* @property {} ParentName.Property description of property
*/`} 
                    />
                </div>
                <div className="explanatory-text">
                    <p>
                        In order to make the comments more readable, we used a tab hierarchy to the property tagged comments.
                    </p>
                </div>
            </section>

            {/* Horizontal Line */}
            <hr className="section-divider" />

            {/* JavaScript Comments Section */}
            <section id="javascript-comments-section">
                <div className="subtitle">
                    <h1>JavaScript</h1>
                    <h1>Comments:</h1>
                </div>
                <div className="code-block-container">
                    <CodeBlock 
                        code={`/*
* Short Description
*
* Longer Description (in some cases)
*
* @component or @function
*
* @author
*    Author(s) name
*
* @param { string/object/boolean/number/Array<object> } ParameterName description of parameter
*   @param {} ParentName.Param description of property
*
* @returns {JSX.Element}
*/`} 
                    />
                </div>
                <div className="explanatory-text">
                    <p>
                        In order to make the comments more readable, we used a tab hierarchy to the param tagged comments. We also included short JSDoc comments for state variables and use effects.
                    </p>
                </div>
            </section>

            {/* Horizontal Line */}
            <hr className="section-divider" />

            {/* CSS Comments Section */}
            <section id="css-comments-section">
                <div className="subtitle">
                    <h1>CSS</h1>
                    <h1>Comments:</h1>
                </div>
                <div className="explanatory-text">
                    <p>
                        We decided to restructure our CSS files to make them organized and combine related styles into a single style sheet. In addition to this restructuring, we add in-depth comments to explain the style sheet and each component’s style.
                    </p>
                </div>
                <div className="sub-subtitle">
                    <h2>At The Start Of Each Style Sheet:</h2>
                </div>
                <div className="code-block-container">
                    <CodeBlock 
                        code={`/*
=========================================
SPECIFIC STYLE SHEET
=========================================
Description:
- This stylesheet...
- Responsive Breakpoints:
    - At max-width 600px: ....
Usage:
Blocks:
*/`} 
                    />
                </div>
                <div className="sub-subtitle">
                    <h2>For Each Component:</h2>
                </div>
                <div className="code-block-container">
                    <CodeBlock 
                        code={`/*
=========================================
SPECIFIC COMPONENT
=========================================
- Styles: ...
*/`} 
                    />
                </div>
            </section>
        </div>
    );
}

export default Documentation;
