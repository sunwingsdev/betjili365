import CAdepositTable from "./CAdepositTable";
import CAwithdrawTable from "./CAwithdrawTable";

const CAbottomSection = () => {
  const depositData = [
    {
      userId: "U001",
      request: "deposit",
      date: "2025-01-05",
      amount: "5000 BDT",
      gateway: "bkash",
      senderAcc: "017XXXXXXXX",
      transactionId: "TX123456",
      status: "pending",
    },
    {
      userId: "U002",
      request: "deposit",
      date: "2025-01-04",
      amount: "7000 BDT",
      gateway: "nagad",
      senderAcc: "015XXXXXXXX",
      transactionId: "TX654321",
      status: "received",
    },
    {
      userId: "U003",
      request: "deposit",
      date: "2025-01-04",
      amount: "9000 BDT",
      gateway: "rocket",
      senderAcc: "019XXXXXXXX",
      transactionId: "TX654325",
      status: "rejected",
    },
  ];

  const withdrawData = [
    {
      userId: "U001",
      request: "cash out",
      date: "2025-01-05",
      amount: "5000 BDT",
      gateway: "bkash",
      receiverAcc: "017XXXXXXXX",
      transactionId: "TX123456",
      status: "pending",
    },
    {
      userId: "U002",
      request: "cash out",
      date: "2025-01-04",
      amount: "7000 BDT",
      gateway: "nagad",
      receiverAcc: "015XXXXXXXX",
      transactionId: "TX654321",
      status: "received",
    },
    {
      userId: "U003",
      request: "cash out",
      date: "2025-01-04",
      amount: "9000 BDT",
      gateway: "rocket",
      receiverAcc: "019XXXXXXXX",
      transactionId: "TX654325",
      status: "rejected",
    },
  ];
  return (
    <>
      <div className="bg-[#222222] py-2">
        <h1 className="text-xl font-bold text-center text-white">
          Today&apos;s Agent Deposit Requests
        </h1>
      </div>
      <CAdepositTable data={depositData} />
      <div className="bg-[#222222] py-2">
        <h1 className="text-xl font-bold text-center text-white">
          Today&apos;s Agent Withdraw Requests
        </h1>
      </div>
      <CAwithdrawTable data={withdrawData} />
    </>
  );
};

export default CAbottomSection;
