import MCWPromotions from '@/components/AffPromotions/MCWPromotions';
import PromotionsHeader from '@/components/AffPromotions/PromotionsHeader';
import React from 'react';

const AffPromotions = () => {
    return (
        <div>
           <PromotionsHeader/> 
           <MCWPromotions/>
        </div>
    );
};

export default AffPromotions;