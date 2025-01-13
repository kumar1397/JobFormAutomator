import React from 'react';
import AwardsA from './blocks/Awards/AwardsA';
import CertificationsA from './blocks/Certifications/CertificationsA';
import ContactC from './blocks/Contact/ContactC';
import EducationA from './blocks/Education/EducationA';
import HeadingD from './blocks/Heading/HeadingD';
import HobbiesA from './blocks/Hobbies/HobbiesA';
import LanguagesA from './blocks/Languages/LanguagesA';
import ObjectiveA from './blocks/Objective/ObjectiveA';
import PageContext from './util/PageContext';
import ProjectsA from './blocks/Projects/ProjectsA';
import ReferencesA from './blocks/References/ReferencesA';
import SkillsA from './blocks/Skills/SkillsA';
import WorkA from './blocks/Work/WorkA';

type Layout = (keyof typeof Blocks)[][]; // Layout type as an array of arrays of keys

type BlocksType = {
  [key: string]: React.ComponentType<any>; // Blocks object where the value is a React component
};

const Blocks: BlocksType = {
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

interface CastformProps {
  data: {
    profile: {
      photograph: string;
      firstName: string;
      lastName: string;
      subtitle: string;
      heading: string;
    };
    metadata: {
      layout: {
        castform: Layout;
      };
      colors: {
        background: string;
        text: string;
        primary: string;
      };
      font: string;
    };
  };
}

const Castform: React.FC<CastformProps> = ({ data }) => {
  const layout = data.metadata.layout.castform;

  const Photo = () =>
    data.profile.photograph !== '' && (
      <img
        className="w-32 h-32 rounded-full object-cover"
        style={{
          borderWidth: 6,
          borderColor: data.metadata.colors.background,
        }}
        src={data.profile.photograph}
        alt={data.profile.firstName}
      />
    );

  const Profile = () => (
    <div>
      <h1 className="text-2xl font-bold">
        {data.profile.firstName} {data.profile.lastName}
      </h1>
      <h5>{data.profile.subtitle}</h5>
    </div>
  );

  return (
    <PageContext.Provider value={{ data, heading: HeadingD }}>
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
            className="col-span-4 py-8 pl-5 pr-8"
            style={{
              color: data.metadata.colors.background,
              backgroundColor: data.metadata.colors.primary,
            }}
          >
            <div className="grid gap-4">
              <Photo />
              <Profile />
              <div>
                <HeadingD>{data.profile.heading}</HeadingD>
                <ContactC />
              </div>

              {layout[0] &&
                layout[0].map((x, index) => {
                  const Component = Blocks[x];
                  if (!Component) {
                    console.error(`No component found for key: "${x}" in layout[0].`);
                    return null;
                  }
                  return <Component key={index} />;
                })}
            </div>
          </div>
          <div className="col-span-8 py-8 pl-5 pr-8">
            <div className="grid gap-4">
              {layout[1] &&
                layout[1].map((x, index) => {
                  const Component = Blocks[x];
                  if (!Component) {
                    console.error(`No component found for key: "${x}" in layout[1].`);
                    return null;
                  }
                  return <Component key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
};

export default Castform;
