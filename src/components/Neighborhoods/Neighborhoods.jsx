const Neighborhoods = () => {
  return (
    <div className="mt-16 md:mt-20">
      <h1
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-[clamp(28px,5vw,36px)] font-bold text-center text-black/80"
      >
        Featured Neighborhoods
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="800"
        className="max-w-xl mx-auto text-center mt-3 text-black/70"
      >
        Explore our handpicked selection of featured neighborhoods, each
        offering its own unique charm and character. Find the perfect community
        to call home.
      </p>
      <div className="mt-10 grid grid-cols-12 gap-2">
        <div
          className={`bg-home1 bg-no-repeat bg-center bg-cover h-[260px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3`}
        >
          <div className="flex flex-col justify-between  h-full py-5 pl-5">
            <h3 className="text-white font-bold">Anniston</h3>
            <p className="text-white">
              15 <span>listing</span>
            </p>
          </div>
        </div>
        <div
          className={`bg-home2 bg-no-repeat bg-center bg-cover h-[260px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3`}
        >
          <div className="flex flex-col justify-between  h-full py-5 pl-5">
            <h3 className="text-white font-bold">Belltown</h3>
            <p className="text-white">
              8 <span>listing</span>
            </p>
          </div>
        </div>
        <div
          className={`bg-home3 bg-no-repeat bg-center bg-cover h-[260px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6`}
        >
          <div className="flex flex-col justify-between  h-full py-5 pl-5">
            <h3 className="text-white font-bold">Fremont</h3>
            <p className="text-white">
              3 <span>listing</span>
            </p>
          </div>
        </div>
        <div
          className={`bg-home4 bg-no-repeat bg-center bg-cover h-[260px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6`}
        >
          <div className="flex flex-col justify-between  h-full py-5 pl-5">
            <h3 className="text-white font-bold">Madrona</h3>
            <p className="text-white">
              10 <span>listing</span>
            </p>
          </div>
        </div>
        <div
          className={`bg-home5 bg-no-repeat bg-center bg-cover h-[260px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3`}
        >
          <div className="flex flex-col justify-between  h-full py-5 pl-5">
            <h3 className="text-white font-bold">Albania</h3>
            <p className="text-white">
              5 <span>listing</span>
            </p>
          </div>
        </div>
        <div
          className={`bg-home6 bg-no-repeat bg-center bg-cover h-[260px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3`}
        >
          <div className="flex flex-col justify-between  h-full py-5 pl-5">
            <h3 className="text-white font-bold">Los Angels</h3>
            <p className="text-white">
              11 <span>listing</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighborhoods;
