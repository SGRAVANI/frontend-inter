
import React, { useState, useEffect } from "react";
import { endpoint } from "../data";
const colors = [
  "bg-gradient-to-r from-blue-500 to-indigo-500",
  "bg-gradient-to-r from-green-500 to-teal-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-yellow-500 to-orange-500",
  "bg-gradient-to-r from-red-500 to-pink-500",
];

const SkillCard = ({ title, skills, index }) => (
  <div
    className={`p-6 rounded-xl shadow-xl text-white ${colors[index % colors.length]} transition-transform transform hover:scale-105`}
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{skills}</p>
  </div>
);

function Skills() {
  const [sdata, setSdata] = useState(null);

  async function getData() {
    try {
      let res = await fetch(`${endpoint}/user/skills`);
      let data = await res.json();
      setSdata(data.data[0]);
      console.log(data.data[0]);
    } catch (e) {
      console.error("Error fetching data", e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-auto mt-10 p-6 w-full px-6 md:px-20 lg:px-52">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">My Skills</h2>
      {sdata && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(sdata).map(([key, value], index) => (
            <SkillCard key={key} title={key} skills={value} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
