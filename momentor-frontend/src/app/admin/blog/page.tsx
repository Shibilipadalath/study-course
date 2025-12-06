import { BlogTable } from "@/components/Admin/blog/blog-table";
import { blogColumns } from "@/components/Admin/blog/blog-columns";
import { BlogFormDialog } from "@/components/Admin/blog/blog-form";
import { Blog } from "@/types/blog-types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs");
      return [];
    }

    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function AdminBlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Management</h1>
        <p className="text-gray-600">Manage your blog posts from here.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">All Blog Posts</h2>
          <BlogFormDialog />
        </div>

        <div className="space-y-4">
          <BlogTable columns={blogColumns} data={blogs} />
        </div>
      </div>
    </div>
  );
}

