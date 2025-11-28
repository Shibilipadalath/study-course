import ServiceCard from "./ServiceCard";
import { IoSearch, IoFilter } from "react-icons/io5";

export default function ServicesSection() {
  const services = [
    { image: "/images/services/service1.png", title: "Lorem ipsum dolor sit amet consectetur.", tutor: "Jhon Wick" },
    { image: "/images/services/service2.png", title: "Lorem ipsum dolor sit amet consectetur.", tutor: "Jhon Wick" },
    { image: "/images/services/service3.png", title: "Lorem ipsum dolor sit amet consectetur.", tutor: "Jhon Wick" },
    { image: "/images/services/service4.png", title: "Lorem ipsum dolor sit amet consectetur.", tutor: "Jhon Wick" },
    { image: "/images/services/service5.png", title: "Lorem ipsum dolor sit amet consectetur.", tutor: "Jhon Wick" },
    { image: "/images/services/service6.png", title: "Lorem ipsum dolor sit amet consectetur.", tutor: "Jhon Wick" },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      
      {/* Header title & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        
        <div>
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md">
            Our Services
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-gray-900">
            Explore Our Services
          </h2>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border shadow-sm bg-white px-4 py-2 rounded-lg max-w-xs w-full">
          <IoSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none flex-1 text-sm"
          />
          <button className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
            <IoFilter size={18} />
          </button>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
