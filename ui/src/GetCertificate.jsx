import React from 'react';

const GetCertificate = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-center text-3xl font-bold mb-4">Get Issued Certificate</h3>
      
      <form className="w-1/2">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="certificateID">Enter Certificate ID *</label>
          <input
            type="text"
            className="border-2 border-black w-full p-2"
            id="certificateID"
            name="certificateID"
            placeholder="Enter Certificate ID"
            required
          />
        </div>
        <button
          className="border-2 bg-blue-700 hover:bg-blue-400 text-white px-4 py-2"
          type="submit"
        >
          Get Certificate
        </button>
      </form>

      <div className="mt-10 border-2 p-6 rounded shadow-lg w-1/2">
        <h4 className="text-2xl font-bold mb-4">Certificate Details</h4>
        <p><strong>Course:</strong> Certified Blockchain Associate</p>
        <p><strong>Candidate Name:</strong> John Doe</p>
        <p><strong>Grade:</strong> A</p>
        <p><strong>Issue Date:</strong> 2024-09-01</p>
      </div>
    </div>
  );
};

export default GetCertificate;
