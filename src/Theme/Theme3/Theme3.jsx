// import React, { useContext } from "react";
// import {
//   Box,
//   Text,
//   Heading,
//   Grid,
//   GridItem,
// } from "@chakra-ui/react";
// import "./theme3.css";
// import ResumeContext from "../../Context/ResumeContext";

// const Theme3 = (props) => {
//   const { componentRef, themeData } = props;
//   const { name, address, phone, email, profile, summary, skill, hobbie, language, linkedin, github } =
//     themeData.personalData;

//   const { checkProj, checkWork, checkAward, checkHobbie, checkLanguages, checkCertificate, checkLinkedin, checkGithub } = useContext(ResumeContext);
//   const { projectTitles, projectDesc } = themeData.projectData;
//   const { educationTitles, educationDesc } = themeData.educationData;
//   const { workTitles, workDesc } = themeData.workData;
//   const { awards } = themeData.awardData;

//   return (
//     <Box id="section-to-print"  ref={componentRef}>
//       <Box id="theme3" paddingBlock={10} paddingInline={20}>
//         <header
//           id="info"
//           className="text-center d-flex justify-content-between align-items-center"
//         >
//           <Box className="info-text text-start">
//             <Heading
//               as="h2"
//               size="2xl"
//               color="red.800"
//               className="mb-2"
//               fontFamily="serif"
//             >
//               {name}
//             </Heading>
//             <Text
//               fontWeight="600"
//               fontSize="md"
//               className="mt-1 mb-2"
//               fontFamily="serif"import React, { useContext, useState, useRef, useEffect } from "react";

//             >
//               {profile}
//             </Text>
//             <Box>
//               <Box className="mt-3">
//                 <Text width={"190px"} fontFamily="serif" fontSize={"sm"}>
//                   {address}
//                 </Text>
//                 <Text fontSize={"sm"} fontFamily="serif">
//                   {phone}
//                 </Text>
//                 <Text fontSize={"sm"} fontFamily="serif">
//                   {email}
//                 </Text>
//                 {
//                   !checkLinkedin && <Text fontSize={"sm"} fontFamily="serif" style={{ color: "blue" }}>
//                     <a target="__blak" href={linkedin}>
//                       Linkedin
//                     </a>
//                   </Text>
//                 }
//                 {
//                   !checkGithub && <Text fontSize={"sm"} fontFamily="serif" style={{ color: "blue" }} >
//                     <a target="__blank" href={github} >
//                       Github
//                     </a>
//                   </Text>
//                 }
//               </Box>
//             </Box>
//           </Box>
//         </header>
//         <div className="w-100 border m-auto"></div>
//         <section className="bottom-part d-flex mt-3">
//           <section className="sections">
//             <Box display={"flex"} className="w-full my-4">
//               <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                 Summary
//               </Heading>
//               <Box marginLeft={25}>
//                 <Text fontSize="sm" className="summary-text">
//                   {summary}
//                 </Text>
//               </Box>
//             </Box>
//             {!checkWork && <>
//               <div className="w-100 border m-auto"></div>

//               <Box display={"flex"} className="w-full my-4">
//                 <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                   Experience
//                 </Heading>
//                 <Box marginLeft={25} width="100%">
//                   <Text fontSize="sm" className="summary-text">
//                     {Object.entries(workTitles).map((element, index) => {
//                       return (
//                         <Box key={index} className="mt-1">
//                           <Heading fontSize="md" fontFamily='serif' className="my-2">
//                             {element[1]}
//                           </Heading>
//                           {Object.entries(workDesc)[index] === undefined
//                             ? null
//                             : Object.entries(workDesc)
//                             [index][1].split(",")
//                               .map((element, index) => {
//                                 return <p key={index}>{element}</p>;
//                               })}
//                         </Box>
//                       );
//                     })}
//                   </Text>
//                 </Box>
//               </Box> </>}

//             <div className="w-100 border m-auto"></div>

//             <Box display={"flex"} className="w-full my-4">
//               <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                 Education
//               </Heading>
//               <Box marginLeft={25} width="100%">
//                 <Text fontSize="sm">
//                   {Object.entries(educationTitles).map((element, index) => {
//                     return (
//                       <Box key={index} className="mb-4">
//                         <Heading fontSize="md" fontFamily='serif' className="mb-2">
//                           {element[1]}
//                         </Heading>
//                         {Object.entries(educationDesc)[index] === undefined
//                           ? null
//                           : Object.entries(educationDesc)
//                           [index][1].split(",")
//                             .map((element, index) => {
//                               return <p key={index}>{element}</p>;
//                             })}
//                       </Box>
//                     );
//                   })}
//                 </Text>
//               </Box>
//             </Box>

//             {!checkProj && (
//               <>
//                 {" "}
//                 <div className="w-100 border m-auto"></div>
//                 <Box display={"flex"} className="w-full my-4">
//                   <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                     Projects
//                   </Heading>
//                   <Box marginLeft={25} width="100%">
//                     <Text fontSize="sm">
//                       {Object.entries(projectTitles).map((element, index) => {
//                         return (
//                           <Box key={index} className="mt-1">
//                             <Heading fontSize="md" fontFamily='serif' className="my-2">
//                               {element[1]}
//                             </Heading>
//                             <Box className="sub-details">
//                               {Object.entries(projectDesc)[index] === undefined
//                                 ? null
//                                 : Object.entries(projectDesc)
//                                 [index][1].split(",")
//                                   .map((element, index) => {
//                                     return <li key={index}>{element}</li>;
//                                   })}
//                             </Box>
//                           </Box>
//                         );
//                       })}
//                     </Text>
//                   </Box>
//                 </Box>
//               </>
//             )}

//             <div className="w-100 border m-auto"></div>

//             <Box display={"flex"} className="w-full my-4">
//               <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                 Skills
//               </Heading>
//               <Box marginLeft={25} width="100%">
//                 <Grid templateColumns="repeat(2, 1fr)" gap={5}>
//                   {skill.split(",").map((item, index) => {
//                     return (
//                       <GridItem key={index}>
//                         <Box display="flex" alignItems="center">
//                           <div
//                             style={{
//                               background: "black",
//                               width: "6px",
//                               height: "6px",
//                             }}
//                           ></div>
//                           <p
//                             className="mx-1"
//                             color="gray"
//                             fontFamily="serif"
//                             key={index}
//                           >
//                             {item}
//                           </p>
//                         </Box>
//                       </GridItem>
//                     );
//                   })}
//                 </Grid>
//               </Box>
//             </Box>
//             {!checkAward && <>
//               <div className="w-100 border m-auto"></div>

//               <Box display={"flex"} className="w-full my-4">
//                 <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                   Achievement
//                 </Heading>
//                 <Box marginLeft={25} width="100%">
//                   <Grid templateColumns="repeat(2, 1fr)" gap={5}>
//                     {awards.split(",").map((item, index) => {
//                       return (
//                         <GridItem key={index}>
//                           <Box display="flex" alignItems="center">
//                             <div
//                               style={{
//                                 background: "black",
//                                 width: "6px",
//                                 height: "6px",
//                               }}
//                             ></div>
//                             <p
//                               className="mx-1"
//                               color="gray"
//                               fontFamily='serif'
//                               key={index}
//                             >
//                               {item}
//                             </p>

//                           </Box>
//                         </GridItem>
//                       );
//                     })}
//                   </Grid>
//                 </Box>
//               </Box>
//             </>}
//             {!checkHobbie && <>
//               <div className="w-100 border m-auto"></div>

//               <Box display={"flex"} className="w-full my-4">
//                 <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                   Hobbies
//                 </Heading>
//                 <Box marginLeft={25} width="100%">
//                   <Grid templateColumns="repeat(2, 1fr)" gap={5}>
//                     {hobbie ? (hobbie.split(",").map((item, index) => {
//                       return (
//                         <GridItem key={index}>
//                           <Box display="flex" alignItems="center">
//                             <div
//                               style={{
//                                 background: "black",
//                                 width: "6px",
//                                 height: "6px",
//                               }}
//                             ></div>
//                             <p
//                               className="mx-1"
//                               color="gray"
//                               fontFamily='serif'
//                               key={index}
//                             >
//                               {item}
//                             </p>

//                           </Box>
//                         </GridItem>
//                       );
//                     })) : <Text>No hobbies specified</Text>}

//                   </Grid>
//                 </Box>
//               </Box>
//             </>}
//             {!checkLanguages && <>
//               <div className="w-100 border m-auto"></div>

//               <Box display={"flex"} className="w-full my-4">
//                 <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
//                   Languages
//                 </Heading>
//                 <Box marginLeft={25} width="100%">
//                   <Grid templateColumns="repeat(2, 1fr)" gap={5}>
//                     {language ? (language.split(",").map((item, index) => {
//                       return (
//                         <GridItem key={index}>
//                           <Box display="flex" alignItems="center">
//                             <div
//                               style={{
//                                 background: "black",
//                                 width: "6px",
//                                 height: "6px",
//                               }}
//                             ></div>
//                             <p
//                               className="mx-1"
//                               color="gray"
//                               fontFamily='serif'
//                               key={index}
//                             >
//                               {item}
//                             </p>

//                           </Box>
//                         </GridItem>
//                       );
//                     })) : <Text>No language specified</Text>}

//                   </Grid>
//                 </Box>
//               </Box>
//             </>}
//           </section>
//         </section>
//       </Box>
//     </Box>
//   );
// };

// export default Theme3;

import React, { useContext , useState, useRef , useEffect } from "react";
import {
  Box,
  Divider,
  Text,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "./theme3.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme3 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill, hobbie, language, linkedin, github } =
    themeData.personalData;

  const { checkProj, checkWork, checkAward, checkHobbie, checkLanguages, checkCertificate, checkLinkedin, checkGithub } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc,duration,performance } = themeData.educationData;
  const { certificateTitles, certificateDesc } = themeData.certificateData
  const { workTitles, workDesc,  } = themeData.workData;
  const { awards } = themeData.awardData;
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
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme3" paddingBlock={10} paddingInline={20}>

        {/* Header Section */}
        <header id="info" className="text-center">
          <Heading as="h2" size="2xl" color="black.800" fontFamily="serif" marginBottom={0} style={{textTransform:"uppercase"}}>
            {name}
          </Heading>
          <Text fontFamily="serif" fontSize="sm">{address}</Text>
          <Text fontFamily="serif" fontSize="sm">
            {phone} | <a href={`mailto:${email}`} style={{ textDecoration: "underline" }}>{email}</a> | <a href={`mailto:${github}`} style={{ textDecoration: "underline" }}>{github}</a>
          </Text>
          {!checkLinkedin && (
            <Text fontFamily="serif" fontSize="sm">
              <a href={linkedin} target="_blank" style={{ textDecoration: "underline" }}>{linkedin}</a>
            </Text>
          )}
        </header>

        {/* Education Section */}
        <section style={{ padding: "0px 0" }}>
  <Heading as="h3" size="md" fontFamily="serif" marginBottom={0} style={{ paddingLeft: "20px" }}>EDUCATION</Heading>
  
  <div className="w-100 border m-auto" style={{color:"black"}}></div>
  <Box marginTop={0}>
    {Object.entries(educationTitles).map(([key, value], index) => (
      <Box key={index} marginBottom={0}>
        <Grid templateColumns="1fr auto" gap={2} alignItems="center" justifyContent="space-between">
          {/* Education Name */}
          <GridItem>
            <Text fontWeight="bold" fontFamily="serif" style={{ paddingLeft: "20px", textTransform: "uppercase" }}>{value}</Text>
          </GridItem>
        </Grid>
        {/* Duration */}
        <Box>
          {duration && duration[`startDate${key}`] && duration[`endDate${key}`] && (
            <Text
              fontFamily="serif"
              fontStyle="italic"
              style={{ margin: "0", padding: "0", paddingLeft: "20px", color: "black" }}
            >
              {`${duration[`startDate${key}`]} - ${duration[`endDate${key}`]}`}
            </Text>
          )}
        </Box>
        {/* Description */}
        <Box>
          {Object.entries(educationDesc)[index] &&
            Object.entries(educationDesc)[index][1].split(',').map((element, i) => (
              <Text
                fontFamily="serif"
                fontStyle="italic"
                key={i}
                style={{ margin: "0", padding: "0", paddingLeft: "20px", color: "black" }}
              >
                {element}
              </Text>
            ))}
        </Box>
        {/* CGPA/Percentage */}
        <Box>
          {performance && performance[key] && (
            <Text
              fontFamily="serif"
              fontStyle="italic"
              style={{ margin: "0", padding: "0", paddingLeft: "20px", color: "black" }}
            >
              {`CGPA/Percentage: ${performance[key]}`}
            </Text>
          )}
        </Box>
      </Box>
    ))}
  </Box>
</section>



       {/* Projects Section */}
{!checkProj && (
  <section style={{ padding: "0" }}>
    <Heading as="h3" size="md" fontFamily="serif" marginBottom={0} style={{ paddingLeft: "20px" }}>PROJECTS</Heading>
    <div className="w-100 border m-auto color" style={{color:"black"}}></div>
    <Box marginTop={0}>
      {Object.entries(projectTitles).map(([key, value], index) => (
        <Box key={index} marginBottom={0}>
          <Grid templateColumns="1fr auto" gap={2} alignItems="center" justifyContent="space-between">
            {/* Project Title */}
            <GridItem>
              <Text fontWeight="bold" fontFamily="serif" style={{ paddingLeft: "20px",textTransform:"uppercase" }}>{value}</Text>
            </GridItem>
          
          </Grid>
          {/* Project Description */}
          <Box>
            {Object.entries(projectDesc)[index] &&
              Object.entries(projectDesc)[index][1].split(',').map((element, index) => (
                <li
                  style={{
                    fontFamily: "serif",
                    fontStyle: "italic",
                    margin: "0",
                    padding: "0",
                    color:"black",
                    paddingLeft: "30px",
                  }}
                  key={index}
                >
                  {element}
                </li>
              ))}
          </Box>
        </Box>
      ))}
    </Box>
  </section>
)}


        
        {/* Skills Section */}
        <section>
        <Heading as="h3" size="md" fontFamily="serif" paddingLeft="20px">
          SKILLS
        </Heading>
        <div className="w-100 border m-auto bg-black"></div>
        <Box >
          {/* Languages */}
            <Box paddingLeft="20px">
  <Text fontFamily="serif" display="inline" fontWeight="bold" >
    LANGUAGES:
  </Text>
  <Text fontFamily="serif" display="inline" fontStyle="italic" paddingLeft="5px">
    {skill
      .split(",")
      .filter((item) => ["JavaScript", "Python", "Java", "C++", "Ruby"].includes(item.trim()))
      .join(", ")}
  </Text>
</Box>


          {/* Frameworks */}
          <Box paddingLeft="20px">
  <Text fontFamily="serif" display="inline" fontWeight="bold">
    FRAMEWORKS:
  </Text>
  <Text fontFamily="serif" display="inline" fontStyle="italic" paddingLeft="5px">
    {skill
      .split(",")
      .filter((item) => ["React", "Angular", "Vue", "Django", "Spring"].includes(item.trim()))
      .join(", ")}
  </Text>
</Box>


          {/* Soft Skills */}
          <Box paddingLeft="20px">
  <Text fontFamily="serif" display="inline" fontWeight="bold">
    SOFTSKILLS:
  </Text>
  <Text fontFamily="serif" display="inline" fontStyle="italic" paddingLeft="5px">
    {skill
      .split(",")
      .filter((item) =>["Teamwork", "Communication", "Problem Solving", "Leadership", "Adaptability"].includes(item.trim()))
      .join(", ")}
  </Text>
</Box>


          {/* Fundamentals */}
          <Box paddingLeft="20px">
  <Text fontFamily="serif" display="inline" fontWeight="bold">
    FUNDAMENTALS:
  </Text>
  <Text fontFamily="serif" display="inline" fontStyle="italic" paddingLeft="5px">
    {skill
      .split(",")
      .filter((item) =>["Data Structures", "Algorithms", "Object-Oriented Programming", "Databases", "Networking"].includes(item.trim()))
      .join(", ")}
  </Text>
</Box>

        </Box>
      </section>
    


        {/* Work Experience Section */}
{!checkWork && (
  <section style={{ padding: "10px" }}>
    {/* Section Heading */}
    <Heading
      as="h3"
      size="md"
      fontFamily="serif"
      marginBottom={0}
      style={{ paddingLeft: "20px" }}
    >
      WORK EXPERIENCE
    </Heading>

    {/* Horizontal Line */}
    <div className="w-100 border m-auto" style={{color:"black"}}></div>

    <Box marginTop={0}>
      {/* Map through workTitles */}
      {Object.entries(workTitles).map(([key, title], index) => (
        <Box key={index} marginBottom={0}>
          <Grid templateColumns="1fr auto" gap={2} alignItems="center" justifyContent="space-between">
            {/* Job Title */}
            <GridItem>
              <Text fontWeight="bold" fontFamily="serif" style={{ paddingLeft: "20px",textTransform:"uppercase" }}>
                {title}
              </Text>
            </GridItem>
          </Grid>
          {/* Job Descriptions */}
          <Box>
            {Object.entries(workDesc)[index] &&
              Object.entries(workDesc)[index][1]
                .split(",")
                .map((desc, i) => (
                  <Text
                    fontFamily="serif"
                    fontStyle="italic"
                  
                    key={i}
                    style={{
                      margin: "0",
                      padding: "0",
                      paddingLeft: "20px",
                      color:"black",
                    }}
                  >
                    {desc}
                  </Text>
                ))}
          </Box>
        </Box>
      ))}
    </Box>
  </section>
)}



        {/* Achievements Section */}
        {!checkAward && (
          <section style={{ padding: "0" }}>
            <Heading as="h3" size="md" fontFamily="serif" marginBottom={0} style={{paddingLeft:"20px"}}>ACHIEVEMENTS</Heading>
            <div className="w-100 border m-auto" style={{color:"black"}}></div>
            <Box marginTop={0}>
              <ul>
                {awards.split(",").map((item, index) => (
                  <li key={index} style={{ fontFamily: "serif", marginLeft:"30px",color:"black", }}>{item.trim()}</li>
                ))}
              </ul>
            </Box>
          </section>
        )}

       {/* Hobbies Section */}
{!checkHobbie && (
  <section style={{ padding: "0" }}>
    <Heading as="h3" size="md" fontFamily="serif" marginBottom={0} style={{ paddingLeft: "20px" }}>
      HOBBIES
    </Heading>
    <div className="w-100 border m-auto" style={{color:"black"}}></div>
    <Box marginTop={0} paddingLeft="30px">
      {hobbie ? (
        <Text fontFamily="serif"  fontStyle={"italic"} paddingLeft={"10px"}>
          {hobbie.split(",").map(item => item.trim()).join(", ")}
        </Text>
      ) : (
        <Text fontFamily="serif"  fontStyle={"italic"}>No hobbies specified</Text>
      )}
    </Box>
  </section>
)}


        {/* Languages Section */}
        {!checkLanguages && (
          <section style={{ padding: "0" }}>
            <Heading as="h3" size="md" fontFamily="serif" marginBottom={2} style={{paddingLeft:"20px"}}>LANGUAGES</Heading>
            <div className="w-100 border m-auto" style={{color:"black"}}></div>
            <Box marginTop={0} paddingLeft={"30px"}>
            {hobbie ? (
        <Text fontFamily="serif"  fontStyle={"italic"} paddingLeft={"10px"}>
          {language.split(",").map(item => item.trim()).join(", ")}
        </Text>
      ) : (
        <Text fontFamily="serif"  fontStyle={"italic"}>No hobbies specified</Text>
      )}
            </Box>
          </section>
        )}
       

        {!checkProj && (
  <section style={{ padding: "0" }}>
    <Heading as="h3" size="md" fontFamily="serif" marginBottom={0} style={{ paddingLeft: "20px" }}>CERTIFICATES</Heading>
    <div className="w-100 border m-auto" style={{color:"black"}}></div>
    <Box marginTop={0}>
      {Object.entries(certificateTitles).map(([key, value], index) => (
        <Box key={index} marginBottom={0}>
          <Grid templateColumns="1fr auto" gap={2} alignItems="center" justifyContent="space-between">
            {/* Project Title */}
            <GridItem>
              <Text fontWeight="bold" fontFamily="serif" style={{ paddingLeft: "20px",textTransform:"uppercase" }}>{value}</Text>
            </GridItem>
          
          </Grid>
          {/* Project Description */}
          <Box>
            {Object.entries(certificateDesc)[index] &&
              Object.entries(certificateDesc)[index][1].split(',').map((element, index) => (
                <li
                  style={{
                    fontFamily: "serif",
                    fontStyle: "italic",
                    margin: "0",
                    padding: "0",
                    color:"black",
                    paddingLeft: "20px",
                  }}
                  key={index}
                >
                  {element}
                </li>
              ))}
          </Box>
        </Box>
      ))}
    </Box>
  </section>
)}
            
        

      </Box>
    </Box>
  );
};

export default Theme3;
