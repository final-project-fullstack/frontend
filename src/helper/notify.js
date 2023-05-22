import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export function favorite(msg) {
    const added = (msg) => toast.success(msg);
    const deleted = (msg) => toast.info(msg);
    const error = (msg) => toast.error(msg);
    console.log(msg.message)
    if (msg === "Your Fovarite added") {
        added(msg)
    }
    if (msg === "Favorite deleted!") {
        deleted(msg)
    }
    else {
        error(msg.message)
    }
}  