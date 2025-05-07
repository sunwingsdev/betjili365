import { Link } from "react-router-dom";

const HeadingContent = ({ heading, contents, contentWidth, wrap }) => {
  return (
    <div className="text-[#14815f] md:text-[#dedede] py-3">
      <h2 className="py-3 text-[12px] leading-[20px]">{heading}</h2>
      <div
        className={`flex items-center justify-start gap-4 ${
          wrap && "flex-wrap"
        }`}
      >
        {contents?.map((content) => (
          <>
            {content.route ? (
              <Link key={content.id} to={content.route} target="_blank">
                <img
                  style={{
                    width: `${contentWidth}px`,
                  }}
                  src={content.image}
                  className="h-9 filter grayscale transition-all duration-300 hover:filter-none"
                  alt={content.id} // Always include alt text for accessibility
                />
              </Link>
            ) : (
              <img
                style={{
                  width: `${contentWidth}px`,
                }}
                key={content.id}
                src={content.image}
                className="h-9 filter grayscale transition-all duration-300 hover:filter-none"
                alt={content.id} // Always include alt text for accessibility
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default HeadingContent;
