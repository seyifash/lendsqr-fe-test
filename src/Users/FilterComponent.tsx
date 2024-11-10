import React from 'react';
import styles from './filter.module.scss'
import { UserInterface } from './userInterface';


interface FilterFormProps {
     filterData: {
        organization: string; // Ensure this is typed as a string
        username: string;
        email: string;
        phoneNumber: string;
        dateJoined: string;
        status: string;
      }; // Or a specific type if filterData has a specific shape
    onFilterChange: (newFilter: any) => void; // Update to the correct function signature
    applyFilter: () => void;
    closeFilter: () => void;
    data: UserInterface[];
  }
  

const FilterForm: React.FC<FilterFormProps> = ({
  filterData,
  onFilterChange,
  applyFilter,
  closeFilter,
  data
}) => {
  return (
    <div className={styles.filterform}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.filterInput}>
            <label htmlFor="organization">Organization</label>
            <select
                name="organization"
                value={filterData.organization}
                onChange={onFilterChange}
            >
                <option value="None">Select</option> {/* Default option */}
                {Array.from(new Set(data.map((item:any) => item.organization))).map((organization, index) => (
                <option key={index} value={organization}>
                    {organization}
                </option>
                ))}
            </select>
        </div>

        <div className={styles.filterInput}>
        <label htmlFor='username'>UserName</label>
            <input
            type="text"
            name="username"
            value={filterData.username}
            placeholder="User"
            onChange={onFilterChange}
            />
        </div>
        <div className={styles.filterInput}>

        <label htmlFor='email'>Email</label>
            <input
            type="text"
            name="email"
            value={filterData.email}
            placeholder="Email"
            onChange={onFilterChange}
            />
        </div>
        <div className={styles.filterInput}>
        <label htmlFor='phoneNumber'>Phone number</label>
            <input
            type="text"
            name="phoneNumber"
            value={filterData.phoneNumber}
            placeholder="Phone Number"
            onChange={onFilterChange}
            />
        </div>
        <div className={styles.filterInput}>
        <label htmlFor='dateJoined'>Date joined</label>
            <input
            type="date"
            name="dateJoined"
            value={filterData.dateJoined}
            placeholder="Date"
            onChange={onFilterChange}
            />
        </div>
        <div className={styles.filterInput}>
        <label htmlFor='status'>Status</label>
            <input
            type="text"
            name="status"
            value={filterData.status}
            placeholder="Status"
            onChange={onFilterChange}
            />
        </div>
        <div className={styles.btn}>
        <button className={styles.btn1} type="button" onClick={closeFilter}>Reset</button>
        <button  className={styles.btn2} type="button" onClick={applyFilter}>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
