import SpinLoader from "@/components/shared/loaders/Spinloader";
import { useLazyGetUserByIdQuery } from "@/redux/features/allApis/usersApi/usersApi";
import { setSingleUser } from "@/redux/slices/authSlice";
import { useEffect, useState } from "react";
import { IoMailOutline, IoReload } from "react-icons/io5";
import { MdSmartphone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const WalletSection = () => {
  const { singleUser, user } = useSelector((state) => state.auth);

  const [getSingleUser] = useLazyGetUserByIdQuery();
  const dispatch = useDispatch();

  // Loading state
  const [loading, setLoading] = useState(false);

  // Fetch user balance on component mount
  useEffect(() => {
    if (!user) return;
    getSingleUser(user?._id).then(({ data }) => {
      dispatch(setSingleUser(data)); // Save singleUser to Redux
    });
  }, [user]);

  const reloadBalance = () => {
    if (!user) return;

    setLoading(true); // Set loading state to true

    getSingleUser(user?._id)
      .then(({ data }) => {
        dispatch(setSingleUser(data)); // Update Redux store with the latest balance
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after data is fetched
      });
  };

  return (
    <div className="bg-primary-primaryColorTwo px-3 py-2 rounded items-center justify-between hidden md:flex">
      <div>
        <p className="text-[#999] text-sm">মেইন ওয়ালেট</p>
        <p className="text-[#76bd6a] text-2xl inline-flex items-center gap-3">
          ৳ {singleUser?.balance ? singleUser?.balance : 0}{" "}
          <span onClick={reloadBalance} className="cursor-pointer">
            {loading ? (
              <span className="animate-spin text-white">
                <SpinLoader />
              </span>
            ) : (
              <IoReload />
            )}
          </span>
        </p>
      </div>
      <div className="border-s ps-3 border-gray-900">
        <p className="text-[#999] text-sm">সিকিউরিটি লেভেল</p>
        <p className="text-[#fdb100] text-sm">নরমাল</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="bg-[#f35e5e] p-1 text-white rounded-full animate-pulse">
          <IoMailOutline className="text-xl" />
        </div>
        <div className="bg-[#76bd6a] p-1 text-white rounded-full opacity-50">
          <MdSmartphone className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
