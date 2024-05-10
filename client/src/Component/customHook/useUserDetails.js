import {useState} from "react";

const useUserDetails = ()=>{
    const [userDetails , setUserDetails] = useState({
        name:"",
        email:"",
        message:"",
    });
    return {
        userDetails,
        setUserDetails,
    }
}

export default useUserDetails;