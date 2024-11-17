import React, { useState } from "react";
import { PenNib, MapTrifold, PaintRoller, FileCode, Files, Warning, CheckCircle, CaretUp, CaretDown} from "@phosphor-icons/react"

function Navigation() {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    
    const nav = [
        { icon: <PenNib />, title: 'High Level Overview', id: 'high-level-overview' },
        { icon: <FileCode />, title: 'Tech Stack', id: 'tech-stack' },
        { icon: <Files />, title: 'Code Documentation', id: 'code-documentation' },
        { icon: <MapTrifold />, title: 'Site Map', id: 'site-map' },
        { icon: <PaintRoller />, title: 'Design', id: 'design' },
        { icon: <Warning />, title: 'Problems', id: 'problems' },
        { icon: <CheckCircle />, title: 'Solutions', id: 'solutions' },
    ];

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start', // Align the element at the start of the viewport
          });
        }
      };

      return (
        <div
            style={isMenuVisible ? {marginTop: "0px"} : {marginTop: "-200px"}}
            className="menu"
        >
            <nav
                
            >
                <div className="nav-menu">
                    {nav.map((component, index) => (
                        <button
                            key={index}
                            onClick={()=> scrollToElement(component.id)}
                        >
                            {component.icon}
                            <span>{component.title}</span>
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setIsMenuVisible(!isMenuVisible)}
                    style={{
                        backgroundColor: "var(--mediumBlue)",
                        padding: "5px 10px",
                        position: "absolute",
                        top: isMenuVisible ? "" : "-1px", // Adjust position
                        transition: "top 0.3s ease-in-out",
                        border: "none",
                        cursor: "pointer",
                        width: "fit-content",
                        marginTop: isMenuVisible ? '' : '-10px',
                        marginLeft: '40px',
                    }}
                >
                <CaretUp
                    style={{
                        color: "var(--offWhite)",
                        transform: isMenuVisible ? "rotate(0deg)" : "rotate(180deg)",
                        transition: "transform 0.3s ease-in-out",
                    }}
                    size={24}
                />
            </button>
            </nav>
            
            
        </div>
      )


}

export default Navigation