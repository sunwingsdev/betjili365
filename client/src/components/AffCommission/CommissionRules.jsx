import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LanguageContext } from "@/Context/LanguageContext";

const CommissionRules = () => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: {
      title: "General Rules",
      rules: `
1. Effective October 28th, 2024, all new affiliates must complete KYC verification before withdrawing their commission.
2. Affiliate commission ranges from 40% to 45%, depending on your weekly active players and their net losses.
3. Affiliate must have at least 5 active players to be eligible to withdraw the commission. If you earned commission with 1 to 4 active players last week, you must have 5 active players this period in order to withdraw your previous week’s commission.
4. Commissions are calculated on a weekly basis.
5. 18% of the player’s profit & loss will be deducted as operation and admin cost.
6. The profit and losses from P2P games (Ludo and BPoker) are excluded from commission calculation.
7. Apart from the number of active players mentioned above, each referred player must be a genuine active player. MCW audits player quality. Failure to meet standards will result in unpaid commission.
8. If you stop promoting (no new signups or removal of MCW banners), it is considered a breach and your agreement may be terminated, forfeiting future revenue share.
9. If players are involved in collusion or fraud, MCW may deduct withheld funds or remove them from your referrals.
10. Commissions are settled every Wednesday, no later than 5:00 PM.
10.1 Negative balance (i.e., customer winnings exceed losses) will carry forward. Revenue Share will be adjusted accordingly.
10.2 All commissions are exclusive of taxes, duties, etc. You are responsible for applicable taxes in your jurisdiction. MCW may withhold tax where legally required.
      `,
      bottom1:
        "Are you already an existing Affiliate and wish to earn Weekly Commission? Contact Us By ",
      bottom2:
        "Discover how you can earn up to a 48% monthly commission through our MCWSignature",
      learnMore: "Learn more",
      telegram: "Telegram!",
    },
    bn: {
      title: "সাধারণ নিয়মাবলী",
      rules: `
১. ২৮ অক্টোবর, ২০২৪ থেকে, সকল নতুন অ্যাফিলিয়েটকে কমিশন উত্তোলনের আগে KYC যাচাইকরণ সম্পন্ন করতে হবে।
২. অ্যাফিলিয়েট কমিশন ৪০% থেকে ৪৫% পর্যন্ত হতে পারে, যা সাপ্তাহিক অ্যাক্টিভ প্লেয়ার এবং তাদের নেট ক্ষতির উপর নির্ভর করে।
৩. কমিশন উত্তোলনের জন্য ন্যূনতম ৫ জন অ্যাক্টিভ প্লেয়ার থাকতে হবে। যদি গত সপ্তাহে ১ থেকে ৪ জন অ্যাক্টিভ প্লেয়ার দিয়ে কমিশন অর্জন করে থাকেন, তবে এই সপ্তাহে উত্তোলনের জন্য ৫ জন অ্যাক্টিভ প্লেয়ার থাকা আবশ্যক।
৪. কমিশন প্রতি সপ্তাহে হিসাব করা হয়।
৫. খেলোয়াড়ের লাভ-ক্ষতির উপর ১৮% অপারেশন ও অ্যাডমিন খরচ হিসেবে কেটে রাখা হবে।
৬. পিয়ার-টু-পিয়ার গেম (লুডু এবং BPoker)-এর লাভ-ক্ষতি কমিশন গণনায় অন্তর্ভুক্ত নয়।
৭. উপরের টেবিল অনুযায়ী অ্যাক্টিভ প্লেয়ার সংখ্যার পাশাপাশি, প্রত্যেক রেফার করা প্লেয়ারকে অবশ্যই জেনুইন অ্যাক্টিভ প্লেয়ার হতে হবে। MCW খেলোয়াড়ের মান যাচাই করে এবং মান পূরণ না হলে কমিশন প্রদান করা হবে না।
৮. যদি আপনি প্রচার চালানো বন্ধ করেন (নতুন সাইনআপ না হলে বা MCW ব্যানার সরিয়ে ফেললে), এটি চুক্তিভঙ্গ হিসেবে গণ্য হবে এবং আপনার চুক্তি বাতিল হতে পারে, ফলে ভবিষ্যতের রাজস্ব শেয়ার বাতিল হবে।
৯. যদি আপনার খেলোয়াড়রা কোনো জালিয়াতি বা প্রতারণার সাথে জড়িত থাকে, তাহলে MCW withheld ফান্ড কেটে রাখতে বা রেফার্ড প্লেয়ার থেকে অপসারণ করতে পারে।
১০. প্রতিটি বুধবার বিকেল ৫টার মধ্যে কমিশন সেটেলমেন্ট করা হয়।
১০.১ যদি অ্যাকাউন্ট নেগেটিভ হয় (অর্থাৎ গ্রাহক লাভ করেছে), তাহলে সেই ক্ষতি পরবর্তী সপ্তাহে যোগ হবে। রাজস্ব শেয়ার অনুযায়ী সমন্বয় হবে।
১০.২ সমস্ত কমিশন ট্যাক্স, ডিউটি ইত্যাদি ব্যতিরেকে। আপনি নিজ নিজ দেশের ট্যাক্সের জন্য দায়ী থাকবেন। MCW যেখানে প্রযোজ্য সেখানে ট্যাক্স কেটে রাখতে পারে।
      `,
      bottom1:
        "আপনি কি ইতিমধ্যে অ্যাফিলিয়েট এবং সাপ্তাহিক কমিশন উপার্জন করতে চান? আমাদের সাথে যোগাযোগ করুন ",
      bottom2:
        "MCWSignature এর মাধ্যমে আপনি কীভাবে মাসে সর্বোচ্চ ৪৮% কমিশন উপার্জন করতে পারেন, তা জানুন",
      learnMore: "আরও জানুন",
      telegram: "টেলিগ্রামে!",
    },
  };

  const t = content[language];

  return (
    <div className="bg-AffiliatePrimaryBg">
      <div className="max-w-5xl mx-auto py-6 px-4">
        <div>
          <motion.div
            animate={{
              backgroundColor: isOpen ? "#111421" : "#C9A33D",
              color: "#ffffff",
            }}
            className="p-4 rounded-md cursor-pointer flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-semibold uppercase text-lg">{t.title}</h2>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-primary-primaryColor text-white px-4 py-3 rounded-b-md"
              >
                <p className="text-lg leading-relaxed whitespace-pre-line">
                  {t.rules}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col py-6 justify-center items-center gap-2 font-bold text-white text-lg">
          <p className="text-center">
            {t.bottom1}
            <span className=" text-textSecondaryColor">
              {t.telegram}
            </span>
          </p>
          <p className="text-center">{t.bottom2}</p>
          <p className="text-textSecondaryColor font-bold">{t.learnMore}</p>
        </div>
      </div>
    </div>
  );
};

export default CommissionRules;
