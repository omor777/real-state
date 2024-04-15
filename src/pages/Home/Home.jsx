import Neighborhoods from "../../components/Neighborhoods/Neighborhoods";
import PageTitle from "../../components/PageTitle/PageTitle";
import RealEstate from "../../components/RealEstate/RealEstate";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <div className="container px-4 md:px-0">
      <div>
        <PageTitle title={"Home | Nestwise"} />
        <Slider />
        <Neighborhoods />
        <RealEstate />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
