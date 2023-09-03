import {
  FaProjectDiagram,
  FaUsers,
  FaClock,
  FaBook,
  FaYoutube,
  FaCode,
} from "react-icons/fa";

export default function Stats() {
  return (
    <section className="stats py-5 text-bg-secondary">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaUsers className="h1" />
              <p className="fs-1">500+</p>
              <h3 className="fs-6 text-uppercase">Clients</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaProjectDiagram className="h1" />
              <p className="fs-1">700+</p>
              <h3 className="fs-6 text-uppercase">Projects</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaClock className="h1" />
              <p className="fs-1">16+</p>
              <h3 className="fs-6 text-uppercase">Years</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaBook className="h1" />
              <p className="fs-1">25</p>
              <h3 className="fs-6 text-uppercase">Publications</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaYoutube className="h1" />
              <p className="fs-1">5K+</p>
              <h3 className="fs-6 text-uppercase">Subscribers</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaCode className="h1" />
              <p className="fs-1">10M+</p>
              <h3 className="fs-6 text-uppercase">Lines of Code</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
