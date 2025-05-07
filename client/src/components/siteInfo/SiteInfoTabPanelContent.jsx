const SiteInfoTabPanelContent = ({ data }) => {
  return (
    <div className="flex flex-col gap-10 text-white">
      {data?.title && <h2 className="text-2xl font-bold">{data.title}</h2>}

      {Array.isArray(data?.sections) && data.sections.length > 0 ? (
        <div className="flex flex-col gap-6">
          {data.sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              {section?.heading && (
                <h6 className="font-semibold">{section.heading}</h6>
              )}
              {section?.text?.split("\n").map((line, i) => (
                <p key={i} className="text-sm text-gray-400">
                  {line}
                  <br />
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">কোন তথ্য পাওয়া যায়নি।</p>
      )}
    </div>
  );
};

export default SiteInfoTabPanelContent;
