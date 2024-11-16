
import Our_TestimonialsProps from "./Our_TestimonialsProps";
import Image1 from "../assets/Image (5).png";
import Image2 from "../assets/Image (6).png";
import Image3 from "../assets/Image (7).png";
import Image4 from "../assets/Image (8).png";

const Our_Testimonials = () => {
  return (
    <section className="bg-gray-300 py-5">
      <div className="container mx-auto">
        <div className="testimonial-left px-5 py-2 md:flex md:justify-between">
          <div>
            <h2 className="font-semibold text-2xl">Our Testimonials</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem?
            </p>
          </div>
          <div>
            <button className="bg-white px-4  py-2">view all</button>
          </div>
        </div>
        <div className="testimonial-bottom md:flex md:flex-wrap md:justify-between">
          <div className="md:w-[48%] py-3">
            <Our_TestimonialsProps
              p1="The we design course provided a solid foundation for me. ther instructios were knowledgeable and supportetive."
              Image={Image1}
              p2="Sarah L"
              p3="Read Full Story"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_TestimonialsProps
              p1="The we design course provided a solid foundation for me. ther instructios were knowledgeable and supportetive."
              Image={Image2}
              p2="Sarah L"
              p3="Read Full Story"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_TestimonialsProps
              p1="The we design course provided a solid foundation for me. ther instructios were knowledgeable and supportetive."
              Image={Image3}
              p2="Sarah L"
              p3="Read Full Story"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_TestimonialsProps
              p1="The we design course provided a solid foundation for me. ther instructios were knowledgeable and supportetive."
              Image={Image4}
              p2="Sarah L"
              p3="Read Full Story"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Testimonials;
