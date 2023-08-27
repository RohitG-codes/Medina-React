import React from "react";
import "./department.css";

const Department = () => {
  return (
    <div className="dep-con">
      <h1 className="dep-h1">Medical Departments</h1>
      <div className="department">
        <img src={require("./utils/dep3.jpg")} alt="Department 1" />
        <div className="department-description">
          <h2 className="dep-name">Neurology</h2>
          <p>
            Neurology is a branch of medical science that is concerned with
            disorders and diseases of the nervous system. The term neurology
            comes from a combination of two words - "neuron" meaning nerve and
            "logia" meaning "the study of".
          </p>
        </div>
      </div>
      <div className="department">
        <img src={require("./utils/dep2.jpg")} alt="Department 2" />
        <div className="department-description">
          <h2 className="dep-name">Cardiology</h2>
          <p>
            Cardiology is a branch of medicine that deals with disorders of the
            heart and the cardiovascular system. The field includes medical
            diagnosis and treatment of congenital heart defects, coronary artery
            disease, heart failure, valvular heart disease, and
            electrophysiology.
          </p>
        </div>
      </div>
      <div className="department">
        <img src={require("./utils/dep1.jpg")} alt="Department 3" />
        <div className="department-description">
          <h2 className="dep-name">Pathology</h2>
          <p>
            Pathology is the study of disease. It is the bridge between science
            and medicine. It underpins every aspect of patient care, from
            diagnostic testing and treatment advice to using cutting-edge
            genetic technologies and preventing disease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Department;
