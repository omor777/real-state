import { IoLocationSharp } from "react-icons/io5";

const EstateCard = ({ item }) => {
  const {
    image,
    estate_title,
    description,
    segment_name,
    location,
    price,
    status,
    facilities,
  } = item;
  // console.log(facilities);
  return (
    <div className=" shadow-cardShadow rounded-md">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60"
        />
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-5  rounded-full font-medium bg-red-500 text-white absolute top-3 left-3 capitalize">
          {status}
        </span>
      </div>
      <div className="flex flex-col justify-between p-4 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap">
            <p className="font-semibold text-lg text-black/80">
              {segment_name}
            </p>
            <h2 className="font-extrabold text-secondary">{price}</h2>
          </div>
          <h2 className="text-2xl font-semibold tracking-wide mt-2">
            {estate_title}
          </h2>
          <p className="text-gray-500">{description}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary text-white"
        >
          View Property
        </button>
      </div>
    </div>
  );
};

export default EstateCard;

