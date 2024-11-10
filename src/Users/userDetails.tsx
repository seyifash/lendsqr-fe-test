import React from 'react'
import styles from './userdetails.module.scss'
import TagList from './InfoComponent';
import { UserInterface, createEmptyProfile } from './userInterface';

interface userProps {
    profile: UserInterface | null;
    setProfile: React.Dispatch<React.SetStateAction<UserInterface | null>>
  }

const UserDetails:React.FC<userProps> = ({setProfile, profile}) => {

    const personalInfoTags = ['Full Name', 'Phone Number', 'Email Address', 'Bvn', 'Gender', 'Marital Status',
        'Children', 'Type of Residence'
    ];

    const employmentTags = [
        'Level of Education',
    'Employment Status',
    'Sector of Employment',
    'Duration of Employment',
    'Office Email',
    'Monthly Income',
    'Loan Repayment'
    ]
    const socialsTags = [
        'Twitter',
    'Facebook',
    'Instagram'
    ]

    const guarantorTags = [
        'Full Name',
        'Phone Number',
        'Email Address',
        'Relationship',
    ]
      
  return (
    <div className={styles.userCard}>
        <span className={styles.back} onClick={() => setProfile(null)}><strong>&#8592; </strong> Back to users</span>
        <div className={styles.sect1}>
            <span>User details</span>
            <div className={styles.box}>
                <div className={styles.red}>BLACKLIST USER</div>
                <div className={styles.green}>ACTIVATE USER</div>
            </div>
        </div>

        <div className={styles.card1}>
            <div className={styles.card}>
                <div className={styles.cardPart1}>
                    <span className={styles.icon}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.04053 35.1796C6.47961 32.2202 7.79365 29.6264 9.97961 27.4C12.7405 24.6 16.0732 23.2 19.9796 23.2C23.886 23.2 27.2204 24.6 29.9796 27.4C32.1796 29.6266 33.5062 32.2204 33.9593 35.1796M28.1405 14.0204C28.1405 16.247 27.3468 18.1532 25.7593 19.7408C24.1734 21.3408 22.253 22.1408 20.0001 22.1408C17.7594 22.1408 15.8409 21.3408 14.2409 19.7408C12.6534 18.1533 11.8596 16.247 11.8596 14.0204C11.8596 11.7673 12.6534 9.84679 14.2409 8.25959C15.8409 6.67367 17.7596 5.87991 20.0001 5.87991C22.2532 5.87991 24.1737 6.67367 25.7593 8.25959C27.3468 9.84711 28.1405 11.7674 28.1405 14.0204Z" stroke="#213F7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </span>
                    <div className={styles.id}>
                    <span className={styles.name}>{profile?.PersonalInfo['Full Name']}</span>
                    <span className={styles.nameId}>tegdjjg55288</span>
                    </div>
                </div>
                <div className={styles.cardPart}>
                    <span className={styles.tier}>Users Tier</span>
                    <span className={styles.star}>
                    <i className='bx bxs-star'></i> 
                        <i className='bx bx-star'></i>
                        <i className='bx bx-star'></i>                   
                        </span>
                </div>
                <div className={styles.cardPart2}>
                    <span className={styles.amount}>#200,000.00</span>
                    <span className={styles.bank}>945555555/Providus Bank</span>
                </div>
            </div>

            <div className={styles.menu}>
                <span className={styles.active}>Guarantors</span>
                <span>Documents</span>
                <span>Bank details</span>
                <span>Loans</span>
                <span>Savings</span>
                <span>App and system</span>
            </div>
        </div>

        <div className={styles.personalInfo1}>
            <TagList mainName="Personal Information" tags={personalInfoTags}  info={profile ? profile.PersonalInfo : null} row={5} border={'1px solid  #213F7D'} />
            <TagList mainName="Education and employment" tags={employmentTags}  info={profile ? profile.EducationAndEmployment : null} row={4} border={'1px solid  #213F7D'} />
            <TagList mainName="Socials" tags={socialsTags}  info={profile ? profile.Socials : null} row={5} border={'1px solid  #213F7D'}/>
            <TagList mainName="Guarantors" tags={guarantorTags}  info={profile ? profile.Guarantors[0] : null}  row={5} border={'1px solid  #213F7D'}/>
            <TagList mainName="" tags={guarantorTags}  info={profile ? profile.Guarantors[1] : null}  row={4} border={'none'} />
        </div>
    </div>
  )
}

export default UserDetails