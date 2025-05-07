import React, { useContext } from 'react';
import bgImage from '../../assets/affiliateImages/Slider2.jpg'; 
import sideImage from '../../assets/affiliateImages/img_product_bn.png'; 
import { LanguageContext } from '@/Context/LanguageContext';

const ProductHeader = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "MCW offers a wide variety of games to enjoy and exciting bonuses and promotions.",
      lines: [
        "With Slots, Sports, Live Casino, Table games and Lottery whatever your game is, we’ve got you covered.",
        "The more real money players & revenue you generate, the more you will earn."
      ]
    },
    bn: {
      title: "MCW উত্তেজনাপূর্ন বোনাস ও উপভোগযোগ্য এবং প্রচারের জন্য বিভিন্ন ধরণের গেম সরবরাহ করে।",
      lines: [
        "স্লট, স্পোর্টস, লাইভ ক্যাসিনো, টেবিল গেমস এবং লটারি দিয়ে আপনার খেলা যাই হোক না কেন, আমরা আপনাকে আবদ্ধ করেছি।"
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

export default ProductHeader;
