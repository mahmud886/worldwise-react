import Logo from './Logo';
import styles from './Sidebar.module.css';
import AppNav from './AppNav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />
            <Footer />
        </div>
    );
};

export default Sidebar;
