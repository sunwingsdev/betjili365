import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const Loader = () => {
  const { data: homeControls } = useGetHomeControlsQuery();

  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );
  return (
    <div className="fixed inset-0 z-[9999] bg-primary-primaryColorTwo bg-opacity-50 flex justify-center items-center">
      <div className="w-36 h-36   animate-pulse  flex justify-center items-center ">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${logoHomeControl?.image}`}
          alt=""
          className="w-[80%]"
        />
      </div>
    </div>
  );
};

export default Loader;
