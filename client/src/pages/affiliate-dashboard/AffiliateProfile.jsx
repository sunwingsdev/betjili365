import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { ClipLoader } from "react-spinners";
import noImage from "../../assets/noImageAvailable.png";
import { IoCameraOutline } from "react-icons/io5";
import {
  useGetAffiliateByIdQuery,
  useUpdateAffiliateMutation,
} from "@/redux/features/allApis/usersApi/affiliatesApi";
import { useUpdateUserProfileImageMutation } from "@/redux/features/allApis/usersApi/usersApi";
import { uploadImage } from "@/hooks/files";
import CashAgentProfileUserInfo from "@/components/cash-agent/cash-agent-profile/CashAgentProfileUserInfo";
import CashAgentKycUpdate from "@/components/cash-agent/cash-agent-profile/CashAgentKycUpdate";

const AffiliateProfile = () => {
  const { id } = useParams();
  const [selectedSection, setSelectedSection] = useState("userInfo");
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const { addToast } = useToasts();
  const { handleSubmit, reset } = useForm();
  const { data: singleAffiliate, isLoading: affiliateLoading } =
    useGetAffiliateByIdQuery(id);
  const [updateAffiliate, { isLoading: updateAffiliateLoading }] =
    useUpdateAffiliateMutation();
  const [updateProfileImage, { isLoading: isProfileImageLoading }] =
    useUpdateUserProfileImageMutation();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setSelectedImage(URL.createObjectURL(file)); // For preview
    }
  };

  const balances = [
    { label: "Main Balance", value: "500 BDT" },
    { label: "Deposit Balance", value: "800 BDT" },
    { label: "Withdraw Balance", value: "1000 BDT" },
    { label: "Support Pin", value: "123456" },
  ];

  if (!singleAffiliate) {
    return <p>Loading affiliate data...</p>;
  }

  const onSubmit = async () => {
    if (!profileImage) {
      addToast("Please upload a profile image", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    try {
      const frontImagePath = await uploadImage(profileImage);

      const formattedData = {
        id,
        profileImage: frontImagePath.filePath, // This should be the correct path
      };

      const response = await updateProfileImage(formattedData).unwrap();

      if (response) {
        addToast("Profile image updated successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        reset();
        setProfileImage(null); // Clear state after successful upload
        setSelectedImage(null);
      }
    } catch (error) {
      console.error("Error uploading profile image:", error);
      addToast("Failed to upload profile image", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <h1 className="text-center bg-gradient-to-r from-gray-300 to-gray-500 text-lg lg:text-xl font-bold text-white p-4 rounded-md shadow-md mb-6">
        Affiliate Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Left Section */}
        <div className="bg-white w-full lg:w-2/3 rounded-lg shadow-lg p-2 text-nowrap text-center">
          <div className="mb-6">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
              Affiliate Name:{" "}
              <span className="capitalize">{singleAffiliate?.fullName}</span>
            </h1>
            <p className="text-gray-500">
              UserName: {singleAffiliate?.username}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center mb-6"
          >
            <div className="relative w-32 h-32">
              {/* Image Preview */}
              {!singleAffiliate?.profileImage && affiliateLoading ? (
                <div className="flex justify-center items-center w-full h-full border-4 border-gray-500 rounded-full">
                  <ClipLoader size={40} color="#4b5563" />
                </div>
              ) : (
                <img
                  className="rounded-full w-full h-full object-cover border-4 border-gray-500"
                  src={
                    selectedImage ||
                    (singleAffiliate?.profileImage
                      ? `${import.meta.env.VITE_BASE_API_URL}${
                          singleAffiliate.profileImage
                        }`
                      : noImage)
                  }
                  alt="User Avatar"
                />
              )}

              {/* Camera Icon and Input */}
              <label
                htmlFor="profileImage"
                className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600"
              >
                <IoCameraOutline className="text-lg" />
                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#6b7699f1] text-white rounded-md px-4 py-2 hover:bg-gray-300 mt-4"
              disabled={isProfileImageLoading}
            >
              {isProfileImageLoading ? "Uploading..." : "Upload New Photo"}
            </button>
          </form>

          {/* Balance Section */}
          <div className="space-y-4">
            {balances.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
              >
                <p className="text-gray-600 font-semibold">{item.label}</p>
                <p className="text-green-600 font-bold ml-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full lg:w-2/3 rounded-lg shadow-lg p-6">
          <h2 className="text-center text-xl text-gray-800 font-semibold mb-6">
            Edit Affiliate Profile
          </h2>

          <div className="flex sm:flex-row flex-col justify-center gap-2 mb-6 text-nowrap">
            <button
              onClick={() => setSelectedSection("userInfo")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "userInfo"
                  ? "bg-[#6b7699f1] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              User Info
            </button>
            <button
              onClick={() => setSelectedSection("transactionHistory")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "transactionHistory"
                  ? "bg-[#6b7699f1] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Transaction History
            </button>
            <button
              onClick={() => setSelectedSection("kycUpdate")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "kycUpdate"
                  ? "bg-[#6b7699f1] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              KYC Update
            </button>
          </div>

          {selectedSection === "userInfo" && (
            <CashAgentProfileUserInfo
              id={id}
              singleUser={singleAffiliate}
              updateUser={updateAffiliate}
              isLoading={updateAffiliateLoading}
            />
          )}

          {selectedSection === "transactionHistory" && (
            <div className="text-center text-gray-600">
              No transactions available.
            </div>
          )}

          {selectedSection === "kycUpdate" && <CashAgentKycUpdate id={id} />}
        </div>
      </div>
    </div>
  );
};

export default AffiliateProfile;
