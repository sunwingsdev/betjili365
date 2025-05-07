import React, { useContext } from 'react';
import bgImage from '../../assets/affiliateImages/Slider2.jpg'; 
import sideImage from '../../assets/affiliateImages/img_commission-plan-1.png'; 
import { LanguageContext } from '@/Context/LanguageContext';

const CommissionHeader = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Reach the stars with MCW AFFILIATE! Let’s earn unlimited commission together!",
      lines: [
        "MCW is renowned for not only offering competitive commissions but also for",
        "delivering value to our Affiliates.",
        "You can earn up to 52% commission from MCW Affiliate Programme. Limited",
        "Time Offer!",
        "The more real money players & revenue you generate, the more you will earn."
      ]
    },
    bn: {
      title: "MCW অ্যাফিলিয়েট-এর সাথে আকাশ ছুঁয়ে ফেলুন! চলুন একসাথে আনলিমিটেড কমিশন উপার্জন করি!",
      lines: [
        "MCW কেবল প্রতিযোগিতামূলক কমিশনই প্রদান করে না বরং",
        "আমাদের অ্যাফিলিয়েটদের জন্য অতিরিক্ত মূল্যও যোগ করে।",
        "MCW অ্যাফিলিয়েট প্রোগ্রাম থেকে আপনি সর্বোচ্চ ৫২% পর্যন্ত কমিশন উপার্জন করতে পারেন। সীমিত",
        "সময়ের অফার!",
        "আপনি যত বেশি রিয়েল মানি প্লেয়ার এবং রেভিনিউ তৈরি করবেন, তত বেশি উপার্জন করবেন।"
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

export default CommissionHeader;
