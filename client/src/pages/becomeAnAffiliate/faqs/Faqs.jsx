const Faqs = () => {
  return (
    <div className=" bg-customGreenPrimary text-left p-30 w-full">
      <div className=" text-left flex flex-col gap-8">
        <div>
          <h1 className="text-3xl text-left text-customYellowHeading">
            Frequently Asked Questions (FAQs)
          </h1>
        </div>
        <div className="">
          <h2 className="text-xl text-customYellowHeading">
            1. What is the minimum player requirement to qualify for the
            commission?
          </h2>
          <p className="text-base">
            – With at least 5 active users in a single week, affiliate agents
            will be eligible to earn a monthly commission. Players however will
            need to reach a turnover of 500.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            2. Are there any payments needed for the registration?
          </h2>
          <p className="text-base">
            – Get committed affiliate managers for help and support when you
            complete the free affiliate registration at
            {import.meta.env.VITE_SITE_NAME}.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            3. Who can qualify to become an affiliate?
          </h2>
          <p className="text-base">
            – Social media influencers, webmasters, CPAs, website owners,
            YouTubers, and casino agents are encouraged to learn more and
            consider the prospect of affiliate marketing.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            4. How long does it take for affiliate registrations to be approved?
          </h2>
          <p className="text-base">
            – Once you’ve completed and submitted the registration form, your
            affiliate application will be reviewed within 24 hours, and you’ll
            receive confirmation via email.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            5. Does an affiliate account allow for numerous sign-up tracking
            links?
          </h2>
          <p className="text-base">
            – Yes, you can set up multiple tracking URLs for sign-ups, each
            tailored to different affiliate criteria, and monitor the
            performance of each link directly in your affiliate account.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            6. What payment methods are accepted by the
            {import.meta.env.VITE_SITE_NAME} affiliate program?
          </h2>
          <p className="text-base">
            – All payments will be directed to the bank account given during
            registration. For any other preferred payment methods or bank
            accounts, players may contact their affiliate managers.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            7. Is there a minimum for revenue share earnings?
          </h2>
          <p className="text-base">
            – A minimum payout of 500 BDT, which is 50% of the net profit from
            the monthly settlement 1,000 BDT, can be earned by affiliates
            monthly. Do note that any amount below this limit will not be
            carried over to the next month.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            8. Does any negative carryover apply?
          </h2>
          <p className="text-base">
            – All negative balance will be minus from the next after settlement
            until it becomes zero if any negative carryovers apply.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            9. When can affiliates withdraw their revenue share earnings?
          </h2>
          <p className="text-base">
            – All payments will be made between the 6th and 10th of each month
            once {import.meta.env.VITE_SITE_NAME} affiliates have issued their
            monthly settlement report.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            10. Are there any additional charges for affiliates?
          </h2>
          <p className="text-base">
            – There will be a 22.5% deduction to cover payment processing and
            operational expenses.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            11. How many withdrawal requests can an affiliate make?
          </h2>
          <p className="text-base">
            – Affiliates can request multiple withdrawals as long as their
            account balance remains positive and eligible.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            12. What is the revenue share’s minimum payout?
          </h2>
          <p className="text-base">
            – Affiliates who earn less than 500 in a month will be dropped that
            week.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-customYellowHeading">
            13. What is {import.meta.env.VITE_SITE_NAME} Affiliate?
          </h2>
          <p className="text-base">
            – {import.meta.env.VITE_SITE_NAME}’s affiliate program offers the
            chance to earn unlimited lifetime commissions by generating links to
            their pages and promoting special offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
