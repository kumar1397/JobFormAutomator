import React from 'react';
import { hexToRgb } from './util';
import AwardsA from './blocks/Awards/AwardsA';
import CertificationsA from './blocks/Certifications/CertificationsA';
import ContactD from './blocks/Contact/ContactD';
import EducationA from './blocks/Education/EducationA';
import HeadingB from './blocks/Heading/HeadingB';
import HobbiesA from './blocks/Hobbies/HobbiesA';
import LanguagesA from './blocks/Languages/LanguagesA';
import ObjectiveA from './blocks/Objective/ObjectiveA';
import PageContext from './util/PageContext';
import ProjectsA from './blocks/Projects/ProjectsA';
import ReferencesA from './blocks/References/ReferencesA';
import SkillsA from './blocks/Skills/SkillsA';
import WorkA from './blocks/Work/WorkA';

interface Profile {
  photograph: string;
  firstName: string;
  lastName: string;
  subtitle: string;
}

interface Data {
  profile: Profile;
  metadata: {
    layout: {
      glalie: [string[], string[]]; // layout for each section
    };
    colors: {
      primary: string;
      text: string;
      background: string;
    };
    font: string;
  };
}

interface GlalieProps {
  data: Data;
}

const Blocks: Record<string, React.ComponentType<any>> = {
  objective: ObjectiveA,
  work: WorkA,
  education: EducationA,
  projects: ProjectsA,
  awards: AwardsA,
  certifications: CertificationsA,
  skills: SkillsA,
  hobbies: HobbiesA,
  languages: LanguagesA,
  references: ReferencesA,
};

const Glalie: React.FC<GlalieProps> = ({ data }) => {
  const layout = data.metadata.layout.glalie;
  const { r, g, b } = hexToRgb(data.metadata.colors.primary) || {};

  const Profile = () => (
    <div className="grid gap-2 text-center">
      {data.profile.photograph !== '' && (
        <img
          className="w-40 h-40 rounded-full mx-auto object-cover"
          src={data.profile.photograph}
          alt={data.profile.firstName}
        />
      )}
      <div className="text-4xl font-bold leading-none">
        <h1>{data.profile.firstName}</h1>
        <h1>{data.profile.lastName}</h1>
      </div>
      <div className="tracking-wide text-xs uppercase font-medium">
        {data.profile.subtitle}
      </div>
    </div>
  );

  return (
    <PageContext.Provider value={{ data, heading: HeadingB }}>
      <div
        id="page"
        className="rounded"
        style={{
          fontFamily: data.metadata.font,
          color: data.metadata.colors.text,
          backgroundColor: data.metadata.colors.background,
        }}
      >
        <div className="grid grid-cols-12">
          <div
            className="col-span-4"
            style={{
              backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)`,
            }}
          >
            <div className="grid gap-6 text-center p-8">
              <Profile />
              <ContactD />

              {layout[0] &&
                layout[0].map((x, index) => {
                  const Component = Blocks[x];
                  return Component ? <Component key={index} /> : null;
                })}
            </div>
          </div>

          <div className="col-span-8">
            <div className="grid gap-4 p-8">
              {layout[1] &&
                layout[1].map((x, index) => {
                  const Component = Blocks[x];
                  return Component ? <Component key={index} /> : null;
                })}
            </div>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
};

export default Glalie;
