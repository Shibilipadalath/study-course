export default function AboutSection() {
  return (
    <section className="w-full bg-[#F4F4F4] py-20">
      <div className="container mx-auto text-center px-6 max-w-4xl">
        
        {/* Tag */}
        <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
          About us
        </span>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
          We provide accessible and effective education designed to help learners grow with confidence.
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
          Lorem ipsum dolor sit amet consectetur. Vitae et id aliquet risus ut odio. Consectetur velit mattis morbi imperdiet. Tellus a ut faucibus id ultrices. 
          Amet nulla magna libero at maecenas accumsan diam. Laoreet ut convallis placerat adipiscing sed. Mauris amet ut integer sem a eget nibh sed nullam. 
          Mi ipsum vestibulum mollis laoreet.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-14">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">28k+</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet consecte.
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-gray-900">35k+</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet consecte.
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-gray-900">120+</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet consecte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
