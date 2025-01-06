import React, { useRef } from "react";
import { Box, Heading, Text, Badge, List, ListItem } from "@chakra-ui/react";
import { GrMail } from "react-icons/gr";
import { BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { ImGithub, ImLocation } from "react-icons/im";
import './theme5.css'; // Include your custom CSS styles here

const Theme5 = (props) => {
  const { themeData, componentRef } = props;
  const { name, profile, address, phone, email, skill, linkedin, github } = themeData.personalData;
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;

  return (
    <Box id="theme2" ref={componentRef} p={5} bg="white" color="black">
      {/* Header Section */}
      <header className="header text-center">
        <Heading as="h1" size="2xl">{name}</Heading>
        <Text fontSize="lg" fontStyle="italic">{profile}</Text>
        <Box className="contact-info" mt={3}>
          <Text><GrMail /> {email}</Text>
          <Text><BsFillTelephoneFill /> {phone}</Text>
          <Text><ImLocation /> {address}</Text>
          <Text><BsLinkedin /> <a href={linkedin}>LinkedIn</a></Text>
          <Text><ImGithub /> <a href={github}>GitHub</a></Text>
        </Box>
      </header>

      {/* Skills Section */}
      <section id="skills" className="my-4">
        <Heading as="h3" size="md" bg="gray.200" py={2} px={4}>Technical Skills</Heading>
        <Box className="skills-list mt-2">
          {skill && skill.split(',').map((skill, index) => (
            <Badge key={index} className="skill-badge" mx={1} my={1}>
              {skill}
            </Badge>
          ))}
        </Box>
      </section>

      {/* Projects Section */}
      <section id="projects" className="my-4">
        <Heading as="h3" size="md" bg="gray.200" py={2} px={4}>Projects</Heading>
        <Box className="projects-list mt-2">
          {Object.entries(projectTitles).map(([key, title], index) => (
            <Box key={index} className="project-item mb-4">
              <Text fontWeight="bold">{title}</Text>
              <List pl={4}>
                {projectDesc[key] &&
                  projectDesc[key].split(',').map((desc, i) => (
                    <ListItem key={i}>{desc}</ListItem>
                  ))}
              </List>
            </Box>
          ))}
        </Box>
      </section>

      {/* Education Section */}
      <section id="education" className="my-4">
        <Heading as="h3" size="md" bg="gray.200" py={2} px={4}>Education</Heading>
        <Box className="education-list mt-2">
          {Object.entries(educationTitles).map(([key, title], index) => (
            <Box key={index} className="education-item mb-4">
              <Text fontWeight="bold">{title}</Text>
              <Text>{educationDesc[key]}</Text>
            </Box>
          ))}
        </Box>
      </section>

      {/* Work Experience Section */}
      <section id="work-experience" className="my-4">
        <Heading as="h3" size="md" bg="gray.200" py={2} px={4}>Work Experience</Heading>
        <Box className="work-experience-list mt-2">
          {Object.entries(workTitles).map(([key, title], index) => (
            <Box key={index} className="work-item mb-4">
              <Text fontWeight="bold">{title}</Text>
              <List pl={4}>
                {workDesc[key] &&
                  workDesc[key].split(',').map((desc, i) => (
                    <ListItem key={i}>{desc}</ListItem>
                  ))}
              </List>
            </Box>
          ))}
        </Box>
      </section>
    </Box>
  );
};

export default Theme5;
