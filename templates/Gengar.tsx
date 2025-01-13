import { useTranslation } from 'react-i18next';
import React from 'react';
import { hasAddress, hexToRgb } from './util';
import AwardsA from './blocks/Awards/AwardsA';
import CertificationsA from './blocks/Certifications/CertificationsA';
import ContactB from './blocks/Contact/ContactB';
import EducationA from './blocks/Education/EducationA';
import HeadingC from './blocks/Heading/HeadingC';
import HobbiesA from './blocks/Hobbies/HobbiesA';
import LanguagesA from './blocks/Languages/LanguagesA';
import ObjectiveA from './blocks/Objective/ObjectiveA';
import PageContext from './util/PageContext';
import ProjectsA from './blocks/Projects/ProjectsA';
import ReferencesB from './blocks/References/ReferencesB';
import SkillsA from './blocks/Skills/SkillsA';
import WorkA from './blocks/Work/WorkA';

// Defining Blocks object with component types
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
  references: ReferencesB,
};

interface GengarProps {
  data: {
    profile: {
      photograph: string;
      firstName: string;
      lastName: string;
      subtitle: string;
      address: {
        line1: string;
        line2: string;
        city: string;
        pincode: string;
      };
    };
    metadata: {
      layout: {
        gengar: [string[], string[], string[]]; // layout is an array of arrays of component keys
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

const Gengar: React.FC<GengarProps> = ({ data }) => {
  const { t } = useTranslation();
  const layout = data.metadata.layout.gengar;
  const { r, g, b } = hexToRgb(data.metadata.colors.primary) || {};

  // Explicitly typing the styles object
  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      fontFamily: data.metadata.font,
      color: data.metadata.colors.text,
      backgroundColor: data.metadata.colors.background,
    },
    photo: {
      borderColor: data.metadata.colors.background,
    },
    leftSection: {
      backgroundColor: data.metadata.colors.primary,
      color: data.metadata.colors.background,
    },
    rightSection: {
      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)`,
    },
  };

  const Photo = () =>
    data.profile.photograph !== '' && (
      <img
        className="w-24 h-24 rounded-full mr-4 object-cover border-4"
        style={styles.photo}
        src={data.profile.photograph}
        alt={data.profile.firstName}
      />
    );

  const Profile = () => (
    <div>
      <h1 className="text-2xl font-bold leading-tight">{data.profile.firstName}</h1>
      <h1 className="text-2xl font-bold leading-tight">{data.profile.lastName}</h1>
      <div className="text-xs font-medium mt-2">{data.profile.subtitle}</div>
    </div>
  );

  return (
    <PageContext.Provider value={{ data, heading: HeadingC }}>
      <div
        id="page"
        className="rounded"
        style={styles.header}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4 px-6 py-8" style={styles.leftSection}>
            <div className="flex items-center">
              <Photo />
              <Profile />
            </div>

            {hasAddress(data.profile.address) && (
              <div className="flex flex-col mt-4 text-xs">
                <h6 className="font-bold text-xs uppercase tracking-wide mb-1">
                  {t('shared.forms.address')}
                </h6>
                <span>{data.profile.address.line1}</span>
                <span>{data.profile.address.line2}</span>
                <span>
                  {data.profile.address.city} {data.profile.address.pincode}
                </span>
              </div>
            )}

            <hr
              className="w-1/4 my-5 opacity-25"
              style={{ borderColor: data.metadata.colors.background }}
            />

            <h6 className="font-bold text-xs uppercase tracking-wide mb-2">
              {t('shared.forms.contact')}
            </h6>
            <ContactB />
          </div>

          <div className="col-span-8 px-6 py-8" style={styles.rightSection}>
            <div className="grid gap-6 items-center">
              {layout[0]?.map((x, index) => {
                const Component = Blocks[x];
                return Component ? <Component key={index} /> : null;
              })}
            </div>
          </div>

          <div className="col-span-4 px-6 py-8" style={styles.rightSection}>
            <div className="grid gap-6">
              {layout[1]?.map((x, index) => {
                const Component = Blocks[x];
                return Component ? <Component key={index} /> : null;
              })}
            </div>
          </div>

          <div className="col-span-8 px-6 py-8">
            <div className="grid gap-6">
              {layout[2]?.map((x, index) => {
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

export default Gengar;
