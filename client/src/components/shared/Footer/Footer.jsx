import Container from "../Container";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="bg-jili-bgBlack ">
      <Container>
        {/* <FooterTop /> */}
        <FooterMiddle />
        <FooterBottom />
      </Container>
    </div>
  );
};

export default Footer;
