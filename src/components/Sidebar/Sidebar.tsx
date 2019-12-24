import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import { SSidebarContainer } from './Sidebar.styles';

const Sidebar: React.FC = () => {
    return (
        <SSidebarContainer>
            <Header />
            <List />
            <Footer />
        </SSidebarContainer>
    );
}
    
export default Sidebar;
