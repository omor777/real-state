import PageTitle from "../../components/PageTitle/PageTitle";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

const UpdateProfile = () => {
  return (
    <section className="min-h-screen  flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="">
        <PageTitle title={"Update profile - Page"} />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default UpdateProfile;
