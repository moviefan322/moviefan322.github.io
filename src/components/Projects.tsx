import Modals from "./Modals";

function Projects() {
  return (
    <>
      <section className="my-5 pb-5" id="projects">
        <div className="container">
          <div className="row mb-5">
            <div className="text-center">
              <h4 className="text-uppercase fw-bold text-primary">Projects</h4>
              <hr className="w-25 mx-auto" />
              <p className="mb-4 lead">Here are a few examples of my work</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modalredbank">
                  <img src="rb.png" className="card-img-top" height="400px" />
                  <div className="card-body">
                    <p>
                      <strong>Redbank.org</strong> - Municipal tourism website
                      for Redbank, NJ.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4 align-self-center">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modalai">
                  <img
                    src="ailogo.png"
                    className="card-img-top"
                    height="200px"
                  />
                  <div className="card-body">
                    <p>
                      <strong>AI Political Consultants</strong> - An application
                      to track and analyze political sentiment online
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal1">
                  <img
                    src="mlb-app3.png"
                    className="card-img-top"
                    height="400px"
                  />
                  <div className="card-body">
                    <p>
                      <strong>AllSports</strong> - Live sports tracking website
                      with up-to-date scores, odds, and betting
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal1">
                  <img src="bud.png" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Billiards University Drills</strong> - This
                      application guides the user through several billiards
                      drill routines and allows them to track their progress
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modaltsb">
                  <img src="tsb.png" className="card-img-top" height="400px" />
                  <div className="card-body">
                    <p>
                      <strong>Turkish Study Buddy</strong> - An application
                      designed to help users learn Turkish
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal2">
                  <img src="espan4.png" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Españolified</strong> - Spanish-language learning
                      app with interactive lessons and quizzes
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal5">
                  <img
                    src="straightpool.png"
                    className="card-img-top bg-light"
                  />
                  <div className="card-body">
                    <p>
                      <strong>14.1/Straight Pool Counter</strong> - A nifty web
                      application for keeping score in a game of 14.1
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal3">
                  <img src="love2.png" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Love Hungry</strong> - A dating website that
                      matches users with other people that want to eat the same
                      food
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4 align-self-center">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal4">
                  <img
                    src="laronix-header.png"
                    className="card-img-top bg-light my-4"
                  />
                  <div className="card-body">
                    <p>
                      <strong>Laronix</strong> - A voice-modification
                      application designed to help laryngectomy patients sound
                      more like themselves
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modals />
    </>
  );
}

export default Projects;
