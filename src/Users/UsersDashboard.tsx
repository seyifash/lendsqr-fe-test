import React, { useState } from 'react';
import CardClick from './cards';
import Table from './Table';
import Pagination from './Pagination';
import FilterForm from './FilterComponent';
import styles from './user.module.scss';
import data from './data';
import UserDetails from './userDetails';
import { UserInterface } from './userInterface';

// Define the structure for each row of data
type RowData = {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
};

const UsersDashboard: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [profile, setProfile] = useState<UserInterface | null>(null)
  const [filterData, setFilterData] = useState<any>({
    organization: '',
    username: '',
    email: '',
    phoneNumber: '',
    dateJoined: '',
    status: '',
  });
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter visibility


  // Apply filter to the data
  const applyFilter = () => {
    return data.filter((row: UserInterface) => {
      return (
        (filterData.organization ? row.Organization.toLowerCase().includes(filterData.organization.toLowerCase()) : true) &&

        (filterData.username ? row.PersonalInfo['Full Name'].toLowerCase().includes(filterData.username.toLowerCase()) : true) &&
        
        
        (filterData.email ? row.PersonalInfo['Email Address'].toLowerCase().includes(filterData.email.toLowerCase()) : true) &&
        
        
        (filterData.phoneNumber ? row.PersonalInfo['Phone Number'].toLowerCase().includes(filterData.phoneNumber.toLowerCase()) : true) &&
        
        
        (filterData.dateJoined ? row.dateJoined?.includes(filterData.dateJoined) : true) &&
        
        
        (filterData.status ? row.Status.toLowerCase().includes(filterData.status.toLowerCase()) : true)
      );
    });
  };


  // Calculate total pages
  const filteredData = applyFilter();
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Get paginated data after filtering
  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  return (
    <div className={styles.users}>
      {
          profile ? 
          <UserDetails  setProfile={setProfile} profile={profile} />
          :
          <div>
            <CardClick cardName={'Users'} />
            
            {/* Filter Form */}
            {showFilter && (
              <FilterForm
                filterData={filterData}
                onFilterChange={handleFilterChange}
                applyFilter={applyFilter}
                closeFilter={() => setShowFilter(false)}
                data={data}
              />
            )}

            <div className={styles.tableCont}>
              <Table data={paginatedData}  setShowFilter={setShowFilter} setProfile={setProfile}/>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              pageSize={pageSize}
              totalItems={totalItems}
            />

          </div>    
      }
    </div>
  );
};

export default UsersDashboard;
