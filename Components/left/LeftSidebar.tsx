// src/components/DataStyleSelection/DataStyleSelection.tsx

"use client";

import React, { useState, ChangeEvent, JSX } from "react";
import Image from 'next/image';
import { IoMdCloudUpload } from "react-icons/io";

import {
  PersonalData,
  ProjectData,
  EducationData,
  WorkData,
  AwardData,
  CertificateData,
} from "./types";

export default function DataStyleSelection() {
    // const {
    //   themeData,
    //   checkAward,
    //   setCheckAward,
    //   setThemeData,
    //   checkProj,
    //   checkWork,
    //   setCheckProj,
    //   setCheckWork,
    //   checkHobbie,
    //   setCheckHobbie,
    //   checkLanguages,
    //   setCheckLanguages,
    //   checkCertificate,
    //   setCheckCertificate,
    //   checkLinkedin,
    //   setCheckLinkedin,
    //   checkGithub,
    //   setcheckGithub,
    // } = useContext(ResumeContext);

  const [projectCount, setProjectCount] = useState<number>(0);
  const [educationCount, setEducationCount] = useState<number>(0);
  const [certificateCount, setCertificateCount] = useState<number>(0);
  const [workCount, setWorkCount] = useState<number>(0);

  const [projArrTemplate, setProjArrTemplate] = useState<JSX.Element[]>([]);
  const [educationArrTemplate, setEducationArrTemplate] = useState<
    JSX.Element[]
  >([]);
  const [CertificatesArrTemplate, setCertificatesArrTemplate] = useState<
    JSX.Element[]
  >([]);
  const [workArrTemplate, setWorkArrTemplate] = useState<JSX.Element[]>([]);

  const [projectData, setProjectData] = useState<ProjectData>({
    projectTitles: { pTitle1: "Project Title " },
    projectDesc: {
      pDescription1: "Project Description are Shown here, with Bullet Points",
    },
  });

  const [educationData, setEducationData] = useState<EducationData>({
    educationTitles: { eTitle1: "Education Title" },
    educationDesc: {
      eDescription1: "Education Description are Shown here, with Bullet Points",
    },
    duration: { startTime: "January 2024" },
  });

  const [workData, setWorkData] = useState<WorkData>({
    workTitles: { wTitle1: "Work Title" },
    workDesc: {
      wDescription1: "Work Description are Shown here, with Bullet Points",
    },
  });

  const [certificateData, setCertificateData] = useState<CertificateData>({
    certificateTitles: { cTitle1: "Certificate Title" },
    certificateDesc: {
      cDescription1:
        "certification Description are Shown here, with Bullet Points",
    },
  });

  const [personalData, setPersonalData] = useState<PersonalData>({
    profileImage: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Your Name",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    profile: "Work Profile",
    address: "Address Line",
    phone: "Phone Number",
    email: "Email Address",
    skill: "Your, Skills, are, shown, here",
    hobbie: "Your, hobbies, are, shown, here",
    language: "your, languages, are, shown, here",
    linkedin: "Linkedin",
    github: "Github",
  });

  const [awardData, setAwardData] = useState<AwardData>({
    awards: "Your Awards are shown here",
  });

  // To Add Personal Data to the State
  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "profileImage") {
      const fileInput = e.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (file) {
          setPersonalData((prevData) => ({
            ...prevData,
            profileImage: URL.createObjectURL(file),
          }));
        }
      }
    } else {
      setPersonalData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // To Add Project Data to the State
  const handleChangeProject = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, id } = e.target;
    const newProjectData: ProjectData = { ...projectData };

    if (name.includes("pName")) {
      newProjectData.projectTitles[id] = value;
    } else {
      newProjectData.projectDesc[id] = value;
    }

    setProjectData(newProjectData);
    
  };

  const handleProjectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const i = projectCount + 1;

    const template = (
      <div key={i}>
        <div  className="my-2">
          <input
            id={`pTitle${i}`}
            name="pName"
            onChange={handleChangeProject}
            type="text"
            placeholder="Enter Project Title"
          />
        </div>
        <div  className="my-2">
          <textarea
            id={`pDescription${i}`}
            name="pDescription"
            onChange={handleChangeProject}
            placeholder="Use comma to separate Description"
          />
        </div>
      </div>
    );

    setProjArrTemplate((prev) => [...prev, template]);
    setProjectCount(i);
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
        <div  className="my-2">
          <input
            id={`eTitle${i}`}
            name="eName"
            onChange={handleChangeEducation}
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div  className="my-2">
          <textarea
            id={`eDescription${i}`}
            name="eDescription"
            onChange={handleChangeEducation}
            placeholder="Use comma to separate Description"
          />
        </div>
        <div  className="my-2">
          <input
            id={`startDate${i}`}
            name="startDate"
            onChange={handleChangeEducation}
            type="month"
            placeholder="Start Date"
          />
        </div>
        <div  className="my-2">
          <input
            id={`endDate${i}`}
            name="endDate"
            onChange={handleChangeEducation}
            type="month"
            placeholder="End Date"
          />
        </div>
        <div  className="my-2">
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
        <div  className="my-2">
          <input
            id={`cTitle${i}`}
            name="cName"
            onChange={handleChangeCertificate}
            type="text"
            placeholder="Enter Certificate Title"
          />
        </div>
        <div  className="my-2">
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

  // To Add Skill Data to the State

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
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
        <div  className="my-2">
          <input
            id={`wTitle${i}`}
            name="wName"
            onChange={handleChangeWork}
            type="text"
            placeholder="Enter Job Title"
          />
        </div>
        <div  className="my-2">
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
        <div  className="my-2">
          <div className="file">
            <label htmlFor="input-file">
              <IoMdCloudUpload size={30} />
              Select a file
            </label>
            <input
              accept="image/*"
              name="profileImage"
              onChange={handleChangePersonal}
              id="input-file"
              type="file"/>
             <Image height={10} width={10} src={personalData.profileImage} alt="your profile preview"/>
          </div>
        </div>
        <div  className="my-2">
          <input
            name="name"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Name"
            value={personalData.name}
          />
        </div>
        <div  className="my-2">
          <input
            name="summary"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Summary"
            value={personalData.summary}
          />
        </div>
        <div  className="my-2">
          <input
            name="profile"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Work Profile"
            value={personalData.profile}
          />
        </div>
        <div  className="my-2">
          <input
            name="address"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Address"
            value={personalData.address}
          />
        </div>
        <div  className="my-2">
          <input
            name="phone"
            onChange={handleChangePersonal}
            type="tel"
            placeholder="Phone number"
            value={personalData.phone}
          />
        </div>
        <div  className="my-2">
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