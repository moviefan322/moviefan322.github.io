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
                <a data-bs-toggle="modal" data-bs-target="#modal1">
                  <img src="mlb-app3.png" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>AllSports</strong> - Live sports tracking website
                      with up-to-date scores, odds, and betting
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal2">
                  <img src="espan2.png" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Españolified</strong> - Spanish-language learning
                      app with interactive lessons and quizzes
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal3">
                  <img src="love.png" className="card-img-top" />
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
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
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
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal5">
                  <img src="invis.png" className="card-img-top bg-light" />
                  <div className="card-body">
                    <p>
                      <strong>Invisible Friend</strong> - An AI friend that you
                      can customize and talk to
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal6">
                  <img src="devblog.png" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>My Dev Blog</strong> - I blog about my coding
                      adventures and provide walkthroughs for various
                      technologies
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
