import CalculationFormula from '@/components/AffCommission/CalculationFormula';
import CalculationTable from '@/components/AffCommission/CalculationTable';
import CommissionHeader from '@/components/AffCommission/CommissionHeader';
import CommissionRules from '@/components/AffCommission/CommissionRules';
import WeeklyCommission from '@/components/AffCommission/WeeklyCommission';
import React from 'react';

const AffCommission = () => {
    return (
        <div>
           <CommissionHeader/> 
           <WeeklyCommission/>
           <CalculationFormula/>
           <CalculationTable/>
           <CommissionRules/>
        </div>
    );
};

export default AffCommission;