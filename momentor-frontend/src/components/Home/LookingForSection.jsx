// import { IoSchoolOutline, IoPersonOutline } from "react-icons/io5";

// export default function LookingForSection() {
//   return (
//     <section className="py-24 bg-[#F4F4F4]">
      
//       {/* ---------- HEADING ---------- */}
//       <div className="text-center max-w-2xl mx-auto px-6">
//         <h2 className="text-[32px] md:text-[40px] font-semibold text-[#070606]">
//           What Are You Looking For?
//         </h2>

//         <p className="text-gray-600 text-[15px] mt-4 text-center tracking-normal leading-relaxed">
//           Whether you want to learn future skills, get real career direction, or join our 
//           global opportunities — choose your path and begin shaping your future with Momentor.
//         </p>
//       </div>

//       {/* ---------- CARDS ---------- */}
//       <div className="mt-14 container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10">

//         {/* ===== MENTOR / TRAINER CARD ===== */}
//         <div
//           className="bg-white p-10 rounded-2xl text-center shadow-md transition-all duration-300
//           hover:shadow-xl hover:-translate-y-1"
//         >
//           {/* Icon */}
//           <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#FFEFEA]">
//             <IoPersonOutline size={34} className="text-[#CF6943]" />
//           </div>

//           <h3 className="text-[20px] font-semibold text-[#070606] mt-5">
//             Want to Mentor or Train Youth?
//           </h3>

//           <p className="text-gray-500 text-[14px] mt-3 leading-[1.6] max-w-xs mx-auto">
//             Join our mission and become part of India&apos;s first education journalism 
//             and future-skills mentorship movement.
//           </p>

//           <button
//             className="mt-6 bg-[#CF6943] text-white px-8 py-3 rounded-lg font-medium
//             hover:bg-[#B85A39] transition"
//           >
//             Apply Now
//           </button>
//         </div>

//         {/* ===== STUDENT / LEARNER CARD ===== */}
//         <div
//           className="bg-[#FFE6DE] p-10 rounded-2xl text-center shadow-md transition-all duration-300
//           hover:shadow-xl hover:-translate-y-1"
//         >
//           {/* Icon */}
//           <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white">
//             <IoSchoolOutline size={34} className="text-[#CF6943]" />
//           </div>

//           <h3 className="text-[20px] font-semibold text-[#070606] mt-5">
//             Want to Learn and Grow With Us?
//           </h3>

//           <p className="text-gray-600 text-[14px] mt-3 leading-[1.6] max-w-xs mx-auto">
//             Discover future skills, gain real career clarity, access mentorship, 
//             and explore global pathways designed for youth.
//           </p>

//           <button
//             className="mt-6 bg-white text-[#070606] px-8 py-3 rounded-lg font-medium
//             hover:bg-[#CF6943] hover:text-white transition"
//           >
//             Start Learning
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }
import { IoSchoolOutline, IoPersonOutline } from "react-icons/io5";

export default function LookingForSection() {
  return (
    <section className="py-24 bg-black">
      
      {/* ---------- HEADING ---------- */}
      <div className="text-center max-w-2xl mx-auto px-6">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-white">
          What Are You Looking For?
        </h2>

        <p className="text-gray-400 text-[15px] mt-4 tracking-normal leading-relaxed">
          Whether you want to learn future skills, get real career direction, or join our 
          global opportunities — choose your path and begin shaping your future with Momentor.
        </p>
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="mt-14 container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ===== MENTOR / TRAINER CARD ===== */}
        <div className="bg-white p-10 rounded-2xl text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#FFEFEA]">
            <IoPersonOutline size={34} className="text-[#CF6943]" />
          </div>

          <h3 className="text-[20px] font-semibold text-[#070606] mt-5">
            Want to Mentor or Train Youth?
          </h3>

          <p className="text-gray-500 text-[14px] mt-3 leading-[1.6] max-w-xs mx-auto">
            Join our mission and become part of India&apos;s first education journalism 
            and future-skills mentorship movement.
          </p>

          {/* GRADIENT BUTTON */}
          <button
  className="
    mt-6 px-8 py-3 rounded-lg font-medium text-white
    bg-gradient-to-r from-[#FF9A6B] via-[#CF6943] to-[#2A2A2A]
    shadow-[0_6px_20px_rgba(255,154,107,0.35)]
    hover:from-[#2A2A2A] hover:via-[#CF6943] hover:to-[#FF9A6B]
    transition-all duration-300
  "
>
  Apply Now
</button>

        </div>

        {/* ===== STUDENT / LEARNER CARD ===== */}
        <div className="bg-[#FFE6DE] p-10 rounded-2xl text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white">
            <IoSchoolOutline size={34} className="text-[#CF6943]" />
          </div>

          <h3 className="text-[20px] font-semibold text-[#070606] mt-5">
            Want to Learn and Grow With Us?
          </h3>

          <p className="text-gray-600 text-[14px] mt-3 leading-[1.6] max-w-xs mx-auto">
            Discover future skills, gain real career clarity, access mentorship, 
            and explore global pathways designed for youth.
          </p>

          {/* GRADIENT BUTTON */}
          <button
  className="
    mt-6 px-8 py-3 rounded-lg font-medium text-white
    bg-gradient-to-r from-[#FF9A6B] via-[#CF6943] to-[#2A2A2A]
    shadow-[0_6px_20px_rgba(255,154,107,0.35)]
    hover:from-[#2A2A2A] hover:via-[#CF6943] hover:to-[#FF9A6B]
    transition-all duration-300
  "
>
  Start Learning
</button>

        </div>

      </div>
    </section>
  );
}
