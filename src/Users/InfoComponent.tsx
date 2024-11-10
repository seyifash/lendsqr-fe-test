import React from 'react';
import styles from './userdetails.module.scss'
import { EducationAndEmployment, PersonalInfo, UserInterface, Socials, Guarantor } from './userInterface';

interface TagListProps {
  mainName: string;
  tags: string[]; 
  info: PersonalInfo | EducationAndEmployment | Socials | Guarantor | null;
  row: number;
  border: string;
}

const TagList: React.FC<TagListProps> = ({ mainName, tags, info , row, border}) => {
  return (
    <div className={styles.personalInfo} style={{
      borderBottom: `${border}`
    }}>
      <h3>{mainName}</h3>
      <ul style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${row}, 1fr)`, // Set columns based on `row` prop
          gap: '10px', 
        }}>
        {tags.map((tag) => (
          <li  className={styles.labelInfo} key={tag}>
            <span className={styles.labelname}>{tag}</span> 
            <span className={styles.labelvalue}>{info && tag in info ? info[tag as keyof typeof info] : 'N/A'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
