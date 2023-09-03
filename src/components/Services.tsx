import { FaGlobe, FaCode, FaShoppingCart } from "react-icons/fa";

function Services() {
  return (
    <section className="services text-bg-dark py-5 position-relative">
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
            <FaGlobe className="fs-1 mb-4"/>
            <h3 className="fs-3">Web Design</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo
              obcaecati architecto est molestiae cupiditate necessitatibus! Eos
              voluptatum facere maiores!
            </p>
          </div>
          <div className="col-md-4 text-center">
            <FaCode className="fs-1 mb-4"/>
            <h3 className="fs-3">Web Development</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo
              obcaecati architecto est molestiae cupiditate necessitatibus! Eos
              voluptatum facere maiores!
            </p>
          </div>
          <div className="col-md-4 text-center">
            <FaShoppingCart className="fs-1 mb-4"/>
            <h3 className="fs-3">Advertising & SEO</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo
              obcaecati architecto est molestiae cupiditate necessitatibus! Eos
              voluptatum facere maiores!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
