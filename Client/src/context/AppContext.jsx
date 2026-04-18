import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    console.log(backendUrl);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);


    const getAuthState = async()=> {
        try {
            const { data } =await axios.get(`${backendUrl}/api/user/is-auth`)
            if(data.success) {
                setIsLoggedin(true)
                getUserData()
            }
        } catch (error) {
            toast.error(data.message || "Unable to fetch user data");
        }
    }

    const getUserData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/data`, {
                withCredentials: true,
            });

            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message || "Unable to fetch user data");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Something went wrong");
        }
    };

    useEffect(()=>{
        getAuthState();
    })

    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData,
    };

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    );
};