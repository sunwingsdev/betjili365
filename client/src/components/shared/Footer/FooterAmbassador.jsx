// import logo1 from "../../../assets/v2/mia-khalifa.png";
// import logo2 from "../../../assets/v2/kevin-pietersen.png";
import logo1 from "../../../assets/betJilliImages/images/ambassadors-quinton-de-kock.png";
import logo2 from "../../../assets/betJilliImages/images/ambassadors-monami-ghosh.png";
import logo3 from "../../../assets/betJilliImages/images/ambassadors-david-de-gea.png";
import logo4 from "../../../assets/betJilliImages/images/ambassadors-sunny-leone.png";
// import logo1 from "../../../assets/v2/sponsor5.png";
// import logo2 from "../../../assets/v2/sponsor7.png";
// import logo3 from "../../../assets/v2/amy-jacson.png";
// import logo4 from "../../../assets/v2/hansika-motwani.png";
// import logo5 from "../../../assets/v2/wasim-akram.png";
// import logo6 from "../../../assets/v2/chan-samart.png";
import { useContext } from "react";
import { LanguageContext } from "@/Context/LanguageContext";

const FooterAmbassador = () => {
  const { language } = useContext(LanguageContext);
  const sponsorshipData = [
    {
      logo: logo1,
      title:
        language === "bn" ? "দক্ষিণ আফ্রিকার ক্রিকেটার" : "Quinton de Kock",
      modelName:
        language === "bn"
          ? "দক্ষিণ আফ্রিকার ক্রিকেটার"
          : "South African Cricketer",
    },
    {
      logo: logo2,
      title: language === "bn" ? "মনামী ঘোষ" : "Monami Ghosh",
      modelName:
        language === "bn"
          ? "চলচ্চিত্র ও টেলিভিশন সুপারস্টার"
          : "Film & Television Superstar",
    },
    {
      logo: logo3,
      title: language === "bn" ? "ডেভিড ডি গিয়া" : "David De Gea",
      modelName:
        language === "bn"
          ? "স্পেনের পেশাদার ফুটবলার"
          : "Spanish Professional Footballer",
    },
    {
      logo: logo4,
      title:
        language === "bn" ? "সেলিব্রিটি ব্র্যান্ড অ্যাম্বাসেডর" : "Sunny Leone",
      modelName: language === "bn" ? "অভিনেত্রী" : "Actress",
    },
  ];

  return (
    <div>
      <div className=" mx-2">
        <h2 className="text-white text-sm my-2">
          {" "}
          {language === "bn" ? "ব্র্যান্ড অ্যাম্বাসেডর’স" : "Brand Ambassadors"}
        </h2>
        <div className="grid md:flex grid-cols-2 bg-jili-bgSecondary w-full p-2 rounded gap-4 md:gap-2 ">
          {sponsorshipData.map((data, index) => (
            <div key={index} className="flex flex-col gap-1">
              {/* <img src={data.logo} alt="" className="w-20 h-10" /> */}
              <div
                className="w-20 h-10"
                style={{
                  WebkitMaskImage: `url(${data.logo})`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  backgroundColor: "#FFE400",
                }}
              ></div>
              <div className="text-white text-opacity-50 flex flex-col text-[10px]">
                <h2 className="">{data.title}</h2>
                <div className="">
                  <p>{data.modelName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterAmbassador;
