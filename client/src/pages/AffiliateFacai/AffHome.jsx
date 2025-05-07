import AffAbout from '@/components/AffHome/AffAbout';
import AffImageSlider from '@/components/AffHome/AffImageSlider';
import AffPartner from '@/components/AffHome/AffPartner';
import AffSignUpToday from '@/components/AffHome/AffSignUpToday';
import React from 'react';

const AffHome = () => {
    return (
        <div className=''>
            <AffImageSlider/>
            <AffAbout/>
            <AffPartner/>
            <AffSignUpToday/>
            
        </div>
    );
};

export default AffHome;