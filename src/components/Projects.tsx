function Projects() {
  return (
    <>
      <section className="my-5 pb-5">
        <div className="container">
          <div className="row mb-5">
          <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">Projects</h4>
          <hr className="w-25 mx-auto" />
          <p className="mb-4 lead">Here is are some examples of my work</p>
        </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary">
                <a data-bs-toggle="modal" data-bs-target="#modal1">
                  <img src="vite.svg" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Orkla Foods</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary">
                <a data-bs-toggle="modal" data-bs-target="#modal2">
                  <img src="vite.svg" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>First Bank</strong> - Donec bibeum mollis liga sit
                      amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary">
                <a data-bs-toggle="modal" data-bs-target="#modal3">
                  <img src="vite.svg" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>All Sweets</strong> - Donec bibeum mollis liga sit
                      amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary">
                <a data-bs-toggle="modal" data-bs-target="#modal4">
                  <img src="vite.svg" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Food Courier</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary">
                <a data-bs-toggle="modal" data-bs-target="#modal5">
                  <img src="vite.svg" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Lyra Market</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary">
                <a data-bs-toggle="modal" data-bs-target="#modal6">
                  <img src="vite.svg" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Monday Stories</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
