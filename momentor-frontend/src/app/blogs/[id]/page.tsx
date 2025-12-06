// src/app/blogs/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/common/Header";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/common/Footer";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface Blog {
  id: string;
  title: string;
  image?: string | null;
  description: string;
}

async function getBlog(id: string): Promise<Blog | null> {
  const res = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.blog ?? null;
}

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // ✅ params is NOT a Promise
  const blog = await getBlog(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <PageHero
        title="Blog Details"
        breadcrumb={`Home / Blogs / ${blog.title}`}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 lg:px-24 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            {blog.image && (
              <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden">
                <Image
                  src={
                    blog.image.startsWith("http")
                      ? blog.image
                      : `${API_BASE_URL}${blog.image}`
                  }
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.description}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
