const SecondaryButton = ({ children, type, onClick, widthFull }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        widthFull && "w-full"
      } bg-gradient-to-r hover:bg-gradient-to-l transition-colors duration-200 ease-linear from-[#0088da] to-[#0088da] hover:shadow-md hover:scale-[101%] text-[15px] text-white rounded-[3px] px-6 py-2`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
