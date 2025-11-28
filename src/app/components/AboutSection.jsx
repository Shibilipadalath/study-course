export default function AboutSection() {
  return (
    <section className="w-full py-28 bg-[#F4F4F4] relative overflow-hidden">

      {/* Smooth Fade from Hero Section */}
      <div className="absolute -top-24 left-0 w-full h-32 bg-gradient-to-b from-[#FFEFEA] to-[#F4F4F4]"></div>

      {/* Light Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-[#F4F4F4] opacity-70"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24 text-center">

        {/* Tag */}
        <div className="flex justify-center">
          <span className="bg-[#CF6943] text-white text-sm font-medium px-6 py-2 rounded-full shadow-md">
            About us
          </span>
        </div>

        {/* Title */}
        <h2 className="max-w-3xl mx-auto mt-6 text-[28px] md:text-[36px] font-semibold text-[#070606] leading-[1.35]">
          We provide accessible and effective education designed to help learners grow with confidence.
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-5 text-[#474747] text-[16px] leading-[1.7]">
          Lorem ipsum dolor sit amet consectetur. Vitae et id aliquet risus ut odio. Consectetur velit mattis morbi imperdiet. Tellus a ut faucibus id ultrices. 
          Amet nulla magna libero at maecenas accumsan diam. Laoreet ut convallis placerat adipiscing sed. Mauris amet ut integer sem a eget nibh sed nullam. 
          Mi ipsum vestibulum mollis laoreet.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-14 justify-center items-center mt-20">

          <div className="text-center">
            <h3 className="text-[42px] font-semibold text-[#CF6943]">28k+</h3>
            <p className="text-[#474747] text-[15px] mt-2">Active Students</p>
          </div>

          <div className="text-center">
            <h3 className="text-[42px] font-semibold text-[#CF6943]">35k+</h3>
            <p className="text-[#474747] text-[15px] mt-2">Video Classes</p>
          </div>

          <div className="text-center">
            <h3 className="text-[42px] font-semibold text-[#CF6943]">120+</h3>
            <p className="text-[#474747] text-[15px] mt-2">Online Courses</p>
          </div>

        </div>
      </div>
    </section>
  );
}
