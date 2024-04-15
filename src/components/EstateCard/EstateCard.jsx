import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const EstateCard = ({ item }) => {
  const { image, estate_title, description, segment_name, price, status, id } =
    item;
  // console.log(facilities);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" shadow-cardShadow rounded-md"
    >
      <div className="relative">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60"
        />
        <span className="inline-flex items-center gap-x-1.5 py-1 px-5  rounded-full font-semibold bg-primary text-white absolute top-3 left-3 capitalize text-sm">
          {status}
        </span>
      </div>
      <div className="flex flex-col justify-between p-4 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap">
            <p className="font-semibold text-black/80 ">{segment_name}</p>
            <h2 className="font-extrabold text-primary">{price}</h2>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mt-2">
            {estate_title}
          </h2>
          <p className="text-gray-500">{description}</p>
        </div>
        <Link to={`/property_details/${id}`} state={item}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary text-white"
          >
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default EstateCard;
