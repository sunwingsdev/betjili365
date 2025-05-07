import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegCopy } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { useToasts } from "react-toast-notifications";
import {
  useAddReferCodeMutation,
  useGetAllReferCodesQuery,
} from "@/redux/features/allApis/referCodesApi/referCodesApi";

const MyAffiliateLinks = () => {
  const { id } = useParams();

  const [generatedLinks, setGeneratedLinks] = useState([]);
  const [copied, setCopied] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const { data: allReferLinks } = useGetAllReferCodesQuery();
  const [addReferCode, { isLoading }] = useAddReferCodeMutation();

  // Function to generate referral code
  const handleGenerateReferralCode = async () => {
    try {
      // Generate the referral code
      const referralCode = `REF-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`;

      // Prepare the data to send to the backend, including the referral link
      const referralData = {
        userId: id,
        createdAt: new Date(),
        referralCode: referralCode,
        referralLink: `${window.location.origin}/signup?ref=${referralCode}`, // Generate the referral link
      };

      // Send data to the backend
      const result = await addReferCode(referralData).unwrap(); // Send to backend
      const { referralCode: generatedCode, referralLink } = result; // Get the generated code and link from response

      // Update the state with the new referral code and link
      setGeneratedLinks([
        ...generatedLinks,
        { referralCode: generatedCode, referralLink: referralLink },
      ]);

      // Show success toast
      addToast("Referral Code Generated Successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      console.error("Error generating referral code:", err);
      // Show error toast
      addToast("Failed to generate referral code", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  // Function to redirect to signup page with referral code
  const handleRedirectToSignup = (code) => {
    navigate(`/signup?ref=${code}`);
  };

  // Function to copy the referral code or link to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);

    // Show success toast for copying
    addToast("Link copied to clipboard!", {
      appearance: "success",
      autoDismiss: true,
    });

    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      <div className="bg-[#222222] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full mb-4 md:mb-0 p-4">
        <h3 className="text-2xl text-white font-bold">My Affiliate Links</h3>
        <button
          onClick={handleGenerateReferralCode}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-black rounded-md"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Link"}
        </button>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Generated Links</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-yellow-500 text-black bg-white">
            <thead>
              <tr className="bg-yellow-500 text-black">
                <th className="px-4 py-2 border border-yellow-500">
                  Referral Code
                </th>
                <th className="px-4 py-2 border border-yellow-500">Link</th>
                <th className="px-4 py-2 border border-yellow-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {allReferLinks?.length > 0 ? (
                allReferLinks.map((linkObj, index) => (
                  <tr
                    key={index}
                    className={`border-b border-yellow-500 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"
                    } text-black`}
                  >
                    <td className="px-4 py-2 text-center border border-yellow-500">
                      {linkObj.referralCode}
                      <button
                        onClick={() => handleCopy(linkObj.referralCode)}
                        className="ml-2 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        {copied === linkObj.referralCode ? (
                          <GiCheckMark title="Copied" />
                        ) : (
                          <FaRegCopy title="Copy" />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center border border-yellow-500">
                      {linkObj.referralLink}
                      <button
                        onClick={() => handleCopy(linkObj.referralLink)}
                        className="ml-2 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        {copied === linkObj.referralLink ? (
                          <GiCheckMark title="Copied" />
                        ) : (
                          <FaRegCopy title="Copy" />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center border border-yellow-500">
                      <button
                        onClick={() =>
                          handleRedirectToSignup(linkObj.referralCode)
                        }
                        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        Open Signup
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-4 py-2 text-center border border-yellow-500 text-gray-500"
                  >
                    No referral links generated yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAffiliateLinks;
