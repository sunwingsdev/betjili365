// import { useGetDepositsQuery } from "@/redux/features/allApis/depositsApi/depositsApi";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";
import { BsDiagram3Fill } from "react-icons/bs";
import {
  FaChartArea,
  FaGamepad,
  FaLock,
  FaUser,
  FaUsers,
  FaPuzzlePiece,
  FaUniversity,
  FaCreditCard,
} from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FiUsers } from "react-icons/fi";
import { MdBatteryAlert, MdRequestPage } from "react-icons/md";
import { BiDownload, BiMoneyWithdraw, BiSolidGame } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa6";
import { RiWallet3Fill, RiBankCardLine } from "react-icons/ri";
import { GiJoystick } from "react-icons/gi";
import { TbApi } from "react-icons/tb";
import { PiHandWithdrawBold } from "react-icons/pi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import StatsCard from "./StatsCard";
import CustomTable from "./CustomTable";

const DashboardHome = () => {
  const { data: users } = useGetUsersQuery();
  // const { data: deposits } = useGetDepositsQuery();
  const deposits = [
    {
      _id: "67d9f5e3032d9870453252b1",
      paymentMethod: "bkash",
      depositChannel: "cashout",
      amount: 100,
      userId: "67d9b199032d9870453252b5",
      status: "completed",
      createdAt: "2025-03-18T22:38:27.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252b5",
        username: "misu97",
        currency: "bdt",
        fullName: "",
        email: "travelfishingbd@gmail.com",
        countryCode: "+880",
        phone: "1310561315",
        refer: "",
        createdAt: "2025-03-18T17:47:05.599Z",
        lastLoginAt: "2025-03-28T08:32:55.982Z",
        balance: -8900,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b2",
      paymentMethod: "nagad",
      depositChannel: "agent",
      amount: 250,
      userId: "67d9b199032d9870453252b6",
      status: "pending",
      createdAt: "2025-03-19T10:15:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252b6",
        username: "tonmoy88",
        currency: "bdt",
        fullName: "Tonmoy Rahman",
        email: "tonmoy@example.com",
        countryCode: "+880",
        phone: "1700000000",
        refer: "shipan97",
        createdAt: "2025-03-18T12:00:00.000Z",
        lastLoginAt: "2025-03-28T09:00:00.000Z",
        balance: 1000,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b3",
      paymentMethod: "rocket",
      depositChannel: "app",
      amount: 500,
      userId: "67d9b199032d9870453252b7",
      status: "completed",
      createdAt: "2025-03-20T14:45:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252b7",
        username: "sabbir01",
        currency: "bdt",
        fullName: "Sabbir Hossain",
        email: "sabbir@example.com",
        countryCode: "+880",
        phone: "1800000000",
        refer: "",
        createdAt: "2025-03-15T09:30:00.000Z",
        lastLoginAt: "2025-03-29T07:15:00.000Z",
        balance: 200,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b4",
      paymentMethod: "bkash",
      depositChannel: "agent",
      amount: 150,
      userId: "67d9b199032d9870453252b8",
      status: "pending",
      createdAt: "2025-03-21T08:20:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252b8",
        username: "subroto22",
        currency: "bdt",
        fullName: "Subroto Paul",
        email: "subroto@example.com",
        countryCode: "+880",
        phone: "1900000000",
        refer: "vismo99",
        createdAt: "2025-03-10T13:00:00.000Z",
        lastLoginAt: "2025-03-28T22:00:00.000Z",
        balance: 750,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b5",
      paymentMethod: "nagad",
      depositChannel: "cashout",
      amount: 300,
      userId: "67d9b199032d9870453252b9",
      status: "completed",
      createdAt: "2025-03-22T17:30:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252b9",
        username: "vismo99",
        currency: "bdt",
        fullName: "",
        email: "vismo@example.com",
        countryCode: "+880",
        phone: "1600000000",
        refer: "",
        createdAt: "2025-03-17T11:00:00.000Z",
        lastLoginAt: "2025-03-29T01:45:00.000Z",
        balance: -200,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b6",
      paymentMethod: "rocket",
      depositChannel: "app",
      amount: 120,
      userId: "67d9b199032d9870453252c0",
      status: "pending",
      createdAt: "2025-03-23T12:10:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252c0",
        username: "mou",
        currency: "bdt",
        fullName: "Mou Mallik",
        email: "mou@example.com",
        countryCode: "+880",
        phone: "1500000000",
        refer: "shipan97",
        createdAt: "2025-03-11T10:00:00.000Z",
        lastLoginAt: "2025-03-28T18:30:00.000Z",
        balance: 0,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b7",
      paymentMethod: "bkash",
      depositChannel: "cashout",
      amount: 80,
      userId: "67d9b199032d9870453252c1",
      status: "completed",
      createdAt: "2025-03-24T20:00:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252c1",
        username: "arif02",
        currency: "bdt",
        fullName: "Arif Khan",
        email: "arif@example.com",
        countryCode: "+880",
        phone: "1400000000",
        refer: "",
        createdAt: "2025-03-09T08:45:00.000Z",
        lastLoginAt: "2025-03-28T15:15:00.000Z",
        balance: 500,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b8",
      paymentMethod: "nagad",
      depositChannel: "agent",
      amount: 1000,
      userId: "67d9b199032d9870453252c2",
      status: "completed",
      createdAt: "2025-03-25T11:45:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252c2",
        username: "nahid66",
        currency: "bdt",
        fullName: "",
        email: "nahid@example.com",
        countryCode: "+880",
        phone: "1300000000",
        refer: "",
        createdAt: "2025-03-08T14:00:00.000Z",
        lastLoginAt: "2025-03-28T11:20:00.000Z",
        balance: 1200,
      },
    },
    {
      _id: "67d9f5e3032d9870453252b9",
      paymentMethod: "rocket",
      depositChannel: "cashout",
      amount: 90,
      userId: "67d9b199032d9870453252c3",
      status: "pending",
      createdAt: "2025-03-26T13:30:00.947Z",
      promotion: "Spring Sale",
      reason: "Referral Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252c3",
        username: "sohel09",
        currency: "bdt",
        fullName: "",
        email: "sohel@example.com",
        countryCode: "+880",
        phone: "1200000000",
        refer: "",
        createdAt: "2025-03-06T10:10:00.000Z",
        lastLoginAt: "2025-03-28T09:55:00.000Z",
        balance: 50,
      },
    },
    {
      _id: "67d9f5e3032d9870453252c0",
      paymentMethod: "bkash",
      depositChannel: "app",
      amount: 600,
      userId: "67d9b199032d9870453252c4",
      status: "completed",
      createdAt: "2025-03-27T16:20:00.947Z",
      promotion: "Spring Sale",
      reason: "Birthday Bonus",
      userInfo: {
        _id: "67d9b199032d9870453252c4",
        username: "shipan97",
        currency: "bdt",
        fullName: "Shipan Mallik",
        email: "shipan@example.com",
        countryCode: "+880",
        phone: "1100000000",
        refer: "",
        createdAt: "2025-03-05T12:00:00.000Z",
        lastLoginAt: "2025-03-28T10:45:00.000Z",
        balance: 3000,
      },
    },
  ];

  // console.log(deposits);
  // const
  const stats = [
    {
      title: "Total Active Players",
      count: users?.length,
      Icon: FaUser,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Deactive Players",
      count: 0,
      Icon: FaUsers,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Affiliates",
      count: 0,
      Icon: TiGroup,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Cash Agents",
      count: 0,
      Icon: FiUsers,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Agent Low Balance",
      count: 0,
      Icon: MdBatteryAlert,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Deposits",
      count: 0,
      Icon: BiDownload,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total A-Pay Deposits",
      count: 0,
      Icon: FaMoneyBillWave,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total C-Pay Deposits",
      count: 0,
      Icon: RiWallet3Fill,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Withdrawals",
      count: 0,
      Icon: RiBankCardLine,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Today Withdrawals",
      count: 0,
      Icon: BiMoneyWithdraw,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Game Categories",
      count: 0,
      Icon: FaPuzzlePiece,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Games",
      count: 0,
      Icon: GiJoystick,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Gameimg API",
      count: 0,
      Icon: TbApi,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Active Games",
      count: 0,
      Icon: FaGamepad,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Total Deactive Games",
      count: 0,
      Icon: BiSolidGame,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Player Deposit Requests",
      count: 0,
      Icon: FaUniversity,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Player Withdrawal Requests",
      count: 0,
      Icon: PiHandWithdrawBold,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Agent Top-Up Requests",
      count: 0,
      Icon: MdRequestPage,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Affiliate Withdrawal Requests",
      count: 0,
      Icon: HiOutlineBanknotes,
      bgColor: "bg-primary-primaryColorTwo",
    },
    {
      title: "Active Deposit Methods",
      count: 0,
      Icon: FaCreditCard,
      bgColor: "bg-primary-primaryColorTwo",
    },
  ];

  const lastDepositHeaders = [
    "Player Name",
    "Deposit Method",
    "Deposit Channel",
    "Amount",
    "Sender Info",
    "Date & Time",
    "Promotion",
    "Reason",
    "Status",
  ];
  const lastWithdrawHeaders = [
    "Player Name",
    "Withdraw Method",
    "Withdraw Channel",
    "Amount",
    "Sender Info",
    "Date & Time",
    "Promotion",
    "Reason",
    "Status",
  ];

  const sortedDeposits =
    deposits
      ?.slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) || [];

  const lastDepositsData = sortedDeposits.map((deposit) => ({
    username: deposit?.userInfo?.username,
    paymentMethod: deposit?.paymentMethod,
    depositChannel: deposit?.depositChannel,
    amount: deposit?.amount,
    phone: deposit?.userInfo?.phone,
    createdAt: new Date(deposit.createdAt).toLocaleString(),
    promotion: deposit?.promotion,
    reason: deposit?.reason,
    status: deposit?.status,
  }));
  const lastWithdrawsData = sortedDeposits.map((withdraw) => ({
    username: withdraw?.userInfo?.username,
    paymentMethod: withdraw?.paymentMethod,
    depositChannel: withdraw?.depositChannel,
    amount: withdraw?.amount,
    phone: withdraw?.userInfo?.phone,
    createdAt: new Date(withdraw.createdAt).toLocaleString(),
    promotion: withdraw?.promotion,
    reason: withdraw?.reason,
    status: withdraw?.status,
  }));

  const userGamesHeaders = ["Game", "User", "Balance", "Bet", "Win", "Date"];
  const userGamesData = [
    {
      game: "AlchemistsSecretGT",
      user: "435893412",
      balance: "6.5000",
      bet: "0.4000",
      win: "0.0000",
      date: "23:32:03",
    },
    {
      game: "AlchemistsSecretGT",
      user: "435893412",
      balance: "6.9000",
      bet: "0.4000",
      win: "0.0000",
      date: "23:31:20",
    },
  ];

  const latestShopsHeaders = [
    "Name",
    "Credit",
    "Percent",
    "Frontend",
    "Currency",
    "Status",
  ];
  const latestShopsData = [
    {
      Name: "TestShop",
      Credit: "9990.0000",
      Percent: "90 - 92",
      Frontend: "Default",
      Currency: "USD",
      Status: "Active",
    },
  ];

  const latestShiftStatsHeader = [
    "Shift",
    "User",
    "Start",
    "End",
    "Credit",
    "In",
    "-",
    "Total",
    "Money",
    "In",
    "-",
    "Total",
    "Transfers",
    "Pay Out",
  ];
  const latestShiftStatsData = [
    {
      Shift: "10",
      User: "TestCash",
      Start: "2024-10-15 07:39:59",
      End: "0",
      Credit: "0",
      In: "0",
      "-": "10",
      Total: "9999",
      Money: "6.5000",
      In2: "10000",
      _: "0.000",
      Total2: "10000",
      Transfers: "1",
      Pay_Out: "000",
    },
  ];

  return (
    <div>
      {/* Top Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <CustomTable
        title="Today's last Deposit Requests"
        headers={lastDepositHeaders}
        data={lastDepositsData}
        borderColor="#30b779"
      />
      <CustomTable
        title="Today's last Withdraw Requests"
        headers={lastWithdrawHeaders}
        data={lastWithdrawsData}
        borderColor="#f39c12"
      />
      {/* <CustomTable
        title="Latest Shops"
        headers={latestShopsHeaders}
        data={latestShopsData}
        borderColor="#30b779"
      />
      <CustomTable
        title="Latest Shift Stats"
        headers={latestShiftStatsHeader}
        data={latestShiftStatsData}
        borderColor="#f39c12"
      /> */}
    </div>
  );
};

export default DashboardHome;
