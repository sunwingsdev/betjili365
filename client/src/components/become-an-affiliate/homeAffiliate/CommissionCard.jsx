import slogo from "../../../assets/affiliates/commision_plan_banner.png";

const CommissionCard = ({ icon, textLeft = "left-16", text }) => {
  return (
    <div className="relative">
      <img
        className="skew-x-[10deg] w-56"
        src={slogo}
        alt="Commission Plan Banner"
      />
      <img
        className="absolute top-12 left-20 w-14 h-12"
        src={icon}
        alt="Icon"
      />
      <div
        className={`absolute top-24 ${textLeft} pl-0 text-green-400 font-bold text-sm`}
      >
        {text}
      </div>
    </div>
  );
};

export default CommissionCard;
