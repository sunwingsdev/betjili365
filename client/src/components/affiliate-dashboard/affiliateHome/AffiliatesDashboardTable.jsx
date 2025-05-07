import AffiliatesTable from "./AffiliatesTable";

const AffiliatesDashboardTable = () => {
  const withdrawData = [
    {
      userId: "U001",
      request: "cash out",
      date: "2025-01-05",
      amount: "5000 BDT",
      gateway: "bkash",
      receiverAcc: "017XXXXXXXX",
      senderAcc: "150 BDT",
      transactionId: "Admin",
      status: "pending",
    },
    {
      userId: "U002",
      request: "cash out",
      date: "2025-01-04",
      amount: "7000 BDT",
      gateway: "nagad",
      receiverAcc: "015XXXXXXXX",
      senderAcc: "150 BDT",
      transactionId: "abir",
      status: "received",
    },
    {
      userId: "U003",
      request: "cash out",
      date: "2025-01-04",
      amount: "9000 BDT",
      gateway: "rocket",
      receiverAcc: "019XXXXXXXX",
      senderAcc: "150 BDT",
      transactionId: "admin",
      status: "rejected",
    },
  ];
  return (
    <>
      <div className="border-2 border-red-500 border-dotted px-2 pt-3">
        <div className="bg-[#222222] py-3">
          <h1 className="text-2xl font-bold text-center text-white">
            Today my Affiliator Deposit Earning
          </h1>
        </div>
        <AffiliatesTable data={withdrawData} />
      </div>
      <div className="px-2 pt-4">
        <div className="bg-[#222222] py-3">
          <h1 className="text-2xl font-bold text-center text-white">
            Today signup ads click Earn
          </h1>
        </div>
        <AffiliatesTable data={withdrawData} />
      </div>
    </>
  );
};

export default AffiliatesDashboardTable;
