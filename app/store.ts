import {create} from 'zustand';
//change the personal data
type PersonalData = {
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
};

type PersonalDataStore = {
    personalData: PersonalData;
    updatePersonalData: (name: string, value: string) => void;
};

export const usePersonalDataStore = create<PersonalDataStore>((set) => ({
    personalData: {
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
    },
    updatePersonalData: (name, value) => {
        set((state) => ({
            personalData: {
                ...state.personalData,
                [name]: value,
            },
        }));
    },
}));
type UserInputStore = {
    userText: string;
    setUserText: (text: string) => void;
    clearUserText: () => void;
};

export const useUserInputStore = create<UserInputStore>((set) => ({
    userText: '', // Initial text state
    setUserText: (text: string) => set(() => ({ userText: text })), // Update text
    clearUserText: () => set(() => ({ userText: '' })), // Clear text
}));


//change the project data
type Project = {
    id: string; 
    name: string;
    details: string;
};

type ProjectStore = {
    projects: Project[];
    addProject: (name: string, details: string) => void;
    updateProject: (id: string, name: string, details: string) => void;
    deleteProject: (id: string) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
    projects: [],
    addProject: (name, details) => {
        const newProject: Project = {
            id: Date.now().toString(), // Use a timestamp as a unique ID
            name,
            details,
        };
        set((state) => ({
            projects: [...state.projects, newProject],
        }));
    },
    updateProject: (id, name, details) => {
        set((state) => ({
            projects: state.projects.map((project) =>
                project.id === id ? { ...project, name, details } : project
            ),
        }));
    },
    deleteProject: (id) => {
        set((state) => ({
            projects: state.projects.filter((project) => project.id !== id),
        }));
    },
}));


//change the education data
type Education = {
    id: string; 
    name: string; 
    details: string; 
    startDate: string; 
    endDate: string; 
    cgpa: string;
};

type EducationStore = {
    educations: Education[]; 
    addEducation: (name: string, details: string, startDate: string, endDate: string, cgpa: string) => void; // Add education
    updateEducation: (id: string, name: string, details: string, startDate: string, endDate: string, cgpa: string) => void; // Update education
    deleteEducation: (id: string) => void; 
};

export const useEducationStore = create<EducationStore>((set) => ({
    educations: [],

    // Add a new education entry
    addEducation: (name, details, startDate, endDate, cgpa) => {
        const newEducation: Education = {
            id: Date.now().toString(), // Generate unique ID using timestamp
            name,
            details,
            startDate,
            endDate,
            cgpa,
        };
        set((state) => ({
            educations: [...state.educations, newEducation],
        }));
    },

    // Update an existing education entry
    updateEducation: (id, name, details, startDate, endDate, cgpa) => {
        set((state) => ({
            educations: state.educations.map((education) =>
                education.id === id
                    ? { ...education, name, details, startDate, endDate, cgpa }
                    : education
            ),
        }));
    },

    // Delete an education entry
    deleteEducation: (id) => {
        set((state) => ({
            educations: state.educations.filter((education) => education.id !== id),
        }));
    },
}));

//change the certificate data
type Certificate = {
    id: string; 
    name: string; 
    details: string; 
    link: string
};

type CertificateStore = {
    certificates: Certificate[]; 
    addCertificate: (name: string, details: string, link: string) => void; // Add certificate
    updateCertificate: (id: string, name: string, details: string, link: string) => void; // Update education
    deleteCertificate: (id: string) => void; 
};

export const useCertificateStore = create<CertificateStore>((set) => ({
    certificates: [],

    // Add a new certificate entry
    addCertificate: (name, details, link) => {
        const newCertificate: Certificate = {
            id: Date.now().toString(), // Generate unique ID using timestamp
            name,
            details,
            link,
        };
        set((state) => ({
            certificates: [...state.certificates, newCertificate],
        }));
    },

    // Update an existing certificate entry
    updateCertificate: (id, name, details, link) => {
        set((state) => ({
            certificates: state.certificates.map((certificate) =>
                certificate.id === id
                    ? { ...certificate, name, details, link}
                    : certificate
            ),
        }));
    },

    // Delete an certificate entry
    deleteCertificate: (id) => {
        set((state) => ({
            certificates: state.certificates.filter((certificate) => certificate.id !== id),
        }));
    },
}));

//change the work experience
type Experience = {
    id:string;
    name:string;
    details:string;
    startDate:string;
    endDate:string;
}
type ExperienceStore = {
    experiences: Experience[];
    addExperience: (name:string, details:string, startDate: string, endDate:string) => void;
    updateExperience: (id:string, name: string, details:string, startDate:string, endDate:string) => void;
    deleteExperience:(id:string) =>void;
}
export const useExperienceStore = create<ExperienceStore>((set) =>({
    experiences:[], 

    addExperience: (name, details, startDate, endDate) => {
        const newExperience: Experience = {
            id: Date.now().toString(), // Generate unique ID
            name,
            details,
            startDate,
            endDate,
        };
        set((state) => ({
            experiences: [...state.experiences, newExperience],
        }));
    },
    updateExperience: (id, name, details, startDate, endDate) => {
        set((state) => ({
            experiences: state.experiences.map((experience) =>
                experience.id === id
                    ? { ...experience, name, details, startDate, endDate }
                    : experience
            ),
        }));
    },
    deleteExperience: (id) => {
        set((state) => ({
            experiences: state.experiences.filter((experience) => experience.id !== id),
        }));
    },

}))

//change the achievements
type Achievement = {
    id:string;
    name:string;
    details:string;
}
type AchievementStore = {
    achievements: Achievement[];
    addAchievement:(name:string, details:string) => void;
    updateAchievement:(id:string, name:string, details:string) => void;
    deleteAchievement: (id:string) => void;
}
export const useAchievementStore = create<AchievementStore>((set) =>({
    achievements:[], 

    addAchievement: (name, details) => {
        const newAchievement: Achievement = {
            id: Date.now().toString(), // Generate unique ID
            name,
            details,
        };
        set((state) => ({
            achievements: [...state.achievements, newAchievement],
        }));
    },
    updateAchievement: (id, name, details) => {
        set((state) => ({
            achievements: state.achievements.map((achievement) =>
                achievement.id === id
                    ? { ...achievement, name, details}
                    : achievement
            ),
        }));
    },
    deleteAchievement: (id) => {
        set((state) => ({
            achievements: state.achievements.filter((achievement) => achievement.id !== id),
        }));
    },

}))

//font size
type fontSize = {
    sizeValue: number[];
    setsizeValue: (newValue: number[]) => void;
};
export const usefontSize = create<fontSize>((set) => ({
    sizeValue: [33], // Default value
    setsizeValue: (newValue) => set(() => ({ sizeValue: newValue })),
}));

//font weight
type fontWeight = {
    weightValue: number[];
    setweightValue: (newValue: number[]) => void;
};
export const usefontWeight = create<fontWeight>((set) => ({
    weightValue: [33], // Default value
    setweightValue: (newValue) => set(() => ({ weightValue: newValue })),
}));


//margin
type Margin = {
    marginValue: number[];
    setmarginValue: (newValue: number[]) => void;
};
export const useMargin = create<Margin>((set) => ({
    marginValue: [33], // Default value
    setmarginValue: (newValue) => set(() => ({ marginValue: newValue })),
}));

//font family
type fontFamily = {
    position: string;
    setPosition: (newPosition: string) => void;
};
export const usefontFamily = create<fontFamily>((set) => ({
    position: 'top', 
    setPosition: (newPosition) => set({ position: newPosition }),
}));