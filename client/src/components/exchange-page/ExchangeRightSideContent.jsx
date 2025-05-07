import { RiSubtractFill } from "react-icons/ri";

const ExchangeRightSideContent = () => {
  return (
    <div className="w-[24%] bg-white">
      <div className="flex justify-between items-center gap-2 px-2 py-0.5 text-white bg-[#243d4c]">
        <p>Bet Slip</p>
        <div className="flex justify-center items-center w-4 h-3 border border-white">
          <RiSubtractFill className="text-white" />
        </div>
      </div>
      <p className="text-sm font-semibold text-center py-6 text-black">
        Click on the odds to add selections to the betslip.
      </p>
    </div>
  );
};

export default ExchangeRightSideContent;
