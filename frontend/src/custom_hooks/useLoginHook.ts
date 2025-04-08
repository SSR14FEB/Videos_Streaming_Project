import React, { useEffect } from 'react'
import { useState } from 'react';
export default function useLoginHook() {
    const [res, setRes] = useState({});
   useEffect(()=>{
    (async()=>{
        try {
            const response = await fetch(
              "http://localhost:8201/users/get-current-user",
              { method: "GET", credentials: "include" }
            );
            const res = await response.json();
            setRes(res.data)
            console.log("The JWT sent response:", res);
          } catch (error) {
            console.log("The JWT error:", error);
          }
    })()
},[])
return (res)
}
