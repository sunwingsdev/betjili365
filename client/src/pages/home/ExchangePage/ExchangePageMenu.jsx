import { useState, useEffect } from "react";
import { RiLiveLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ExchangePageMenu = ({ menuItems }) => {
  const [selected, setSelected] = useState(""); // স্টেট দিয়ে ট্র্যাকিং
  const [isZoomed, setIsZoomed] = useState(false); // জুম ট্র্যাকিং

  // 3 সেকেন্ড পরপর জুম ইন/আউট কন্ট্রোল
  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center">
        {/* Render Buttons */}
        {menuItems.map((item) => (
          <Link key={item?.id} to={`/exchange-page${item?.link}`}>
            <div className="relative">
              <button
                className={`px-3 py-3 lg:py-2 text-xs font-semibold text-white w-full border-r border-[#696969] whitespace-nowrap ${
                  selected === item?.id ? "bg-[#696969]" : "bg-[#434343]"
                }`}
                onClick={() => setSelected(item?.id)}
              >
                {item?.label}
                {/* Badge (with Live Icon) */}
                {item?.badge && (
                  <div className="absolute bg-white -top-2 right-1 flex items-center">
                    {/* Live Icon */}
                    <div
                      className={`bg-white text-red-600 w-4 h-3 px-0.5 flex items-center justify-center ${
                        isZoomed ? "scale-100" : "scale-75"
                      } transition-transform duration-500`}
                    >
                      <RiLiveLine />
                    </div>
                    {/* Red Badge */}
                    <div className="text-[10px] bg-red-600 text-white text-xs px-1 h-3 flex items-center justify-center">
                      {item?.badge}
                    </div>
                  </div>
                )}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExchangePageMenu;
