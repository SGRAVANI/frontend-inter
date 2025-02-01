// import React from 'react'
// import { useState,useEffect } from 'react'
// const SkillCard = ({ title, skills }) => (
//     <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
//       <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//       <p className="text-gray-600">{skills}</p>
//     </div>
//   );
  
// function Skills() {
//     let [sdata,setSdata]=useState()
//            async function getData()
//            {
//              try{
//                  let res=await fetch(`http://localhost:3000/user/skills`)
//                  let data=await res.json()
//                  setSdata(data.data[0])
//                  console.log(data.data[0])
//                 }
//                 catch(e)
//                 {
             
//                 }
//            }
//              useEffect(()=>{
//               getData()  
//            },[])
//            return (
//             <div className=" mx-auto mt-10 p-6  rounded-xl  w-full px-20 md:px-20 lg:px-52">
//               <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">My Skills</h2>
//             {sdata&&  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                 {Object.entries(sdata).map(([key, value]) => (
//                   <SkillCard key={key} title={key} skills={value} />
//                 ))}
//               </div>
//              }
//             </div>
//           );
// }

// export default Skills
import React, { useState, useEffect } from "react";

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
      let res = await fetch(`http://localhost:3000/user/skills`);
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
