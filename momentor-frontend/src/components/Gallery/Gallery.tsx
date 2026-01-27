// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Gallery, GalleryCategory } from "@/types/gallery-types";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

// export default function GallerySection() {
//   const [categories, setCategories] = useState<GalleryCategory[]>([]);
//   const [galleries, setGalleries] = useState<Gallery[]>([]);
//   const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch categories and galleries in parallel
//         const [categoriesRes, galleriesRes] = await Promise.all([
//           fetch(`${API_BASE_URL}/api/gallery-category`, { cache: "no-store" }),
//           fetch(`${API_BASE_URL}/api/gallery`, { cache: "no-store" }),
//         ]);

//         if (categoriesRes.ok) {
//           const categoriesData = await categoriesRes.json();
//           const fetchedCategories = categoriesData.categories || [];
//           setCategories(fetchedCategories);

//           // Set first category as active if categories exist
//           if (fetchedCategories.length > 0) {
//             setActiveCategoryId(fetchedCategories[0].id);
//           }
//         }

//         if (galleriesRes.ok) {
//           const galleriesData = await galleriesRes.json();
//           setGalleries(galleriesData.galleries || []);
//         }
//       } catch (error) {
//         console.error("Error fetching gallery data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter galleries by active category
//   const filteredGalleries = activeCategoryId
//     ? galleries.filter((gallery) => gallery.categoryId === activeCategoryId)
//     : galleries;

//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
//         {/* Heading */}
//         <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606]">
//           Explore Our Gallery
//         </h2>

//         <p className="text-gray-600 text-[13px] md:text-[14px] mt-3 max-w-3xl mx-auto text-center tracking-normal leading-relaxed">
//           A glimpse into our world — youth learning, growing, building skills,
//           gaining confidence, and experiencing life beyond classrooms. Explore
//           moments from workshops, internships, events, travels, and real student
//           journeys that define the spirit of Momentor.
//         </p>

//         {/* Tabs */}
//         {loading ? (
//           <div className="flex justify-center gap-6 mt-8">
//             <div className="text-gray-600">Loading categories...</div>
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="flex justify-center gap-6 mt-8">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategoryId(category.id)}
//                 className={`text-sm md:text-[15px] pb-2 border-b-2 transition ${
//                   activeCategoryId === category.id
//                     ? "border-[#CF6943] text-[#CF6943] font-medium"
//                     : "border-transparent text-gray-600 hover:text-black"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         ) : null}

//         {/* ---- 3x2 Grid Layout (all cards aligned) ---- */}
//         {loading ? (
//           <div className="mt-10 text-center">
//             <p className="text-gray-600">Loading gallery images...</p>
//           </div>
//         ) : filteredGalleries.length === 0 ? (
//           <div className="mt-10 text-center">
//             <p className="text-gray-600">
//               No images available in this category
//             </p>
//           </div>
//         ) : (
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredGalleries.map((gallery) => {
//               const isValidUrl =
//                 gallery.image &&
//                 typeof gallery.image === "string" &&
//                 gallery.image.trim() !== "" &&
//                 (gallery.image.startsWith("http://") ||
//                   gallery.image.startsWith("https://") ||
//                   gallery.image.startsWith("/"));

//               return (
//                 <motion.div
//                   key={gallery.id}
//                   whileHover={{ scale: 1.02 }}
//                   className="rounded-xl overflow-hidden"
//                 >
//                   {isValidUrl ? (
//                     <Image
//                       src={gallery.image}
//                       alt={gallery.category?.name || "Gallery image"}
//                       width={450}
//                       height={350}
//                       className="w-full h-[260px] md:h-80 object-cover rounded-xl"
//                     />
//                   ) : (
//                     <div className="w-full h-[260px] md:h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
//                       No Image
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gallery, GalleryCategory } from "@/types/gallery-types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export default function GallerySection() {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, galleriesRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/gallery-category`, { cache: "no-store" }),
          fetch(`${API_BASE_URL}/api/gallery`, { cache: "no-store" }),
        ]);

        if (categoriesRes.ok) {
          const categoriesData = await categoriesRes.json();
          const fetchedCategories = categoriesData.categories || [];
          setCategories(fetchedCategories);

          if (fetchedCategories.length > 0) {
            setActiveCategoryId(fetchedCategories[0].id);
          }
        }

        if (galleriesRes.ok) {
          const galleriesData = await galleriesRes.json();
          setGalleries(galleriesData.galleries || []);
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredGalleries = activeCategoryId
    ? galleries.filter((gallery) => gallery.categoryId === activeCategoryId)
    : galleries;

  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">

        {/* Heading */}
        <h2 className="text-[30px] md:text-[36px] font-semibold text-white">
          Explore Our Gallery
        </h2>

        <p className="text-gray-300 text-[13px] md:text-[14px] mt-3 max-w-3xl mx-auto tracking-normal leading-relaxed">
          A glimpse into our world — youth learning, growing, building skills,
          gaining confidence, and experiencing life beyond classrooms. Explore
          moments from workshops, internships, events, travels, and real student
          journeys that define the spirit of Momentor.
        </p>

        {/* Tabs */}
        {loading ? (
          <div className="flex justify-center gap-6 mt-8">
            <div className="text-gray-400">Loading categories...</div>
          </div>
        ) : categories.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`text-sm md:text-[15px] pb-2 border-b-2 transition
                  ${activeCategoryId === category.id
                    ? "border-[#B08D55] text-[#B08D55] font-medium"
                    : "border-transparent text-gray-400 hover:text-white"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        ) : null}

        {/* Gallery Grid */}
        {loading ? (
          <div className="mt-10 text-center">
            <p className="text-gray-400">Loading gallery images...</p>
          </div>
        ) : filteredGalleries.length === 0 ? (
          <div className="mt-10 text-center">
            <p className="text-gray-400">
              No images available in this category
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGalleries.map((gallery) => {
              const isValidUrl =
                gallery.image &&
                typeof gallery.image === "string" &&
                gallery.image.trim() !== "" &&
                (gallery.image.startsWith("http://") ||
                  gallery.image.startsWith("https://") ||
                  gallery.image.startsWith("/"));

              return (
                <motion.div
                  key={gallery.id}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden"
                >
                  {isValidUrl ? (
                    <Image
                      src={gallery.image}
                      alt={gallery.category?.name || "Gallery image"}
                      width={450}
                      height={350}
                      className="w-full h-[260px] md:h-80 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-[260px] md:h-80 bg-[#111] rounded-xl flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
