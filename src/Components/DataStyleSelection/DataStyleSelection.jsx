import React, { useContext, useEffect, useState } from 'react'
import './DataStyleSelection.css'
import { IoMdCloudUpload } from 'react-icons/io'
import { FormControl, Input, Heading, Textarea, Button, Switch } from '@chakra-ui/react'
import ResumeContext from '../../Context/ResumeContext'
const DataStyleSelection = () => {
    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork, checkHobbie, setCheckHobbie, checkLanguages, setCheckLanguages, checkCertificate, setCheckCertificate,checkLinkedin,setCheckLinkedin, checkGithub,setcheckGithub } = useContext(ResumeContext)
    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [certificateCount, setCertificateCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([])
    const [educationArrTemplate, setEducationArrTemplate] = useState([]);
    const [CertificatesArrTemplate, setCertificatesArrTemplate] = useState([])
    const [workArrTemplate, setWorkArrTemplate] = useState([])
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" },'duration':{startTime:"January 2024"}})
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [certificateData, setCertificateData] = useState({ 'certificateTitles': { cTitle1: "Certificate Title" }, 'certificateDesc': { cDescription1: "certification Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Your Name", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', hobbie: 'Your, hobbies,are,shown,here', language: 'your,languages,are,shown,here',linkedin:"Linkedin" , github:"Github"})
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })
    // To Add Personal Data to the State
    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value })
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
    }
    // To Add Project Data to the State
    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        let tempProjectData = projectData
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData({ ...projectData, tempProjectData })
        setThemeData({ ...themeData, projectData: projectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type={'text'} placeholder='Enter Project Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = projArrTemplate
        arr.push(template)
        setProjArrTemplate(arr)
        setProjectCount(i)
    }

    // To Add Education Data to the State
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target;
        let tempEducationData = { ...educationData };
    
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else if (name.includes('eDescription')) {
            tempEducationData["educationDesc"][id] = value;
        } else if (name.includes('startDate')) {
            tempEducationData["duration"] = tempEducationData["duration"] || {};
            tempEducationData["duration"][`startDate${id}`] = value; // Start date for this education
        } else if (name.includes('endDate')) {
            tempEducationData["duration"] = tempEducationData["duration"] || {};
            tempEducationData["duration"][`endDate${id}`] = value; // End date for this education
        } else if (name.includes('cgpa') || name.includes('percentage')) {
            tempEducationData["performance"] = tempEducationData["performance"] || {};
            tempEducationData["performance"][id] = value; // Store CGPA/percentage
        }
    
        setEducationData(tempEducationData);
    };
    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount;
        ++i;
    
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`eTitle${i}`} name='eName' onChange={handleChangeEducation} type={'text'} placeholder='Enter Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`eDescription${i}`} name='eDescription' onChange={handleChangeEducation} placeholder='Use comma to separate Description' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Input id={`startDate${i}`} name='startDate' onChange={handleChangeEducation} type={'month'} placeholder='Start Date' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Input id={`endDate${i}`} name='endDate' onChange={handleChangeEducation} type={'month'} placeholder='End Date' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Input id={`cgpa${i}`} name='cgpa' onChange={handleChangeEducation} type={'text'} placeholder='Enter CGPA/Percentage' />
                </FormControl>
            </>
        );
    
        let arr = educationArrTemplate;
        arr.push(template);
        setEducationArrTemplate(arr);
        setEducationCount(i);
    };
    
    
    // To Add Certificates Data to the State
    const handleChangeCertificate = (e) => {
        const { name, value, id } = e.target
        let tempCertificateData = certificateData
        if (name.includes('cName')) {
            tempCertificateData["certificateTitles"][id] = value;
        } else {
            tempCertificateData["certificateDesc"][id] = value;
        }
        setCertificateData({ ...certificateData }, tempCertificateData)
    }
    const handleCertificatesClick = (e) => {
        e.preventDefault();
        let i = certificateCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`cTitle${i}`} name='cName' onChange={handleChangeCertificate} type={'text'} placeholder='Enter Certificate Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`cDescription${i}`} name='cDescription' onChange={handleChangeCertificate} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = CertificatesArrTemplate
        arr.push(template)
        setCertificatesArrTemplate(arr)
        setCertificateCount(i)
    }
    const [skills, setSkills] = useState({
        languages: "",
        technologies: "",
        fundamentals: "",
        softSkills: "",
      });
    
      const [skillCount, setSkillCount] = useState(0);
      const [skillArrTemplate, setSkillArrTemplate] = useState([]);
    
      const handleChangeSkill = (e) => {
        const { name, value, id } = e.target;
        let tempSkills = { ...skills };
    
        if (name.includes("languages")) {
          tempSkills["languages"] = value;
        } else if (name.includes("technologies")) {
          tempSkills["technologies"] = value;
        } else if (name.includes("fundamentals")) {
          tempSkills["fundamentals"] = value;
        } else if (name.includes("softSkills")) {
          tempSkills["softSkills"] = value;
        }
    
        setSkills(tempSkills);
        setThemeData((prevThemeData) => ({
          ...prevThemeData,
          skills: tempSkills,
        }));
      };
    
      const handleSkillClick = (e) => {
        e.preventDefault();
        let i = skillCount;
        ++i;
        const template = (
          <>
            <FormControl isRequired className="my-2">
              <Textarea
                id={`languages${i}`}
                name="languages"
                onChange={handleChangeSkill}
                placeholder="Enter Languages (e.g., Java, Python)"
              />
            </FormControl>
            <FormControl isRequired className="my-2">
              <Textarea
                id={`technologies${i}`}
                name="technologies"
                onChange={handleChangeSkill}
                placeholder="Enter Technologies (e.g., React, MongoDB)"
              />
            </FormControl>
            <FormControl isRequired className="my-2">
              <Textarea
                id={`fundamentals${i}`}
                name="fundamentals"
                onChange={handleChangeSkill}
                placeholder="Enter Fundamentals (e.g., OOPS, DBMS)"
              />
            </FormControl>
            <FormControl isRequired className="my-2">
              <Textarea
                id={`softSkills${i}`}
                name="softSkills"
                onChange={handleChangeSkill}
                placeholder="Enter Soft Skills (e.g., Communication, Teamwork)"
              />
            </FormControl>
          </>
        );
        let arr = skillArrTemplate;
        arr.push(template);
        setSkillArrTemplate(arr);
        setSkillCount(i);
      };
    
      useEffect(() => {
        setThemeData((prevThemeData) => ({
          ...prevThemeData,
          skills,
        }));
      }, [skills, setThemeData]);


    // To Add Work Data to the State
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target
        let tempWorkData = workData
        if (name.includes('wName')) {
            tempWorkData["workTitles"][id] = value;
        } else {
            tempWorkData["workDesc"][id] = value;
        }
        setWorkData({ ...workData }, tempWorkData)
    }
    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`wTitle${i}`} name='wName' onChange={handleChangeWork} type={'text'} placeholder='Enter Job Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`wDescription${i}`} name='wDescription' onChange={handleChangeWork} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = workArrTemplate
        arr.push(template)
        setWorkArrTemplate(arr)
        setWorkCount(i)
    }

    // To Add Award & Achievement Data to the State
    const handleChangeAwards = (e) => {
        const { name, value } = e.target
        setAwardData({ ...awardData, [name]: value })
    }
    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData, certificateData })

    }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData, certificateData])

    return (
        <>
            <div className="w-1/5 mx-2 bg-yellow-300">
                {/* Personal Details Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>
                        Personal Details
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <div className='file'>
                            <label htmlFor='input-file'>
                                <i className="material-icons"><IoMdCloudUpload size={30} />
                                </i>Select a file
                            </label>
                            <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' />
                            <img className="blah" src={personalData.profileImage} alt="your profile preview" />
                        </div>
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='name' onChange={handleChangePersonal} type={'text'} placeholder='Your Name' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='summary' onChange={handleChangePersonal} type={'text'} placeholder='Your Summary' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='profile' onChange={handleChangePersonal} type={'text'} placeholder='Work Profile' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='address' onChange={handleChangePersonal} type={'text'} placeholder='Address' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='phone' onChange={handleChangePersonal} type={'tel'} placeholder='Phone number' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='email' onChange={handleChangePersonal} type={'email'} placeholder='Email id' />
                    </FormControl>
                    <div>
                     <h4>Linkedin</h4>  
                    <Switch defaultChecked={true} onChange={() => (setCheckLinkedin(!checkLinkedin))} colorScheme='teal' />
                    <FormControl  className='my-2'>
                        <Input name='linkedin' onChange={handleChangePersonal} type={'text'} placeholder='Linkedin' />
                    </FormControl>
                    </div>
                    <div>
                     <h4>Github</h4>  
                    <Switch defaultChecked={true} onChange={() => (setcheckGithub(!checkGithub))} colorScheme='teal' />
                    <FormControl  className='my-2'>
                        <Input name='github' onChange={handleChangePersonal} type={'text'} placeholder='Github' />
                    </FormControl>
                    </div>
                </div>

                {/* Skills Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Technical Skills
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input name='skill' onChange={handleChangePersonal} type={'text'} placeholder='Separate skills by comma' />
                    </FormControl>
                </div>

                {/* Education Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Education
                    </Heading>
                    <hr />
                    <Button onClick={handleEducationClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Education</Button>
                    {
                        (educationCount > 0) ? educationArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Projects Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Projects
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckProj(!checkProj))} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkProj} onClick={handleProjectClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Projects</Button>
                    {
                        (projectCount > 0) ? projArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Work Experience Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Work Experience
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckWork(!checkWork))} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkWork} onClick={handleWorkClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Experience</Button>
                    {
                        (workCount > 0) ? workArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Awards & Achievement  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Awards & Achievement
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckAward(!checkAward))} colorScheme='teal' />
                    </div>
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <Textarea name='awards' disabled={checkAward} onChange={handleChangeAwards} placeholder='Use comma to separate Achievement' />
                    </FormControl>
                </div>
                {/* Hobbies Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Hobbies
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckHobbie(!checkHobbie))} colorScheme='teal' />
                    </div>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input name='hobbie' onChange={handleChangePersonal} type={'text'} placeholder='Separate hobbies by comma' />
                    </FormControl>
                </div>
                {/* {Language Area} */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Languages
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckLanguages(!checkLanguages))} colorScheme='teal' />
                    </div>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input name='language' onChange={handleChangePersonal} type={'text'} placeholder='Separate language by comma' />
                    </FormControl>
                </div>
                {/* Certificate Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Certificate
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckCertificate(!checkCertificate))} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkCertificate} onClick={handleCertificatesClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Certificate</Button>
                    {
                        (certificateCount > 0) ? CertificatesArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

            </div>
        </>
    )
}

export default DataStyleSelection
