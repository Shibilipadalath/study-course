import ServiceCard from "./ServiceCard";
import { IoSearch, IoFilter } from "react-icons/io5";

export default function ServicesSection() {
  const services = [
    {
      image: "/images/service1.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      tutor: "John Wick",
      tutorImg: "/images/profile.jpeg",
    },
    {
      image: "/images/service2.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      tutor: "John Wick",
      tutorImg: "/images/profile.jpeg",
    },
    {
      image: "/images/service3.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      tutor: "John Wick",
      tutorImg: "/images/profile.jpeg",
    },
    {
      image: "/images/service4.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      tutor: "John Wick",
      tutorImg: "/images/profile.jpeg",
    },
    {
      image: "/images/service5.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      tutor: "John Wick",
      tutorImg: "/images/profile.jpeg",
    },
    {
      image: "/images/service6.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      tutor: "John Wick",
      tutorImg: "/images/profile.jpeg",
    },
  ];

  return (
    <section className="pt-2 py-12 bg-[#F4F4F4]">


      {/* Header + Search */}
      <div className="container mx-auto px-6 lg:px-24 mb-14 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Tag + Title */}
        <div>
          <span className="bg-[#CF6943] text-white text-[12px] px-4 py-1 rounded-full shadow-md">
            Our Services
          </span>
          <h2 className="text-[28px] md:text-[36px] font-semibold mt-3 text-[#070606]">
            Explore Our Services
          </h2>
        </div>
        
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
}
