import { PiSpeakerHighFill } from "react-icons/pi";
import announcementImage from "../../../assets/v2/announcement-icon.svg";

const Marquee = () => {
  return (
    <div className="relative bg-jili-bgBlack border-x-customWhite flex items-center  overflow-hidden py-1">
      {/* News Label */}
      <div className="absolute left-1 flex items-center   rounded-full text-customWhite px-2 py-1">
        {/* <PiSpeakerHighFill className="text-textSecondaryColor" /> */}
        <div
          className="w-4 h-4"
          style={{
            WebkitMaskImage: `url(${announcementImage})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            backgroundColor: "#FFE400",
          }}
        ></div>
      </div>

      {/* Marquee Container */}
      <div className="w-full overflow-hidden ml-10">
        <div className="marquee-wrapper text-white">
          <div className="marquee text-marqueeTextColor text-sm font-medium">
            {/* Actual Content */}
            <div className="flex">
              <span className="mx-6 inline-block text-xs">
                <span className="text-xs">
                  {" "}
                  প্রিয় বাংলালিংক গ্রাহকবৃন্দ, অনুগ্রহ করে প্রদত্ত লিংকটি
                  ব্যবহার করে আমাদের ওয়েবসাইটে প্রবেশ করুন{" "}
                  {import.meta.env.VITE_SITE_NAME}.com{" "}
                </span>
              </span>
              <span className="mx-6 inline-block text-xs">
                প্রিয় বাংলালিংক গ্রাহকবৃন্দ, অনুগ্রহ করে প্রদত্ত লিংকটি ব্যবহার
                করে আমাদের ওয়েবসাইটে প্রবেশ করুন{" "}
                {import.meta.env.VITE_SITE_NAME}.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
