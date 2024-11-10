import React from 'react';
import styles from './Pagination.module.scss';
import 'boxicons/css/boxicons.min.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, pageSize, totalItems }) => {
  
  const getPagesToShow = () => {
    // Show the current page, two pages before and after it
    const pagesToShow = 2; // Show 2 pages before and after
    const firstPage = Math.max(1, currentPage - pagesToShow);
    let lastPage = Math.min(totalPages, currentPage + pagesToShow);

    // If we're on the last page, exclude it from the pagesToShow range
    if (currentPage === totalPages) {
      lastPage = totalPages - 1; // Prevent showing the last page in the current range
    }

    let pageNumbers = [];
    for (let i = firstPage; i <= lastPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className={styles.paginationContainer}>
      <span className={styles.pageInfo}>
         Showing <span className={styles.showing}>{Math.min(currentPage * pageSize, totalItems)} <span className={styles.dropi}><i className='bx bx-chevron-down'></i></span></span> out of {totalItems}
      </span>
      <div className={styles.pageControls}>
        {/* Previous Button */}
        <button className={styles.control} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          <i className='bx bx-chevron-left'></i>
        </button>

        {/* First Page and Ellipses */}
        {currentPage > 3 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className={`${currentPage === 1 ? styles.activePage : ''} ${styles.num} `}
            >
              1
            </button>
            {currentPage > 4 && <span>...</span>}
          </>
        )}

        {/* Pages based on current page */}
        {getPagesToShow().map((page) => (
          <button 
            key={page}
            onClick={() => onPageChange(page)}
            className={`${currentPage === page ? styles.activePage : ''} ${styles.num}`}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis for pages near the last page */}
        {currentPage < totalPages - 2 && <span>...</span>}

        {/* Last Page Button */}
        {currentPage < totalPages - 1 && (
          <button 
            onClick={() => onPageChange(totalPages)}
            className={`${currentPage === totalPages ? styles.activePage : ''} ${styles.num}`}
          >
            {totalPages}
          </button>
        )}

        {/* Next Button */}
        <button  className={styles.control} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

