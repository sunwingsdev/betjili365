import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );
  const routes = [
    {
      id: 1,
      title: "অ্যাফিলিয়েট",
      route: "/affiliate",
    },
    {
      id: 2,
      title: "দায়িত্বশীল গেমিং",
      route: "/info",
    },
    {
      id: 3,
      title: "আমাদের সম্পর্কে",
      route: "/info",
    },
  ];
  return (
    <div className="py-4 text-[#dedede]">
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between py-4">
        <img
          className="w-20 md:w-28"
          src={`${import.meta.env.VITE_BASE_API_URL}${logoHomeControl?.image}`}
          alt=""
        />
        <div className="flex flex-col items-end justify-center">
          <div className="flex items-center ">
            {routes.map(({ title, route }, i) => (
              <Link
                to={route}
                className="text-sm flex items-center gap-1 justify-center py-4 hover:text-textSecondaryColor transition-colors ease-linear duration-200"
                key={title}
              >
                <p className={`py-1 px-5 ${i !== 0 && "border-s-[1px]"}`}>
                  {title}
                </p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-[#999]">
            © 2024 {import.meta.env.VITE_SITE_NAME} কপিরাইট। সমস্ত অধিকার
            সংরক্ষিত
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
