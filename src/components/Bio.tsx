function Bio() {
  return (
    <section id="about" className="about bg-light pt-0 pb-4">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">Let me introduce myself.</h2>
        </div>
        <div className="about-content d-flex gap-5 align-items-center h-100">
          <img
            src="phil2.png"
            className="about-img img-fluid rounded-circle"
            width="300px"
          />
          <p className="lead">
            Hi there, I am a Brazilian-American full-stack web developer based in NYC. My
            journey began with JavaScript and evolved into a passion for a wide
            range of web technologies. <br /><br />
            Having lived in various parts of the world, I've gained a unique
            perspective and insight into diverse cultures, which I draw upon to
            create innovative and culturally sensitive solutions. My
            professional journey has taken me through a wide range of
            industries. These experiences have instilled in me a deep
            appreciation for hard work and have honed my ability to lead teams
            and craft authentic, compelling narratives. <br /><br /> Since discovering
            my love for coding, I am determined to leverage technology to its
            fullest potential. My mission is not only to build exceptional web
            applications but also to help individuals and businesses tell their
            stories in a unique and impactful way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
