// src/types.ts

export interface PersonalData {
    profileImage: string;
    name: string;
    summary: string;
    profile: string;
    address: string;
    phone: string;
    email: string;
    skill: string;
    hobbie: string;
    language: string;
    linkedin: string;
    github: string;
  }
  
  export interface ProjectData {
    projectTitles: { [key: string]: string };
    projectDesc: { [key: string]: string };
  }
  
  export interface EducationData {
    educationTitles: { [key: string]: string };
    educationDesc: { [key: string]: string };
    duration: { [key: string]: string };
    performance?: { [key: string]: string };
  }
  
  export interface WorkData {
    workTitles: { [key: string]: string };
    workDesc: { [key: string]: string };
  }
  
  export interface AwardData {
    awards: string;
  }
  
  export interface CertificateData {
    certificateTitles: { [key: string]: string };
    certificateDesc: { [key: string]: string };
  }
  
  export interface Skills {
    languages: string;
    technologies: string;
    fundamentals: string;
    softSkills: string;
  }
  
  export interface ThemeData {
    personalData: PersonalData;
    projectData: ProjectData;
    educationData: EducationData;
    workData: WorkData;
    awardData: AwardData;
    certificateData: CertificateData;
    skills?: Skills;
  }
  
  export interface ResumeContextType {
    themeData: ThemeData;
    checkAward: boolean;
    setCheckAward: React.Dispatch<React.SetStateAction<boolean>>;
    setThemeData: React.Dispatch<React.SetStateAction<ThemeData>>;
    checkProj: boolean;
    checkWork: boolean;
    setCheckProj: React.Dispatch<React.SetStateAction<boolean>>;
    setCheckWork: React.Dispatch<React.SetStateAction<boolean>>;
    checkHobbie: boolean;
    setCheckHobbie: React.Dispatch<React.SetStateAction<boolean>>;
    checkLanguages: boolean;
    setCheckLanguages: React.Dispatch<React.SetStateAction<boolean>>;
    checkCertificate: boolean;
    setCheckCertificate: React.Dispatch<React.SetStateAction<boolean>>;
    checkLinkedin: boolean;
    setCheckLinkedin: React.Dispatch<React.SetStateAction<boolean>>;
    checkGithub: boolean;
    setcheckGithub: React.Dispatch<React.SetStateAction<boolean>>;
  }
  