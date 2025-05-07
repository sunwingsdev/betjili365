import React, { useContext } from 'react';
import bgImage from '../../assets/affiliateImages/Slider2.jpg'; 
import sideImage from '../../assets/affiliateImages/img_contactus.png'; 
import { LanguageContext } from '@/Context/LanguageContext';

const AffContactHeader = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "BECOME AN MCW AFFILIATE NOW AND START EARNING TODAY!",
      lines: [
        "Feel free to contact us with any questions or inquiries regarding our Affiliate Program."
      ]
    },
    bn: {
      title: "এখনই একটি MCW এফিলিয়েট হয়ে উঠুন এবং আজই উপার্জন করা শুরু করুন!",
      lines: [
        "আমাদের অ্যাফিলিয়েট প্রোগ্রাম সম্পর্কিত কোনো প্রশ্ন বা অনুসন্ধানের জন্য আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।"
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

export default AffContactHeader;
