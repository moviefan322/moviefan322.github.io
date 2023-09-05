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
                src="testimonial-1.jpg"
                width="120px"
                className="rounded-circle"
              />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                "Phil joined our project <span className="text-primary"> seamlessly</span> and quickly became an
                <span className="text-primary"> invaluable</span> part of our team. His smooth onboarding process and
                ability to <span className="text-primary"> collaborate</span> effectively made him an instant <span className="text-primary"> asset</span>.
                The team thoroughly enjoyed working with him, and his
                contributions were truly <span className="text-primary"> outstanding</span>."
              </p>
              <div className="fw-bold fs-5 mt-4">Stella Kowalski</div>
              <div>General Manager - Dev+</div>
            </div>
          </div>
          {/* <!-- Slide 2 --> */}
          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img
                src="testimonial-2.jpg"
                width="120px"
                className="rounded-circle"
              />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                "Phil initially joined our project for a smaller role, but it
                quickly became evident that his potential was <span className="text-primary"> boundless</span>. Within
                a short span, he evolved into one of our top contributors and
                eventually assumed a <span className="text-primary"> leadership</span> role within the team. His rapid
                growth and <span className="text-primary"> dedication to excellence</span> were truly remarkable.”
              </p>
              <div className="fw-bold fs-5 mt-4">Raj Patel</div>
              <div>Team Leader - TechFusion Innovations</div>
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
