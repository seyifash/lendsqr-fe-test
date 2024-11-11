import React,{useState} from 'react';
import styles from './table.module.scss';
import 'boxicons/css/boxicons.min.css';
import {UserInterface} from './userInterface'



interface TableProps {
  data: UserInterface[];
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<UserInterface | null>>
}

const Table: React.FC<TableProps> = ({ data, setShowFilter, setProfile }) => {
  // Function to determine the appropriate class for each status

  const [info, setInfo] = useState<number | null>();

    const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return styles['status-active'];
      case 'Inactive':
        return styles['status-inactive'];
      case 'Pending':
        return styles['status-pending'];
      case 'Blacklisted':
        return styles['status-blacklisted'];
      default:
        return '';
    }
  };
  const moreInfo  = (index:number | null) => {
    setInfo(index)
  }
  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Element | null; // Explicitly cast e.target as Node | null
  
    if (target && !target.closest(`.${styles.dot}`)) {
      setInfo(null); // Close the menu if clicking outside of the menu
    }
  };

  const viewProfile = (profile: UserInterface) => {
    console.log(profile)
    setProfile(profile)
  }

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <table className={styles.table} >
     <thead>
        <tr>
          <th onClick={() => setShowFilter(prevState => !prevState)}>ORGANIZATION <i className="bx bx-filter"></i></th>
          <th onClick={() => setShowFilter(prevState => !prevState)}>USERNAME <i className="bx bx-filter"></i></th>
          <th onClick={() => setShowFilter(prevState => !prevState)}>EMAIL <i className="bx bx-filter"></i></th>
          <th onClick={() => setShowFilter(prevState => !prevState)}>PHONE NUMBER <i className="bx bx-filter"></i></th>
          <th onClick={() => setShowFilter(prevState => !prevState)}>DATE JOINED <i className="bx bx-filter"></i></th>
          <th onClick={() => setShowFilter(prevState => !prevState)}>STATUS <i className="bx bx-filter"></i></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} id={index.toString()}>
            <td>{row.Organization}</td>
            <td>{row.PersonalInfo?.['Full Name'] || 'N/A'}</td>
            <td>{row.PersonalInfo?.['Email Address'] || 'N/A'}</td>
            <td>{row.PersonalInfo?.['Phone Number'] || 'N/A'}</td>
            <td>{row.dateJoined}</td>
            <td><span className={getStatusClass(row.Status)}>{row.Status}</span></td>
            <td className={styles.dot} ><i onClick={() => moreInfo(index)} className='bx bx-dots-vertical-rounded'></i>
            {info === index && <ul className={styles.info}>
              <li onClick={() => viewProfile(row)}>View Details</li>
              <li>BlackList user</li>
              <li>Activate user</li>
            </ul>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
