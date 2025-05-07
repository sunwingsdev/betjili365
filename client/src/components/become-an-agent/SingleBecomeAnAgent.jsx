const SingleBecomeAnAgent = ({
  id = "",
  heading = "",
  text = [],
  list = [],
  listText = "",
  text4 = [],
  additionalText = [],
  btn = "",
  image = "",
  reverse = false,
  onClick = () => {},
}) => {
  return (
    <div
      id={id}
      className={`flex items-center flex-col-reverse pt-20 px-4 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Text Section */}
      <div
        data-aos="fade-right"
        className="max-w-[650px] uppercase space-y-3 lg:space-y-4 mt-10"
      >
        <h2 className="text-center lg:text-start text-2xl lg:text-4xl font-bold text-red-600 italic">
          {heading}
        </h2>

        {/* Text Mapping */}
        {Array.isArray(text) &&
          text.map((item, index) => (
            <p
              key={index}
              className="text-white text-base lg:text-lg font-bold italic"
            >
              {item}
            </p>
          ))}

        {/* List Section */}
        {listText && (
          <div>
            <p className="text-white text-base lg:text-lg font-bold italic">
              {listText}
            </p>
            {Array.isArray(list) &&
              list.map((item, index) => (
                <li
                  key={index}
                  className="text-white text-base lg:text-lg font-bold italic list-disc ml-6 mt-2"
                >
                  {item}
                </li>
              ))}
          </div>
        )}

        {/* Additional List */}
        {Array.isArray(text4) &&
          text4.map((item, index) => (
            <div key={index}>
              <li className="text-red-600 text-base lg:text-lg uppercase font-bold italic list-decimal mt-2">
                {item}
              </li>
              {additionalText[index] && (
                <p className="text-white text-base lg:text-lg font-bold ml-3 italic">
                  {additionalText[index]}
                </p>
              )}
            </div>
          ))}

        {/* Button Section - Center for mobile, Start for lg */}
        {btn && (
          <div
            onClick={onClick}
            className="flex justify-center lg:justify-start"
          >
            <button className="p-2 w-56 text-base lg:text-lg font-semibold text-white bg-red-600 hover:bg-red-700 uppercase rounded duration-300">
              {btn}
            </button>
          </div>
        )}
      </div>

      {/* Image Section */}
      {image && (
        <div data-aos="zoom-in">
          <img className="lg:w-[600px]" src={image} alt="Agent" />
        </div>
      )}
    </div>
  );
};

export default SingleBecomeAnAgent;
