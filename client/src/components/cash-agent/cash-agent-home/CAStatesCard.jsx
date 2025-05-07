const CAStatesCard = ({ amount, title, Icon, bgColor }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-md shadow-md ${bgColor} text-white`}
    >
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold">{amount} BDT</p>
        <h3 className="text-sm">{title}</h3>
      </div>
      {Icon && <Icon className="text-6xl text-white opacity-15" />}{" "}
    </div>
  );
};

export default CAStatesCard;
