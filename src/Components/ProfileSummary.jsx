import React, { useEffect, useState } from 'react'
import { endpoint } from '../data'
function ProfileSummary() {
  
    let [pdata,setPdata]=useState({})
  
  async function getData()
  {
    try{
        let res=await fetch(`${endpoint}/personal`)
        let data=await res.json()
        setPdata(data.data[0])
        console.log(data.data[0])
       }
       catch(e)
       {
    
       }
  }
    useEffect(()=>{
     getData()  
  },[])
    return (
    <div className='text-center mt-[20px] mx-auto'>
     <p className='text-center'>{pdata.name?pdata.name:""}</p>
     <p>{pdata.email?pdata.email:""}</p>
     <p>{pdata.profile_summary?pdata.profile_summary:""}</p>
    </div>
  )
}

export default ProfileSummary