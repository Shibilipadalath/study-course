// "use client";

// import { useState, useEffect } from "react";
// import ServiceCard from "./ServiceCard";
// import Link from "next/link";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

// export default function ServicesSection() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/services`, {
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           console.error("Failed to fetch services");
//           return;
//         }

//         const data = await res.json();
//         const allServices = data.services || [];
//         // Limit to 6 services
//         setServices(allServices.slice(0, 6));
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <section className="pt-2 py-12 bg-[#F4F4F4]">
//       {/* Header + Search */}
//       <div className="container mx-auto px-6 lg:px-24 mb-14 flex flex-col md:flex-row justify-between items-center gap-6">
//         {/* Tag + Title */}
//         <div>
//           <span className="bg-[#CF6943] text-white text-[12px] px-4 py-1 rounded-full shadow-md">
//             Our Services
//           </span>
//           <h2 className="text-[28px] md:text-[36px] font-semibold mt-3 text-[#070606]">
//             Explore Our Services
//           </h2>
//         </div>

//         {/* View More Button */}
//         <Link
//           href="/services"
//           className="bg-[#CF6943] text-white px-6 py-2 rounded-lg hover:bg-[#B85A35] transition-colors font-medium"
//         >
//           View More
//         </Link>
//       </div>

//       {/* Cards Grid */}
//       {loading ? (
//         <div className="container mx-auto px-6 lg:px-24 text-center py-10">
//           <p className="text-gray-600">Loading services...</p>
//         </div>
//       ) : services.length === 0 ? (
//         <div className="container mx-auto px-6 lg:px-24 text-center py-10">
//           <p className="text-gray-600">No services available</p>
//         </div>
//       ) : (
//         <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service) => (
//             <ServiceCard
//               key={service.id}
//               id={service.id}
//               image={service.image}
//               title={service.title}
//               description={service.description}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/services`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch services");
          return;
        }

        const data = await res.json();
        const allServices = data.services || [];
        setServices(allServices.slice(0, 6));
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="pt-2 py-12 bg-black">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-24 mb-14 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Tag + Title */}
        <div>
          <span className="bg-[#B08D55] text-white text-[12px] px-4 py-1 rounded-full shadow-md">
            Our Services
          </span>
          <h2 className="text-[28px] md:text-[36px] font-semibold mt-3 text-white">
            Explore Our Services
          </h2>
        </div>

        {/* View More Button (Smooth Gold Gradient) */}
        <Link
          href="/services"
          className="
            px-7 py-2 rounded-lg font-medium text-white
            bg-gradient-to-r from-[#B08D55] via-[#D8B67C] to-[#B08D55]
            shadow-[0_8px_28px_rgba(176,141,85,0.4)]
            hover:from-[#B08D55] hover:via-[#C4A060] hover:to-[#B08D55]
            transition-all duration-300 cursor-pointer
          "
        >
          View More
        </Link>
      </div>

      {/* Cards Grid */}
      {loading ? (
        <div className="container mx-auto px-6 lg:px-24 text-center py-10">
          <p className="text-gray-400">Loading services...</p>
        </div>
      ) : services.length === 0 ? (
        <div className="container mx-auto px-6 lg:px-24 text-center py-10">
          <p className="text-gray-400">No services available</p>
        </div>
      ) : (
        <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}
