import { useParams, useLoaderData } from "react-router-dom";
// import useDataLoad from "../../hooks/useDataLoad";
// import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

import SimpleGoogleMap from "../../components/GoogleMap/GoogleMap";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

const PropertyDetails = () => {
  let { id } = useParams();
  const properties = useLoaderData();

  const property = properties.filter((p) => p.id === Number(id));

  const {
    image,
    estate_title,
    long_description,
    segment_name,
    location,
    price,
    status,
    facilities,
    area,
    lat,
    lon,
  } = property[0] || [];

  console.log(image);

  return (
    <section className="min-h-screen  flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="container mt-36 mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 border border-gray-200">
          <div className="relative">
            <img
              src={image}
              alt=""
              className="object-cover object-center w-full"
            />
          </div>
          <div className="flex flex-col justify-between p-4 ">
            <div className="space-x-4 mt-2">
              <span className="text-sm bg-primary duration-500 cursor-pointer capitalize text-white rounded px-3.5 py-1">
                for {status}
              </span>
              <span className="text-sm bg-primary duration-500 cursor-pointer capitalize text-white rounded px-4 py-1">
                {segment_name}
              </span>
            </div>
            <div className="lg:flex items-center justify-between mt-5">
              <div className="space-y-3">
                <h1 className="text-[clamp(22px,3vw,30px)] font-bold text-black/80">
                  {estate_title}
                </h1>
                <p className="flex items-center gap-2">
                  <IoLocationOutline /> {location}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-[22px] font-bold text-primary"> {price}</h2>
                <p className="flex items-center gap-2  font-medium text-black/70">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M357.143 0H42.8571C31.4907 0 20.5898 4.50961 12.5526 12.5368C4.51529 20.5639 0 31.4511 0 42.8032V356.694C0 368.046 4.51529 378.933 12.5526 386.96C20.5898 394.987 31.4907 399.497 42.8571 399.497H357.143C368.509 399.497 379.41 394.987 387.447 386.96C395.485 378.933 400 368.046 400 356.694V42.8032C400 31.4511 395.485 20.5639 387.447 12.5368C379.41 4.50961 368.509 0 357.143 0ZM371.429 356.694C371.429 360.478 369.923 364.107 367.244 366.782C364.565 369.458 360.932 370.961 357.143 370.961H171.429V299.623H314.286C318.075 299.623 321.708 298.119 324.387 295.444C327.066 292.768 328.571 289.139 328.571 285.355C328.571 281.571 327.066 277.942 324.387 275.266C321.708 272.59 318.075 271.087 314.286 271.087H157.143C153.354 271.087 149.72 272.59 147.041 275.266C144.362 277.942 142.857 281.571 142.857 285.355V370.961H42.8571C39.0683 370.961 35.4347 369.458 32.7556 366.782C30.0765 364.107 28.5714 360.478 28.5714 356.694V171.213H142.857V199.748C142.857 203.532 144.362 207.162 147.041 209.837C149.72 212.513 153.354 214.016 157.143 214.016C160.932 214.016 164.565 212.513 167.244 209.837C169.923 207.162 171.429 203.532 171.429 199.748V114.142C171.429 110.358 169.923 106.729 167.244 104.053C164.565 101.377 160.932 99.8742 157.143 99.8742C153.354 99.8742 149.72 101.377 147.041 104.053C144.362 106.729 142.857 110.358 142.857 114.142V142.677H28.5714V42.8032C28.5714 39.0192 30.0765 35.3901 32.7556 32.7144C35.4347 30.0387 39.0683 28.5355 42.8571 28.5355H242.857V185.481C242.857 189.265 244.362 192.894 247.041 195.57C249.72 198.245 253.354 199.748 257.143 199.748H314.286C318.075 199.748 321.708 198.245 324.387 195.57C327.066 192.894 328.571 189.265 328.571 185.481C328.571 181.697 327.066 178.068 324.387 175.392C321.708 172.716 318.075 171.213 314.286 171.213H271.429V28.5355H357.143C360.932 28.5355 364.565 30.0387 367.244 32.7144C369.923 35.3901 371.429 39.0192 371.429 42.8032V356.694Z"
                      fill="#222222"
                    ></path>
                  </svg>
                  {area}
                </p>
              </div>
            </div>
            <p className="font-bold text-black/70 mt-4 ">Facility</p>
            <div className="mt-2 flex items-center flex-wrap gap-3">
              {facilities.map((facility, index) => (
                <span
                  className="text-xs border border-primary px-2.5 py-0.5 rounded-full capitalize font-semibold text-primary"
                  key={index}
                >
                  {facility}
                </span>
              ))}
            </div>

            <p className="font-bold text-black/70 mb-2 mt-4">Description</p>
            <p className="text-black/70 text-justify leading-[26px]">
              {long_description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <SimpleGoogleMap latitude={lat} longitude={lon} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PropertyDetails;
