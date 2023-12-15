import React, { useEffect, useState } from 'react';

const UseCollages = () => {
    const [colleges, setColleges] =useState([])
  const [loading, setLoading] = useState(true)
  console.log(colleges)

  useEffect(()=>{
    setLoading(true)
     fetch('/Colleges.json')
     .then(res=>res.json())
     .then(data => setColleges(data))
     .catch(error=> console.log(error))
     setLoading(false)
  },[])
    return [colleges,loading]
};

export default UseCollages;