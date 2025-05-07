import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "aos/dist/aos.css";
import Aos from "aos";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import SingleBecomeAnAgent from "@/components/become-an-agent/SingleBecomeAnAgent";
import { Link } from "react-router-dom";
import AgentSignupForm from "@/components/become-an-agent/AgentSignUpForm";
import AgentLoginForm from "@/components/become-an-agent/AgenLoginForm";
import AccountModal from "@/components/shared/Modals/AccountModal";

const BecomeAnAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

  // languageCountry
  const [selectedCountry, setSelectedCountry] = useState({
    name: "BN",
    flag: "https://flagcdn.com/w320/bd.png", // Default flag image can be added here
  });
  const countries = [
    { name: "BN", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "IN", flag: "https://flagcdn.com/w320/in.png" },
    { name: "USA", flag: "https://flagcdn.com/w320/us.png" },
    { name: "UK", flag: "https://flagcdn.com/w320/gb.png" },
  ];
  const toggleDropdown = () => {
    setIsCountryOpen(!isCountryOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  const openModal = (id) => {
    document.getElementById(id).showModal();
  };

  return (
    <div className="bg-primary-primaryColor">
      <div className="becomeAnAgent">
        {/* Start Top menu */}
        <div className="relative w-full">
          <div className="bg-primary-primaryColorTwo flex justify-between items-center p-4 shadow-md fixed top-0 left-0 w-full z-50">
            {/* Logo Section with Image */}
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg">
              {isLoading ? (
                <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
              ) : (
                <div className="flex flex-col">
                  <img
                    className="w-20"
                    src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
                    alt="Logo"
                  />
                  <p className="text-white text-xs">Cash Agent</p>
                </div>
              )}
            </div>
            <div className="text-white space-x-10 text-lg font-bold hidden lg:block">
              <a href="#about" className="hover:text-gray-300 duration-300">
                About Us
              </a>
              <a
                href="#collaboration"
                className="hover:text-gray-300 duration-300"
              >
                Collaboration
              </a>
              <a href="#contacts" className="hover:text-gray-300 duration-300">
                Contacts
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="flex text-white text-base lg:text-lg font-semibold lg:font-bold items-center space-x-2 lg:space-x-3">
              <button
                className="bg-[#333] hover:bg-red-600 text-white px-4 py-1.5 rounded duration-300"
                onClick={() => openModal("login_modal")}
              >
                Login
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded duration-300 hidden lg:block"
                onClick={() => openModal("signup_modal")}
              >
                Become an Agent
              </button>

              {/* Language Selector with Flags */}
              <div className="relative w-[68px]">
                <button
                  onClick={toggleDropdown}
                  className="w-full flex items-center justify-between text-white focus:outline-none focus:ring-[#283548]"
                >
                  <div className="flex p-1 items-center text-sm font-normal">
                    {selectedCountry.flag && (
                      <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
                        className="w-5 h-4 mr-2"
                      />
                    )}
                    {selectedCountry.name}
                  </div>
                  <span className="ml-1 text-xs">
                    {isCountryOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isCountryOpen && (
                  <ul className="absolute z-10 w-full text-white bg-[#1d2b3d] border border-[#283548] rounded-lg mt-1 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <li
                        key={country.name}
                        onClick={() => handleSelect(country)}
                        className="flex items-center p-1 hover:bg-[#283548] cursor-pointer text-sm font-normal"
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-5 h-4 mr-2"
                        />
                        {country.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden text-white flex items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute z-40 right-0 w-full h-screen text-lg font-bold bg-[#212121] text-white flex flex-col items-center justify-center space-y-4 py-4 shadow-lg lg:hidden">
              <a href="#about" className="hover:text-gray-300 duration-300">
                About Us
              </a>
              <a
                href="#collaboration"
                className="hover:text-gray-300 duration-300"
              >
                Collaboration
              </a>
              <a href="#contacts" className="hover:text-gray-300 duration-300">
                Contacts
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded duration-300">
                Become an Agent
              </button>
            </div>
          )}
        </div>
        {/* End Top menu */}

        <SingleBecomeAnAgent
          heading={`Make money with ${
            import.meta.env.VITE_SITE_NAME
          } TeamCash!`}
          text={[
            "Partnering up with an international bookmaker is incredibly rewarding. Accept funds, top up accounts, make withdrawals for customers or create your very own agent network and earn commission!",
          ]}
          btn={"Become an agent"}
          image={"https://melbetagents.com/wp-content/uploads/2023/06/img.png"}
          onClick={() => openModal("signup_modal")}
        />

        <div
          data-aos="fade-up"
          className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 pt-10 px-4"
        >
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-24 lg:w-28 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/crown-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              Reliable bookmaker since 2012
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-16 lg:w-20 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/erth-icon.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              50+ countries
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-24 lg:w-28 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/400K-6-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              400 000+ players worldwide
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-20 lg:w-24 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/cup-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              Best terms
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-16 lg:w-20 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/chest-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              Stable payouts
            </h2>
          </div>
        </div>

        <SingleBecomeAnAgent
          id="about"
          reverse={true}
          heading={`What is a ${import.meta.env.VITE_SITE_NAME} agent?`}
          text={[
            `A ${
              import.meta.env.VITE_SITE_NAME
            } agent is someone who works online/offline and earns commission for bringing in new customers and helping them make deposits/withdrawals from their account.`,
            `With ${
              import.meta.env.VITE_SITE_NAME
            } continuing to expand globally each year, why not join our international team? If you’d like to earn more, you could even set up your own agent network.`,
            `The more agents in your network, the larger your income! You can start earning with ${
              import.meta.env.VITE_SITE_NAME
            } today. Submit an application on our website and we’ll soon be in touch!`,
          ]}
          btn={"Start earning"}
          image={
            "https://melbetagents.com/wp-content/uploads/2023/06/img-3.png"
          }
          onClick={() => openModal("signup_modal")}
        />

        <SingleBecomeAnAgent
          heading={"Mobile EPOS"}
          text={[
            "For smooth operation and workflow, we have developed a convenient Android app available in several languages. Thanks to the app’s simple interface, you’ll be able to create your very own agent network and boost your income.",
          ]}
          listText={"You can use our app to:"}
          list={[
            "Accept deposits and top up customers’ accounts",
            "Credit winnings online or in cash",
            "Set up your own agent network in your region",
            "Expand your business to another country and bring in new customers",
          ]}
          image={
            "https://melbetagents.com/wp-content/uploads/2023/05/Group-18-e1732707404688.png"
          }
        />

        <SingleBecomeAnAgent
          id="collaboration"
          reverse={true}
          heading={`How can I become a ${
            import.meta.env.VITE_SITE_NAME
          } agent?`}
          text4={[
            "Obtain agent status",
            "Log in and make your first deposit",
            "Download and install the app",
            "Start chatting with players",
            "Help players make quick deposits",
            "Earn commission",
          ]}
          additionalText={[
            "Once you've completed verification, the bookmaker will grant you agent status.",
            `Once you've logged in, you'll need to verify your identity on the ${
              import.meta.env.VITE_SITE_NAME
            } website. You'll then get access to your own agent balance, which you'll use to top up customers' accounts.`,
            "Your manager will send you a link which you can use to download the mobile app. Please make sure that your phone's operating system is no older than the Android 4.4 version before installing the app.",
            `Make sure that they have a ${
              import.meta.env.VITE_SITE_NAME
            } account.`,
            "You'll be able to top up customers' accounts quickly and easily. Use the deposits in your account to transfer funds from your agent account to customers' accounts.",
            "Earn between 3-5% comission on deposits and 2% on withdrawals. Your total earnings will depend on the specifics of your region and other parameters. You'll gain access to additional information once you fill in all of your details.",
          ]}
          image={
            "https://melbetagents.com/wp-content/uploads/2023/06/img-3-1.png"
          }
        />

        <div
          id="contacts"
          className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 pt-20 pb-14 px-4"
        >
          <div className="max-w-[600px]">
            <h2 className="w-full lg:max-w-[100px] text-2xl lg:text-4xl uppercase font-bold text-red-600 italic">
              Contact information
            </h2>
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="">
                <Link>
                  <div className="flex gap-2 items-center text-base lg:text-xl font-bold uppercase italic underline text-white mt-4 lg:mt-8">
                    <FaEarthAmericas className="text-red-700" size={28} />
                    <p className="lowercase">
                      {import.meta.env.VITE_SITE_NAME}.com
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="flex gap-2 items-center text-base lg:text-xl font-bold uppercase italic underline text-white mt-3">
                    <MdEmail className="text-red-700" size={28} />
                    <p className="lowercase">
                      support@{import.meta.env.VITE_SITE_NAME}agents.com
                    </p>
                  </div>
                </Link>
              </div>
              <img
                data-aos="zoom-in"
                className="w-64 sm:w-80 lg:w-64"
                src="https://melbetagents.com/wp-content/uploads/2023/05/Group-8.png"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <h2 className="mb-2 lg:mb-4 text-2xl lg:text-4xl text-center uppercase font-bold text-red-600 italic">
              Submit an application
            </h2>
            <AgentSignupForm />
          </div>
        </div>

        {/* Login Modal */}
        <AccountModal id="login_modal" title="Login">
          <AgentLoginForm
            onClose={() => document.getElementById("login_modal").close()}
          />
        </AccountModal>
        {/* Signup Modal */}
        <AccountModal id="signup_modal" title="Sign Up">
          <AgentSignupForm
            onClose={() => document.getElementById("signup_modal").close()}
          />
        </AccountModal>
      </div>
    </div>
  );
};

export default BecomeAnAgent;
