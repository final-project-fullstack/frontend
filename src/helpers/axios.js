import axios from "axios";
import { useContext, useState } from "react";
import { userContext } from "../context/storeContext";



export const CheckCookie = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [user, setUser] = useState([])
    const { setIsLoggedIn, setUser } = useContext(userContext)
    console.log("setIsLoggedIn")


    // axios
    //     .get("http://localhost:3001/user/checkCookie", {
    //         withCredentials: true,
    //     })
    //     .then((response) => ([setIsLoggedIn(response.data._id ? true : false, setUser(response.data))]))
    //     // .then((response) => setUser(response.data))
    //     .catch((err) => console.log(err));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)

}

// export default checkCookie;