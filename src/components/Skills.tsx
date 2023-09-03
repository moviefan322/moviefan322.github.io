import { FaRegSquareCheck } from "react-icons/fa6";

function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "SQL",
  ];

  return (
    <div className="bg-dark">
      <section className="skills container py-2 text-white">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h3 className="text-uppercase fw-bold ms-3 pt-3">Key Skills</h3>
            <hr className="w-50" />
            <ul className="list-group list-group-flush mx-4">
              {skills.map((skill) => (
                <li>
                  <FaRegSquareCheck className="text-primary" />
                  <span className="ms-2 text-light">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
