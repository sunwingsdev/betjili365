const PrivacyPolicy = () => {
  return (
    <div className=" bg-customGreenPrimary text-left p-30 w-full">
      <div className=" text-left flex flex-col gap-8">
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Privacy Policy </h2>
          <p className="">
            This Privacy Policy governs the {import.meta.env.VITE_SITE_NAME}
            website, including any other websites, pages, subpages, subdomains,
            or sections accessible via <br />
            <span className="text-customYellow">
              www.{import.meta.env.VITE_SITE_NAME}.com.
            </span>
            This document outlines how we process the personal information we
            collect from you or that you provide to us. By using or registering
            with our websites, you agree to the terms and conditions of this
            Privacy Policy. If you do not agree, please stop using the website
            immediately.
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">
            Amendments to the Policy:
          </h2>
          <p className="">
            We may change this privacy policy at any time. If we do, we will
            notify you by posting a notice on the relevant service and/or
            contacting you by email or other means. The effective date of the
            current Privacy Policy will be listed at the top of this page.
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Compliance</h2>
          <p className="">
            This Privacy Policy complies with relevant data protection
            legislation. {import.meta.env.VITE_SITE_NAME} regularly reviews the
            regulations and guidelines set forth by the Organization for
            Economic Co-operation and Development to protect user privacy.
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Compliance</h2>
          <p className="">
            We collect personal information to identify you when you use our
            services. This includes:
            <ul className='list-dis pl-5"'>
              <li>
                Name, contact information, address, email address, phone number,
                and any other details required to use our services.
              </li>
              <li>
                Betting, gaming, deposits, payments, payment method, and other
                account transactions to improve our services.
              </li>
              <li>Phone or Live Chat conversations.</li>
              <li>
                Social media profile details when you connect with us through a
                social media account.
              </li>
              <li>
                Information provided in marketing promotions or competitions.
              </li>
            </ul>
            We use these details to contact you for various purposes and to
            provide the best service possible. Your personal information may
            also be used for marketing, notifications about events, promotions,
            or special offers. By using our websites, you consent to the
            processing of your data in the ways specified by this policy in
            accordance with the Data Protection Act of
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">
            Disclosure on Use of Your Information
          </h2>
          <p className="">
            By creating an account with us, you acknowledge that we may retain
            your user information and, if necessary, provide it to third-party
            companies to process on our behalf. Examples of how your information
            may be processed include: Managing your account and transactions on
            our websites. Identifying and verifying your legal age and location.
            Complying with risk management, fraud detection, and anti-money
            laundering regulations. Meeting any legal or regulatory
            requirements. We also reserve the right to conduct statistical
            analyses of user behavior and characteristics to evaluate interest
            and usage of various areas of the sites. Aggregated data from these
            analyses may be shared with advertisers.
            {import.meta.env.VITE_SITE_NAME} is a member of associations
            dedicated to protecting the integrity of sports and betting. We may
            access and share your data to monitor betting activities.
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Compliance</h2>
          <p className="">
            This Privacy Policy complies with relevant data protection
            legislation. {import.meta.env.VITE_SITE_NAME} regularly reviews the
            regulations and guidelines set forth by the Organization for
            Economic Co-operation and Development to protect user privacy.
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Cookies</h2>
          <p className="">
            Cookies may be used during the registration process to automatically
            collect and store personal information. Cookies help us compile a
            demographic profile and monitor your browsing habits. They are also
            used by the Affiliate system to track referrals.{" "}
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Retention</h2>
          <p className="">
            We may occasionally hire reputable third parties to handle your data
            to offer services such as customer service, payments, IT, sales,
            marketing, data analysis, research, and surveys. Sharing your
            information helps determine fees and benefits under our agreements
            with partners.
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Retention</h2>
          <p className="">
            We retain personal data for as long as it is necessary for business
            or legal compliance. Your information will not be kept for more than
            seven years after account closure unless required by law or
            regulatory reasons.{" "}
          </p>
        </div>
        <div className="max-w-full">
          <h2 className="text-3xl text-customYellowHeading">Security </h2>
          <p className="">
            We are committed to implementing security measures to protect your
            information from unauthorized access, processing, disclosure,
            destruction, loss, alteration, and damage. We want you to feel
            confident in the security of your personal information when
            registering an account.{" "}
          </p>
        </div>
        <div className="max-w-full pr-">
          <h2 className="text-3xl  text-customYellowHeading">
            How to Contact Us{" "}
          </h2>
          <p className="">
            For any requests regarding your personal information or rights
            mentioned above, please contact us at <br />
            <span className="text-customYellow">
              support@{import.meta.env.VITE_SITE_NAME}.com.
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
