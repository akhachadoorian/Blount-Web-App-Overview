import React from "react";
import CodeBlock from "../components/CodeBlock";
import SpacerLine from "../components/SpacerLine";

function RunProject() {
  return (
    <div className="run-project">
      <section id="dependencies">
        <div className="horizontal-line"></div>
        <div className="content">
          <h1 className="run">Running Project</h1>{" "}
          {/* Ensure the run class is applied */}
          <p className="run">
            Due to the project not being currently deployed, you are able to
            view the development version of the project by running the front end
            on <u>localhost:3000</u> and the backend on{" "}
            <u>localhost:4000/admin/</u>. Please note, that the backend must be
            running order for the frontend to run. <br /> <br />{" "}
            <strong>
              The folder called blount stores the backend of the project and the
              folder called blount-front holds the frontend.
            </strong>
          </p>
          <h2 className="run">Install Dependencies</h2>{" "}
          {/* Ensure the run class is applied */}
          <p className="run">
            In both folders, npm must be install and can be done by entering the
            following commands into separate terminals:
          </p>
          <CodeBlock code={"<p>cd blount</p><p>npm install</p>"} />
          <h6 className="run"> Backend Dependencies </h6>
          <p className="run">
            The CORS dependency must be installed to the backend of the project
            by entering the following commands into the terminal:{" "}
          </p>
          <CodeBlock code={"<p>cd blount</p><p>npm install cors</p>"} />
          <h6 className="run"> Frontend Dependencies </h6>
          <p className="run">
            In the frontend folder, AXIOS and @phosphor-icons/react must be
            installed by entering the following commands into the terminal:
          </p>
          <CodeBlock
            code={
              "<p>cd blount</p><p>npm install axios</p><npm install @phosphor-icons/react</p>"
            }
          />
        </div>
      </section>
      <SpacerLine spacerColor={"var(--lightBlue)"} />
      <section id="Set Up Enviroment">
        <div className="horizontal-line"></div>
        <div className="content">
          <h2 className="run">Set Up Enviroment</h2>
          <p className="run">
            For both the frontend and backend, the environment files must be
            setup. To do this, locate the .env.example file in each folder and
            duplicate them. Then, rename the duplicated files (named .env
            copy.example) to .env
          </p>
        </div>
      </section>
      <SpacerLine spacerColor={"var(--lightBlue)"} />
      <section id="Database Access">
        <div className="horizontal-line"></div>
        <div className="content">
          <h2 className="run">Database Access</h2>
          <p className="run">
            In order to access the project database, you must be granted
            permission. This can be done by adding you IP addresses to the
            Network Access section in the MongoDB. If you do not know your IP
            Addrees, you can start running the backend of the project, and await
            the popup in MongoDB to approve you IP Address.
          </p>
        </div>
      </section>
      <SpacerLine spacerColor={"var(--lightBlue)"} />
      <section id="Running the backend">
        <div className="horizontal-line"></div>
        <div className="content">
          <h2 className="run">Running the Backend</h2>
          <p className="run">
            To start the development version of the backend of the project,
            enter the following commands into the terminal:
          </p>
          <CodeBlock code={"<p>cd blount</p><p>npm run dev</p>"} />
          <p className="run">
            Once the the terminal displays:{" "}
            <strong>webpack compiled successfully</strong> you are able to
            access the backend of the web app by visiting:{" "}
            <u>localhost:4000/admin/</u>
          </p>
        </div>
      </section>
      <section id="Running the Frontend">
        <div className="horizontal-line"></div>
        <div className="content">
          <h2 className="run">Running the Backend</h2>
          <p className="run">
            To start the development version of the frontend of the project,
            enter the following commands into the terminal:
          </p>
          <CodeBlock code={"<p>cd blount</p><p>npm run dev</p>"} />
          <p className="run">
            Once the the terminal displays:{" "}
            <strong>
              Compiled/ <span>&#10100;</span>
              <span>&#10100;</span>..slug<span>&#10101;</span>
              <span>&#10101;</span>
            </strong>{" "}
            you are able to access the backend of the web app by visiting:{" "}
            <u>localhost:4000/admin/</u>
          </p>
          <p className="run">
            <strong>Note:</strong>  If your terminal gives you the error: Error
            fetching global data: AxiosError it might be a result of the backend
            not running or is yet to fully start up. In that case, must sure the
            backend is successfully running and try again.
          </p>
        </div>
      </section>
    </div>
  );
}
export default RunProject;
