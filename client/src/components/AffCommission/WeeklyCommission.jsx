import { LanguageContext } from "@/Context/LanguageContext";
import React, { useContext } from "react";

const WeeklyCommission = () => {
  const { language } = useContext(LanguageContext);

  const textContent = {
    en: {
      heading: "ELEVATE YOUR EARNINGS WITH OUR MCW WEEKLY COMMISSION!",
      subheading: "MCW FAST TRACK WEEKLY COMMISSION STRUCTURE",
      columns: [
        "Weekly Active Players",
        "",
        "Weekly Affiliate Netloss",
        "",
        "Commission %",
      ],
      rows: [
        {
          key: "rowOne",
          week: "1 to 5",
          andLabel: "AND",
          netloss: "৳1 - ৳300,000",
          earnLabel: "EARN",
          commission: "40%",
        },
        {
          key: "rowTwo",
          week: "6-19",
          andLabel: "AND",
          netloss: "৳300,001 - ৳1,000,000",
          earnLabel: "EARN",
          commission: "42%",
        },
        {
          key: "rowThree",
          week: ">20",
          andLabel: "AND",
          netloss: ">৳1,000,000",
          earnLabel: "EARN",
          commission: "45%",
        },
      ],
    },
    bn: {
      heading: "MCW সাপ্তাহিক কমিশনের মাধ্যমে আপনার আয় বাড়ান!",
      subheading: "MCW ফাস্ট ট্র্যাক সাপ্তাহিক কমিশন স্ট্রাকচার",
      columns: [
        "সাপ্তাহিক অ্যাক্টিভ প্লেয়ার",
        "",
        "সাপ্তাহিক অ্যাফিলিয়েট নেটলস",
        "",
        "কমিশন %",
      ],
      rows: [
        {
          key: "rowOne",
          week: "১ থেকে ৫",
          andLabel: "এবং",
          netloss: "৳১ - ৳৩০০,০০০",
          earnLabel: "উপার্জন",
          commission: "৪০%",
        },
        {
          key: "rowTwo",
          week: "৬ - ১৯",
          andLabel: "এবং",
          netloss: "৳৩০০,০০১ - ৳১,০০০,০০০",
          earnLabel: "উপার্জন",
          commission: "৪২%",
        },
        {
          key: "rowThree",
          week: ">২০",
          andLabel: "এবং",
          netloss: ">৳১,০০০,০০০",
          earnLabel: "উপার্জন",
          commission: "৪৫%",
        },
      ],
    },
  };

  const { heading, subheading, columns, rows } = textContent[language];

  return (
    <div className="bg-AffiliatePrimaryBg">
      <div className="w-full mx-auto max-w-7xl">
        <div className="text-3xl md:text-4xl pt-16 py-4 flex flex-col gap-6 text-white">
          <h3 className="text-center">{heading}</h3>
          <p className="text-center">
  <strong className="text-textSecondaryColorTwo">
    {subheading.split(" ").slice(0, 3).join(" ")}
  </strong>{" "}
  {subheading.split(" ").slice(3).join(" ")}
</p>

        </div>

        <div className="p-4">
          <div className="border-2 overflow-x-auto bg-AffiliatePrimaryBg border-textSecondaryColor p-2">
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
                      row.key === "rowTwo" ? "bg-componentBgSecondary" : ""
                    }`}
                  >
                    <td className="px-4 py-2">{row.week}</td>
                    <td className="px-4 py-2">{row.andLabel}</td>
                    <td className="px-4 py-2">{row.netloss}</td>
                    <td className="px-4 py-2">{row.earnLabel}</td>
                    <td className="px-4 py-2">{row.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCommission;
