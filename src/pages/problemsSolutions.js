import React from "react";
import HeaderWithText from "../components/HeaderWithText";
import { wordpressTable, laravelTable, codeigniteTable } from "./info/tableInfo";
import Tables from "../components/Tables";
import LargeIconBlock from "../components/LargeIconBlock";
import { X, ArrowsClockwise } from "@phosphor-icons/react";


function ProblemsSolutions() {
   return (
       <div className="problems-solutions">
           {/* Problems Faced Section */}
           <section id="problems-faced">
               <div className="horizontal-line"></div>
               <div className="content">
                   <h1>Problems Faced & Solutions</h1>


                   {/* First Row: Icon Left */}
                   <div className="block-and-text">
                       <LargeIconBlock
                           iconName={"RocketLaunch"}
                           header={"Deploy to Clients Server"}
                       />
                       <div className="text">
                           <div className="status">
                               <X size={40} />
                               <h5>Failed</h5>
                           </div>
                           <p>
                               Our original plan was to deploy the project to the client’s server. Amid
                               project development we learned that the client’s server required the
                               program to be in PHP and use a NoSQL database which was not the tech stack
                               our project uses.
                           </p>
                       </div>
                   </div>


                   {/* Second Row: Text Left */}
                   <div className="block-and-text reversed">
                       <div className="text">
                           <div className="status">
                               <X size={40} />
                               <h5>Failed</h5>
                           </div>
                           <p>
                               As a result, we pivoted to try and deploy via a 3rd party server. We provided
                               the client with a couple of server options with Payload being our suggestion
                               for easy deployment. Unfortunately, the client’s is unable to get funding
                               from the school to deploy the program on a 3rd party server, so we are unable
                               to deploy via that method.
                           </p>
                       </div>
                       <LargeIconBlock
                           iconName={"RocketLaunch"}
                           header={"Deploy to 3rd Party Server"}
                       />
                   </div>


                   {/* Third Row: Icon Left */}
                   <div className="block-and-text">
                       <LargeIconBlock
                           iconName={"ArrowsClockwise"}
                           header={"Transfer to Server Requirements"}
                       />
                       <div className="text">
                           <div className="status">
                               <ArrowsClockwise size={40} />
                               <h5>In Progress</h5>
                           </div>
                           <p>
                               Our final suggestion was to transfer project design and structure to a
                               server-friendly framework. We focused on providing thorough documentation to
                               make it easy for future developers to convert the idea and framework into a
                               tech stack that would be deployable to the client’s original server.
                           </p>
                       </div>
                   </div>
               </div>
           </section>


           {/* Transition Section */}
           <section id="transition">
               <div className="horizontal-line"></div>
               <div className="content">
               <h2>To Transition</h2>
               <p>
                   A high-level overview of what needs to be done to transition the current
                   Blount Web App to be compatible with UA servers to avoid 3rd party hosting:
               </p>
               <div className="grid-container">
                   <div className="transition-block">
                       <HeaderWithText
                           header="Database:"
                           text="Migrate the MongoDB schema to MySQL. Tools like MongoDB-to-MySQL migration scripts can be helpful."
                       />
                   </div>
                   <div className="transition-block">
                       <HeaderWithText
                           header="Back End:"
                           text="Rewrite the API logic using one of the frameworks, leveraging their built-in database tools."
                       />
                   </div>
                   <div className="transition-block">
                       <HeaderWithText
                           header="Front End:"
                           text="Since React is framework-agnostic, it can remain largely unchanged, calling the new PHP backend for API services."
                       />
                   </div>
                   <div className="transition-block">
                       <HeaderWithText
                           header="CMS Replacement:"
                           text="Implement admin features using the framework’s admin tools or third-party libraries."
                       />
                   </div>
               </div>
               </div>
           </section>


           {/* Additional Sections */}
           <section id="wordpress">
               <div className="horizontal-line"></div>
               <div className="content">
                   <Tables
                       title={wordpressTable.title}
                       numSection={2}
                       subtitles={wordpressTable.subtitles}
                       content={wordpressTable.content}
                   />
               </div>
           </section>


           <section id="laravel">
               <div className="horizontal-line"></div>
               <div className="content">
                   <Tables
                       title={laravelTable.title}
                       numSection={2}
                       subtitles={laravelTable.subtitles}
                       content={laravelTable.content}
                   />
               </div>
           </section>


           <section id="code-ignite">
               <div className="horizontal-line"></div>
               <div className="content">
                   <Tables
                       title={codeigniteTable.title}
                       numSection={2}
                       subtitles={codeigniteTable.subtitles}
                       content={codeigniteTable.content}
                   />
               </div>
           </section>


           {/* Framework Recommendation Section */}
           <section id="framework-recommendation">
               <div className="horizontal-line"></div>
               <div className="content">
                   <h2>Our Framework Recommendation</h2>
                   <HeaderWithText
                       header={"WordPress"}
                       text={'After evaluating the frameworks, WordPress CMS is the most suitable option for transitioning the Blount Web App to the UA servers. Its flexibility, user-friendliness, and extensive documentation make it ideal for this migration. Additionally, as the University of Alabama\'s official CMS, WordPress provides approved plugins, themes, and CAS authentication support, ensuring compliance with university standards.'}
                   />
               </div>
           </section>
       </div>
   );
}


export default ProblemsSolutions;