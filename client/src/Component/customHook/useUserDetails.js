import {useState} from "react";

const useUserDetails = ()=>{
    const [userDetails , setUserDetails] = useState({
        name:"",
        email:"",
    });
    return {
        userDetails,
        setUserDetails,
    }
}

export default useUserDetails;