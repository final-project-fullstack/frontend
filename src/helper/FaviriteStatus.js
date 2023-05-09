import axios from "axios";
// import { useStore } from "../../context/storeContext.js";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001"



export function faviriteStatus(id, status) {



    if (!status) {
        return axios
            .post(`${BACKEND_URL}/user/new-favorite`, { id: id }, { withCredentials: true })

        // .then((response) => setUser(response.data.userWithoutPassword))
        // .catch((err) => console.log(err));
    } else {

        return axios
            .post(`${BACKEND_URL}/user/delete-favorite`, { id: id }, { withCredentials: true })

        // .then((response) => setUser(response.data.userWithoutPassword))
        // .catch((err) => console.log(err));
    }

}