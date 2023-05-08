import Header from "./Header/Header";
import Footer from "./Footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
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
