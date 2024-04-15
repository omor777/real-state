import useDataLoad from "../../hooks/useDataLoad";
import EstateCard from "../EstateCard/EstateCard";

const RealEstate = () => {
  const { allData } = useDataLoad();

  return (
    <section className="mt-16 md:mt-20">
      <div className="container">
        <h1
          data-aos=""
          data-aos-duration="1000"
          className="text-[clamp(28px,5vw,36px)] font-bold text-center text-black/80"
        >
          Featured Property
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-xl mx-auto text-center mt-3 text-black/70"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          magni explicabo optio deserunt libero. Incidunt?
        </p>
        {/* Estate Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {allData.map((item) => (
            <EstateCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
