import React, { useContext } from 'react';
import bgImage from '../../assets/affiliateImages/Slider2.jpg'; 
import sideImage from '../../assets/affiliateImages/img_affiliate-guide_bn.png'; 
import { LanguageContext } from '@/Context/LanguageContext';

const AffGuideHeader = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Here are some useful Affiliate marketing guide resources to help you get started and improve your affiliate marketing efforts.",
      lines: [
        "Affiliate guide will provide you with all the information you need to get started and maximize your earning potential as an MCW affiliate"
      ]
    },
    bn: {
      title: "আপনার অ্যাফিলিয়েট মার্কেটিং প্রচেষ্টা উন্নত করতে সহায়তা করার জন্য এখানে কিছু দরকারী অ্যাফিলিয়েট মার্কেটিং গাইড সংস্থান রয়েছ আপনার শুরু করবার জন্য",
      lines: [
        "অ্যাফিলিয়েট গাইড আপনাকে শুরু করতে এবং অ্যাফিলিয়েট হিসাবে আপনার উপার্জনের সম্ভাবনাকে সর্বাধিক করার জন্য প্রয়োজনীয় সমস্ত তথ্য সরবরাহ করবে৷"
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

export default AffGuideHeader;
