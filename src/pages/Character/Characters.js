import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import routes from "./routes";

const Character = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => {
          return <Route key={route.id} {...route} />;
        })}
      </Routes>
    </Layout>
  );
};

export default Character;
