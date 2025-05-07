import { Link } from "react-router-dom";

const HeadingImageContent = ({ heading, contents, contentWidth }) => {
  return (
    <div className="text-[#14815f] md:text-[#dedede] py-3">
      <h2 className="py-3 text-[12px] leading-[20px]">{heading}</h2>
      <div className="md:flex items-center justify-start gap-3 grid grid-cols-2">
        {contents?.map((content) => (
          <div key={content.id} className="flex gap-4">
            <img
              style={{
                width: `${contentWidth}px`,
              }}
              key={content.id}
              src={content.image}
              className={heading !== "স্পন্সরশিপ" && "h-8"}
              alt={content.id} // Always include alt text for accessibility
            />
            <div className="flex flex-col gap-3">
              {content.route ? (
                <Link to={content.route}>
                  <h2
                    className={`text-sm text-white font-medium ${
                      content.route && "hover:text-[#14815f]"
                    }`}
                  >
                    {content.title}
                  </h2>
                </Link>
              ) : (
                <h2 className="text-sm text-white font-medium">
                  {content.title}
                </h2>
              )}
              <p className="text-xs text-[#999]">{content.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadingImageContent;
