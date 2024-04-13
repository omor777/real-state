import PageTitle from "../../components/PageTitle/PageTitle";
import RealEstate from "../../components/RealEstate/RealEstate";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

const Home = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div>
        <PageTitle title={"Home - page"} />
        <RealEstate />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
