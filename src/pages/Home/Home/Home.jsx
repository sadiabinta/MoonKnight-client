import Arrived from "../Arrived/Arrived";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Arrosa | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Arrived></Arrived>
    </div>
  );
};

export default Home;
