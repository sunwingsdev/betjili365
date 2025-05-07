const Introduction = () => {
  return (
    <div className="w-full my-8">
      <div className="text-center">
        <div className="max-w-full text-center">
          <h2 className="text-4xl text-yellow-400 mb-4">INTRODUCTION</h2>
          <p className=" text-center">
            {import.meta.env.VITE_SITE_NAME} is the top online casino for
            Bangladeshi players, offering popular casino games, sports betting,
            slots, and table games. Focused on Bangladesh, we provide a range of
            promotions and bonuses. Our Affiliate program features user-friendly
            interfaces and professional managers, making recruitment easy and
            effective.
          </p>
          <p className=" text-center">
            {import.meta.env.VITE_SITE_NAME} Affiliate offers up to 45% lifetime
            commission with dedicated affiliate support, helping you maximize
            earnings and succeed with essential tools and marketing strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
