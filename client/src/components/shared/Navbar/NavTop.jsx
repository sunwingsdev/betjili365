import Container from "../Container";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavTop = () => {
  const socialItems = [
    { title: "Whatsapp", icon: IoLogoWhatsapp, route: "/whatsapp" },
    { title: "Email", icon: MdEmail, route: "/email" },
    { title: "Facebook", icon: AiFillFacebook, route: "/" },
    { title: "Forum", icon: RiMessage2Fill, route: "/" },
  ];
  return (
    <div className="bg-primary-primaryColor text-white text-sm hidden md:block">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <p className="p-1.5">(GMT+6) 11:32:15</p>
            <div className="p-1.5 bg-slate-500">৳&nbsp;BDT&nbsp;বাংলা</div>
          </div>
          <div className="flex items-center">
            {socialItems.map(({ title, icon: Icon, route }) => (
              <Link
                to={route}
                className={`flex items-center gap-1 justify-center px-3 text-gray-300 hover:text-white ${
                  title !== "Forum" && "border-r-[1px]"
                }`}
                key={title}
              >
                {" "}
                <Icon className="text-lg" />
                {title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavTop;
