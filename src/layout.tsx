import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import styles from './layout.module.scss'
import TopBar from './NavBar/TopBar';


const Layout: React.FC = () => {

    const location = useLocation();

  return (
    <div className={styles.bdMain}>
        <TopBar />
        <div className={styles.bd} >
            <NavBar />
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout