import React, { useState } from 'react';

import affiliateBg from "../../assets/affiliates/affiliateBg.jpg";

const AffiliateForgetPass = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleCancel = () => {
    setFormData({ username: '', email: '' });
    console.log("Form reset");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${affiliateBg})` }}>
    <div className="max-w-md mx-auto w-full p-6 bg-white  rounded">
      <form onSubmit={handleSubmit} className="space-y-4 text-[#343434] font-semibold">
        <div>
          <h3 className="mb-1 ">Username</h3>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="w-full px-4 py-2 border  border-[#384050] text-black rounded"
          />
        </div>
        <div>
          <h3 className="mb-1">Email</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-4 py-2 border  border-[#384050] text-black rounded"
          />
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <button
            type="submit"
            className="bg-[#465064]  px-4 py-2 rounded text-white"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-[#ccc] hover:bg-[#465064] px-4 py-2 rounded text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AffiliateForgetPass;
