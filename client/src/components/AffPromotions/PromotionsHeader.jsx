import React, { useContext } from 'react';
import bgImage from '../../assets/affiliateImages/Slider2.jpg'; 
import sideImage from '../../assets/affiliateImages/img_promotion.png'; 
import { LanguageContext } from '@/Context/LanguageContext';

const PromotionsHeader = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Elevate Your Marketing Strategy to the next Level with MCWAffiliates!",
      lines: [
        "Maximize your profits with MCW Promotions – the key to elevate your earnings and maximizing your business’s profitability."
      ]
    },
    bn: {
      title: "MCW অ্যাফিলিয়েটস এর সাথে আপনার মার্কেটিং স্ট্র্যাটেজি উন্নত করুন !",
      lines: [
        "MCW প্রচারের মাধ্যমে আপনার উপার্জন বাড়ান এবং অ্যাফিলিয়েট লাভ বাড়ান – আপনার লাভ সর্বাধিক করার চাবিকাঠি"
      ]
    }
  };

  const { title, lines } = content[language];

  return (
    <div
      className="w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl w-full px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between text-white">
        
        {/* Left Text */}
        <div className="w-full mb-6 md:mb-0">
          <h1 className="text-3xl md:text-left text-center leading-tight md:text-3xl font-bold mb-4 text-textSecondaryColor uppercase">
            {title}
          </h1>
          <div className='flex flex-col md:items-start items-center md:gap-2'>
            {lines.map((line, index) => (
              <p key={index} className={`text-lg md:text-left text-center md:text-xl ${index === 3 ? "font-semibold" : ""}`}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-[70%] flex justify-end">
          <img
            src={sideImage}
            alt="Commission Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionsHeader;
