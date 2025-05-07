import loaderLogo from "../../assets/v2/loaderLogo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-primary-primaryColorTwo bg-opacity-50 flex justify-center items-center">
      <div className="w-36 h-36   animate-pulse  flex justify-center items-center ">
        <img src={loaderLogo} alt="" className="w-[80%]" />
      </div>
    </div>
  );
};

export default Loader;
