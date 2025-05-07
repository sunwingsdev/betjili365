import React, { useContext, useState } from "react";
import { LanguageContext } from "@/Context/LanguageContext";

const AffForms = () => {
  const { language } = useContext(LanguageContext);
  const isBangla = language === "bn";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const fields = [
    {
      name: "firstName",
      label: isBangla ? "ফার্স্ট নাম" : "First Name",
      type: "text",
    },
    {
      name: "lastName",
      label: isBangla ? "লাস্ট নাম" : "Last Name",
      type: "text",
    },
    {
      name: "email",
      label: isBangla ? "ইমেইল" : "Email",
      type: "email",
    },
    {
      name: "message",
      label: isBangla ? "মেসেজ" : "Message",
      type: "textarea",
    },
  ];

  return (
    <div className="bg-AffiliatePrimaryBg">
      <div className="w-full max-w-5xl mx-auto p-4  pb-[10%]">
        <div className="bg-primary-primaryColor text-white  px-4 py-8 rounded">
          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col w-full">
                <label
                  htmlFor={field.name}
                  className="text-white mb-1 font-semibold"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="p-2 rounded-md bg-formBgColor text-white outline-none"
                    rows={4}
                    required
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="p-2 rounded-md bg-formBgColor text-white outline-none"
                    required
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="bg-textSecondaryColor hover:bg-opacity-80 text-white font-semibold py-2 px-6 rounded-md w-full"
            >
              {isBangla ? "সেন্ড করুন" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AffForms;
