import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";

const Experience = ({ data }) => {
  const { experience } = data;

  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">
              <SectionHeading title="My Experience" subTitle="Experience" />
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <ul className="resume-box">
              {experience.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>
                      -{element.start} - {element.end}
                    </span>
                    <label>-{element.subtitle}</label>
                  </div>
                  <h5>{element.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  data: PropTypes.object,
};

export default Experience;
