import BetFooter from '@/components/AffiliateBetjilli/BetFooter/BetFooter';
import BetHeader from '@/components/AffiliateBetjilli/BetHeader/BetHeader';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AffiliateBetJiliLayout = () => {
    return (
        <>
          <div className='App '>
            <BetHeader/>
            <main>
                <Outlet/>
            </main>
            <BetFooter/>
            </div>  
        </>
    );
};

export default AffiliateBetJiliLayout;