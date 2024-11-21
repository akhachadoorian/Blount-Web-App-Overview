import { CodeSimple, PaintBrush } from "@phosphor-icons/react";
import React from "react";

function Footer() {
    return (
        <footer>
            <div className="name">
                <PaintBrush size={40}/>
                <p className="nav">Alex Khachadoorian</p>
                <CodeSimple size={40}/>
            </div>
            <div className="line"></div>
            <div className="name">
                <CodeSimple size={40}/>
                <p className="nav">Sofie Durham</p>
                <CodeSimple size={40}/>
            </div>
            <div className="line"></div>
            <div className="name">
                <CodeSimple size={40}/>
                <p className="nav">Katie Heath</p>
                <CodeSimple size={40}/>
            </div>
            <div className="line"></div>
            <div className="name">
                <CodeSimple size={40}/>
                <p className="nav">Nate Paul</p>
                <CodeSimple size={40}/>
            </div>
            
            
            
        </footer>
    )
}

export default Footer