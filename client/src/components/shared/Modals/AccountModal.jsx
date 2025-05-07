import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { IoCloseOutline } from "react-icons/io5";

const AccountModal = ({ id, title, children }) => {
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  return (
    <dialog id={id} className="modal bg-black rounded-2xl scrollbar-hide">
      <div className="pb-8 modal-box relative">
        <h3 className="py-3 font-bold text-lg text-center text-white bg-[#333]">
          {title}
        </h3>
        {isLoading ? (
          <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <img
            className="w-32 py-7 m-auto"
            src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
            alt=""
          />
        )}
        {children}
      </div>
      <form method="dialog" className="modal-backdrop absolute top-3 right-3">
        <button className="text-[#8f8e8e]">
          <IoCloseOutline size={26} />
        </button>
      </form>
    </dialog>
  );
};

export default AccountModal;
