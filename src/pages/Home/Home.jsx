import Neighborhoods from "../../components/Neighborhoods/Neighborhoods";
import PageTitle from "../../components/PageTitle/PageTitle";
import RealEstate from "../../components/RealEstate/RealEstate";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <div className="container  min-h-[calc(100vh-448px)] flex items-center justify-center">
      <div>
        <PageTitle title={"Home - page"} />
        <Slider />
        <Neighborhoods />
        <RealEstate />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
