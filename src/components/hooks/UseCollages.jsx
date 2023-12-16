import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseCollages = () => {
 
  const { data: colleges = [],refetch } = useQuery({
    queryKey: ["colleges"], queryFn: async () => {
        const res = await axios.get("http://localhost:5000/colleges");
        console.log(colleges)
        return res.data;
    }
});
    return [colleges]
};

export default UseCollages;