import React from "react";
import { PenNib, MapTrifold, PaintRoller, FileCode, Files, Warning, Play} from "@phosphor-icons/react"
import { Link } from "react-router-dom";

function Navigation() {

    
    const nav = [
        { icon: <PenNib />, title: 'High Level Overview', link: '/' },
        { icon: <FileCode />, title: 'Tech Stack', link: '/tech-stack' },
        { icon: <Files />, title: 'Code Documentation', link: '/code-documentation' },
        { icon: <MapTrifold />, title: 'Site Map', link: '/site-map' },
        { icon: <PaintRoller />, title: 'Design', link: '/design' },
        { icon: <Warning />, title: 'Problems & Solutions', link: '/problems-and-solutions' },
        { icon: <Play />, title: 'Run Project', link: '/run-project' },
    ];


      return (
        <nav>
            <div className="nav-menu">
                {nav.map((component, index) => {
                return (
                    <Link 
                    to={component.link}
                >
                    {component.icon}
                    <span>{component.title}</span>
                </Link>
                )
                })}
            </div>
        </nav>
        
      )


}

export default Navigation

// <div
        //     style={isMenuVisible ? {marginTop: "0px"} : {marginTop: "-200px"}}
        //     className="menu"
        // >
        //     <nav
                
        //     >
        //         <div className="nav-menu">
        //             {nav.map((component, index) => (
        //                 <button
        //                     key={index}
        //                     onClick={()=> scrollToElement(component.id)}
        //                 >
        //                     {component.icon}
        //                     <span>{component.title}</span>
        //                 </button>
        //             ))}
        //         </div>
        //         <button
        //             onClick={() => setIsMenuVisible(!isMenuVisible)}
        //             style={{
        //                 backgroundColor: "var(--mediumBlue)",
        //                 padding: "5px 10px",
        //                 position: "absolute",
        //                 top: isMenuVisible ? "" : "-1px", // Adjust position
        //                 transition: "top 0.3s ease-in-out",
        //                 border: "none",
        //                 cursor: "pointer",
        //                 width: "fit-content",
        //                 marginTop: isMenuVisible ? '' : '-10px',
        //                 marginLeft: '40px',
        //             }}
        //         >
        //         <CaretUp
        //             style={{
        //                 color: "var(--offWhite)",
        //                 transform: isMenuVisible ? "rotate(0deg)" : "rotate(180deg)",
        //                 transition: "transform 0.3s ease-in-out",
        //             }}
        //             size={24}
        //         />
        //     </button>
        //     </nav>
            
            
        // </div>