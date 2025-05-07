import React, { useContext } from 'react';
import { LanguageContext } from '@/Context/LanguageContext';
import bgImage from '../../assets/affiliateImages/bg_WhyPartnerUp--scaled.jpg';
import img1 from '../../assets/affiliateImages/card1.png';
import img2 from '../../assets/affiliateImages/card2.png';
import img3 from '../../assets/affiliateImages/card3.png';
import img4 from '../../assets/affiliateImages/card4.png';
import img5 from '../../assets/affiliateImages/card5.png';
import img6 from '../../assets/affiliateImages/icon_revenue.png';

const AffPartner = () => {
  const { language } = useContext(LanguageContext);
  const isBn = language === 'bn';

  const cards = [
    {
      id: 1,
      image: img1,
      text: isBn ? "বিনামূল্যে যোগ দিন" : "Join Free",
    },
    {
      id: 2,
      image: img2,
      text: isBn ? "কোনও বিনিয়োগ প্রয়োজন নেই" : "Zero Investment",
    },
    {
      id: 3,
      image: img3,
      text: isBn ? "নিরাপদ ও স্বচ্ছ" : "Secure and Transparent",
    },
    {
      id: 4,
      image: img4,
      text: isBn ? "দারুণ মার্কেটিং কনটেন্ট" : "Excellent Marketing Content",
    },
    {
      id: 5,
      image: img5,
      text: isBn ? "নির্ধারিত অ্যাফিলিয়েট সহায়তা" : "Dedicated Affiliate support",
    },
    {
      id: 6,
      image: img6,
      text: isBn ? "উচ্চ রেভিনিউ শেয়ার" : "High Revenue Share",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center pb-32 lg:pb-14 py-10  px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center text-white py-[10%] lg:py-[5%]">
        <h3 className="text-4xl md:text-5xl text-center">
          {isBn ? "MCW অ্যাফিলিয়েটের সঙ্গে পার্টনার হবেন কেন?" : "Why partner up with MCW AFFILIATE?"}
        </h3>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map(card => (
          <div
            key={card.id}
            className="rounded overflow-hidden shadow-lg transform hover:scale-105 flex bg-[rgba(26,30,49,0.65)] py-4 flex-col items-center border border-textSecondaryColor transition duration-300"
          >
            <img src={card.image} alt={card.text} className="w-[30%]" />
            <div className="text-textSecondaryColor text-center py-3 font-semibold">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffPartner;
