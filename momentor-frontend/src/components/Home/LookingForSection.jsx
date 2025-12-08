import { IoSchoolOutline, IoPersonOutline } from "react-icons/io5";

export default function LookingForSection() {
  return (
    <section className="py-24 bg-[#F4F4F4]">
      
      {/* ---------- HEADING ---------- */}
      <div className="text-center max-w-2xl mx-auto px-6">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#070606]">
          What You Looking For?
        </h2>

        <p className="text-gray-600 text-[15px] mt-4 leading-[1.7]">
          Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
          Pulvinar sit aliquam ipsum rhoncus turpis pellentesque condimentum orci.
        </p>
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="mt-14 container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ===== TEACHER CARD ===== */}
        <div
          className="bg-white p-10 rounded-2xl text-center shadow-md transition-all duration-300
          hover:shadow-xl hover:-translate-y-1"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#FFEFEA]">
            <IoPersonOutline size={34} className="text-[#CF6943]" />
          </div>

          <h3 className="text-[20px] font-semibold text-[#070606] mt-5">
            Do You Want Teach Here?
          </h3>

          <p className="text-gray-500 text-[14px] mt-3 leading-[1.6] max-w-xs mx-auto">
            Lorem ipsum dolor sit amet consectetur. Facilisis cursus erat in ipsum.
          </p>

          <button
            className="mt-6 bg-[#CF6943] text-white px-8 py-3 rounded-lg font-medium
            hover:bg-[#B85A39] transition"
          >
            Get Started
          </button>
        </div>

        {/* ===== LEARN CARD (HIGHLIGHTED) ===== */}
        <div
          className="bg-[#FFE6DE] p-10 rounded-2xl text-center shadow-md transition-all duration-300
          hover:shadow-xl hover:-translate-y-1"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white">
            <IoSchoolOutline size={34} className="text-[#CF6943]" />
          </div>

          <h3 className="text-[20px] font-semibold text-[#070606] mt-5">
            Do You Want Learn Here?
          </h3>

          <p className="text-gray-600 text-[14px] mt-3 leading-[1.6] max-w-xs mx-auto">
            Lorem ipsum dolor sit amet consectetur. Facilisis cursus erat in ipsum.
          </p>

          <button
            className="mt-6 bg-white text-[#070606] px-8 py-3 rounded-lg font-medium
            hover:bg-[#CF6943] hover:text-white transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
