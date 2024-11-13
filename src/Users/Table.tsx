import React,{useState, useEffect} from 'react';
import styles from './table.module.scss';
import 'boxicons/css/boxicons.min.css';
import {UserInterface} from './userInterface';
import paginationStyles from './Pagination.module.scss';



interface TableProps {
  data: UserInterface[];
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<UserInterface | null>>
}

const Table: React.FC<TableProps> = ({ data, setShowFilter, setProfile }) => {
  // Function to determine the appropriate class for each status

  const [info, setInfo] = useState<number | null>();
  const numPerPage = 10;
  const [ currentPage, setCurrentPage] = useState(0);
  const [canNextPage, setNextPage] = useState(true);
  const [canPrevPage, setPrevPage] = useState(false);
  const [pagesVisited, setPagesVisited] = useState<number[]>([currentPage]);
  const [pagesCurrent, setPagesCurrent] = useState(0)

  const dataLen = data.length;
  const totalPages = Math.round(dataLen / numPerPage)
  console.log(totalPages)

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
    const target = e.target as Element | null; 
  
    if (target && !target.closest(`.${styles.dot}`)) {
      setInfo(null);
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

  useEffect(() => {
    setPrevPage(currentPage > 0)
    setNextPage(currentPage + numPerPage < dataLen)

  }, [currentPage, dataLen, numPerPage])


  useEffect(() => {
    if(totalPages === 1){
      setPagesVisited([1])
    } else if(totalPages === 2) {
      setPagesVisited([1, 2])
    } else if(totalPages === 3){

      setPagesVisited([1, 2, 3])
    }else if(totalPages > 3) {
      setPagesVisited([1, 2, 3])
    }


    if(totalPages === 4 && pagesCurrent === 3){
      console.log('currentPAGE IN useEffcet ',pagesCurrent)
      setPagesVisited((prevPagesVisited) => {
        const nextPage = prevPagesVisited[prevPagesVisited.length - 1] + 1;
        return [...prevPagesVisited, nextPage];
      });
    }
  }, [totalPages,setPagesVisited, pagesCurrent])

  const handleCurrentPage = () => {

    const pages: number[] = [];
    let tp =  0;

    if(currentPage + numPerPage < dataLen){
      setCurrentPage(currentPage + numPerPage);
      setPagesCurrent(pagesCurrent + 1)
      }

      if(totalPages > 3) {
      
        let element = 1
        element = pages[pages.length - 1] + 1
        console.log('currentPAGE IN HANDLECURRENT ',pagesCurrent)
        if(pages[pages.length - 1] <= pagesCurrent) {
          if(totalPages > 4){
            tp = totalPages - 2
          } else if(totalPages === 4) {
            tp = totalPages - 1
          }

          if(pages[pages.length -1] <= tp){
            console.log(element)
            pages.push(element)
            setPagesVisited(pages) 
          }
        }
      
    } 
 
  
  }

  const handlePrevPage = () => {
    if(currentPage - numPerPage >= 0){
      setCurrentPage(currentPage - numPerPage)
      setPagesCurrent(pagesCurrent - 1)
    }

    if(pagesVisited.length - 1 > 3){
      pagesVisited.pop()
    }
  }

console.log(pagesVisited)
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableCont}>
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
            {data.slice(currentPage, currentPage + numPerPage).map((row, index) => (
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
      </div>
    <div className={paginationStyles.paginationContainer}>
      <span className={paginationStyles.pageInfo}>
         Showing <span className={paginationStyles.showing}>{dataLen > 9 ? (currentPage === 0 ?  currentPage + numPerPage : currentPage) : dataLen}<span className={paginationStyles.dropi}><i className='bx bx-chevron-down'></i></span></span> out of {dataLen}
      </span>
      <div className={paginationStyles.pageControls}>
        {/* Previous Button */}
        <button className={paginationStyles.control} onClick={handlePrevPage} disabled={!canPrevPage ? true : false}>
          <i className='bx bx-chevron-left'></i>
        </button>

          <div className={paginationStyles.visited}>
            {pagesVisited && pagesVisited.map((page, index) => (
             totalPages === 4 && totalPages === page  ? 
               <span key={index} className={paginationStyles.num}></span> :
                <span key={index} className={`${ paginationStyles.num} ${pagesCurrent === page - 1 ? paginationStyles.activePage :''}`}>{page}</span> 
             
            ))}
            </div>
            {totalPages  > 3 && <span className={paginationStyles.num}>...</span>}
            {totalPages === 4 && <span className={`${pagesCurrent === totalPages - 1 ? paginationStyles.activePage : paginationStyles.num}`}>
              {totalPages}</span>}
            {totalPages > 4 && <div className={paginationStyles.visited}>
            <span className={`${paginationStyles.num} ${pagesCurrent === totalPages - 1? paginationStyles.activePage : ''}`}>{totalPages - 1}</span>
            <span className={`${pagesCurrent === totalPages ? paginationStyles.activePage : paginationStyles.num}`}>{totalPages}</span>
          </div>}
          
        <button  className={paginationStyles.control} onClick={handleCurrentPage} disabled={canNextPage ? false : true}>
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Table;
