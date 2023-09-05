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
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaProjectDiagram className="h1" />
              <p className="fs-1">700+</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaClock className="h1" />
              <p className="fs-1">16+</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaBook className="h1" />
              <p className="fs-1">25</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaYoutube className="h1" />
              <p className="fs-1">5K+</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end border-dark">
              <FaCode className="h1" />
              <p className="fs-1">10M+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
