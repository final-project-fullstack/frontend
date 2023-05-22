import Header from "./Header/Header";
import Footer from "./Footer/Footer.js";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <ToastContainer />
        <div>
          <Header />
          <div className="container">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
