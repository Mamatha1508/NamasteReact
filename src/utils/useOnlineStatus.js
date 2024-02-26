import { useState } from "react";

const useOnlineStatus=()=>{
    const [useOnlineStatus,setOnlineStatus]=useState(true);
  
    window.addEventListener('online',()=>{
    setOnlineStatus(true);
    })
    window.addEventListener('offline',()=>{
        setOnlineStatus(false);
        })

    return useOnlineStatus;
}

export default useOnlineStatus;