import AffContactHeader from '@/components/AffContact/AffContactHeader';
import AffForms from '@/components/AffContact/AffForms';
import AffiliateSupport from '@/components/AffContact/AffiliateSupport';
import React from 'react';

const AffContact = () => {
    return (
        <div>
            <AffContactHeader/>
            <AffiliateSupport/>
            <AffForms/>
        </div>
    );
};

export default AffContact;