import React from 'react';
import Markdown from './util/Markdown';
import AwardsA from './blocks/Awards/AwardsA';
import CertificationsA from './blocks/Certifications/CertificationsA';
import ContactA from './blocks/Contact/ContactA';
import EducationA from './blocks/Education/EducationA';
import HeadingB from './blocks/Heading/HeadingB';
import HobbiesA from './blocks/Hobbies/HobbiesA';
import LanguagesA from './blocks/Languages/LanguagesA';
import PageContext from './util/PageContext';
import ProjectsA from './blocks/Projects/ProjectsA';
import ReferencesA from './blocks/References/ReferencesA';
import SkillsA from './blocks/Skills/SkillsA';
import WorkA from './blocks/Work/WorkA';

// Define the structure of the data prop
interface Profile {
  firstName: string;
  lastName: string;
  subtitle: string;
  photograph: string;
  objective: {
    body: string;
  };
}

interface Metadata {
  font: string;
  colors: {
    text: string;
    background: string;
    primary: string;
  };
  layout: {
    pikachu: string[][];
  };
}

interface Data {
  profile: Profile;
  metadata: Metadata;
}

const Blocks: { [key: string]: React.FC<any> } = {
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

interface PikachuProps {
  data: Data;
}

const Pikachu: React.FC<PikachuProps> = ({ data }) => {
  const layout = data.metadata.layout.pikachu;

  return (
    <PageContext.Provider value={{ data, heading: HeadingB }}>
      <div
        id="page"
        className="p-8 rounded"
        style={{
          fontFamily: data.metadata.font,
          color: data.metadata.colors.text,
          backgroundColor: data.metadata.colors.background,
        }}
      >
        <div className="grid grid-cols-12 gap-8">
          {data.profile.photograph && (
            <div className="self-center col-span-4">
              <img
                className="object-cover w-48 mx-2 rounded-full h-29"
                src={data.profile.photograph}
                alt={data.profile.firstName}
              />
            </div>
          )}

          <div
            className={`${
              data.profile.photograph !== '' ? 'col-span-8' : 'col-span-12'
            }`}
          >
            <div
              className="flex flex-col justify-center rounded h-29"
              style={{
                backgroundColor: data.metadata.colors.primary,
                color: data.metadata.colors.background,
              }}
            >
              <div className="flex flex-col justify-center mx-3 my-2">
                <h1 className="text-3xl font-bold leading-tight">
                  {data.profile.firstName} {data.profile.lastName}
                </h1>
                <div className="text-sm font-medium tracking-wide">
                  {data.profile.subtitle}
                </div>

                {data.profile.objective.body && (
                  <div>
                    <hr
                      className="my-3 opacity-25"
                      style={{ borderColor: data.metadata.colors.background }}
                    />
                    <Markdown className="text-sm">
                      {data.profile.objective.body}
                    </Markdown>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="grid gap-4">
              <ContactA />

              {layout[0] &&
                layout[0].map((x: string) => {
                  const Component = Blocks[x];
                  return Component ? <Component key={x} /> : null;
                })}
            </div>
          </div>

          <div className="col-span-8">
            <div className="grid gap-4">
              {layout[1] &&
                layout[1].map((x: string) => {
                  const Component = Blocks[x];
                  return Component ? <Component key={x} /> : null;
                })}
            </div>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
};

export default Pikachu;
