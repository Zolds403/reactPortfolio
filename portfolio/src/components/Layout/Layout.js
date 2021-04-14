import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { SyledContent } from './styles';

const Layout = ({ user, childern }) => {
    return (
        <>
            <MobileNav />
            <Sidebar/>
            <SyledContent>
                <UserHeader user={user} />
                <div>{children}</div>
            </SyledContent>
        </>

    );
};

export default Layout;
