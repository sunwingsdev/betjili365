const CAdepositStatesCard = ({ deposit }) => {
  return (
    <div className="flex h-[100px] rounded-xl overflow-hidden shadow-lg relative">
      {/* Left Section */}
      <div
        className={`${deposit?.bgColor} flex items-center justify-center w-1/2 border-t-[100px] ${deposit?.borderColor} border-r-[50px] border-r-transparent`}
      ></div>
      {/* Right Section */}
      <div className={`${deposit?.bgColor} w-1/2 text-white relative`}>
        <div className="text-white text-center absolute top-5 left-0 bottom-1/2 transform -translate-x-3 translate-y-1">
          <h1 className="font-bold text-2xl">{deposit?.amount}</h1>
          <p className="whitespace-nowrap text-xs">{deposit?.description}</p>
        </div>
      </div>
      <img
        src={deposit?.image}
        alt={deposit?.alt}
        className={`absolute top-1/2 left-16 bottom-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          !["Upay", "Tap", "Mcash", "Cellfin", "Okwallet"].includes(
            deposit?.alt
          )
            ? "filter-white w-28"
            : "w-24 h-20"
        }`}
      />
    </div>
  );
};

export default CAdepositStatesCard;
