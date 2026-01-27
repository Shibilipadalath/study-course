import { Service } from "@/types/service-types";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Header from "@/components/common/Header";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/common/Footer";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

async function getService(id: string): Promise<Service | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/services/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      console.error("Failed to fetch service");
      return null;
    }

    const data = await res.json();
    return data.service || null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getService(id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <PageHero title="Service Details" breadcrumb={`Home / Services / ${service.title}`} />

      <div className="min-h-screen bg-black w-full">
        <div className="container mx-auto px-6 lg:px-24 py-12">
          {/* Service Content */}
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-[36px] md:text-[48px] font-bold text-white mb-4">
                {service.title}
              </h1>
              {service.image && (
                <div className="w-full h-auto rounded-xl overflow-hidden mb-6 bg-zinc-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <h2 className="text-[24px] font-semibold text-white mb-4">
                Description
              </h2>
              <p className="text-[16px] text-gray-300 whitespace-pre-wrap text-justify tracking-normal leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Points Section */}
            {service.points && service.points.length > 0 && (
              <div className="mb-8">
                <h2 className="text-[24px] font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-[#B08D55] mt-1 shrink-0"
                      />
                      <span className="text-[16px] leading-[1.6] text-gray-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

