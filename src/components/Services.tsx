import { FaGlobe, FaCode, FaShoppingCart } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className="services text-bg-dark py-5 position-relative">
      <div className="container position-relative text-container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">Services</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">What I Can Do For You</h2>
          <p className="lead">
            Here are some of the services I can provide for you.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <FaGlobe className="fs-1 mb-4" />
            <h3 className="fs-3">Web Design</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">
              As a web designer, I craft visually stunning and user-friendly
              websites. I specialize in creating unique and engaging designs
              that captivate audiences. Every pixel I place is carefully
              considered to enhance the user's experience and make a lasting
              impression.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <FaCode className="fs-1 mb-4" />
            <h3 className="fs-3">Web Development</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">
              Web development is my passion. I bring web designs to life with
              cutting-edge coding techniques. Whether it's building a responsive
              frontend or developing a robust backend, I am committed to
              delivering high-quality web solutions that meet your needs and
              exceed your expectations.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <FaShoppingCart className="fs-1 mb-4" />
            <h3 className="fs-3">Advertising & SEO</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">
              Effective advertising and SEO strategies are essential for online
              success. I specialize in optimizing websites for search engines
              and creating targeted advertising campaigns. Let me help you reach
              your target audience, boost your online presence, and drive growth
              for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
