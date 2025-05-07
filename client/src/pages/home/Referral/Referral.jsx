import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import Container from "@/components/shared/Container";
import SecondaryBanner from "@/components/shared/SecondaryBanner";
import { FaChevronRight } from "react-icons/fa";

const Referral = () => {
  const procedures = [
    {
      id: 1,
      image:
        "https://www.baji.live/images/v1/web/bj/referral-program/referral-program-flowch-1.png",
      number: "১",
      title: "ইনভিটেশন পাঠান",
      subtitle: "আপনার রেফারেল জার্নি শুরু করতে",
    },
    {
      id: 2,
      image:
        "https://www.baji.live/images/v1/web/bj/referral-program/referral-program-flowch-2.png",
      number: "২",
      title: "ফ্রেন্ড রেজিস্ট্রেশন",
      subtitle: "বেট ধরার সাথে",
    },
    {
      id: 3,
      image:
        "https://www.baji.live/images/v1/web/bj/referral-program/referral-program-flowch-3.png",
      number: "৩",
      title: "পুরস্কার জিতুন weekly, monthly",
      subtitle: "এবং আপনার বন্ধুদের সাথে উপভোগ করুন",
    },
  ];

  const commissionRules = [
    {
      level: "লেভেল ১",
      percentage: "0.1",
    },
    {
      level: "লেভেল ২",
      percentage: "0.03",
    },
    {
      level: "লেভেল ৩",
      percentage: "0.01",
    },
  ];

  const topMembers = [
    {
      id: 1,
      image:
        "https://www.baji.live/images/v1/web/bj/referral-program/avatar2.png",
      name: "ala****1987",
      bonus: "10,265.21",
    },
    {
      id: 2,
      image:
        "https://www.baji.live/images/v1/web/bj/referral-program/avatar1.png",
      name: "belal****m81...",
      bonus: "4,716.48",
    },
    {
      id: 3,
      image:
        "https://www.baji.live/images/v1/web/bj/referral-program/avatar3.png",
      name: "sho****177",
      bonus: "3,409.37",
    },
  ];
  return (
    <div className="bg-black">
      <SecondaryBanner
        image={
          "https://www.baji.live/images/v1/web/bj/referral-program/referral-program-bg.png"
        }
        buttonImage={
          "https://www.baji.live/images/v1/web/bj/referral-program/referral-program-banner.png"
        }
        bottom={true}
      />
      <Container>
        <div className="flex flex-col md:flex-row justify-center gap-5 text-white">
          <div className="w-full md:w-[65%] rounded-md bg-[#333] border border-[#666] px-5 py-6">
            <h2 className="text-lg font-bold text-center">
              কিভাবে আরো প্রাইজ পাবেন?
            </h2>
            <div className="flex flex-col md:flex-row gap-20 md:gap-3 justify-between pt-20 pb-8">
              {procedures?.map((procedure, index) => (
                <div
                  className="relative md:w-1/3 bg-[#393939] px-5 py-10 rounded-md space-y-2"
                  key={procedure.id}
                >
                  <div
                    className={`flex items-center justify-between pe-7 absolute -top-16 w-full ${
                      index % 2 === 0 ? "" : "flex-row-reverse"
                    }`}
                  >
                    <h1 className="text-[#ffde1a] text-8xl font-bold">
                      {procedure.number}
                    </h1>
                    <img className="size-20" src={procedure.image} alt="" />
                  </div>
                  <h3
                    className={`${
                      index % 2 === 0 ? "" : "text-end"
                    } text-[#ffde1a] font-bold`}
                  >
                    {procedure.title}
                  </h3>
                  <p className={`${index % 2 === 0 ? "" : "text-end"} text-xs`}>
                    {procedure.subtitle}
                  </p>
                  <img
                    className="absolute top-3 right-3 opacity-5"
                    src="https://www.baji.live/images/v1/web/bj/referral-program/arrow-deco.png"
                    alt=""
                  />
                  <img
                    className="absolute left-3 bottom-3 opacity-5"
                    src="https://www.baji.live/images/v1/web/bj/referral-program/arrow-deco.png"
                    alt=""
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center pb-3 md:pb-0">
              <PrimaryButton>এখনই রেকমেন্ড করুন</PrimaryButton>
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-lg">রেফারেল প্রোগ্রাম কি?</h2>
              <p className="text-[#b5b5b5] text-sm py-1">
                আপনার বন্ধুকে রেফার করে মোট তিনটি ধাপে ক্যাশ প্রাইজ উপভোগ করতে
                পারেন, আপনার বন্ধুকে একসাথে খেলতে এখনই আমন্ত্রণ জানান!!! এটি হবে
                আপনার দীর্ঘমেয়াদী ইনকাম, এবং যতবার তারা বেট ধরবে, ততবারই আপনি
                আলাদা কমিশন এর পার্সেন্টেজ পাবেন।
              </p>
              <div className="flex items-center gap-1 hover:text-[#ffde1a] max-w-32">
                <p className="">নিয়মাবলী</p> <FaChevronRight />
              </div>
              <div className="pt-8">
                <h2 className="font-bold text-lg">কমিশনের নিয়ম</h2>
                <p className="text-[#b5b5b5] text-sm py-1">
                  Turnover Range : More Than 7,777
                </p>
                <div className="flex justify-between items-center gap-2">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              {commissionRules?.map(({ level, percentage }) => (
                <p
                  className="w-full text-center md:text-start md:w-1/3 py-3 px-4 bg-[#4c4c4c] rounded-sm"
                  key={level}
                >
                  {level} <span className="text-[#ffde1a]">{percentage}%</span>{" "}
                  <span className="text-[#b5b5b5] text-xs"> (পর্যন্ত)</span>
                </p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[35%] bg-[#333] rounded-md border border-[#666] px-5 py-6">
            <div className="flex items-center justify-between gap-2 relative py-10">
              {topMembers?.map((member) => (
                <div
                  key={member.id}
                  className={`w-1/3 relative rounded-md ${
                    member.id === 2 && "-mt-8"
                  }`}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center">
                    <img
                      className=""
                      src="https://www.baji.live/images/v1/web/bj/referral-program/crown.svg"
                      alt=""
                    />
                    <p className="bg-[#FFDE1A] text-black text-sm px-2 py-1 rounded-full">
                      {member.id === 2
                        ? "টপ ১"
                        : member.id === 1
                        ? "টপ ২"
                        : "টপ ৩"}
                    </p>
                  </div>

                  {/* Background Image */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                    src="https://www.baji.live/images/v1/web/bj/referral-program/referral-program-leaderboard-rank2.png"
                    alt=""
                  />

                  {/* Content */}
                  <div className="relative z-10 p-4 text-center space-y-2">
                    {" "}
                    {/* Ensure content is above the background */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`rounded-full mx-auto ${
                        member.id === 2 ? "w-24" : "size-20"
                      }`}
                    />
                    <h2 className="text-white text-xs">{member.name}</h2>
                    <p className="text-[#FFDE1A] text-xs font-semibold">
                      {member.bonus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Referral;
