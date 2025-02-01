
import React, { useState, useEffect } from "react";
import { endpoint } from "../data";

function Education() {
  const [edata, setEdata] = useState([]);
    const [loading,setIsloading]=useState(false)  
  async function getData() {
    try {
        setIsloading(true)
      let res = await fetch(`${endpoint}/user/education`);
      let data = await res.json();
      setEdata(data.data);
      console.log(data.data);
      setIsloading(false)
    } catch (e) {
      console.error("Error fetching data", e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-auto mt-10 max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Education Details</h2>
      {loading?<div className="text-center">data is loading...</div>:
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full border-collapse text-left text-sm">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Qualification/Degree</th>
              <th className="px-6 py-3">Specialization</th>
              <th className="px-6 py-3">College/University</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {edata.map((ele, index) => (
              <tr
                key={ele.id}
                className={`border-b transition duration-200 ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-white"
                } hover:bg-blue-200`}
              >
                <td className="px-6 py-4 font-medium text-gray-800">{index + 1}</td>
                <td className="px-6 py-4">{ele.degree}</td>
                <td className="px-6 py-4">{ele.specialization}</td>
                <td className="px-6 py-4">{ele.college}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
    </div>
  );
}

export default Education;
