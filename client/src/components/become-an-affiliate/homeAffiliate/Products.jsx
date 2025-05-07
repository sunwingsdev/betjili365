import casinoImage from "../../../assets/affiliates/Casino.png";
import slotImage from "../../../assets/affiliates/slot.png";
import sportsImage from "../../../assets/affiliates/sports.png";
import crashImage from "../../../assets/affiliates/crash.png";
import fishingImage from "../../../assets/affiliates/fishing.png";
import lotteryImage from "../../../assets/affiliates/lotary.png";
import arcadeImage from "../../../assets/affiliates/Arcade.png";

const Products = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-4xl text-yellow-400 mb-10">PRODUCTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center place-items-center">
          {/* First Row */}
          <div className=" bg-black shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2 pt-9">
              <img
                className="max-w-full h-auto mx-auto mb-2"
                src={casinoImage}
                alt="Casino"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                CASINO
              </h3>
            </div>
          </div>

          <div className=" bg-black shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2">
              <img
                className="max-w-full p-4 h-auto"
                src={slotImage}
                alt="Slot"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                SLOTS
              </h3>
            </div>
          </div>

          <div className=" bg-black shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2">
              <img
                className="max-w-full p-4 h-auto"
                src={sportsImage}
                alt="Sports"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                SPORTS
              </h3>
            </div>
          </div>

          <div className=" bg-black  shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2">
              <img
                className="max-w-full p-4 h-auto"
                src={lotteryImage}
                alt="Table"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                TABLE
              </h3>
            </div>
          </div>

          <div className=" bg-black shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2">
              <img
                className="max-w-full p-4 h-auto"
                src={crashImage}
                alt="crash"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                CRASH
              </h3>
            </div>
          </div>

          <div className=" bg-black shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2">
              <img
                className="max-w-full p-4 h-auto"
                src={fishingImage}
                alt="fishing"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                FISHING
              </h3>
            </div>
          </div>

          <div className=" bg-black shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2">
              <img
                className="max-w-full p-4 h-auto"
                src={lotteryImage}
                alt="lottery"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                LOTTERY
              </h3>
            </div>
          </div>

          <div className=" bg-black shadow-customBoxGreenShadow w-36 md:w-40 lg:w-64 h-auto md:80 lg:80 rounded-[20px] ">
            <div className="p-2">
              <img
                className="max-w-full p-4 h-auto"
                src={arcadeImage}
                alt="arcade"
              />
              <h3 className=" w-[78%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
                ARCADE
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
