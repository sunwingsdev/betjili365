const PrimaryButton = ({ children, type, onClick, widthFull, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${widthFull && "w-full"} ${
        disabled && "opacity-50 cursor-not-allowed "
      } bg-gradient-to-r hover:bg-gradient-to-l transition-colors duration-200 ease-linear from-[#f79604] to-[#fbc103] hover:shadow-md hover:scale-[101%] text-[15px] text-white rounded-[3px] px-6 py-2`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
