import React, { useContext, useEffect, useRef, useState } from 'react';
import { Heading, Text, Box, Badge } from '@chakra-ui/react';
import './theme1.css';
import { ImLocation } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImGithub } from 'react-icons/im';
import ResumeContext from '../../Context/ResumeContext';

const Theme1 = (props) => {
  const { checkProj, checkWork, checkAward, checkHobbie, checkLanguages, checkCertificate, checkLinkedin, checkGithub } = useContext(ResumeContext);
  const { themeData, componentRef } = props;
  const { name, profile, address, phone, email, skill, hobbie, language, linkedin,github } = themeData.personalData;
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { certificateTitles, certificateDesc } = themeData.certificateData
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;
  const { certificates } = themeData.certificateData

  const [showPageBreak, setShowPageBreak] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if content height exceeds A4 size (approx 1123 pixels at 96 DPI)
    const checkContentHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        if (contentHeight > 1123) {
          setShowPageBreak(true);
        } else {
          setShowPageBreak(false);
        }
      }
    };
    checkContentHeight();
    window.addEventListener('resize', checkContentHeight);
    return () => window.removeEventListener('resize', checkContentHeight);
  }, []);

  return (
    <>
      <Box id="section-to-print" ref={componentRef}>
        <Box _dark={{ border: '1px solid white' }} id="theme1" ref={contentRef}>
          {/* Personal Info  */}
          <header id="info" className="text-center mt-2">
            <Heading as="h2" size="2xl" className="mb-2">
              {name}
            </Heading>
            <Text fontSize="md" className="text-muted my-1 ">
              <span className="mx-2">
                <ImLocation className="d-inline mx-1" />
                {address}
              </span>
              |
              <span className="mx-2">
                <GrMail className="d-inline mx-1" />
                {email}
              </span>
              |
              <span className="mx-2">
                <BsFillTelephoneFill className="d-inline mx-1" />
                {phone}
              </span>
              {!checkLinkedin && <>|
                <span className="mx-2">
                  <BsLinkedin className="d-inline mx-1" />
                  <a target='_blank' href={linkedin} style={{
                    color: '#007bff',
                    textDecoration: 'underline',
                  }}>Linkedin</a>
                </span>
              </>
              }
              {!checkGithub && <>|
                <span className="mx-2">
                  <ImGithub className="d-inline mx-1" />
                  <a target='_blank' href={github} style={{
                    color: '#007bff',
                    textDecoration: 'underline',
                  }}>Github</a>
                </span>
              </>
              }
            </Text>
            <Heading as="h3" size="md" className="mt-1 mb-2">
              {profile}
            </Heading>
          </header>
          {/* Skills Part  */}
          <section id="skills" className="my-2">
            <Heading
              _dark={{ color: 'gray.800' }}
              bg={'#D2E4E1'}
              as="h3"
              size="md"
              px={20}
              py={2}
            >
              TECHNICAL SKILLS
            </Heading>

            <Box
              id="skills-set"
              className="basic-set d-flex justify-content-center align-items-center"
            >
              <Box className="skillBox">
                {skill &&
                  skill.split(',').map((element, index) => (
                    <Badge key={index} className="skill-badge" variant="solid">
                      {element}
                    </Badge>
                  ))}
              </Box>
            </Box>
          </section>

          {/* Project Section  */}
          {/* Project Section */}
          {!checkProj && (
            <section id="projects" className="my-2">
              <Heading
                _dark={{ color: 'gray.800' }}
                bg={'#D2E4E1'}
                as="h3"
                size="md"
                px={20}
                py={2}
              >
                PROJECTS
              </Heading>

              <Box id="project-set" className="basic-set">
                {Object.entries(projectTitles).map((element, index) => {
                  return (
                    <Box key={index} className="subBox">
                      <Text className="sub-title">{element[1]}</Text>
                      <Box className="sub-details">
                        {Object.entries(projectDesc)[index] &&
                          Object.entries(projectDesc)[index][1]
                            .split(',')
                            .map((descElement, descIndex) => (
                              <li key={descIndex}>
                                {descElement.split(' ').map((word, wordIndex) => {
                                  // Regex to match URLs
                                  const urlRegex = /(https?:\/\/[^\s]+)/g;
                                  if (urlRegex.test(word)) {
                                    return (
                                      <a
                                        key={wordIndex}
                                        href={word}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          color: '#007bff',
                                          textDecoration: 'underline',
                                        }}
                                      >
                                        {word}
                                      </a>
                                    );
                                  }
                                  return word + ' '; // Add a space after each word
                                })}
                              </li>
                            ))}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </section>
          )}


          {/* Education Part  */}
          <section id="education" className="my-2">
            <Heading
              _dark={{ color: 'gray.800' }}
              bg={'#D2E4E1'}
              as="h3"
              size="md"
              px={20}
              py={2}
            >
              EDUCATION
            </Heading>

            <Box id="education-set" className="basic-set">
              {Object.entries(educationTitles).map((element, index) => {
                return (
                  <Box key={index} className="subBox">
                    <Text className="sub-title">{element[1]}</Text>
                    <Box className="sub-details">
                      {Object.entries(educationDesc)[index] &&
                        Object.entries(educationDesc)[index][1]
                          .split(',')
                          .map((descElement, descIndex) => (
                            <li key={descIndex}>{descElement}</li>
                          ))}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </section>

          {/* WORK EXPERIENCE  */}
          {!checkWork && (
            <section id="experience" className="my-2">
              <Heading
                _dark={{ color: 'gray.800' }}
                bg={'#D2E4E1'}
                as="h3"
                size="md"
                px={20}
                py={2}
              >
                WORK EXPERIENCE
              </Heading>

              <Box id="experience-set" className="basic-set">
                {Object.entries(workTitles).map((element, index) => {
                  return (
                    <Box key={index} className="subBox">
                      <Text className="sub-title">{element[1]}</Text>
                      <Box className="sub-details">
                        {Object.entries(workDesc)[index] &&
                          Object.entries(workDesc)[index][1]
                            .split(',')
                            .map((descElement, descIndex) => (
                              <li key={descIndex}>{descElement}</li>
                            ))}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </section>
          )}

          {/* Award & Achievement */}
          {!checkAward && (
            <section id="awards" className="my-2">
              <Heading
                _dark={{ color: 'gray.800' }}
                bg={'#D2E4E1'}
                as="h3"
                size="md"
                px={20}
                py={2}
              >
                AWARDS & ACHIEVEMENTS
              </Heading>

              <Box
                id="award-set"
                className="basic-set d-flex justify-content-between align-items-center"
              >
                <Box>
                  {awards &&
                    awards.split(',').map((element, index) => {
                      return <li key={index}>{element}</li>;
                    })}
                </Box>
              </Box>
            </section>
          )}

          {/* Hobbies */}
          {!checkHobbie && (
            <section id="hobbie" className="my-2">
              <Heading
                _dark={{ color: 'gray.800' }}
                bg={'#D2E4E1'}
                as="h3"
                size="md"
                px={20}
                py={2}
              >
                HOBBIES
              </Heading>

              <Box
                id="hobbie-set"
                className="basic-set d-flex justify-content-center align-items-center"
              >
                <Box className="hobbieBox">
                  {hobbie ? (
                    hobbie.split(',').map((element, index) => (
                      <Badge key={index} className="hobbie-badge" variant="solid">
                        {element}
                      </Badge>
                    ))
                  ) : (
                    <Text>No hobbies specified</Text>
                  )}
                </Box>
              </Box>
            </section>
          )}
          {/* Languages */}
          {!checkLanguages && (
            <section id="hobbie" className="my-2">
              <Heading
                _dark={{ color: 'gray.800' }}
                bg={'#D2E4E1'}
                as="h3"
                size="md"
                px={20}
                py={2}
              >
                LANGUAGES
              </Heading>
              <Box
                id="language-set"
                className="basic-set d-flex justify-content-center align-items-center"
              >
                <Box className="languageBox">
                  {language ? (
                    language.split(',').map((element, index) => (
                      <Badge key={index} className="language-badge" variant="solid">
                        {element}
                      </Badge>
                    ))
                  ) : (
                    <Text>No language specified</Text>
                  )}
                </Box>
              </Box>
            </section>

          )}
          {/* Certificate Part  */}
          {!checkCertificate && (
            <section id="certificate" className="my-2">
              <Heading
                _dark={{ color: 'gray.800' }}
                bg={'#D2E4E1'}
                as="h3"
                size="md"
                px={20}
                py={2}
              >
                CERTIFICATES
              </Heading>

              <Box id="experience-set" className="basic-set">
                {Object.entries(certificateTitles).map((element, index) => {
                  return (
                    <Box key={index} className="subBox">
                      <Text className="sub-title">{element[1]}</Text>
                      <Box className="sub-details">
                        {Object.entries(certificateDesc)[index] &&
                          Object.entries(certificateDesc)[index][1]
                            .split(',')
                            .map((descElement, descIndex) => (
                              <li key={descIndex}>{descElement}</li>
                            ))}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </section>
          )}
          {/* Page Break Indicator */}
          {showPageBreak && (
            <Box className="page-break-indicator">
              <span>-- Page Break --</span>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Theme1;