function Contact() {
  return (
    <section id="contact" className="contact text-bg-dark bg-gradient py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="text-center mb-5">
              <h4 className="text-uppercase fw-bold text-primary">Contact</h4>
              <hr className="w-25 mx-auto" />
              <h2 className="mb-4">I'd love to hear from you</h2>
              <p className="lead">
                If you have any questions or would like to work together, please
                contact me with the form below.
              </p>
            </div>
            <form name="contact" action="https://formspree.io/f/xgejyqbo" method="POST">
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control bg-light border-top-0 border-start-0 border-end-0 rounded-0 border-muted"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="form-control bg-light border-top-0 border-start-0 border-end-0 rounded-0 border-muted"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="mb-5">
                <textarea
                  className="form-control bg-light border-top-0 border-start-0 border-end-0 rounded-0 border-muted"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <div className="mb-5 d-grid">
                <button className="btn btn-primary fw-bold fs-5" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
