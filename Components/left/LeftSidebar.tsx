// src/components/DataStyleSelection/DataStyleSelection.tsx

"use client";
import React, { ChangeEvent,useState } from "react";
import { usePersonalDataStore, useProjectStore, useEducationStore } from "@/app/store";

export default function LeftSidebar() {
  const { personalData, updatePersonalData,} = usePersonalDataStore();
  const {  addProject, updateProject, deleteProject } = useProjectStore();
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  // To Add Personal Data to the State
  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalData(name, value); // Update other fields in the store
  };

  // To Add Project Data to the State
  const handleChangeProject = () => {
    if (editId) {
        updateProject(editId, projectName, projectDetails);
        setEditId(null);
    } else {
        addProject(projectName, projectDetails);
    }
    setProjectName('');
    setProjectDetails('');
};

  // To Add Education Data to the State
  const handleChangeEducation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, id } = e.target;
    const newEducationData: EducationData = { ...educationData };

    if (name.includes("eName")) {
      newEducationData.educationTitles[id] = value;
    } else if (name.includes("eDescription")) {
      newEducationData.educationDesc[id] = value;
    } else if (name.includes("startDate")) {
      newEducationData.duration[`startDate${id}`] = value;
    } else if (name.includes("endDate")) {
      newEducationData.duration[`endDate${id}`] = value;
    } else if (name.includes("cgpa") || name.includes("percentage")) {
      if (!newEducationData.performance) {
        newEducationData.performance = {};
      }
      newEducationData.performance[id] = value;
    }

    setEducationData(newEducationData);
  };

  const handleEducationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const i = educationCount + 1;

    const template = (
      <div key={i}>
        <div className="my-2">
          <input
            id={`eTitle${i}`}
            name="eName"
            onChange={handleChangeEducation}
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div className="my-2">
          <textarea
            id={`eDescription${i}`}
            name="eDescription"
            onChange={handleChangeEducation}
            placeholder="Use comma to separate Description"
          />
        </div>
        <div className="my-2">
          <input
            id={`startDate${i}`}
            name="startDate"
            onChange={handleChangeEducation}
            type="month"
            placeholder="Start Date"
          />
        </div>
        <div className="my-2">
          <input
            id={`endDate${i}`}
            name="endDate"
            onChange={handleChangeEducation}
            type="month"
            placeholder="End Date"
          />
        </div>
        <div className="my-2">
          <input
            id={`cgpa${i}`}
            name="cgpa"
            onChange={handleChangeEducation}
            type="text"
            placeholder="Enter CGPA/Percentage"
          />
        </div>
      </div>
    );

    setEducationArrTemplate((prev) => [...prev, template]);
    setEducationCount(i);
  };

  // To Add Certificates Data to the State
  const handleChangeCertificate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, id } = e.target;
    const newCertificateData: CertificateData = { ...certificateData };

    if (name.includes("cName")) {
      newCertificateData.certificateTitles[id] = value;
    } else {
      newCertificateData.certificateDesc[id] = value;
    }

    setCertificateData(newCertificateData);
  };

  const handleCertificatesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const i = certificateCount + 1;

    const template = (
      <div key={i}>
        <div className="my-2">
          <input
            id={`cTitle${i}`}
            name="cName"
            onChange={handleChangeCertificate}
            type="text"
            placeholder="Enter Certificate Title"
          />
        </div>
        <div className="my-2">
          <textarea
            id={`cDescription${i}`}
            name="cDescription"
            onChange={handleChangeCertificate}
            placeholder="Use comma to separate Description"
          />
        </div>
      </div>
    );

    setCertificatesArrTemplate((prev) => [...prev, template]);
    setCertificateCount(i);
  };

  // To Add Work Data to the State
  const handleChangeWork = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, id } = e.target;
    const newWorkData: WorkData = { ...workData };

    if (name.includes("wName")) {
      newWorkData.workTitles[id] = value;
    } else {
      newWorkData.workDesc[id] = value;
    }
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const i = workCount + 1;

    const template = (
      <div key={i}>
        <div className="my-2">
          <input
            id={`wTitle${i}`}
            name="wName"
            onChange={handleChangeWork}
            type="text"
            placeholder="Enter Job Title"
          />
        </div>
        <div className="my-2">
          <textarea
            id={`wDescription${i}`}
            name="wDescription"
            onChange={handleChangeWork}
            placeholder="Use comma to separate Description"
          />
        </div>
      </div>
    );

    setWorkArrTemplate((prev) => [...prev, template]);
    setWorkCount(i);
  };

  // To Add Award & Achievement Data to the State
  const handleChangeAwards = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAwardData({ ...awardData, [name]: value });
  };

  return (
    <div className="w-1/5 mx-2">
      {/* Personal Details Area */}
      <div id="form-personal" className="mb-2">
        <div className="my-2">
          <input
            name="name"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Name"
            value={personalData.name}
          />
        </div>
        <div className="my-2">
          <input
            name="summary"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Summary"
            value={personalData.summary}
          />
        </div>
        <div className="my-2">
          <input
            name="profile"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Work Profile"
            value={personalData.profile}
          />
        </div>
        <div className="my-2">
          <input
            name="address"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Address"
            value={personalData.address}
          />
        </div>
        <div className="my-2">
          <input
            name="phone"
            onChange={handleChangePersonal}
            type="tel"
            placeholder="Phone number"
            value={personalData.phone}
          />
        </div>
        <div className="my-2">
          <input
            name="email"
            onChange={handleChangePersonal}
            type="email"
            placeholder="Email id"
            value={personalData.email}
          />
        </div>
        <div>
          <h4>Linkedin</h4>
          <div className="my-2">
            <input
              name="linkedin"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Linkedin"
              value={personalData.linkedin}
            />
          </div>
        </div>
        <div>
          <h4>Github</h4>
          <div className="my-2">
            <input
              name="github"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Github"
              value={personalData.github}
            />
          </div>
        </div>
      </div>

      {/* Skills Area */}
      <div className="mb-2">
        <div className="text-lg font-medium my-2">Technical Skills</div>

        <div className="my-2">
          <input
            name="skill"
            onChange={handleInputChange}
            type="text"
            placeholder="Separate skills by comma"
            value={personalData.skill}
          />
        </div>
      </div>

      {/* Education Area */}
      <div id="form-education" className="mb-2">
        <div className="my-2">Education</div>
        <hr />
        <button onClick={handleEducationClick} className="my-3 w-100">
          Add Education
        </button>
        {educationCount > 0 &&
          educationArrTemplate.map((element) => (
            <div key={element.key}>{element}</div>
          ))}
      </div>

      {/* Projects Area */}
      <div id="form-projects" className="mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="my-2">Projects</div>
          <div />
        </div>
        <hr />
        <button onClick={handleProjectClick} className="my-3 w-100">
          Add Projects
        </button>
        {projectCount > 0 &&
          projArrTemplate.map((element) => (
            <div key={element.key}>{element}</div>
          ))}
      </div>

      {/* Work Experience Area */}
      <div id="form-work" className="mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="my-2">Work Experience</div>
        </div>
        <hr />
        <button onClick={handleWorkClick} className="my-3 w-100">
          Add Experience
        </button>
        {workCount > 0 &&
          workArrTemplate.map((element) => (
            <div key={element.key}>{element}</div>
          ))}
      </div>

      {/* Awards & Achievement */}
      <div id="form-awards" className="mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="my-2">Awards & Achievement</div>
        </div>
        <hr />
        <div className="my-2">
          <textarea
            name="awards"
            onChange={handleChangeAwards}
            placeholder="Use comma to separate Achievement"
            value={awardData.awards}
          />
        </div>
      </div>

      {/* Hobbies Area */}
      <div id="form-hobbies" className="mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="my-2">Hobbies</div>
        </div>

        <div className="my-2">
          <input
            name="hobbie"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Separate hobbies by comma"
            value={personalData.hobbie}
          />
        </div>
      </div>

      {/* Languages Area */}
      <div id="form-languages" className="mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="my-2">Languages</div>
        </div>
        <div className="my-2">
          <input
            name="language"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Separate languages by comma"
            value={personalData.language}
          />
        </div>

        {/* Certificate Area */}
        <div id="form-certificates" className="mb-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="my-2">Certificate</div>
          </div>
          <button onClick={handleCertificatesClick} className="my-3 w-100">
            Add Certificate
          </button>
          {certificateCount > 0 &&
            CertificatesArrTemplate.map((element) => (
              <div key={element.key}>{element}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
