import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials bg-dark text-white py-5">
      <div id="testimonialCarousel" className="carousel slide">
        <div className="carousel-inner">
          {/* <!-- Slide 1 --> */}
          <div className="carousel-item active">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img
                src="hari.png"
                width="120px"
                className="rounded-circle"
              />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                "Phil is a{" "}
                <span className="text-primary"> varacious</span> and 
                <span className="text-primary"> capable</span> engineer. He's been an absolute{" "}
                <span className="text-primary"> asset</span> for our team."
              </p>
              <div className="fw-bold fs-5 mt-4">Sriharo Rao</div>
              <div>Founder - King Henry</div>
            </div>
          </div>
          {/* <!-- Slide 2 --> */}
          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img
                src="hanley.png"
                width="120px"
                className="rounded-circle"
              />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                "Working with Phil was an absolute <span className="text-primary">pleasure </span>. His{" "}
                <span className="text-primary">professionalism </span>and{" "}
                <span className="text-primary"> communication skills</span>{" "}
                made the project incredibly smooth.”
              </p>
              <div className="fw-bold fs-5 mt-4">Tom Hanley</div>
              <div>Events & Marketing Manager - Redbank River Center</div>
            </div>
          </div>
          {/* <!-- Slide 3 --> */}
          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img
                src="testimonial-3.jpg"
                width="120px"
                className="rounded-circle"
              />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                "Phil's problem-solving skills and adaptability were truly
                <span className="text-primary"> exceptional</span>. He
                consistently approached challenges with a
                <span className="text-primary"> creative</span> and{" "}
                <span className="text-primary">innovative</span> mindset, coming
                up with <span className="text-primary"> solutions</span> that
                exceeded our expectations. His ability to pivot and adapt to
                changing project requirements showcased his{" "}
                <span className="text-primary"> versatility</span> and
                <span className="text-primary"> dedication</span> to our
                success."
              </p>
              <div className="fw-bold fs-5 mt-4">Alex Reynolds</div>
              <div>Design Chief - QuantumTech Solutions, LLC</div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <FaArrowLeft />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
