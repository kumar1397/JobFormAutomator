import { useTranslation } from 'react-i18next';
import React from 'react';
import { hexToRgb } from './util/index';
import AwardsA from './blocks/Awards/AwardsA';
import CertificationsA from './blocks/Certifications/CertificationsA';
import ContactC from './blocks/Contact/ContactC';
import EducationA from './blocks/Education/EducationA';
import HeadingE from './blocks/Heading/HeadingE';
import HobbiesA from './blocks/Hobbies/HobbiesA';
import LanguagesB from './blocks/Languages/LanguagesB';
import ObjectiveA from './blocks/Objective/ObjectiveA';
import PageContext from './util/PageContext';
import ProjectsA from './blocks/Projects/ProjectsA';
import ReferencesA from './blocks/References/ReferencesA';
import SkillsA from './blocks/Skills/SkillsA';
import WorkA from './blocks/Work/WorkA';

type BlocksType = {
  [key: string]: React.ComponentType<any>; // Blocks type with React components
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
  languages: LanguagesB,
  references: ReferencesA,
};

type Layout = (keyof typeof Blocks)[]; // Layout array type

interface CelebiProps {
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
        celebi: [Layout, Layout];
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

const Celebi: React.FC<CelebiProps> = ({ data }) => {
  const layout = data.metadata.layout.celebi;
  const { r, g, b } = hexToRgb(data.metadata.colors.primary) || {};
  const { t } = useTranslation();

  const styles: { header: React.CSSProperties; leftSection: React.CSSProperties; rightSection: React.CSSProperties } = {
    header: {
      position: 'absolute',
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: data.metadata.colors.background,
      backgroundColor: data.metadata.colors.text,
      height: '160px',
      paddingLeft: '275px',
    },
    leftSection: {
      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)`,
    },
    rightSection: {
      marginTop: '160px',
    },
  };

  const Photo = () =>
    data.profile.photograph !== '' && (
      <div className="relative z-40">
        <img
          className="w-full object-cover object-center"
          src={data.profile.photograph}
          alt={data.profile.firstName}
          style={{
            height: '160px',
          }}
        />
      </div>
    );

  const Profile = () => (
    <div style={styles.header}>
      <h1
        className="tracking-wide uppercase font-bold"
        style={{ fontSize: '2.75em' }}
      >
        {data.profile.firstName} {data.profile.lastName}
      </h1>
      <h6 className="text-lg tracking-wider uppercase">
        {data.profile.subtitle}
      </h6>
    </div>
  );

  return (
    <PageContext.Provider value={{ data, heading: HeadingE }}>
      <div
        id="page"
        className="relative rounded"
        style={{
          fontFamily: data.metadata.font,
          color: data.metadata.colors.text,
          backgroundColor: data.metadata.colors.background,
        }}
      >
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 ml-8" style={styles.leftSection}>
            <Photo />

            <div className="text-center grid gap-4 mt-4 mb-8 mx-6">
              <div>
                <HeadingE>{t('builder.sections.profile')}</HeadingE>
                <div className="relative w-full grid gap-4 text-xs">
                  <ContactC />
                </div>
              </div>

              {layout[0]?.map((x, index) => {
                const Component = Blocks[x];
                if (!Component) {
                  console.error(`No component found for key: "${x}" in layout[0].`);
                  return null; // Skip rendering missing components
                }
                return <Component key={index} />;
              })}
            </div>
          </div>
          <div className="col-span-8">
            <Profile />

            <div className="relative" style={styles.rightSection}>
              <div className="grid gap-4 mt-4 mb-8 mr-8">
                {layout[1]?.map((x, index) => {
                  const Component = Blocks[x];
                  if (!Component) {
                    console.error(`No component found for key: "${x}" in layout[1].`);
                    return null; // Skip rendering missing components
                  }
                  return <Component key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
};

export default Celebi;
