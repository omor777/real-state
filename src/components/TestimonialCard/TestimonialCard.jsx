import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const TestimonialCard = ({ testimonial }) => {
  const { image, name, profession, review_text } = testimonial;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="p-11 shadow-cardShadow flex flex-col"
    >
      <div className="flex items-center gap-3">
        <img src={image} className="size-12 rounded-full object-cover" />
        <div>
          <h3 className="text-xl font-semibold text-black/80">{name}</h3>
          <p className="capitalize text-gray-600">{profession}</p>
        </div>
      </div>
      <p className="mt-4">{review_text}</p>
      <div className="flex items-center gap-1 mt-4">
        <FaStar className="text-amber-400" />
        <FaStar className="text-amber-400" />
        <FaStar className="text-amber-400" />
        <FaStar className="text-amber-400" />
        <FaStar className="text-amber-400" />
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

export default TestimonialCard;
