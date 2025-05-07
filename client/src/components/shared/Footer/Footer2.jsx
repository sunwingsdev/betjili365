import { useLocation } from "react-router-dom";
import FooterSponsorship from "./FooterSponsorship";
import FooterAmbassador from "./FooterAmbassador";
import FooterDeposit from "./FooterDeposit";
import FooterLast from "./FooterLast";
import HomeFooter from "./HomeFooter";
import FooterFaq from "./FooterFaq";

const Footer2 = () => {
  const location = useLocation();

  const footerComponents = {
    // "/": <HomeFooter />,
  };
  return (
    <div className="bg-jili-bgBlack">
      <div className="">
        <div className="py-4 ">
          {footerComponents[location.pathname] || null}
        </div>
        
        <FooterAmbassador />
        <FooterSponsorship />
        <FooterDeposit />
        <FooterFaq/>
        <FooterLast />
      </div>
    </div>
  );
};
export default Footer2;
