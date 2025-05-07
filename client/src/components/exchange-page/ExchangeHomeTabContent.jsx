import ExchangeDynamicTable from "./ExchangeDynamicTable";

const ExchangeHomeTabContent = ({ tableData }) => {
  return (
    <div className="overflow-x-auto bg-white">
      <div className="bg-[#dddcd6] flex flex-row items-center justify-center gap-20">
        <p className="w-1/2 text-right">Matched</p>
        <p className="flex flex-row items-center justify-between w-1/3">
          <span>1</span> <span>X</span> <span>2</span>
        </p>
      </div>
      <ExchangeDynamicTable tableData={tableData} />
    </div>
  );
};

export default ExchangeHomeTabContent;
