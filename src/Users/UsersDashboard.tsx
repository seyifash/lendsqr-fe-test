import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Users/userSlice';
import { RootState, AppDispatch} from '../store'
import CardClick from './cards';
import Table from './Table';
import FilterForm from './FilterComponent';
import styles from './user.module.scss';
import UserDetails from './userDetails';
import { UserInterface } from './userInterface';



const UsersDashboard: React.FC = () => {
  
  const [profile, setProfile] = useState<UserInterface | null>(null)
  const [filterData, setFilterData] = useState<any>({
    organization: '',
    username: '',
    email: '',
    phoneNumber: '',
    dateJoined: '',
    status: '',
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());

  }, [dispatch]);


  // Get users and admins from the Redux store
  const { users } = useSelector(
    (state: RootState) => state.users
  );
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter visibility


  // Apply filter to the data
  const applyFilter = () => {
    return filterData ? users.filter((row: UserInterface) => {
      return (
        (filterData.organization ? row.Organization.toLowerCase().includes(filterData.organization.toLowerCase()) : true) &&

        (filterData.username ? row.PersonalInfo['Full Name'].toLowerCase().includes(filterData.username.toLowerCase()) : true) &&
        
        
        (filterData.email ? row.PersonalInfo['Email Address'].toLowerCase().includes(filterData.email.toLowerCase()) : true) &&
        
        
        (filterData.phoneNumber ? row.PersonalInfo['Phone Number'].toLowerCase().includes(filterData.phoneNumber.toLowerCase()) : true) &&
        
        
        (filterData.dateJoined ? row.dateJoined?.includes(filterData.dateJoined) : true) &&
        
        
        (filterData.status ? row.Status.toLowerCase().includes(filterData.status.toLowerCase()) : true)
      );
    }) : users
  };

  const data = applyFilter();

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
                data={users}
              />
            )}

            <div className={styles.tableCont}>
              <Table data={data}  setShowFilter={setShowFilter} setProfile={setProfile}/>
            </div>


          </div>    
      }
    </div>
  );
};

export default UsersDashboard;
