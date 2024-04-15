import PageTitle from "../../components/PageTitle/PageTitle";
import RealEstate from "../../components/RealEstate/RealEstate";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <div className="container  min-h-[calc(100vh-448px)] flex items-center justify-center">
      <div>
        <Slider />
        <PageTitle title={"Home - page"} />
        <RealEstate />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
