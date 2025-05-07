import AffiliatesAllProduct from "@/components/affiliate-dashboard/affiliateHome/AffiliatesAllProduct";
import AffiliatesCoundCard from "@/components/affiliate-dashboard/affiliateHome/AffiliatesCoundCard";
import AffiliatesDashboardTable from "@/components/affiliate-dashboard/affiliateHome/AffiliatesDashboardTable";

const AffiliatesHome = () => {
  return (
    <div>
      <AffiliatesCoundCard />
      <div className="bg-[#222222] py-2 my-4">
        <h1 className="text-2xl font-bold text-center text-white">
          Today my Earning
        </h1>
      </div>
      <AffiliatesAllProduct />
      <AffiliatesDashboardTable />
      <div className="bg-[#222222] py-2 mt-4">
        <h1 className="text-2xl font-bold text-center text-white">
          Copy Right @ 2025 BY Oracle Technology LLC
        </h1>
      </div>
    </div>
  );
};

export default AffiliatesHome;
