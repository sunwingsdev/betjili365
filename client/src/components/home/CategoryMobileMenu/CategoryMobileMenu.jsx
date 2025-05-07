import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CategoryMobileMenu = () => {
  const categories = [
    {
      title: "স্পোর্ট",
      categoryValue: "sport",

      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/sport",
    },
    {
      title: "ক্যাসিনো",
      categoryValue: "casino",

      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/casino",
    },
    {
      title: "স্লট",
      categoryValue: "slot",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/slot",
    },
    {
      title: "টেবিল",
      categoryValue: "table",

      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/table",
    },
    {
      title: "ফিশিং",
      categoryValue: "fishing",

      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/fishing",
    },
    {
      title: "ক্রাশ",
      categoryValue: "crush",

      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/crush",
    },
    {
      title: "আর্কেড",
      categoryValue: "arcade",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/arcade",
    },
    {
      title: "লটারি",
      categoryValue: "lottery",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/lottery",
    },
  ];

  const subcategories = [
    {
      categoryValue: "sport",
      subcategoryValue: "exchange",
      title: "এক্সচেঞ্জ",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "i-sports",
      title: "I-Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sportbook.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "sbo-sports",
      title: "SBO Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sbov2.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "e1-sport",
      title: "E1Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-awcme1sport.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "horse-book",
      title: "ঘোড়া বই",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-horsebook.svg?v=1727170388190",
    },
    {
      categoryValue: "crush",
      subcategoryValue: "e1-sports",
      title: "E1 Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sbov2.svg?v=1727170388190",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "evolution",
      title: "Evolution",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-evo.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "sexy",
      title: "Sexy",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmsexy.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "pragmatic-play",
      title: "Pragmatic Play",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmpp.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "play-tech",
      title: "Playtech",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmpt.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "hot-road",
      title: "HotRoad",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmhotroad.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "lottery",
      subcategoryValue: "e1-sports",
      title: "E1 Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sbov2.svg?v=1727170388190",
    },
  ];

  return (
    <Tabs defaultValue={"exclusive"} className="text-white py-3 md:hidden">
      <TabsList className="rounded-none flex justify-between overflow-auto bg-black w-full sticky top-4">
        <TabsTrigger
          value="exclusive"
          className="flex flex-col rounded-none gap-2"
        >
          <img
            src={
              "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-exclusive.png?v=1727170388190"
            }
            className="size-10"
          />
          <p className="px-3"> {"এক্সক্লুসিভ"}</p>
        </TabsTrigger>
        {categories.map((category) => (
          <TabsTrigger
            key={category.categoryValue}
            value={category.categoryValue}
            className="flex flex-col rounded-none gap-2"
          >
            <img
              src={category.image}
              alt={category.title}
              className="size-10"
            />
            <p className="px-3"> {category.title}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="exclusive" className="h-full">
        <div>
          <h2 className="border-s-[7px] ps-3 my-3 border-green-600 rounded">
            এক্সক্লুসিভ
          </h2>
          <div className="">
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src="https://img.b112j.com/bj/h5/assets/images/exclusivegames/default/main/exclusive-money-wheel.jpg?v=1727170388190&source=mcdsrc"
                className="w-full rounded-md"
              />
              <img
                src="https://img.b112j.com/bj/h5/assets/images/exclusivegames/default/main/exclusive-divas-ace.jpg?v=1727170388190&source=mcdsrc"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </TabsContent>

      {categories.map((category) => (
        <TabsContent
          key={category.categoryValue}
          value={category.categoryValue}
          className="h-full"
        >
          <div>
            <h2 className="border-s-[7px] ps-3 my-3 border-green-600 rounded">
              {category.title}
            </h2>
            <div className="grid grid-cols-4 gap-1">
              {subcategories
                .filter((sub) => sub.categoryValue === category.categoryValue)
                .map((subcategory) => (
                  <div
                    key={subcategory.subcategoryValue}
                    className="flex flex-col items-center justify-center gap-1 bg-[#2b2b2b] py-4"
                  >
                    <img
                      src={subcategory.image}
                      alt={subcategory.title}
                      className="w-10 h-10 fill-current text-yellow-500"
                    />
                    <p className="text-center">{subcategory.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CategoryMobileMenu;
