import { FaCheck } from "react-icons/fa";

function Ad1() {
  return (
    <section className="bg-primary py-4 ad1">
      <div className="container">
        <div className="row pt-3 adrow">
          <div className="col-md-4 mb-4 offset-md-1">
            <img src="team.png" alt="" height="250px" />
          </div>
          <div className="col-md-4 text-left">
            <div className="row">
              <div className="col-md-12">
                <br></br>
              </div>
            </div>
            <div className="row perrow d-flex flex-row">
              <h2 className="text-white">
                {" "}
                <FaCheck />{" "}
                PLAN
              </h2>
            </div>
            <div className="row perrow">
              <h2 className="text-primary"><FaCheck />{" "}EXECUTE</h2>
            </div>
            <div className="row perrow">
              <h2 className="text-white"><FaCheck />{" "}REPEAT</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ad1;
