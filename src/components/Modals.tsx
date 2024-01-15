function Modals() {
  return (
    <div className="project-modals">
      {/* <!-- Modal 1 --> */}
      <div id="modal1" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content bg-dark text-white p-5 border-2 border-light">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="mlb-app.png"
                  alt=""
                  className="img-fluid border border-dark"
                />
              </div>
              <div className="col-md-6 mt-4 text-center modal-dex">
                <h3>AllSports</h3>
                <p>
                  AllSports is built on a classic MERN stack with Redux. The
                  application allows users to create a profile, follow their
                  favorite sports teams, and bet on live games.
                </p>
                <div className="mt-7 d-flex justify-content-between modal-link">
                  <a
                    href="https://sports-app322.herokuapp.com/"
                    className="btn btn-primary text-white btn-outline-dark"
                  >
                    {" "}
                    Site{" "}
                  </a>
                  <a
                    href="https://github.com/moviefan322/mlbapi"
                    className="btn btn-dark text-white mx-4 btn-outline-light"
                  >
                    {" "}
                    Code{" "}
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 2 --> */}
      <div id="modal2" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content bg-dark text-white p-5 border-2 border-light">
            <div className="row">
              <div className="col-md-6 mt-4">
                <img
                  src="espan3.png"
                  alt=""
                  className="img-fluid border-dark border"
                />
              </div>
              <div className="col-md-6 mt-4 text-center modal-dex">
                <h3>Españolified</h3>
                <p>
                  Españolified is built with a Nest.js server with PostresSQL
                  and Next.js front-end. It is basically an interactive
                  Spanish-language text book with lessons, quizzes, and allows
                  users to track their progress and stats as they learn Spanish.
                </p>
                <div className="mt-7 d-flex justify-content-between modal-link">
                  <a
                    href="https://espanolified.vercel.app/"
                    className="btn btn-primary text-white btn-outline-dark"
                  >
                    {" "}
                    Site{" "}
                  </a>
                  <a
                    href="https://github.com/moviefan322/spanish-app"
                    className="btn btn-dark text-white mx-4 btn-outline-light"
                  >
                    {" "}
                    Code{" "}
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 3 --> */}
      <div id="modal3" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content bg-dark text-white p-5 border-2 border-light">
            <div className="row">
              <div className="col-md-6 mt-4">
                <img src="love-hungry-1.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 mt-4 text-center modal-dex">
                <h3>Love Hungry</h3>
                <p>
                  Love Hungry is built with Node.js and handlebars. It is a
                  dating application based on the simple question of "What do
                  you want to eat tonight?". It matches users with dates in
                  their area interested in eating the same cuisine and
                  recommends restaurants near you.
                </p>
                <div className="mt-7 d-flex justify-content-between modal-link">
                  <a
                    href="https://love-hungry.herokuapp.com/"
                    className="btn btn-primary text-white btn-outline-dark"
                  >
                    {" "}
                    Site{" "}
                  </a>
                  <a
                    href="https://github.com/moviefan322/love-hungry"
                    className="btn btn-dark text-white mx-4 btn-outline-light"
                  >
                    {" "}
                    Code{" "}
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 4 --> */}
      <div id="modal4" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content bg-dark text-white p-5 border-2 border-light">
            <div className="row">
              <div className="col-md-6 mt-4">
                <img
                  src="laronix.png"
                  alt=""
                  className="img-fluid"
                  style={{ height: "400px", marginLeft: "20%" }}
                />
              </div>
              <div className="col-md-6 mt-4 text-center modal-dex">
                <h3>Laronix Mobile</h3>
                <p>
                  Laronix Mobile is built with a Next.js front end and a
                  python/hugging face/gradio back-end. The application allows
                  users to record an audio clip of speech and transform it into
                  different voices. The target users are laryngectomy patients
                  communicating through voice-boxes. The code for this
                  application is proprietary and not available for public
                  viewing.
                </p>
                <div className="mt-8 d-flex justify-content-between modal-link">
                  <a
                    href="https://develop.d3igioyq2kg6x4.amplifyapp.com/"
                    className="btn btn-primary text-white btn-outline-dark"
                  >
                    {" "}
                    Site{" "}
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 5 --> */}
      <div id="modal5" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content bg-dark text-white p-5 border-2 border-light">
            <div className="row">
              <div className="col-md-6 mt-4">
                <img
                  src="straightpool.png"
                  alt=""
                  className="img-fluid bg-light position-relative w-75 top-50 start-50 translate-middle"
                />
              </div>
              <div className="col-md-6 mt-4 text-center modal-dex">
                <h3>14.1 Counter</h3>
                <p>
                  This is a web application for keeping score in a game of 14.1.
                  For now, it is a standalone front-end application built using
                  Next.js.
                </p>
                <div className="mt-7 d-flex justify-content-between modal-link">
                  <a
                    href="https://straight-pool-counter.vercel.app/"
                    className="btn btn-primary text-white btn-outline-dark"
                  >
                    {" "}
                    Site{" "}
                  </a>
                  <a
                    href="https://github.com/moviefan322/straight-pool-counter"
                    className="btn btn-dark text-white mx-4 btn-outline-light"
                  >
                    {" "}
                    Code{" "}
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 6 --> */}
      <div id="modal6" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content bg-dark text-white p-5 border-2 border-light">
            <div className="row">
              <div className="col-md-6 mt-4">
                <img src="devblog.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 mt-4 text-center modal-dex">
                <h3>Dev Blog</h3>
                <p>
                  This is my dev blog where I write about my coding adventures.
                  It is built entirely on Next.js.
                </p>
                <div className="mt-7 d-flex justify-content-between modal-link">
                  <a
                    href="https://next-ts-blog-lake.vercel.app/"
                    className="btn btn-primary text-white btn-outline-dark"
                  >
                    {" "}
                    Site{" "}
                  </a>
                  <a
                    href="https://github.com/moviefan322/next-ts-blog"
                    className="btn btn-dark text-white mx-4 btn-outline-light"
                  >
                    {" "}
                    Code{" "}
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
