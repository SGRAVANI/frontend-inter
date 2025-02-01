import React, { useEffect, useState } from 'react'

function ProfileSummary() {
  
    let [pdata,setPdata]=useState([])
  
  async function getData()
  {
    try{
        let res=await fetch("http://localhost:3000/personaldata")
        let data=await res.json()
        setPdata(data)
        console.log(pdata)
       }
       catch(e)
       {
    
       }
  }
    useEffect(()=>{
     getData()  
  },[])
    return (
    <div>
    ProfileSummary
    </div>
  )
}

export default ProfileSummary