import { useState, useEffect } from "react";
import NavBottom from "./NavBottom";
import NavMiddle from "./NavMiddle";
import NavTop from "./NavTop";

const Navbar = ({ menuItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    {
      name: "প্রমোশনাল অফার",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/promotional-offer",
    },
    {
      name: "ভিআইপি",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/vip",
    },
    {
      name: "রেফারেল",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/referral",
    },
  ];

  const mergedItems = [
    ...(Array.isArray(menuItems)
      ? menuItems
          .filter(
            (item) => item.name !== "স্পোর্ট" && item.name !== "এক্সক্লুসিভ"
          )
          .map((item) => ({
            _id: item._id,
            name: item.name,
            image: item.image,
            subCategories: item.subCategories,
            createdAt: item?.createdAt,
            route: `/category/${item.name}`,
          }))
      : []),
    ...navItems,
  ];

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isScrolled ? "fixed top-0 left-0 z-50 w-full" : ""
      }`}
    >
      <NavTop />
      <NavMiddle navItems={navItems} />
      <NavBottom navItems={mergedItems} />
    </div>
  );
};

export default Navbar;
