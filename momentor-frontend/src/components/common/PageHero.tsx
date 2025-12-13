import React from "react";

interface PageHeroProps {
  title: string;
  breadcrumb?: string;
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">

      {/* Background Base */}
      <div className="absolute inset-0 bg-[#FFEFEA]" />

      {/* First Blurred Orange Gradient */}
      <div className="absolute top-[-50px] left-[-50px] w-[400px] h-[400px] bg-[#FF6F39] rounded-full blur-[200px] opacity-60" />

      {/* Second White Glow Blur */}
      <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-white rounded-full blur-[200px] opacity-80" />

      {/* CONTENT */}
      <div className="relative z-12 container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#070606]">
          {title}
        </h1>

        {breadcrumb && (
          <p className="mt-3 text-gray-600 text-sm md:text-base font-medium">
            {breadcrumb}
          </p>
        )}
      </div>
    </section>
  );
}
