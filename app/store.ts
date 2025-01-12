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
