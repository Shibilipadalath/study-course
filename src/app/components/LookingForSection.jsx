import { IoSchoolOutline, IoPersonOutline } from "react-icons/io5";

export default function LookingForSection() {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="text-center max-w-2xl mx-auto px-6">

        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#070606]">
          What You Looking For?
        </h2>

        <p className="text-gray-600 text-[15px] mt-3">
          Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
          Pulvinar sit aliquam ipsum rhoncus turpis pellentesque condimentum orci.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-12 container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* TEACHER CARD */}
        <div className="p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
          <IoPersonOutline size={34} className="text-[#CF6943]" />
          <h3 className="text-[18px] font-semibold mt-3">Do You Want Teach Here</h3>
          <p className="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet consectetur.</p>
          <button className="mt-5 bg-[#CF6943] text-white px-6 py-2 rounded-lg hover:bg-[#b85a39]">
            Get Started
          </button>
        </div>

        {/* LEARN CARD */}
        <div className="bg-[#FFAE94] p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
          <IoSchoolOutline size={34} className="text-[#CF6943]" />
          <h3 className="text-[18px] font-semibold mt-3">Do You Want Learn Here</h3>
          <p className="text-gray-600 text-[13px] mt-2">Lorem ipsum dolor sit amet consectetur.</p>
          <button className="mt-5 bg-[#F4F4F4] text-black px-6 py-2 rounded-lg hover:bg-[#b85a39]">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
