import React from "react";

import { designTable, webAppTable } from "./info/tableInfo";

import badgeLogo from "../images/BadgeLogo.svg";
import Tables from "../components/Tables";
import SmallIconBlock from "../components/SmallIconBlock";
import HeaderWithText from "../components/HeaderWithText";
import SpacerLine from "../components/SpacerLine";

function Overview() {
  return (
    <div className="overview">
      <section id="title">
        <div className="horizontal-line"></div>
        <div className="info">
          <div className="text">
            <div className="names">
              <div className="first">
                <h4>Alex</h4>
                <h4>Katie</h4>
                <h4>Sofie</h4>
                <h4>Nate</h4>
              </div>
              <div className="last">
                <h4>Khachadoorian</h4>
                <h4>Heath</h4>
                <h4>Durham</h4>
                <h4>Paul</h4>
              </div>
            </div>

            <h1>Blount Scholars Web app</h1>
          </div>
          <img src={badgeLogo} alt="Blount Scholars Badge logo" />
        </div>
      </section>

      <section id="high-level-overview">
        <div className="horizontal-line"></div>
        <div className="content" style={{ padding: "200px 0px 100px 60px" }}>
          <h2>High-level Project Overview</h2>

          <div className="multiple-sib">
            <SmallIconBlock text={"Web App"} iconName={"Desktop"} />
            <SmallIconBlock
              text={"Modular"}
              iconName={"SquaresFour"}
              iconSide="left"
            />
            <SmallIconBlock text={"Profiles"} iconName={"UserCircle"} />
            <SmallIconBlock
              text={"blount"}
              iconName={"GraduationCap"}
              iconSide="left"
            />
          </div>

          <p>
            The Blount Web App is designed to serve the Blount Scholars Program
            at the University of Alabama, providing a dynamic, interactive
            platform for Blount students, alumni, and community members. Its
            primary goal is to foster community engagement, offering a space for
            students to interact, connect with alumni, or simply take a study
            break in an environment tailored to both work and leisure. The web
            application needs to be modular in all aspects to allow for future
            additions.
          </p>

          <div className="multiple-hwt">
            <HeaderWithText
              header={"Administrative Customization:"}
              text={
                "The web app enables a non-technical admin to easily customize certain features and maintain the site. This is a very important feature, so we are dedicating some extra time to find the perfect framework and potentially the best CMS to use."
              }
            />
            <HeaderWithText
              header={"Fun and Engagement:"}
              text={
                "Unlike standard university websites, this platform is intended to be both practical and enjoyable, catering to academic and social needs."
              }
            />
          </div>

          <Tables title={designTable.title} content={designTable.content} />
          <Tables title={webAppTable.title} content={webAppTable.content} />
        </div>
      </section>

      <SpacerLine
        backgroundColor={"var(--lightBlue)"}
        spacerColor={"var(--offWhite)"}
      />

      <section id="key-features">
        <div className="horizontal-line"></div>
        <div className="content">
          <h2>Key Features & Structure</h2>

          <HeaderWithText
            header={"Reusable Components: "}
            text={
              'To streamline development and enhance consistency, we designed reusable "blocks." These blocks support features that can be modified by the admin and replicated across various sections. For example, a profile block used for alumni can also be adapted for clubs or even Blount pet profiles.'
            }
          />

          <HeaderWithText
            header={"Content Management System (CMS): "}
            text={
              "The web app's admin-facing interface is managed through a CMS, enabling the admin to handle and update the client-facing aspects of the application without needing technical expertise."
            }
          />

          <HeaderWithText
            header={"Separate Views:"}
            text={
              "The code structure aligns with this organization of views, necessitating two separate servers—one for each view. When logged in to the administrative API, the admin can change various aspects of the web app using the customized Payload CMS. The number of settings the admin user can affect and see depends on the account type. The user view consists of the actual web app. The code structure matches this view organization and, as a result, requires two servers, one for each view."
            }
          />
        </div>
      </section>

      <SpacerLine
        backgroundColor={"var(--lightBlue)"}
        spacerColor={"var(--offWhite)"}
      />

      <section id="user-security">
        <div className="horizontal-line"></div>
        <div className="content">
          <h2>User Access & Security</h2>

          <p>
            Access to the Blount Web App is exclusive to Blount students. Given
            time constraints, we implemented a manual system for profile
            creation, where the admin sets up user profiles directly. In future
            iterations, an automated registration process could improve
            efficiency.
          </p>

          <h4>User Access & Security</h4>

          <div class="multiple-sib">
            <SmallIconBlock
              text={"Student"}
              iconName={"ChalkboardTeacher"}
              iconSide="left"
            />
            <SmallIconBlock
              text={"Alumni"}
              iconName={"Student"}
              iconSide="left"
            />

            <SmallIconBlock
              text={"Admin"}
              iconName={"User"}
              iconSide="left"
              style="outline"
            />
            <SmallIconBlock
              text={"Faculty"}
              iconName={"Users"}
              iconSide="left"
              style="outline"
            />
            <SmallIconBlock
              text={"Club"}
              iconName={"UsersFour"}
              iconSide="left"
              style="outline"
            />
          </div>
        </div>
      </section>

      <SpacerLine
        backgroundColor={"var(--lightBlue)"}
        spacerColor={"var(--offWhite)"}
      />

      <section id="video">
        <div className="horizontal-line"></div>
        <div className="content">
          <h2>Video</h2>
          <iframe
            height="500"
            src="https://www.youtube.com/embed/0ch-YmNSV2Q?si=SV8MzTfiGDDA_rRb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </section>
    </div>
  );
}

export default Overview;
