
import React, { useEffect, useState } from "react";
import { endpoint } from "../data";

function ProfileSummary() {
  const [pdata, setPdata] = useState({});
  const [loading,setIsloading]=useState(false)
  async function getData() {
    try {
        setIsloading(true)
      let res = await fetch(`${endpoint}/personal`);
      let data = await res.json();
      setPdata(data.data[0]);
      console.log(data.data[0]);
      setIsloading(false)
    } catch (e) {
      console.error("Failed to fetch data", e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center">
        {loading?<div className="text-center">data is loading...</div>:<>
      <div className="mb-4">
        <img
          src={pdata.img}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{pdata.name || "N/A"}</h2>
      <p className="text-gray-600">{pdata.email || "N/A"}</p>
      <p className="mt-3 text-gray-700 text-sm">{pdata.profile_summary || "No summary available."}</p></> }
    </div>
  );
}

export default ProfileSummary;
