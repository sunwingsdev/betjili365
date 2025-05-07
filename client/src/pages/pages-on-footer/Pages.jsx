import { Link, useParams } from "react-router-dom";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { useGetPagesDetailQuery } from "@/redux/features/allApis/pagesApi/pagesApi";
import PageHeader from "@/components/pages-on-footer/PageHeader";

const Pages = () => {
  const { route } = useParams();
  const { data: homeControls } = useGetHomeControlsQuery();
  const { data: pagesDetails } = useGetPagesDetailQuery();
  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  const selectedPage = pagesDetails?.find((page) => page.route === route);

  const routes = [
    { value: "about-us", label: "About Us" },
    { value: "contact-us", label: "Contact Us" },
    { value: "terms-conditions", label: "Terms and Conditions" },
    { value: "rules-regulations", label: "Rules and Regulations" },
    { value: "responsible-gaming", label: "Responsible Gaming" },
    { value: "privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <div className="h-screen bg-green-800">
      <PageHeader />
      <div className="bg-[#053018] py-4">
        <div className="container mx-auto lg:ps-28 text-white prose-base">
          {selectedPage ? (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: selectedPage?.details }}
            ></div>
          ) : (
            <div className="text-center py-8">No Data</div>
          )}
        </div>
      </div>
      <div className="bg-green-800 py-16">
        <div className="flex items-center justify-between gap-4 md:gap-8 container mx-auto lg:px-28 text-white">
          <div className="w-full md:w-1/5">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
              alt=""
            />
          </div>
          <div className="w-full md:w-3/5 grid grid-cols-3 font-semibold gap-2">
            {routes?.map((route) => (
              <Link
                key={route?.value}
                to={`/pages/${route?.value}`}
                className="w-fit"
              >
                {route?.label}
              </Link>
            ))}
          </div>
          <div className="w-full md:w-1/5">
            <p className="mb-2">Community websites</p>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl bg-blue-600 rounded-full" />
              <FaTelegram className="text-3xl bg-blue-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-customYellow py-4">
        <p>Copyright 2024 darazplay. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Pages;
