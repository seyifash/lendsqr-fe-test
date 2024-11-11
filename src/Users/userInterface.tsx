// dataInterfaces.ts

export interface guarantor {
    'Full Name': string;
    'Phone Number': string;
    'Email Address': string;
    'Relationship': string;
  }
  
  export interface Socials {
    'Twitter': string;
    'Facebook': string;
    'Instagram': string;
  }
  
  export interface EducationAndEmployment {
    'Level of Education': string;
    'Employment Status': string;
    'Sector of Employment': string;
    'Duration of Employment': string;
    'Office Email': string;
    'Monthly Income': string;
    'Loan Repayment': string;
  }
  
  export interface PersonalInfo {
    'Full Name': string;
    'Phone Number': string;
    'Email Address': string;
    'BVN': string;
    'Gender': string;
    'Marital Status': string;
    'Children': number;
    'Type of Residence': string;
  }

  
  
  export interface UserInterface {
    PersonalInfo: PersonalInfo;
    EducationAndEmployment: EducationAndEmployment;
    Organization: string;
    dateJoined: string;
    Socials: Socials;
    Guarantor: guarantor[];
    Status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  }

  