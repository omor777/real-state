import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonialData.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="mt-24">
      <h1
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-[clamp(28px,5vw,36px)] font-bold text-center text-black/80 "
      >
        Testimonials
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="800"
        className="max-w-xl mx-auto text-center mt-3 text-black/70 text-sm md:text-base"
      >
        Publish the best of your client testimonials and let the world know what
        a great agent or real estate agency you are. Testimonials build trust.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
