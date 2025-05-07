const Registration = () => {
  // data.js or inside the component
  const cardData = [
    {
      title: "Registration Form",
      description: `To become a ${
        import.meta.env.VITE_SITE_NAME
      } partner, applicants must complete the registration form. Click Register and fill it out accurately.`,
    },
    {
      title: "Verification",
      description: `After submitting the ${
        import.meta.env.VITE_SITE_NAME
      } partner form, expect review and email confirmation within 24 hours.`,
    },
    {
      title: "Payment",
      description: `Earnings are transferred weekly to the partner's ${
        import.meta.env.VITE_SITE_NAME
      } account provided during registration.`,
    },
  ];

  return (
    <div className="">
      <div
        className="h-auto lg:h-[400px] py-12"
        style={{
          backgroundImage:
            "url(https://darazplaypartner.com/wp-content/uploads/2024/07/background-registration.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-neutral-content text-center items-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="mb-5 text-4xl text-green-400 font-bold">
              <span>REGISTRATION</span> STEPS
            </h1>
            <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-5 sm:gap-8 mt-6">
              {cardData?.map((card, index) => (
                <div
                  key={index}
                  className="w-64 sm:w-64 md:w-full lg:w-full h-36 bg-[#0e0e0e] shadow-[0px_4px_20px_rgba(0,255,127,0.2)] border border-yellow-400 rounded-2xl p-5 flex flex-col justify-center items-center transition hover:scale-105 hover:shadow-[0px_6px_25px_rgba(0,255,127,0.3)] duration-300"
                >
                  <h3 className="text-xl text-green-400 font-semibold text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white text-center mt-3 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
