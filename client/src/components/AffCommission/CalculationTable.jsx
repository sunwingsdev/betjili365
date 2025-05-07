import { LanguageContext } from "@/Context/LanguageContext";
import React, { useContext } from "react";

const CalculationTable = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      columns: [
        "AFFILIATE ACCOUNT",
        "WEEKLY AFFILIATE NETLOSS",
        "WEEKLY ACTIVE PLAYERS",
        "DEDUCTION",
        "BONUS",
        "COMMISSION%",
        "COMMISSION AMOUNT",
      ],
      rows: [
        {
          key: "rowOne",
          account: "AFFILIATE A",
          netloss: "50,000",
          players: "2",
          deduction: "9,000",
          bonus: "5,000",
          commission: "40%",
          amount: "14,400",
        },
        {
          key: "rowTwo",
          account: "AFFILIATE B",
          netloss: "70,000",
          players: "3",
          deduction: "10,000",
          bonus: "6,000",
          commission: "42%",
          amount: "18,200",
        },
        {
          key: "rowThree",
          account: "AFFILIATE C",
          netloss: "90,000",
          players: "4",
          deduction: "12,000",
          bonus: "7,000",
          commission: "45%",
          amount: "22,500",
        },
        {
          key: "rowFour",
          account: "AFFILIATE D",
          netloss: "40,000",
          players: "1",
          deduction: "8,000",
          bonus: "4,000",
          commission: "38%",
          amount: "12,320",
        },
        {
          key: "rowFive",
          account: "AFFILIATE E",
          netloss: "60,000",
          players: "3",
          deduction: "11,000",
          bonus: "5,500",
          commission: "41%",
          amount: "16,810",
        },
        {
          key: "rowSix",
          account: "AFFILIATE F",
          netloss: "85,000",
          players: "5",
          deduction: "13,000",
          bonus: "6,000",
          commission: "43%",
          amount: "20,950",
        },
      ],
    },
    bn: {
      columns: [
        "অ্যাফিলিয়েট অ্যাকাউন্ট",
        "সাপ্তাহিক অ্যাফিলিয়েট নেটলস",
        "সাপ্তাহিক অ্যাক্টিভ প্লেয়ার",
        "বিয়োগ",
        "বোনাস",
        "কমিশন %",
        "কমিশন অ্যামাউন্ট",
      ],
      rows: [
        {
          key: "rowOne",
          account: "অ্যাফিলিয়েট A",
          netloss: "৫০,০০০",
          players: "২",
          deduction: "৯,০০০",
          bonus: "৫,০০০",
          commission: "৪০%",
          amount: "১৪,৪০০",
        },
        {
          key: "rowTwo",
          account: "অ্যাফিলিয়েট B",
          netloss: "৭০,০০০",
          players: "৩",
          deduction: "১০,০০০",
          bonus: "৬,০০০",
          commission: "৪২%",
          amount: "১৮,২০০",
        },
        {
          key: "rowThree",
          account: "অ্যাফিলিয়েট C",
          netloss: "৯০,০০০",
          players: "৪",
          deduction: "১২,০০০",
          bonus: "৭,০০০",
          commission: "৪৫%",
          amount: "২২,৫০০",
        },
        {
          key: "rowFour",
          account: "অ্যাফিলিয়েট D",
          netloss: "৪০,০০০",
          players: "১",
          deduction: "৮,০০০",
          bonus: "৪,০০০",
          commission: "৩৮%",
          amount: "১২,৩২০",
        },
        {
          key: "rowFive",
          account: "অ্যাফিলিয়েট E",
          netloss: "৬০,০০০",
          players: "৩",
          deduction: "১১,০০০",
          bonus: "৫,৫০০",
          commission: "৪১%",
          amount: "১৬,৮১০",
        },
        {
          key: "rowSix",
          account: "অ্যাফিলিয়েট F",
          netloss: "৮৫,০০০",
          players: "৫",
          deduction: "১৩,০০০",
          bonus: "৬,০০০",
          commission: "৪৩%",
          amount: "২০,৯৫০",
        },
      ],
    },
  };

  const { columns, rows } = text[language];

  return (
    <div className="p-4 bg-AffiliatePrimaryBg">
      <div className="border-2 mx-auto max-w-7xl overflow-x-auto bg-AffiliatePrimaryBg border-textSecondaryColor p-2">
        <table className="min-w-full bg-primary-primaryColorTwo text-center">
          <thead className="bg-backgroundSecondaryColor text-white">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white">
            {rows.map((row) => (
              <tr
                key={row.key}
                className={`${
                  ["rowTwo", "rowFour", "rowSix"].includes(row.key)
                    ? "bg-componentBgSecondary"
                    : ""
                }`}
              >
                <td className="px-4 py-2">{row.account}</td>
                <td className="px-4 py-2">{row.netloss}</td>
                <td className="px-4 py-2">{row.players}</td>
                <td className="px-4 py-2">{row.deduction}</td>
                <td className="px-4 py-2">{row.bonus}</td>

                {/* Commission % with custom class for rowSix */}
                <td
                  className={`px-4 py-2 ${
                    row.key === "rowSix" ? "text-textSecondaryColor text-3xl font-bold" : ""
                  }`}
                >
                  {row.commission}
                </td>

                {/* Commission Amount with custom class for rowSix */}
                <td
                  className={`px-4 py-2 ${
                    row.key === "rowSix" ? "text-textSecondaryColor text-3xl font-bold" : ""
                  }`}
                >
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculationTable;
