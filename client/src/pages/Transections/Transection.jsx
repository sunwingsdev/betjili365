import WalletSection from "@/components/home/WalletSection/WalletSection";
import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetDepositsByUserQuery } from "@/redux/features/allApis/depositsApi/depositsApi";
import { useGetWithdrawsByUserQuery } from "@/redux/features/allApis/withdrawsApi/withdrawsApi";
import { useState } from "react";
import { FcOk } from "react-icons/fc";
import { useSelector } from "react-redux";

const Transection = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  // State for selected buttons
  const [selectedType, setSelectedType] = useState("ডিপোজিট");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Button click handlers
  const handleTypeClick = (type) => setSelectedType(type);
  const handleStatusClick = (status) => setSelectedStatus(status);
  const handleDateClick = (date) => setSelectedDate(date);

  const {
    data: userDeposits,
    isLoading: depositLoading,
    isError: depositError,
  } = useGetDepositsByUserQuery(user?._id);
  const {
    data: userWithdraws,
    isLoading: withdrawLoading,
    isError: withdrawError,
  } = useGetWithdrawsByUserQuery(user?._id);
  console.log(userDeposits);
  console.log(userWithdraws);

  let dynamicData = [];

  if (selectedType === "ডিপোজিট") {
    dynamicData = userDeposits || [];
  } else if (selectedType === "উইথড্র") {
    dynamicData = userWithdraws || [];
  }

  const statusMap = {
    পেন্ডিং: "pending",
    কমপ্লিট: "completed",
    রিজেক্ট: "rejected",
    অল: "",
  };

  // Status and Date Filtering
  dynamicData = dynamicData?.filter((item) => {
    // Status Filter
    const statusMatch =
      selectedStatus === "" ||
      selectedStatus === "অল" ||
      item.status === statusMap[selectedStatus];

    // Date Filter
    const today = new Date();
    const itemDate = new Date(item.createdAt);

    let dateMatch = true; // default সব মিলে যাবে
    if (selectedDate === "আজ") {
      dateMatch =
        itemDate.getDate() === today.getDate() &&
        itemDate.getMonth() === today.getMonth() &&
        itemDate.getFullYear() === today.getFullYear();
    } else if (selectedDate === "গতকাল") {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      dateMatch =
        itemDate.getDate() === yesterday.getDate() &&
        itemDate.getMonth() === yesterday.getMonth() &&
        itemDate.getFullYear() === yesterday.getFullYear();
    } else if (selectedDate === "শেষ 7 দিন") {
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7);
      dateMatch = itemDate >= sevenDaysAgo && itemDate <= today;
    }

    return statusMatch && dateMatch;
  });

  const depositColumns = [
    { headerName: "Payment Method", field: "paymentMethod" },
    { headerName: "Deposit Channel", field: "depositChannel" },
    { headerName: "Amount", field: "amount" },
    { headerName: "Status", field: "status" },
    { headerName: "Date", field: "createdAt" },
    { headerName: "Reason", field: "reason" },
  ];

  const withdrawColumns = [
    { headerName: "Payment Method", field: "paymentMethod" },
    { headerName: "Amount", field: "amount" },
    { headerName: "Status", field: "status" },
    { headerName: "Date", field: "createdAt" },
    { headerName: "Reason", field: "reason" },
  ];

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    const ordinal = getOrdinal(day);
    return `${day}${ordinal} ${month} ${year} | ${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const sortedData = [...dynamicData].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const formattedDynamicData = sortedData?.map((item) => ({
    ...item,
    createdAt: formatDate(item.createdAt),
  }));

  return (
    <div className="space-y-2 text-nowrap">
      <WalletSection />
      <div className="bg-primary-primaryColorTwo p-2 text-white rounded-md">
        <div className="border-b-2 border-green-300 border-dotted">
          <h1 className="p-2 text-green-300 ">ট্রানজেকশন</h1>
        </div>
        <div>
          {/* Type Section */}
          <div className="">
            <h1 className="p-2">টাইপ</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {["ডিপোজিট", "উইথড্র", "অ্যাডজাস্টমেন্ট", "অল"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeClick(type)}
                  className={`relative px-4 py-2 border rounded hover:border-[#ffe43c] ${
                    selectedType === type ? " text-white border-[#ffe43c]" : ""
                  }`}
                >
                  {type}{" "}
                  <span className="absolute top-0 right-0">
                    {selectedType === type && (
                      <FcOk className="absolute -top-2 -right-2 text-xl" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Section */}
          <div className="">
            <h1 className="p-2">স্ট্যাটাস</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {["পেন্ডিং", "কমপ্লিট", "রিজেক্ট", "অল"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className={`relative px-4 py-2 border rounded hover:border-[#ffe43c] ${
                    selectedStatus === status
                      ? "text-white border-[#ffe43c]"
                      : ""
                  }`}
                >
                  {status}{" "}
                  <span className="absolute top-0 right-0">
                    {selectedStatus === status && (
                      <FcOk className="absolute -top-2 -right-2 text-xl" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Date Section */}
          <div className="">
            <h1 className="p-2">তারিখ</h1>
            <div className="flex items-center gap-4 text-sm">
              {["আজ", "গতকাল", "শেষ 7 দিন"].map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateClick(date)}
                  className={`relative px-4 py-2 border rounded hover:border-[#ffe43c] ${
                    selectedDate === date ? "text-white border-[#ffe43c]" : ""
                  }`}
                >
                  {date}{" "}
                  <span className="absolute top-0 right-0">
                    {selectedDate === date && (
                      <FcOk className="absolute -top-2 -right-2 text-xl" />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-end ">
              <button className="text-xs px-2 py-1 bg-[#3356cd]">
                সাবমিট করুন
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* table area */}
      <div className="bg-primary-primaryColorTwo p-4 text-white rounded-md mt-4">
        <div>
          <h1 className="p-2">রেকর্ড</h1>
        </div>
        <div>
          {/* <DynamicTable columns={columns} data={dynamicData} /> */}
          <DynamicTable
            columns={
              selectedType === "ডিপোজিট" ? depositColumns : withdrawColumns
            }
            data={formattedDynamicData}
            loading={
              selectedType === "ডিপোজিট" ? depositLoading : withdrawLoading
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Transection;
