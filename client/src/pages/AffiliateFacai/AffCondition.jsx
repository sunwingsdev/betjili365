import { LanguageContext } from "@/Context/LanguageContext";
import React, { useContext, useEffect } from "react";

const conditionsEN = [
  "These Terms and Conditions are intended to form a legally binding and enforceable Agreement between you as an applicant to the MCW Affiliate Program. Kindly read these Terms and Conditions carefully.",

  "This Affiliate Agreement (herein referred to as “Agreement“) contains the complete terms and conditions of the MCW Affiliate Program. “You” or the “affiliate” refers to you, the individual, group or corporate entity registering with us as an affiliate under this Agreement, and shall be deemed to include any employees, officers, directors, shareholders, owners, controlling parties and affiliated individuals and entities (and “your” has a corresponding meaning).",

  "It is important that you read and understand this Agreement. By completing an application to join the MCW Affiliate Program and subsequently participating therein, you are agreeing to the terms and conditions of this Agreement. If you are not amenable to the following terms and conditions as set forth in this Agreement, you should discontinue your application or participation in the MCW Affiliate Program.",

  "This Agreement replaces all previous terms and conditions relating to the Affiliate Program or any previous affiliate program offered by MCW. You agree that this Agreement supersedes all previous agreements or terms and conditions you have had with MCW or any Group Company.",

  "I. DEFINITIONS AND INTERPRETATION",
  "A. “Affiliate Payment” means your revenue share under this Agreement for referring Customers to the Sites;",

  "1. “Affiliate Site” means your website or websites located at the URLs provided to MCW in your Application or subsequently changed from time to time as notified to MCW;",

  "2. “Application” means your application to join the Affiliate Program;",

  "3. “Commencement Date” means the date on which MCW confirms that your application to join the Affiliate Program has been accepted;",

  "4. “Company” means MCW and/or the owner and operator of the Site/s, as the case may be;",

  "5. “Confidential Information” means all information in any form relating to a party (and any Group Company in the case of MCW) (the “Disclosing Party”) that is directly or indirectly disclosed to the other party (the “Receiving Party”), including any personal data and/or customer data, by any of the Disclosing Party’s employees, professional advisers or contractors before or after the Commencement Date;",

  "6. “Customers” means all persons who open an account with MCW, the Company or a Group Company for the first time who arrive at the Site/s by clicking on the Links on your Affiliate Site;",

  "7. “Good Industry Practice” means the exercise of that degree of skill, diligence, prudence and foresight which would reasonably and ordinarily be expected from a skilled and experienced contractor acting in good faith;",

  "8. “Group Company” means the Company and any body corporate which is from time to time a holding company of that company, a subsidiary of that company or a subsidiary of a holding company of that company and shall include any company in which a Group Company has a shareholding of 50% or more;",

  "9. “Immediate Family” means your spouse, partner, parent, child or sibling;",

  "10. “IPR” means any and all patents, trade marks, service marks, rights in designs, get-up, trade, business or domain names, goodwill associated with the foregoing, e-mail address names, copyright including rights in computer software (in both source and object code) and rights in databases (in each case whether registered or not and any applications to register and rights to apply for registration of any of the foregoing), rights in inventions and web-formatting scripts (including HTML and XML scripts), know-how, trade secrets and other intellectual property rights which may now or in the future subsist in any part of the world including all rights of reversion and the right to sue for and recover damages for past infringements;",

  "11. “Links” means hypertext links (either a banner or text link) that links to the Site/s under this Agreement;",

  "12. “Parties” means the parties to this Agreement;",

  "13. “Program” means the MCW Affiliate Program;",

  "14. “Sites” means www.casinomcw.com as well as its alternative domains and URLS.",

  "B. In this Agreement, except where the context indicates otherwise:",

  "1. clause headings are included for convenience only and shall not affect the interpretation of this Agreement;",

  "2. any phrase introduced by the terms including, include, in particular or any similar expression shall be construed as illustrative and shall not limit the sense of the words preceding those terms;",

  "3. the singular includes the plural and vice versa; and",

  "4. reference to a statute or statutory provision is a reference to that statute or statutory provision and to all orders, regulations, instruments, or other subordinate legislation made under the relevant statute.",

  "II. LIMITED LICENSE",
  "A. We hereby grant to you a personal, non-exclusive, non-transferable limited license, during the term of this Agreement, to use our trademarks (licensed, in turn by us, from their owner) solely in connection with the display of the Links on your Affiliate Site.",

  "B. By this Agreement, we grant you the non-exclusive right to direct Customers to our Sites, in accordance with the terms and conditions of this Agreement. This Agreement does not grant you an exclusive right or privilege or referrals, and we reserve the right to contract with and obtain the assistance from other parties at any time to perform services of the same or similar nature as yours. You shall have no claims to referral fees or other compensation on business secured by or through persons or entities other than you.",

  "C. This license cannot be sub-licensed, assigned or otherwise transferred by you. Your right to use the trademarks is limited to and arises only out of this license to use the banners. You shall not assert the invalidity, unenforceability, or contest the ownership of the trademarks in any action or proceeding of whatever kind or nature, and shall not take any action that may prejudice our or our licensor’s rights in the trademarks, render the same generic, or otherwise weaken their validity or diminish their associated goodwill.",

  "D. You are restricted from purchasing a domain name which uses all or part of any of our trademarks or intellectual property. You are also restricted from using all or part of any of our trademarks or intellectual property for purposes of search engine optimization including website look and feel.",

  "E. We reserve the right to revoke this license at any time and it shall have been deemed revoked at the termination of this Agreement, for whatsoever reason.",

  "F. Further, for avoidance of doubt, you are not allowed to do any of the following:",

  "1. Display the Links other than on the Affiliate Site;",

  "2. Display data from the Links via any electronically accessible medium other than the Affiliate Site without the express written consent of MCW;",

  "3. Do anything that would cause to believe that a Customer has clicked through the Links to register for an account when that is not the case, sometimes known as ‘cookie stuffing’ or any other fraudulent practices.",

  "4. Use the Links in a way which proves or is likely to prove detrimental to MCW; and/or",

  "5. Use the Links or Code in any “pop-up” or “pop-under” advertising without the prior written consent of MCW.",

  "III. YOUR OBLIGATIONS",
  "A. You warrant and undertake that:",

  "1. You have full capacity and authority to enter into this Agreement and any other documents executed by you that may be associated with this Agreement;",

  "2. You will conduct yourself at all times with due skill, care and diligence, including Good Industry Practice;",

  "3. You will comply with MCW’s policies and guidelines as may be advised to you or made know to you from time to time;",

  "4. All information that you provided to MCW in your application is accurate and correct and that you will inform immediately of any changes to your information;",

  "5. The Links will not be placed on any part of your Affiliate Site if it is aimed at any individual under 18 years of age or to residents of Excluded Territories as set forth in the terms and conditions of the Sites;",

  "6. You cannot, directly or indirectly, offer any person any incentive (such as but not limited to payment of money) to use the Links;",

  "7. You have obtained all the necessary authorizations, permits or licenses to enable you to fulfill your obligations under this Agreement and that your performance hereunder is not in violation of applicable law;",

  "8. You will not challenge any of the IPR of MCW or any Group Company or file any application involving any mark or domain name that is similar to that of MCW or any Group Company. This includes registration of any domain names or keywords, search terms that incorporate terms which are identical or similar to MCW or any marks owned by MCW;",

  "9. The Affiliate Site will not contain any content which is defamatory, violent, pornographic, unlawful, threatening, obscene or racially, ethnically, or otherwise discriminatory or in breach of any third party rights and shall not link to any such material;",

  "10. You will ensure that the Customers you refer under this Agreement will abide by the Site/s terms and conditions and that you will not encourage or assist any Customers to breach any terms and conditions agreed to when opening an account with MCW or a Group Company;",

  "B. You agree that:",

  "1. Neither you nor your Immediate Family may become Customers and you shall not be entitled to any payment under this Agreement in relation to your Immediate Family;",

  "2. We may monitor your Affiliate Site to ensure your compliance with the terms and conditions of this Agreement and you shall agree to cooperate to enable MCW to monitor your activity;",

  "3. Applicable e-Commerce laws or regulations will not apply to this Agreement;",

  "4. You will present only content on your Affiliate Site (in relation to your acting as an affiliate under this Agreement) which are pre-approved in writing by MCW. Any content that is deemed unsuitable by MCW at its absolute discretion, will result in the immediate termination of this Agreement.",

  "5. You will be solely responsible for the development, operation, and maintenance of your Affiliate Site and for all materials that appear therein and at your own cost. Since we do not have control over your Affiliate Site, we disclaim all liability for these matters. Further, you will indemnify and hold us free and harmless from any and all claims, damages, and expenses (including, without limitation, attorney’s fees) relating to the development, operation, maintenance, and contents of your Affiliate Site. This provision on indemnification is without prejudice to our right to a separate action or claim against you under applicable laws.",

  "C. AFFILIATION GUIDELINES:",

  "1. Only approved and properly tagged creative materials, supplied by us from time to time, may be used to promote the Sites. Advertorials and personal endorsements are allowed but all materials not designed by MCW will need prior approval in writing.",

  "2. You may not modify or use, for any other purpose, any IP rights, banners or other creative material supplied by us without our prior written consent. All copyright or IP rights notices on any material supplied or approved by MCW, must remain on said material and shall not be modified or eliminated.",

  "3. By agreeing to participate in the Program, you are agreeing to download banners, text or promotional material and place it on the Affiliate Site, utilize it within e-mail, direct marketing using your affiliate URL or print. These methods are the only approved methods by which you may advertise under the Program and this Agreement.",

  "4. Banners and links may not be placed within unsolicited e-mail, unauthorized newsgroup postings, or chat rooms or through the use of “bots”. Traffic generated illegally will not be counted and may result in the termination of this Agreement and your affiliate account with us.",

  "5. We will terminate this Agreement immediately if there is any form of spamming on your behalf or if you discredit MCW or the Company through false advertising, written or uttered words.",

  "6. You shall not make any claims, representations, or warranties in connection with MCW and you shall have no authority to and shall not bind MCW, the Company or any Group Company to any obligations.",

  "7. Without our prior written approval, you will only use our approved banners and links and will not alter their appearance nor refer to us in any promotional materials. The appearance and syntax of the hypertext transfer links are designed and designated by us and constitute the only authorized and permitted representation of MCW.",

  "8. You will not knowingly benefit from known or suspected traffic not generated in good faith, whether or not it actually causes damage to MCW. Should fraudulent activity arise through a person directed to a site via the Link, we retain the right to retract the commissions paid to you at any time. Our decision in this regard will be final and no correspondence will be entered into. We reserve the right to retain all amounts due to you under this Agreement on account of Fraud Traffic, at our discretion.",

  "9. You are prohibited from playing at any of the Sites promoted by MCW through your own affiliate link or from the affiliate link of an associate who shares all or part of the commission with you or a third party. This shall include any individuals or playing groups from which you receive compensation or remuneration of any kind. In the event of violation of this provision, MCW and/or the operator of the Site that has played with, shall have the right to void all play and eliminate any earned commissions applicable from such play and terminate your registration as an affiliate and this Agreement, as well as void any future play at the Sites.",

  "10. You are not allowed to concurrently maintain both affiliate and referral relationships with MCW. Violation of this provision grants MCW the right to unilaterally terminate either or both affiliate and/or referral relationships. A referral relationship refers to a relationship with MCW pursuant to MCW’s",
  "Refer-A-Friend Program (as setout and available in the Website).",

  "IV. REVENUE SHARE",
  "A. The terms of your Affiliate Payment can be found here:",

  "1. MCW Affiliates Revenue Share",

  "B. All payments made to you by MCW under this Agreement are:",

  "1. deemed inclusive of any VAT or other tax payable. You are deemed to shoulder the amount of any tax that is due and payable to any amount you receive under this Agreement;",

  "2. will not be paid to any MCW account;",

  "C. You will not be entitled to receive any Affiliate Payments in in the event that a Customer:",

  "1. has been introduced in breach of any term of this Agreement;",

  "2. makes an initial deposit which is subject to a chargeback or which is reversed for any other reason;",

  "3. fails any identity or credit checks carried out by MCW or on its behalf;",

  "4. is located in a territory from which MCW and its Group Companies does not accept customers;5. is suspected by MCW of violating its terms and conditions or is participating in any fraudulent activity;",

  "5. has their account closed within 45 days of the account opening; or",

  "6. becomes known to MCW to be someone who does not properly fall within the term “Customer” to which you are entitled to revenue share as herein provided.",

  "D. For avoidance of doubt, you shall not refer nor be entitled to a revenue share for any Customer that you refer from any Excluded Territory as this term is defined in the relevant Sites’ terms and conditions.",

  "V. CONFIDENTIALITY AND ANNOUNCEMENTS",
  "A.During the term of this Agreement and for an indefinite period after termination hereof, each party shall not use any Confidential Information belonging to the other party for any purpose other than in compliance with this Agreement. Neither party shall disclose any of the other party’s Confidential Information to any person except with the prior written consent of the other party. Both parties shall follow Good Industry Practice to prevent the use or disclosure of the Confidential Information. The obligations under this clause shall not apply however to any Confidential Information that:",

  "1. has come into the public domain other than by breach of this Agreement, or any other duty of confidence;",

  "2. is obtained from a third party without breach of this Agreement;",

  "3. is required to be disclosed by law or other regulatory requirement provided notice is given to the other party prior to disclosure where legal to do so; or",

  "4. is in the possession of the Party at the time the Confidential Information was disclosed to it by any other party or which is independently developed without reference to any Confidential Information of the other party.",

  "B. Each party may disclose any Confidential Information to its directors, employees, professional advisers and sub-contractors and to those of any company in its Group to the extent that such disclosure is reasonably necessary in order to comply with its obligations under this Agreement. If such disclosure is to be made, the party making the disclosure shall ensure that the recipients of confidential information are subject to the same obligations of confidentiality as required hereunder.",

  "C. On termination of this Agreement, each party shall either return or destroy all copies of Confidential Information in its possession, and (if so requested) shall use all reasonable endeavours to destroy all copies of Confidential Information stored electronically except to the extent that it is obliged to retain such information under any law, regulation or licence condition applicable to that party or any company in its Group.",

  "VI. DATA PROTECTION AND SECURITY",
  "A. You acknowledge that the security of MCW’s data and its systems is of paramount importance. If you become aware of a breach or potential breach of security in any manner in relation to the Program, you shall immediately notify us and use your best efforts to ensure that a potential breach does not develop any further or to remedy an actual breach and any of its effects or consequences.",

  "B. You warrant that your Affiliate Site is compliant and will comply with applicable data privacy and protection laws.",

  "VII. INTELLECTUAL PROPERTY RIGHTS",
  "A. Any and all intellectual property rights pertaining to the Links and the Sites shall belong to their respective owner. You hereby agree that you will not challenge the ownership of these intellectual property rights nor register anything which is similar or resembles them.",

  "B. You hereby agree to indemnify MCW against any claim or demand brought against it for any infringement or alleged infringement of intellectual property rights in the operation of your Affiliate Site.",

  "VIII. INDEMNIFICATION & LIMITATION OF LIABILITY",
  "A. You hereby agree that you will indemnify and hold free and harmless MCW, its affiliates, group companies and individual officers from and against any and all losses, demands, claims, damages, costs, expenses (including consequential losses and loss of profit, reasonable legal costs and expenses) and liabilities suffered or incurred, directly or indirectly in consequence of any breach by you of your obligations under this Agreement.",

  "B. To the fullest extent permitted by applicable law, the following provisions set out the entire liability of MCW (or any related party or officers) to you whether in contract, tort, statute, equity or otherwise:",

  "1. You acknowledge and agree that the Program and the Sites are provided “AS IS” without warranties of any kind (whether express or implied);",

  "2. All conditions, warranties, terms and undertakings (whether express or implied), statutory or otherwise relating to the delivery, performance, quality, accuracy, uninterrupted use, fitness for purpose, occurrence or reliability of the Links, the Affiliate Program and the Sites are hereby excluded; and",

  "3. MCW (its affiliates, group companies or officers) will not be liable to you for any losses relating to your participation in the Program, your use of the Links or any breach of this Agreement by MCW including loss of profits (whether direct or indirect), revenues, goodwill, anticipated savings, data or any type of special, indirect, consequential or economic loss (including loss or damage suffered by you as a result of an action brought by a third party) even if such loss was reasonably foreseeable or even if MCW had been advised of the possibility of you incurring such loss.",

  "C. We make no express or implied warranties or representations with respect to the affiliate program or revenue sharing arrangements (including without limitation, their functionality, and warranties of fitness, merchantability, legality, non-infringement, or any implied warranties arising out of a course of performance, dealing, or trade usage). In addition, we make no representation that the operation of our sites will be uninterrupted or error-free and will not be liable for the consequences of any interruptions or errors. The company further expressly disclaims all warranties and conditions of any kind; whether express or implied, including but not limited to the implied warranties and conditions of merchantability, fitness for a particular purpose and non-infringement.",

  "D. You expressly understand and agree that MCW, its subsidiaries and affiliates, and its licensors and service providers shall not be liable to you for: (1) any direct, indirect, incidental, special consequential or exemplary damages which may be incurred by you, however caused and under any theory of liability. This shall include, but not be limited to, any loss of profit (whether incurred directly or indirectly), any loss of goodwill or business reputation, any loss of data suffered, cost of procurement of substitute goods or services, or other intangible loss; (2) any loss or damage which may be incurred by you, including but not limited to loss or damage as a result of: (a) any changes which company may make to the affiliate program, or for any permanent or temporary cessation in the provision of the affiliate program (or any features within the affiliate program); (b) the deletion of, corruption of, or failure to store, any content and other communications data maintained or transmitted by or through your use of the affiliate program; (c) your failure to provide company with accurate account information; (d) your failure to keep your password or account details secure and confidential. The limitations on company’s liability above shall apply whether or not company has been advised of or should have been aware of the possibility of any such losses arising.",

  "E. The prescriptive period within which you must commence proceedings on any claim under this Program shall be 6 months from the date you became aware or should reasonably have become aware of the relevant breach that would form the subject of the claim.",

  "IX. TERM AND TERMINATION",
  "A. This Agreement shall commence on the Commencement Date and shall continue until either party serves written notice on the other of its intention to terminate this Agreement no less than thirty (30) days prior to the intended termination.",

  "B. MCW may terminate this Agreement immediately in the event that:",

  "1.You breach any of the terms of this Agreement;",

  "2. You cease or threaten to cease carrying on your business, including being subject of bankruptcy or liquidation proceedings.",

  "3. MCW ceases to accept customers from a territory or jurisdiction which your Affiliate Site markets to.",

  "4. MCW determines that your Affiliate Site is generating fraudulent traffic or any other similar methods aimed to create fraudulent payment of revenue share under this Agreement.",

  "C. Termination of this Agreement shall be without prejudice to any rights or obligations which may have accrued prior to termination.",

  "D. Upon termination of this Agreement, any licenses granted to you herein will immediately terminate.",

  "E. If this Agreement is terminated under clause X(B), you will not be entitled to receive any further payments or revenue share under this Agreement.",

  "F. Clauses VI, IX and all other clauses which by implication will need to remain effective after termination of this Agreement, shall remain effective for an indefinite period after termination of this Agreement for whatever reason.",

  "X. FORCE MAJEURE",
  "A. Neither party shall be in breach of this Agreement nor liable for delay in performing, or failure to perform, any of its obligations under this Agreement if such delay or failure results from events, circumstances or causes beyond its reasonable control. In which case, the affected party shall be entitled to a reasonable extension of the time to perform its obligations under this Agreement, provided that if the period of delay or non-performance continues for more than ten (10) days, the unaffected party may opt to terminate this Agreement upon written notice to the other party.",

  "XI. NO AGENCY OR PARTNERSHIP",
  "Nothing in this Agreement or its implementation shall constitute, or be deemed to constitute a partnership, association, joint venture or other co-operative entity between the parties. You shall not hold yourself out as our agent nor authorize any party to make or enter into any commitments for or on our behalf.",

  "XII. ASSIGNMENT AND SUB-CONTRACTING",
  "A.You shall not assign, novate, declare a trust of or otherwise dispose of this Agreement, or any part thereof.",

  "B.MCW may however, assign or sub-contract any of its rights and obligations under this Agreement to a Group Company at any time without giving notice to you.",

  "XIII. MISCELLANEOUS",
  "A. This Agreement contains the entire agreement between the Parties with respect to the subject matter hereof, supersedes all previous agreements and understandings between the Parties with respect thereto, and may not be modified except by an instrument in writing signed by the duly authorized representatives of the Parties.",

  "B. If any provision of this Agreement is held by any court or other competent authority to be void or unenforceable in whole or part, this Agreement shall continue to be valid as to the other provisions thereof and the remainder of the affected provision.",

  "C. Our failure or delay to enforce at any time any one or more of the terms or conditions of this Agreement shall not be a waiver of such rights or any other rights.",

  "D. Each Party acknowledges that, in entering into this Agreement, it does not do so on the basis of, and does not rely on, any representation, warranty or other provision except as expressly provided herein.",

  "E. This Agreement (and any dispute, controversy or proceeding) shall be performed, interpreted and construed in accordance with English law and the parties hereby irrevocably submit to the jurisdiction of English courts.",

  "F. You hereby agree and acknowledge that you have had an opportunity to consider each and every provision contained in this Agreement and have had the opportunity to seek independent legal advice with respect to each and every provision thereof and hereby agree that all provisions of this Agreement are reasonable and valid.",
];

const conditionsBN = [
  "এই নিয়ম ও শর্তাবলী MCW অ্যাফিলিয়েট প্রোগ্রামের আবেদনকারী হিসাবে আপনার মধ্যে আইনগতভাবে বাধ্যতামূলক এবং প্রয়োগযোগ্য চুক্তি গঠনের উদ্দেশ্যে করা হয়েছে। দয়া করে এই নিয়ম এবং শর্তগুলি ভালোমতো করে পড়ুন।",

  "অ্যাফিলিয়েট চুক্তি (এখানে “চুক্তি” হিসাবে উল্লেখ করা হয়েছে) MCW অ্যাফিলিয়েট প্রোগ্রামের সম্পূর্ণ শর্তাবলী রয়েছে। “আপনি” বা “এফিলিয়েট” আপনাকে বোঝায়, ব্যক্তি, গোষ্ঠী বা কর্পোরেট সত্তা এই চুক্তির অধীনে আমাদের সাথে একটি অনুমোদিত হিসাবে নিবন্ধিত, এবং কোন কর্মচারী, কর্মকর্তা, পরিচালক, শেয়ারহোল্ডার, মালিক, নিয়ন্ত্রণকারী দল এবং সংশ্লিষ্টদের অন্তর্ভুক্ত বলে গণ্য হবে ব্যক্তি এবং সত্তা (এবং “আপনার” একটি কররেস্পন্ডিং অর্থ আছে)।",

  "এটা গুরুত্বপূর্ণ যে আপনি এই চুক্তিটি পড়েন এবং বুঝেন। MCW অ্যাফিলিয়েট প্রোগ্রামে যোগদানের জন্য একটি আবেদনপত্র পূরণ করে এবং পরবর্তীতে এতে অংশগ্রহণ করে, আপনি এই চুক্তির শর্তাবলীতে সম্মত হচ্ছেন। আপনি যদি এই চুক্তিতে বর্ণিত নিচের নিয়ম ও শর্তাবলী মেনে চলতে না পারেন, তাহলে আপনার আবেদন বা MCW অ্যাফিলিয়েট প্রোগ্রামে অংশগ্রহণ বন্ধ করা হবে।",

  "এই চুক্তি অ্যাফিলিয়েট প্রোগ্রাম বা MCW দ্বারা প্রদত্ত পূর্ববর্তী কোনো অ্যাফিলিয়েট প্রোগ্রাম সম্পর্কিত সমস্ত পূর্ববর্তী শর্তাবলী প্রতিস্থাপন করে। আপনি সম্মত হন যে,এই চুক্তিটি MCW বা কোন গ্রুপ কোম্পানির সাথে আপনার পূর্ববর্তী সমস্ত চুক্তি বা নিয়ম ও শর্তাবলী ছাড়িয়ে গেছে।",

  "I. সংজ্ঞা এবং ইন্টারপ্রেটেশন",
  "A.“অ্যাফিলিয়েট পেমেন্ট” মানে গ্রাহকদের সাইটগুলিতে রেফার করার জন্য এই চুক্তির অধীনে আপনার রেভিনিউ শেয়ার",

  "1.“অ্যাফিলিয়েট সাইট” মানে আপনার ওয়েবসাইট বা ওয়েবসাইটগুলি আপনার আবেদনে MCW- কে প্রদত্ত URL গুলিতে অবস্থিত অথবা পরবর্তীতে MCW- কে বিজ্ঞাপিত হিসাবে সময়ে সময়ে পরিবর্তন করা হয়েছে;",

  "2.“আবেদন” মানে অ্যাফিলিয়েট প্রোগ্রামে যোগদানের জন্য আপনার আবেদন;",

  "3.“কমেন্সমেন্ট ডেট” মানে যে দিন MCW নিশ্চিত করে যে আপনার এফিলিয়েট প্রোগ্রাম যোগদানের আবেদন গ্রহণ করা হয়েছে;",

  "4.“কোম্পানি” মানে MCW এবং/অথবা সাইট/গুলির মালিক এবং অপারেটর, যেমনই হোক না কেন;",

  "5.“গোপনীয় তথ্য” অর্থ একটি পার্টি (এবং MCW- এর ক্ষেত্রে যেকোনো গ্রুপ কোম্পানি) (“প্রকাশকারী দল”) সম্পর্কিত যে কোনও ফর্মের সমস্ত তথ্য যা সরাসরি বা পরোক্ষভাবে অন্য পক্ষের কাছে প্রকাশ করা হয় (“গ্রহণকারী দল” ), ডিসক্লিজিং পার্টির কর্মচারী, পেশাদার উপদেষ্টা বা ঠিকাদারদের যে কোনও ব্যক্তিগত ডেটা এবং/অথবা গ্রাহকের ডেটা সহ, শুরু হওয়ার তারিখের আগে বা পরে;",

  "6.“কাস্টোমারস ” মানে MCW, কোম্পানি বা একটি গ্রুপ কোম্পানিতে প্রথমবারের মতো যারা অ্যাকাউন্ট খুলেন তারা আপনার অ্যাফিলিয়েট সাইটের লিঙ্কগুলিতে ক্লিক করে সাইট/গুলিতে আসেন;",

  "7.“গুড ইন্ড্রাস্ট্রি প্রাকটিস ” মানে দক্ষতা, পরিশ্রম, বিচক্ষণতা এবং দূরদর্শিতার সেই মাত্রার অনুশীলন যা যুক্তিসঙ্গত এবং সাধারণভাবে একজন দক্ষ এবং অভিজ্ঞ ঠিকাদারের কাছ থেকে ভাল বিশ্বাসে কাজ করার আশা করা হবে;",

  "8.“গ্রুপ কোম্পানি” অর্থ কোম্পানী এবং যে কোন সংস্থা কর্পোরেট যা সময়ে সময়ে সেই কোম্পানির একটি হোল্ডিং কোম্পানি, সেই কোম্পানির একটি সাবসিডিয়ারি বা সেই কোম্পানির একটি হোল্ডিং কোম্পানির একটি সাবসিডিয়ারি এবং কোন কোম্পানিকে অন্তর্ভুক্ত করবে যার মধ্যে একটি গ্রুপ কোম্পানির শেয়ারহোল্ডিং 50% বা তার বেশি;",

  "9.“ইমমেডিয়াত ফেমিলি” মানে আপনার স্ত্রী, সঙ্গী, পিতামাতা, সন্তান বা ভাইবোন;",

  "10.“আইপিআর” মানে যেকোনো এবং সব পেটেন্ট, ট্রেড মার্কস, সার্ভিস মার্কস, ডিজাইনের অধিকার, গেট-আপ, ট্রেড, বিজনেস বা ডোমেইন নেম, পূর্বোক্ত, ই-মেইল অ্যাড্রেস নাম, কম্পিউটার সফটওয়্যারের অধিকার সহ কপিরাইট (সোর্স এবং অবজেক্ট কোড উভয় ক্ষেত্রে) এবং ডেটাবেসে অধিকার (প্রতিটি ক্ষেত্রে নিবন্ধিত হোক বা না হোক এবং নিবন্ধন করার জন্য কোন আবেদন এবং পূর্ববর্তী যে কোন নিবন্ধনের জন্য আবেদন করার অধিকার), উদ্ভাবনের অধিকার এবং ওয়েব-বিন্যাস স্ক্রিপ্ট (HTML সহ এবং XML স্ক্রিপ্ট), জেনে নিন, বাণিজ্যিক গোপনীয়তা এবং অন্যান্য বৌদ্ধিক সম্পত্তির অধিকার যা এখন বা ভবিষ্যতে বিশ্বের যেকোনো প্রান্তে টিকে থাকতে পারে, যার মধ্যে রয়েছে প্রত্যাবর্তনের সমস্ত অধিকার এবং অতীতের লঙ্ঘনের জন্য ক্ষতিপূরণ দাবি করার এবং ক্ষতিপূরণ পাওয়ার অধিকার;",

  "11.“লিঙ্ক” মানে হাইপারটেক্সট লিঙ্ক (হয় ব্যানার বা টেক্সট লিংক) যা এই চুক্তির অধীনে সাইটের সাথে লিঙ্ক করে;",

  "12.“পার্টিস” অর্থ এই চুক্তির পক্ষসমূহ;",

  "13.“প্রোগ্রাম” মানে MCW অ্যাফিলিয়েট প্রোগ্রাম;",

  "    14.“সাইট” মানে www.casinomcw.com এবং এর বিকল্প ডোমেইন এবং URLS।",
  "B.এই চুক্তিতে, যেখানে প্রেক্ষাপট অন্যথায় নির্দেশ করে:",

  "ধারা শিরোনাম শুধুমাত্র সুবিধার জন্য অন্তর্ভুক্ত করা হয় এবং এই চুক্তির ব্যাখ্যা প্রভাবিত করবে না;",

  "2.বিশেষ করে বা অনুরূপ অভিব্যক্তি সহ শর্তাবলী দ্বারা প্রবর্তিত যে কোন বাক্যাংশকে দৃষ্টান্তমূলক হিসেবে গণ্য করা হবে এবং সেই পদগুলির পূর্ববর্তী শব্দের অনুভূতি সীমাবদ্ধ করবে না;",

  "3.একটি সংবিধিবদ্ধ বা সংবিধিবদ্ধ বিধানের রেফারেন্স হল সেই সংবিধান বা সংবিধিবদ্ধ বিধান এবং প্রাসঙ্গিক সংবিধির অধীনে প্রণীত সমস্ত আদেশ, প্রবিধান, যন্ত্র বা অন্যান্য অধস্তন আইন।",

  " II. সীমিত লাইসেন্স",
  " A.আমরা আপনাকে এই চুক্তির মেয়াদকালে ব্যক্তিগত, অ-এক্সক্লুসিভ, অ-হস্তান্তরযোগ্য সীমিত লাইসেন্স প্রদান করি, আমাদের ট্রেডমার্কগুলি ব্যবহার করার জন্য আপনার অ্যাফিলিয়েট সাইটের লিংক।",

  "B.এই চুক্তির মাধ্যমে, আমরা আপনাকে এই চুক্তির নিয়ম ও শর্তাবলী অনুসারে গ্রাহকদের আমাদের সাইটে সরাসরি পাঠানোর অ-একচেটিয়া অধিকার প্রদান করি। এই চুক্তি আপনাকে ডিরেক্ট অধিকার বা বিশেষাধিকার বা রেফারেল দেয় না, এবং আমরা আপনার সাথে একই বা অনুরূপ প্রকৃতির পরিষেবাগুলি সম্পাদনের জন্য যেকোনো সময় অন্য পক্ষের সাথে চুক্তি এবং সহায়তা পাওয়ার অধিকার সংরক্ষণ করি। আপনার ব্যতীত ব্যক্তি বা সংস্থার দ্বারা বা তার মাধ্যমে সুরক্ষিত ব্যবসায় রেফারেল ফি বা অন্যান্য ক্ষতিপূরণের জন্য আপনার কোন দাবি থাকবে না।",

  "C.এই লাইসেন্সটি আপনার দ্বারা সাব-লাইসেন্স করা, বরাদ্দ করা বা অন্যথায় স্থানান্তর করা যাবে না। ট্রেডমার্ক ব্যবহার করার আপনার অধিকার সীমাবদ্ধ এবং ব্যানারগুলি ব্যবহার করার জন্য এই লাইসেন্স থেকে কেবল উদ্ভূত হয়। আপনি অকার্যকরতা, অযোগ্যতা দাবী করবেন না, অথবা ট্রেডমার্কের মালিকানা নিয়ে যে কোন ধরনের বা প্রকৃতির যে কোন ধরনের বা প্রক্রিয়ায় প্রতিযোগিতা করবেন না, এবং ট্রেডমার্কে আমাদের বা আমাদের লাইসেন্সদাতার অধিকারকে কুক্ষিগত করে এমন কোন পদক্ষেপ নেবেন না, একই জেনেরিক, অথবা অন্যথায় তাদের বৈধতা দুর্বল করে বা তাদের সংশ্লিষ্ট শুভেচ্ছা হ্রাস করে।",

  "D.আপনি এমন একটি ডোমেইন নাম কেনা থেকে সীমাবদ্ধ যা আমাদের ট্রেডমার্ক বা বুদ্ধিবৃত্তিক সম্পত্তির সমস্ত বা কিছু অংশ ব্যবহার করে। আপনি সার্চ ইঞ্জিন অপ্টিমাইজেশনের উদ্দেশ্যে ওয়েবসাইটের চেহারা এবং অনুভূতি সহ আমাদের ট্রেডমার্ক বা বুদ্ধিবৃত্তিক সম্পত্তির সমস্ত বা কিছু অংশ ব্যবহার করতেও নিষেধ।",

  "E.আমরা যে কোন সময় এই লাইসেন্স বাতিল করার অধিকার সংরক্ষণ করি এবং যে কোন কারণেই এই চুক্তির সমাপ্তির সময় এটি বাতিল বলে গণ্য হবে।",

  "F.উপরন্তু, সন্দেহ এড়ানোর জন্য, আপনাকে নিচের কোনটি করার অনুমতি নেই:",

  "1.অ্যাফিলিয়েট সাইট ছাড়া অন্য লিঙ্কগুলি প্রদর্শন করুন;",

  "2.MCW- এর প্রকাশ্য লিখিত সম্মতি ছাড়া অ্যাফিলিয়েট সাইট ব্যতীত অন্য যেকোনো ইলেকট্রনিকভাবে অ্যাক্সেসযোগ্য মাধ্যমের মাধ্যমে লিংক থেকে তথ্য প্রদর্শন করুন;",

  " 3.এমন কিছু করুন যা বিশ্বাস করতে পারে যে গ্রাহক লিঙ্কগুলির মাধ্যমে অ্যাকাউন্টে নিবন্ধন করতে ক্লিক করেছেন যখন এটি এমন কিছু নয়, যা কখনও কখনও ‘কুকি স্টাফিং’ বা অন্য কোনও প্রতারণামূলক অনুশীলন নামে পরিচিত।",

  "4.লিঙ্কগুলিকে এমনভাবে ব্যবহার করুন যা MCW- এর জন্য ক্ষতিকর প্রমাণিত বা সম্ভাব্য; এবং/অথবা",

  "5.MCW- এর পূর্বে লিখিত সম্মতি ছাড়াই যে কোন “পপ-আপ” বা “পপ-আন্ডার” বিজ্ঞাপনে লিঙ্ক বা কোড ব্যবহার করুন।",

  "III. আপনার বাধ্যবাধকতা",
  "A.আপনি ওয়ারেন্ট করেন এবং তা গ্রহণ করেন:",

  "1.আপনার কাছে এই চুক্তি এবং আপনার দ্বারা সম্পাদিত অন্য কোন নথি যা এই চুক্তির সাথে যুক্ত হতে পারে তার মধ্যে প্রবেশ করার সম্পূর্ণ ক্ষমতা এবং কর্তৃত্ব রয়েছে;",

  "2.আপনি গুড ইন্ড্রাস্ট্রি প্রাকটিস সহ যথাযথ দক্ষতা, যত্ন এবং অধ্যবসায় সহ সর্বদা নিজেকে পরিচালনা করবেন;",

  "3.আপনি MCW- এর নীতিমালা এবং নির্দেশিকা মেনে চলবেন, যা আপনাকে পরামর্শ দেওয়া হতে পারে অথবা সময়ের সাথে সাথে আপনাকে জানানো হতে পারে;",

  "4.আপনি আপনার আবেদনে MCW- কে যে সমস্ত তথ্য দিয়েছেন তা সঠিক এবং আপনার তথ্যের যে কোন পরিবর্তন সম্পর্কে আপনি অবিলম্বে অবহিত করবেন;",

  "5.লিঙ্কগুলি আপনার অ্যাফিলিয়েট সাইটের কোন অংশে স্থাপন করা হবে না যদি এটি 18 বছরের কম বয়সী বা সাইটের শর্তাবলী অনুযায়ী নির্ধারিত অঞ্চলের অধিবাসীদের উদ্দেশ্যে করা হয়;",

  "6.আপনি প্রত্যক্ষ বা পরোক্ষভাবে কোনো ব্যক্তিকে লিঙ্কগুলি ব্যবহার করার জন্য কোনো প্রণোদনা (যেমন অর্থ প্রদানের ক্ষেত্রে সীমাবদ্ধ নয়) দিতে পারবেন না;",

  " 7.আপনি এই চুক্তির অধীনে আপনার দায়বদ্ধতাগুলি পূরণ করতে সক্ষম করার জন্য সমস্ত প্রয়োজনীয় অনুমোদন, অনুমতি বা লাইসেন্স পেয়েছেন এবং আপনার কর্মক্ষমতা প্রযোজ্য আইন লঙ্ঘন করে না;",

  "8.আপনি MCW বা কোন গ্রুপ কোম্পানির কোন IPR কে চ্যালেঞ্জ করবেন না অথবা MCW বা কোন গ্রুপ কোম্পানির অনুরূপ কোন চিহ্ন বা ডোমেইন নাম যুক্ত কোন আবেদন দাখিল করবেন না। এর মধ্যে যেকোনো ডোমেইন নাম বা কীওয়ার্ডের রেজিস্ট্রেশন, সার্চ টার্ম যা MCW- এর অনুরূপ বা অনুরূপ পদ বা MCW- এর মালিকানাধীন কোনো চিহ্ন অন্তর্ভুক্ত করে;",

  " 9.অ্যাফিলিয়েট সাইটে এমন কোন বিষয়বস্তু থাকবে না যা মানহানিকর, হিংসাত্মক, অশ্লীল, বেআইনি, হুমকি, অশ্লীল বা জাতিগতভাবে, জাতিগতভাবে, অথবা অন্যথায় বৈষম্যমূলক বা তৃতীয় পক্ষের অধিকার লঙ্ঘন করে এবং এমন কোনো উপাদানের সাথে লিঙ্ক করবে না;",

  "10.আপনি নিশ্চিত করবেন যে এই চুক্তির অধীনে আপনি যে গ্রাহকদের উল্লেখ করেন তারা সাইটের নিয়ম ও শর্তাবলী মেনে চলবে এবং MCW বা একটি গ্রুপের সাথে অ্যাকাউন্ট খোলার সময় সম্মত কোনো নিয়ম ও শর্ত ভঙ্গ করতে আপনি কোন গ্রাহককে উৎসাহিত করবেন না বা সাহায্য করবেন না।",

  "B.আপনি একমত যে:",

  "1.আপনি বা আপনার পরিবর্তে আপনার পরিবার কেউই গ্রাহক হতে পারবেন না এবং আপনার পরিবর্তে আপনার পরিবারের সাথে এই চুক্তির আওতায় আপনি কোন অর্থ প্রদানের অধিকারী হবেন না;",

  "2.এই চুক্তির নিয়ম ও শর্তাবলীর সাথে আপনার সম্মতি নিশ্চিত করার জন্য আমরা আপনার অ্যাফিলিয়েট সাইট পর্যবেক্ষণ করতে পারি এবং আপনি MCW কে আপনার কার্যকলাপ পর্যবেক্ষণে সক্ষম করতে সহযোগিতা করতে সম্মত হবেন;",

  "3.প্রযোজ্য ই-কমার্স আইন বা প্রবিধান এই চুক্তিতে প্রযোজ্য হবে না;",

  " 4.আপনি শুধুমাত্র আপনার অ্যাফিলিয়েট সাইটে (এই চুক্তির অধীনে একটি অ্যাফিলিয়েট হিসাবে আপনার সম্পর্কিত) বিষয়বস্তু উপস্থাপন করবেন যা MCW দ্বারা লিখিতভাবে অনুমোদিত। MCW দ্বারা তার সম্পূর্ণ বিবেচনার ভিত্তিতে অনুপযুক্ত যে কোন বিষয়বস্তু, এই চুক্তির অবিলম্বে সমাপ্তি ঘটবে।",

  "5.আপনি আপনার অ্যাফিলিয়েট সাইটের উন্নয়ন, পরিচালনা এবং রক্ষণাবেক্ষণের জন্য এবং এতে প্রদর্শিত সমস্ত সামগ্রীর জন্য এবং আপনার নিজের খরচে সম্পূর্ণরূপে দায়ী থাকবেন। যেহেতু আপনার অ্যাফিলিয়েট সাইটের উপর আমাদের নিয়ন্ত্রণ নেই, তাই আমরা এই বিষয়গুলির সমস্ত দায় অস্বীকার করি। উপরন্তু, আপনি আপনার অ্যাফিলিয়েট সাইটের ডেভেলপমেন্ট, অপারেশন, রক্ষণাবেক্ষণ এবং বিষয়বস্তু সম্পর্কিত যে কোন এবং সমস্ত দাবী, ক্ষতি, এবং খরচ (সীমাবদ্ধতা ছাড়া, অ্যাটর্নির ফিসহ) থেকে আমাদের ক্ষতিপূরণ দেবেন এবং ক্ষতিগ্রস্ত করবেন। ক্ষতিপূরণের এই বিধানটি প্রযোজ্য আইনের অধীনে আপনার বিরুদ্ধে একটি পৃথক পদক্ষেপ বা দাবির আমাদের অধিকারের প্রতি কোনোরূপ কুসংস্কার ছাড়াই।",

  "C.অ্যাফিলিয়েট গাইডেনস:",

  "1.শুধুমাত্র অনুমোদিত এবং সঠিকভাবে ট্যাগ করা সৃজনশীল সামগ্রী, আমাদের দ্বারা সময়ের সাথে সাথে সরবরাহ করা হয়, সাইটগুলির প্রচারের জন্য ব্যবহার করা যেতে পারে। বিজ্ঞাপন এবং ব্যক্তিগত অনুমোদন অনুমোদিত কিন্তু MCW দ্বারা পরিকল্পিত নয় এমন সমস্ত উপকরণ লিখিতভাবে পূর্বের অনুমোদনের প্রয়োজন হবে।",

  " 2.আপনি আমাদের পূর্ব লিখিত সম্মতি ব্যতীত আমাদের দ্বারা সরবরাহিত অন্য কোন আইপি রাইটস, ব্যানার বা অন্যান্য সৃজনশীল উপাদান পরিবর্তন বা ব্যবহার করতে পারবেন না। MCW দ্বারা সরবরাহিত বা অনুমোদিত যেকোনো সামগ্রীর সমস্ত কপিরাইট বা IP রাইটস বিজ্ঞপ্তি অবশ্যই সেই উপাদানটিতেই থাকতে হবে এবং তা সংশোধন বা নির্মূল করা যাবে না।",

  "3.প্রোগ্রামে অংশগ্রহণের জন্য সম্মত হয়ে, আপনি ব্যানার, টেক্সট বা প্রচারমূলক উপাদান ডাউনলোড করতে এবং এটিকে অ্যাফিলিয়েট সাইটে স্থাপন করতে সম্মত হচ্ছেন, ই-মেইলের মধ্যে এটি ব্যবহার করুন, আপনার অ্যাফিলিয়েট ইউআরএল বা প্রিন্ট ব্যবহার করে সরাসরি বিপণন করুন। এই পদ্ধতিগুলি একমাত্র অনুমোদিত পদ্ধতি যার দ্বারা আপনি প্রোগ্রাম এবং এই চুক্তির অধীনে বিজ্ঞাপন দিতে পারেন।",

  " 4.ব্যানার এবং লিঙ্কগুলি অনাকাঙ্ক্ষিত ই-মেইল, অননুমোদিত নিউজগ্রুপ পোস্টিং, বা চ্যাট রুমের মধ্যে বা “বট” ব্যবহারের মাধ্যমে স্থাপন করা যাবে না। ব্যানার এবং লিঙ্কগুলি অনাকাঙ্ক্ষিত ই-মেইল, অননুমোদিত নিউজগ্রুপ পোস্টিং, বা চ্যাট রুমের মধ্যে বা “বট” ব্যবহারের মাধ্যমে স্থাপন করা যাবে না। অবৈধভাবে উৎপন্ন ট্রাফিক গণনা করা হবে না এবং আমাদের সাথে আপনার অনুমোদিত অ্যাকাউন্টের চুক্তিটি বাতিল হতে পারে।",

  "5.যদি আপনার পক্ষ থেকে কোন ধরনের স্প্যামিং হয় বা আপনি যদি মিথ্যা বিজ্ঞাপন, লিখিত বা উচ্চারিত শব্দের মাধ্যমে MCW বা কোম্পানিকে বদনাম করেন তাহলে আমরা এই চুক্তিটি অবিলম্বে বন্ধ করে দেব।",

  "6.আপনি MCW এর সাথে কোন দাবী, উপস্থাপনা বা ওয়ারেন্টি করবেন না এবং আপনার কোন অধিকার থাকবে না এবং MCW, কোম্পানি বা কোন গ্রুপ কোম্পানিকে কোন বাধ্যবাধকতায় আবদ্ধ করবেন না।",

  " 7.আমাদের পূর্বের লিখিত অনুমোদন ব্যতীত, আপনি শুধুমাত্র আমাদের অনুমোদিত ব্যানার এবং লিঙ্ক ব্যবহার করবেন এবং তাদের চেহারা পরিবর্তন করবেন না বা কোন প্রচারমূলক সামগ্রীতে আমাদের উল্লেখ করবেন না। হাইপারটেক্সট ট্রান্সফার লিঙ্কগুলির চেহারা এবং বাক্য গঠন আমাদের দ্বারা ডিজাইন এবং মনোনীত এবং MCW- এর একমাত্র অনুমোদিত এবং অনুমোদিত প্রতিনিধিত্ব গঠন করে।",

  "8.আপনি ভালভাবে বিশ্বাসযোগ্যভাবে তৈরি না হওয়া বা সন্দেহজনক ট্রাফিক থেকে জেনে বুঝে উপকৃত হবেন না, এটি আসলে MCW- এর ক্ষতি করে কিনা। লিঙ্কের মাধ্যমে কোনো ব্যক্তির মাধ্যমে প্রতারণামূলক ক্রিয়াকলাপ দেখা দিলে, আমরা যে কোনো সময় আপনাকে প্রদত্ত কমিশন প্রত্যাহারের অধিকার বজায় রাখি। এই বিষয়ে আমাদের সিদ্ধান্ত চূড়ান্ত হবে এবং কোন চিঠিপত্র প্রবেশ করা হবে না। আমাদের বিবেচনার ভিত্তিতে জালিয়াতি ট্রাফিকের কারণে এই চুক্তির অধীনে আপনার সমস্ত পরিমাণ বজায় রাখার অধিকার আমরা সংরক্ষণ করি।",

  "9.আপনি জেনেশুনে পরিচিত অথবা সন্দেহজনক যা সঠিকভাবে বিশ্বাসযোজ্ঞ নয় এরকম ট্রাফিক থেকে সুবিধা নিতে পারবেন না, হয়তবা এটি MCW এর ক্ষতি সাধন করে। লিঙ্কের মাধ্যমে কোনো ব্যক্তির দ্বারা প্রতারণামূলক ক্রিয়াকলাপ দেখা দিলে, আমরা যে কোনো সময় আপনাকে প্রদত্ত কমিশন প্রত্যাহারের অধিকার বজায় রাখি। এই বিষয়ে আমাদের সিদ্ধান্ত চূড়ান্ত হবে এবং কোন চিঠিপত্র প্রবেশ করা হবে না। জালিয়াতি ট্র্যাফিকের কারণে, আমাদের বিবেচনায় এই চুক্তির অধীনে আপনার প্রাপ্য সমস্ত পরিমাণ ধরে রাখার অধিকার আমরা সংরক্ষণ করি।",

  "10.আপনাকে MCW- এর সাথে একই সাথে অ্যাফিলিয়েট এবং রেফারেল উভয় সম্পর্ক বজায় রাখার অনুমতি নেই। এই বিধান লঙ্ঘন MCW- কে একতরফাভাবে উভয়ই বা উভয় অনুমোদিত এবং/অথবা রেফারেল সম্পর্ক বন্ধ করার অধিকার প্রদান করে। একটি রেফারেল সম্পর্ক MCW অনুসারে MCW এর সাথে সম্পর্ককে বোঝায়।",
  " রেফার-এ-ফ্রেন্ড প্রোগ্রাম (সেটআউট এবং ওয়েবসাইটে পাওয়া যায়)।",

  "IV. রেভিনিউ শেয়ার",
  "A.আপনার এফিলিয়েট পেমেন্টের শর্তাবলী এখানে পাওয়া যাবে:",

  "1.MCW অনুমোদিত রেভিনিউ শেয়ার",

  "B.এই চুক্তির অধীনে MCW দ্বারা আপনাকে দেওয়া সমস্ত পেমেন্ট হল:",

  "1.কোন ভ্যাট বা প্রদেয় অন্যান্য কর সহ অন্তর্ভুক্ত। আপনি এই চুক্তির অধীনে যে পরিমাণ অর্থের জন্য প্রাপ্য এবং প্রদেয় যে কোন করের পরিমাণ আপনার কাঁধে ধরা হবে;",

  "2.কোন MCW অ্যাকাউন্টে অর্থ প্রদান করা হবে না;",

  "C.একজন গ্রাহক এমন পরিস্থিতিতে আপনি কোন অ্যাফিলিয়েট পেমেন্ট পাওয়ার অধিকারী হবেন না:",

  "1.এই চুক্তির যে কোন মেয়াদ লঙ্ঘন করা হয়েছে;",

  "2.একটি প্রাথমিক আমানত করে যা চার্জব্যাক সাপেক্ষে বা অন্য কোন কারণে উল্টানো হয়;",

  "3.MCW দ্বারা বা তার পক্ষে পরিচালিত কোনও পরিচয় বা ক্রেডিট চেক ব্যর্থ হয়;",

  "4.এমন একটি অঞ্চলে অবস্থিত যেখান থেকে এমসিডব্লিউ এবং এর গ্রুপ কোম্পানিগুলি গ্রাহক গ্রহণ করে না;5। MCW দ্বারা সন্দেহ করা হয় যে তার শর্তাবলী লঙ্ঘন করছে বা কোনও প্রতারণামূলক ক্রিয়াকলাপে অংশ নিচ্ছে;",

  "5.অ্যাকাউন্ট খোলার ৪৫ দিনের মধ্যে তাদের অ্যাকাউন্ট বন্ধ করে দেওয়া হয়েছে; বা",

  "6.MCW-র কাছে এমন একজন ব্যক্তি হিসাবে পরিচিত হন যিনি “গ্রাহক” শব্দটির মধ্যে সঠিকভাবে পড়েন না যার জন্য আপনি এখানে সরবরাহ করা হিসাবে রাজস্ব শেয়ার পাওয়ার অধিকারী।",

  "D.সন্দেহ পরিহারের জন্য, আপনি কোনও গ্রাহকের জন্য রেভিনিউ শেয়ার উল্লেখ করবেন না বা পাওয়ার অধিকারী হবেন না যা আপনি কোনও বর্জিত অঞ্চল থেকে উল্লেখ করেছেন কারণ এই শব্দটি প্রাসঙ্গিক সাইটগুলির শর্তাবলীতে সংজ্ঞায়িত করা হয়েছে।",

  "VI. গোপনীয়তা এবং ঘোষণা",
  "A.এই চুক্তির মেয়াদ কালে এবং এর অবসানের পরে অনির্দিষ্টকালের জন্য, প্রতিটি পক্ষ এই চুক্তি মেনে চলা ছাড়া অন্য কোনও উদ্দেশ্যে অন্য পক্ষের কোনও গোপনীয় তথ্য ব্যবহার করবে না। অন্য পক্ষের পূর্বলিখিত সম্মতি ব্যতীত কোনও পক্ষই অন্য পক্ষের গোপনীয় তথ্য কোনও ব্যক্তির কাছে প্রকাশ করবে না। উভয় পক্ষ গোপনীয় তথ্যের ব্যবহার বা প্রকাশ রোধ করতে ভাল শিল্প অনুশীলন অনুসরণ করবে। এই ধারার অধীনে বাধ্যবাধকতাগুলি তবে কোনও গোপনীয় তথ্যের ক্ষেত্রে প্রযোজ্য হবে না।",

  "1.এই চুক্তি ভঙ্গ বা আস্থার অন্য কোনও কর্তব্য ছাড়া অন্য কোনও ডোমেনে জনসমক্ষে এসেছে;",

  "2.এই চুক্তি ভঙ্গ না করে তৃতীয় পক্ষ থেকে প্রাপ্ত হয়;",

  "3.আইন বা অন্যান্য নিয়ন্ত্রক প্রয়োজনীয়তা দ্বারা প্রকাশ করা প্রয়োজন আইআইএস প্রকাশ করার আগে অন্য পক্ষকে নোটিশ দেওয়া হয় যেখানে এটি বৈধ; বা",

  "4.গোপনীয় তথ্য অন্য কোন পক্ষের দ্বারা এটিপ্রকাশ করার সময় বা যা অন্য পক্ষের কোনও গোপনীয় তথ্যের রেফারেন্স ছাড়াই স্বাধীনভাবে বিকশিত হয় সেই সময় দলের দখলে রয়েছে।",

  "B.প্রতিটি দল তার পরিচালক, কর্মচারী, পেশাদার উপদেষ্টা এবং উপ-ঠিকাদারদের এবং তার গ্রুপের যে কোনও সংস্থার কাছে কোনও গোপনীয় তথ্য প্রকাশ করতে পারে যে এই চুক্তির অধীনে তার বাধ্যবাধকতা গুলি মেনে চলার জন্য এই জাতীয় প্রকাশ যুক্তিসঙ্গতভাবে প্রয়োজনীয়। যদি এই ধরনের প্রকাশ করতে হয়, তবে প্রকাশকারী দল নিশ্চিত করবে যে গোপনীয় তথ্য প্রাপকরা এর অধীনে প্রয়োজনীয় গোপনীয়তার একই বাধ্যবাধকতা সাপেক্ষে।",

  "C.এই চুক্তির অবসানের পর, প্রতিটি পক্ষ হয় তার দখলে থাকা গোপনীয় তথ্যের সমস্ত অনুলিপি ফেরত দেবে বা ধ্বংস করবে, এবং (যদি তাই অনুরোধ করা হয়) বৈদ্যুতিনভাবে সঞ্চিত গোপনীয় তথ্যের সমস্ত অনুলিপি ধ্বংস করার জন্য সমস্ত যুক্তিসঙ্গত প্রচেষ্টা ব্যবহার করবে কেবল মাত্র সেই পরিমাণ ছাড়া যে এটি সেই পার্টি বা তার গ্রুপের কোনও সংস্থার জন্য প্রযোজ্য কোনও আইন, নিয়ন্ত্রণ বা লাইসেন্স শর্তের অধীনে এই জাতীয় তথ্য ধরে রাখতে বাধ্য।",

  "VII. সপ্তম। তথ্য সুরক্ষা এবং সুরক্ষা",
  "A.আপনি স্বীকার করেন যে MCW-এর ডেটা এবং এর সিস্টেমগুলির সুরক্ষা সর্বাধিক গুরুত্বপূর্ণ। আপনি যদি প্রোগ্রামের সাথে সম্পর্কিত কোনও ভাবে সুরক্ষা লঙ্ঘন বা সম্ভাব্য লঙ্ঘন সম্পর্কে সচেতন হন, আপনি অবিলম্বে আমাদের অবহিত করবেন এবং আপনার সর্বোত্তম প্রচেষ্টাব্যবহার করবেন যাতে একটি সম্ভাব্য লঙ্ঘন আর বিকশিত না হয় বা প্রকৃত লঙ্ঘন এবং এর কোনও প্রভাব বা ফলাফলের প্রতিকার করা যায়।",

  "B.Yআপনি ওয়ারেন্ট যে আপনার অ্যাফিলিয়েট সাইট অনুগত এবং প্রযোজ্য ডেটা গোপনীয়তা এবং সুরক্ষা আইন মেনে চলবে।",

  "VIII. বৌদ্ধিক সম্পত্তির অধিকার",
  "A.লিঙ্ক এবং সাইটসম্পর্কিত যে কোনও এবং সমস্ত বৌদ্ধিক সম্পত্তির অধিকার তাদের নিজ নিজ মালিকের হবে। আপনি এর দ্বারা সম্মত হন যে আপনি এই বৌদ্ধিক সম্পত্তি অধিকারের মালিকানাকে চ্যালেঞ্জ করবেন না বা অনুরূপ বা অনুরূপ কিছু নিবন্ধন করবেন না।",

  "B.আপনি এর দ্বারা আপনার অ্যাফিলিয়েট সাইট পরিচালনায় কোনও লঙ্ঘন বা বৌদ্ধিক সম্পত্তির অধিকার লঙ্ঘনের জন্য এর বিরুদ্ধে আনা কোনও দাবি বা দাবির বিরুদ্ধে এমসিডব্লিউকে ক্ষতিপূরণ দিতে সম্মত হন।",

  "IX. ইনডেমনিফিকেশন এবং দায়বদ্ধতার সীমাবদ্ধতা",
  "A.এর দ্বারা আপনি সম্মত হন যে আপনি এই চুক্তির অধীনে আপনার বাধ্যবাধকতার কোনও লঙ্ঘনের ফলে প্রত্যক্ষ বা পরোক্ষভাবে ক্ষতিগ্রস্থ বা বহন করা দায়গুলি, এর সহযোগী, গ্রুপ কোম্পানি এবং স্বতন্ত্র কর্মকর্তাদের যে কোনও এবং সমস্ত লোকসান, দাবি, দাবি, ক্ষতি, ব্যয়, ব্যয় (ফলস্বরূপ ক্ষতি এবং ক্ষতি সহ, যুক্তিসঙ্গত আইনি ব্যয় এবং ব্যয় সহ) এবং দায়গুলি ক্ষতিপূরণ দেবেন এবং ধরে রাখবেন।",

  "B.প্রযোজ্য আইন দ্বারা অনুমোদিত সম্পূর্ণ পরিমাণে, নিম্নলিখিত বিধানগুলি চুক্তি, টর্ট, সংবিধি, ইক্যুইটি বা অন্যথায় আপনার কাছে এমসিডব্লিউ (বা কোনও সম্পর্কিত দল বা কর্মকর্তা) এর সম্পূর্ণ দায়বদ্ধতা নির্ধারণ করে:",

  "1.আপনি স্বীকার করেন এবং সম্মত হন যে প্রোগ্রাম এবং সাইটগুলি কোনও ধরণের ওয়ারেন্টি ছাড়াই “এএস আইএস” সরবরাহ করা হয় (প্রকাশ করুন বা নিহিত হোক);",

  "2.সমস্ত শর্তাবলী, ওয়ারেন্টি, শর্তাবলী এবং অঙ্গীকারগুলি (প্রকাশ বা নিহিত হোক), বিধিবদ্ধ বা অন্যথায় বিতরণ, কর্মক্ষমতা, গুণমান, নির্ভুলতা, নিরবচ্ছিন্ন ব্যবহার, উদ্দেশ্যের জন্য ফিটনেস, লিঙ্কগুলির ঘটনা বা নির্ভরযোগ্যতা, অ্যাফিলিয়েট প্রোগ্রাম এবং সাইটগুলি এর দ্বারা বাদ দেওয়া হয়েছে; এবং",

  "3.MCW (এর সহযোগী, গ্রুপ কোম্পানি বা কর্মকর্তা) প্রোগ্রামে আপনার অংশগ্রহণ, লিঙ্কগুলির আপনার ব্যবহার বা মুনাফা রহিত হওয়া সহ এমসিডব্লিউ দ্বারা এই চুক্তির কোনও লঙ্ঘন সম্পর্কিত কোনও ক্ষতির জন্য আপনার কাছে দায়বদ্ধ হবে না (প্রত্যক্ষ বা পরোক্ষ হোক), রাজস্ব, সদিচ্ছা, প্রত্যাশিত সঞ্চয়, ডেটা বা যে কোনও ধরণের বিশেষ, পরোক্ষ, ফলস্বরূপ বা অর্থনৈতিক ক্ষতি (তৃতীয় পক্ষের দ্বারা আনা পদক্ষেপের ফলে আপনার ক্ষতি বা ক্ষতি সহ) এমনকি যদি এই ধরনের ক্ষতি যুক্তিসঙ্গতভাবে প্রত্যাশিত ছিল বা এমনকি যদি এমসিডাব্লুকে আপনার এই ধরনের ক্ষতি হওয়ার সম্ভাবনার পরামর্শ দেওয়া হত।",

  "C.আমরা অনুমোদিত প্রোগ্রাম বা রাজস্ব ভাগাভাগির ব্যবস্থা সম্পর্কিত কোনও প্রকাশ বা অন্তর্নিহিত ওয়ারেন্টি বা প্রতিনিধিত্ব করি না(সীমাবদ্ধতা ছাড়াই, তাদের কার্যকারিতা, এবং ফিটনেস, বণিকতা, বৈধতা, অ-লঙ্ঘন, বা কর্মক্ষমতা, লেনদেন বা বাণিজ্য ব্যবহারের একটি কোর্স থেকে উদ্ভূত কোনও অন্তর্নিহিত ওয়ারেন্টি)।উপরন্তু, আমরা কোন প্রতিনিধিত্ব করি না যে আমাদের সাইটগুলির পরিচালনা নিরবচ্ছিন্ন বা ত্রুটিমুক্ত হবে এবং কোনও বাধা বা ত্রুটির ফলাফলের জন্য দায়বদ্ধ হবে না। সংস্থাটি আরও স্পষ্টভাবে যে কোনও ধরণের সমস্ত ওয়ারেন্টি এবং শর্তঅস্বীকার করে; প্রকাশ বা নিহিত, অন্তর্ভুক্ত কিন্তু সীমাবদ্ধ নয় অন্তর্নিহিত ওয়ারেন্টি এবং বণিকতার শর্তাবলী, একটি নির্দিষ্ট উদ্দেশ্যে ফিটনেস এবং অ লঙ্ঘন।",

  "D.আপনি স্পষ্টভাবে বুঝতে পারেন এবং সম্মত হন যে MCW, এর সহায়ক এবং অনুমোদিত সংস্থাগুলি এবং এর লাইসেন্সধারী এবং পরিষেবা সরবরাহকারীরা আপনার কাছে দায়বদ্ধ হবে না (১) যে কোন প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক, বিশেষ পরিণামমূলক বা দৃষ্টান্তমূলক ক্ষতি যা আপনার দ্বারা বহন করা যেতে পারে, যাই হোক না কেন এবং দায়বদ্ধতার যে কোনও তত্ত্বের অধীনে, এর মধ্যে অন্তর্ভুক্ত থাকবে, তবে কেবল লাভের কোনও ক্ষতি অন্তর্ভুক্ত হবে না সদিচ্ছা বা ব্যবসায়িক খ্যাতির কোনও ক্ষতি, কোনও তথ্যের ক্ষতি, বিকল্প পণ্য বা পরিষেবা সংগ্রহের ব্যয়, বা অন্যান্য অমূর্ত ক্ষতি; (2) আপনার দ্বারা বহন করা হতে পারে এমন কোনও ক্ষতি বা ক্ষতি, যার ফলে ক্ষতি বা ক্ষতির মধ্যে সীমাবদ্ধ নয়: (ক) কোনও পরিবর্তন যা সংস্থা অনুমোদিত প্রোগ্রামে করতে পারে অথবা অনুমোদিত প্রোগ্রামের বিধানে (বা অনুমোদিত প্রোগ্রামের মধ্যে কোনও বৈশিষ্ট্য) স্থায়ী বা অস্থায়ী ভাবে বন্ধ করার জন্য;; (খ) আপনার অনুমোদিত প্রোগ্রামব্যবহারের মাধ্যমে বা এর মাধ্যমে রক্ষণাবেক্ষণ বা প্রেরিত কোন বিষয়বস্তু এবং অন্যান্য যোগাযোগ তথ্য মুছে ফেলা, দুর্নীতি বা সংরক্ষণে ব্যর্থতা; (গ) সঠিক হিসাব তথ্য সহ কোম্পানি সরবরাহ ের ক্ষেত্রে আপনার ব্যর্থতা; (ঘ) আপনার পাসওয়ার্ড বা অ্যাকাউন্টের বিবরণ সুরক্ষিত ও গোপনীয় রাখতে আপনার ব্যর্থতা উপরে সংস্থার দায়বদ্ধতার সীমাবদ্ধতা গুলি প্রযোজ্য হবে যে সংস্থাটিকে পরামর্শ দেওয়া হয়েছে কিনা বা এই জাতীয় কোনও ক্ষতির সম্ভাবনা সম্পর্কে সচেতন হওয়া উচিত ছিল কিনা।",

  "E.যে পূর্বানুগতিক সময়ের মধ্যে আপনাকে এই প্রোগ্রামের অধীনে যে কোনও দাবির উপর কার্যক্রম শুরু করতে হবে তা আপনি সচেতন হওয়ার তারিখ থেকে 6 মাস হবে বা যুক্তিসঙ্গতভাবে প্রাসঙ্গিক লঙ্ঘন সম্পর্কে সচেতন হওয়া উচিত ছিল যা দাবির বিষয় গঠন করবে।",

  " X. মেয়াদ এবং সমাপ্তি",
  "A.এই চুক্তি টি প্রারম্ভিক তারিখে শুরু হবে এবং যতক্ষণ না উভয় পক্ষ এই চুক্তিটি বাতিল করার উদ্দেশ্যের অন্য টিতে লিখিত বিজ্ঞপ্তি প্রদান করে, অভিপ্রেত সমাপ্তির ত্রিশ (৩০) দিনের কম সময় আগে চলবে।",

  "B.MCW এই চুক্তিটি অবিলম্বে বাতিল করতে পারে যদি এই চুক্তিটি হয়:",

  "1.আপনি এই চুক্তির যে কোনও শর্ত লঙ্ঘন করেছেন;",

  "2.আপনি বন্ধ বা দেউলিয়া বা লিকুইডেশন প্রক্রিয়া বিষয় সহ আপনার ব্যবসা চালিয়ে যাওয়া বন্ধ করার হুমকি;",

  " 3.MCW আপনার অ্যাফিলিয়েট সাইট বাজারকরে এমন একটি অঞ্চল বা এখতিয়ার থেকে গ্রাহকদের গ্রহণ করা বন্ধ করে দেয়;",

  "4.MCW নির্ধারণ করে যে আপনার অ্যাফিলিয়েট সাইট এই চুক্তির অধীনে প্রতারণামূলক রাজস্ব শেয়ার প্রতারণামূলক অর্থ প্রদানের লক্ষ্যে প্রতারণামূলক ট্র্যাফিক বা অন্য কোনও অনুরূপ পদ্ধতি তৈরি করছে।",

  "C.এই চুক্তির সমাপ্তি কোনও অধিকার বা বাধ্যবাধকতার প্রতি পক্ষপাত ছাড়াই হবে যা সমাপ্তির আগে অর্জিত হতে পারে।",

  "D.এই চুক্তি রদ হওয়ার পর, এখানে আপনাকে দেওয়া যে কোনও লাইসেন্স অবিলম্বে বাতিল হয়ে যাবে।",

  "E.যদি এই চুক্তিটি এক্স (বি) ধারার অধীনে বাতিল করা হয় তবে আপনি এই চুক্তির অধীনে আর কোনও অর্থ প্রদান বা রাজস্ব অংশ পাওয়ার অধিকারী হবেন না।",

  "F.ধারা ষষ্ঠ, নবম এবং অন্যান্য সমস্ত ধারা যা এই চুক্তি রদ হওয়ার পরে কার্যকর থাকতে হবে, যে কোনও কারণে এই চুক্তি টি শেষ হওয়ার পরে অনির্দিষ্টকালের জন্য কার্যকর থাকবে।",

  " XI. ফোর্স মাজুরে",
  "A.Nকোন পক্ষই এই চুক্তির লঙ্ঘন করবে না বা সম্পাদন করতে দেরি, বা সম্পাদন করতে ব্যর্থ হলে, এই চুক্তির অধীনে তার কোন দায়বদ্ধতা যদি এই ধরনের বিলম্ব বা ব্যর্থতা তার যুক্তিসঙ্গত নিয়ন্ত্রণের বাইরে ঘটনা, পরিস্থিতি বা কারণের কারণে ঘটে। কোন ক্ষেত্রে, ক্ষতিগ্রস্ত পক্ষ এই চুক্তির অধীনে তার দায়িত্ব পালনের জন্য সময়ের যুক্তিসঙ্গত বর্ধনের অধিকারী হবে, যদি শর্ত থাকে যে, যদি বিলম্ব বা কার্য সম্পাদনের সময়কাল দশ (10) দিনের বেশি চলতে থাকে, তাহলে প্রভাবিত পক্ষ হতে পারে অন্য পক্ষকে লিখিত নোটিশের মাধ্যমে এই চুক্তিটি বাতিল করার সিদ্ধান্ত নিন।",

  "XII. নো এজেন্সি বা পার্টনারশিপ",
  "এই চুক্তি বা এর বাস্তবায়নের কোন কিছুই গঠিত হবে না, অথবা দলগুলির মধ্যে একটি অংশীদারিত্ব, সমিতি, যৌথ উদ্যোগ বা অন্যান্য সমবায় সত্তা গঠন করবে বলে মনে করা হবে। আপনি আমাদের এজেন্ট হিসাবে নিজেকে আটকে রাখবেন না বা কোন পক্ষকে বা আমাদের পক্ষ থেকে কোন প্রতিশ্রুতি দিতে বা প্রবেশ করার অনুমতি দেবেন না।",

  "XIII. অ্যাসাইনমেন্ট এবং সাব-কন্ট্রাক্টিং",
  "A.এই চুক্তি, বা এর কোন অংশ, বরাদ্দ করা যাবে না, নবায়ন করা যাবে না, একটি ট্রাস্ট ঘোষণা করা হবে, অথবা অন্যথায় নিষ্পত্তি করা হবে।",

  "B.MCW যাইহোক, আপনাকে কোন নোটিশ না দিয়ে যেকোন সময় একটি গ্রুপ কোম্পানিকে এই চুক্তির অধীনে তার অধিকার ও বাধ্যবাধকতা প্রদান বা সাব-চুক্তি করতে পারে।",

  "XIV. বিবিধ",
  "A.এই চুক্তিতে এর বিষয়বস্তুর ক্ষেত্রে পার্টিগুলির মধ্যে সমগ্র চুক্তি রয়েছে, পার্টিগুলির মধ্যে পূর্ববর্তী সমস্ত চুক্তি এবং বোঝাপড়াকে এর সাথে সম্মানিত করে, এবং যথাযথভাবে অনুমোদিত প্রতিনিধিদের স্বাক্ষরিত লিখিত উপকরণ ছাড়া পরিবর্তন করা যাবে না দলগুলোর।",

  " B.যদি এই চুক্তির কোন বিধান যদি কোন আদালত বা অন্য কোন যোগ্য কর্তৃপক্ষ কর্তৃক সম্পূর্ণ বা আংশিকভাবে অকার্যকর বা অযোগ্য বলে বিবেচিত হয়, তাহলে এই চুক্তিটি তার অন্যান্য বিধান এবং ক্ষতিগ্রস্ত বিধানের অবশিষ্ট হিসাবে বৈধ থাকবে।",

  "C.এই চুক্তির যে কোন এক বা একাধিক শর্তাবলী যে কোন সময় প্রয়োগ করতে আমাদের ব্যর্থতা বা বিলম্ব এই ধরনের অধিকার বা অন্য কোন অধিকারের মওকুফ হবে না।",

  "D.প্রতিটি পক্ষ স্বীকার করে যে, এই চুক্তিতে প্রবেশ করার সময়, এটি এখানে স্পষ্টভাবে প্রদত্ত ব্যতীত কোন প্রতিনিধিত্ব, ওয়ারেন্টি বা অন্যান্য বিধানের ভিত্তিতে তা করে না এবং নির্ভর করে না।",

  "E.এই চুক্তি (এবং যেকোনো বিরোধ, বিতর্ক বা প্রক্রিয়া) ইংরেজী আইন অনুসারে সম্পাদিত, ব্যাখ্যা করা এবং ব্যাখ্যা করা হবে এবং এর দ্বারা পক্ষগুলি অপরিবর্তনীয়ভাবে ইংরেজী আদালতের এখতিয়ারে জমা দেবে।",

  "F.আপনি এইভাবে সম্মত হন এবং স্বীকার করেন যে এই চুক্তির অন্তর্গত প্রতিটি বিধান বিবেচনা করার সুযোগ পেয়েছেন এবং এর প্রত্যেকটি বিধানের ক্ষেত্রে স্বাধীন আইনি পরামর্শ নেওয়ার সুযোগ পেয়েছেন এবং এইভাবে এই চুক্তির সমস্ত বিধান সম্মত হয়েছেন যুক্তিসঙ্গত এবং বৈধ।",
];

const AffCondition = () => {
  const { language } = useContext(LanguageContext);
  const isBn = language === "bn";

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-AffiliatePrimaryBg text-gray-800 px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl text-textSecondaryColor font-bold mb-6 text-center">
        {isBn ? "শর্তাবলী" : "Terms & Conditions"}
      </h1>

      <div className="w-full text-white  p-6 rounded-lg shadow-md space-y-3 text-sm md:text-base">
        {(isBn ? conditionsBN : conditionsEN).map((condition, index) => (
          <p key={index}> {condition}</p>
        ))}
      </div>
    </div>
  );
};

export default AffCondition;
