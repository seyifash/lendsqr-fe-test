// dataInterfaces.ts

export interface Guarantor {
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
    Guarantors: Guarantor[];
    Status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  }

  export const createEmptyProfile = (): UserInterface => ({
    PersonalInfo: {
      'Full Name': '',
      'Phone Number': '',
      'Email Address': '',
      BVN: '',
      Gender: '',
      'Marital Status': '',
      Children: 0,
      'Type of Residence': '',
    },
    EducationAndEmployment: {
      'Level of Education': '',
      'Employment Status': '',
      'Sector of Employment': '',
      'Duration of Employment': '',
      'Office Email': '',
      'Monthly Income': '',
      'Loan Repayment': '',
    },
    Organization: '',
    dateJoined: '',
    Socials: {
      Twitter: '',
      Facebook: '',
      Instagram: '',
    },
    Guarantors: [],
    Status: 'Inactive',
  });
  
  