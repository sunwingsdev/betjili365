import dlogo from "../../../assets/affiliates/dollar.png";
import clogo from "../../../assets/affiliates/cost.png";
import blogo from "../../../assets/affiliates/bonus.png";
import flogo from "../../../assets/affiliates/fee.png";
import tlogo from "../../../assets/affiliates/affilate_total.png";
import CommissionCard from "./CommissionCard";
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />;

const Commission = () => {
  // Table data
  const rows = [
    ["5", "1000", "30%"],
    ["15", "1000", "35%"],
    ["25", "1000", "40%"],
    ["30", "1000", "45%"],
  ];

  const commissionData = [
    {
      icon: dlogo,
      text: "Player Win/Loss",
    },
    {
      icon: clogo,
      text: "18% Operation Cost",
    },
    {
      icon: blogo,
      text: "Bonus/Promotions",
    },
    {
      icon: flogo,
      text: "2% Payment Fee",
    },
    {
      icon: tlogo,
      text: (
        <>
          Affiliate Earns Upto <br /> 45% of Net Profit
        </>
      ),
      textLeft: "left-10", // For special left offset
    },
  ];

  return (
    <div className="p-10 w-full">
      <div className="text-center">
        <div className="max-w-full">
          {/* Title */}
          <h2 className="text-4xl text-yellow-400 mb-10">COMISSION PLAN</h2>

          {/* Card Section */}
          <div
            data-aos="fade-up"
            className=" flex justify-center items-center flex-col gap-4 lg:flex-row pl-0 md:pl-52 lg:pl-20"
          >
            {commissionData.map((item, index) => (
              <CommissionCard
                key={index}
                icon={item.icon}
                text={item.text}
                textLeft={item.textLeft}
              />
            ))}
          </div>

          {/* Table Section */}
          <div className="mt-10 flex justify-center items-center">
            <table className="border-collapse border border-green-400 w-full h-[285px] max-w-4xl text-center bg-white shadow-lg">
              <thead>
                <tr className="bg-green-500 h-[60px] ">
                  <th className=" text-yellow-400 font-semibold  px-4 py-2">
                    Active Players
                  </th>
                  <th className=" text-yellow-400 font-semibold px-4 py-2">
                    Net Profit
                  </th>
                  <th className=" text-yellow-400 font-semibold px-4 py-2">
                    Commission %
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => {
                  // Define unique background colors for each row
                  const rowColors = [
                    "bg-green-400",
                    "bg-green-500",
                    "bg-green-400",
                    "bg-green-500",
                  ];
                  const bgColor = rowColors[rowIndex] || "bg-gray-100"; // Default color if index exceeds

                  return (
                    <tr
                      key={rowIndex}
                      className={`${
                        rowIndex === rows.length - 1
                          ? bgColor // Last row with no hover effect
                          : `${bgColor} hover:bg-green-800` // Other rows with hover effect
                      }`}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-4 py-2 ${
                            rowIndex === rows.length - 1
                              ? "text-yellow-400 font-semibold" // Last row text color
                              : "text-black hover:text-white font-semibold" // Other rows text color on hover
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;
