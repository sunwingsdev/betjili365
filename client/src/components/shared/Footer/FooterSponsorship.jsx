import logo1 from "../../../assets/v2/sponsor4.png";
import logo4 from "../../../assets/v2/sponsor10.png";
import logo3 from "../../../assets/v2/sponsor9.png";
import logo2 from "../../../assets/v2/sponsor1.png";
import vipImage from "../../../assets/betJilliImages/images/official-partner-heyvip.png";
// import logo5 from "../../../assets/v2/deccan-gladiators-ChfQU95Q.png";
// import logo6 from "../../../assets/v2/st-kitts-and-nevis-patriots.svg";
// import logo7 from "../../../assets/v2/biratnagar-kings.svg";
import { LanguageContext } from "@/Context/LanguageContext";
import { useContext } from "react";

const FooterSponsorship = () => {
  const { language } = useContext(LanguageContext);
  // const sponsorshipData = [
  //   {
  //     logo: logo1,
  //     title: language === "bn" ? "অ্যাটলেটিকো ডি মাদ্রিদ" : "Atlético de Madrid",
  //     text: language === "bn" ? "আঞ্চলিক অফিসিয়াল পার্টনার" : "Official Regional Partner",
  //   },
  //   {
  //     logo: logo2,
  //     title: language === "bn" ? "বুন্দেসলিগা" : "Bundesliga",
  //     text: language === "bn"
  //       ? "এশিয়ায় আঞ্চলিক বেটিং পার্টনার"
  //       : "Regional Betting Partner - Asia",
  //   },
  //   {
  //     logo: logo3,
  //     title: language === "bn" ? "বাংলা টাইগার্স মিসিসগা" : "Bangla Tigers Mississauga",
  //     text: language === "bn" ? "অফিসিয়াল টাইটেল স্পন্সর" : "Official Title Sponsor",
  //     date: "২০২৩",
  //   },
  //   {
  //     logo: logo4,
  //     title: language === "bn" ? "সান ফ্রান্সিসকো ইউনিকর্নস" : "San Francisco Unicorns",
  //     text: language === "bn" ? "অফিসিয়াল টাইটেল স্পন্সর" : "Official Title Sponsor",
  //   },
  //   // {
  //   //   logo: logo5,
  //   //   title: "Deccan Gladiators",
  //   //   text: "টাইটেল স্পনসর",
  //   //   date: "২০২৩ - ২০২৪",
  //   // },
  //   // {
  //   //   logo: logo6,
  //   //   title: "St Kitts & Nevis Patriots",
  //   //   text: "প্রধান স্পনসর",
  //   //   date: " ২০২৪ - ২০২৫ ",
  //   // },
  //   // {
  //   //   logo: logo7,
  //   //   title: "Biratnagar Kings",
  //   //   text: "ব্যাক অফ জার্সি স্পনসর",
  //   //   date: " ২০২৪ - ২০২৫ ",
  //   // },
  // ];

  return (
    <div className=" mx-2 ">
      <h2 className="text-textSecondaryColor text-sm my-2">
        {" "}
        {language === "bn" ? "অফিসিয়াল পার্টনার" : "Official Partner"}{" "}
      </h2>
      {/* <div className="grid grid-cols-2  gap-4 ">
        {sponsorshipData.map((data, index) => (
          <div key={index} className="flex flex-row items-center gap-1">
            <img src={data.logo} alt="" className="w-[15%]" />
            <div className="text-white flex flex-col text-[10px]">
              <h2 className="opacity-80" >{data.title}</h2>
              <div className="opacity-50">
                <p>{data.text}</p>
                <p>{data.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="bg-jili-bgSecondary w-full p-2 rounded">
        <div className=" w-[20%] items-center gap-2 ">
          <div>
            <img src={vipImage} alt="" className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSponsorship;
