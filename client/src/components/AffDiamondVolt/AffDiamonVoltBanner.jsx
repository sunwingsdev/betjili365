import React from 'react';
import image from "../../assets/affiliateImages/banner_ipl2025.jpg";

const AffDiamondVoltBanner = () => {
    return (
        <div className="object-cover border-b-8 border-textSecondaryColorTwo">
        <img src={image} alt="" className="w-full" />
      </div>
    );
};

export default AffDiamondVoltBanner;