import { Gallery, GalleryCategory } from "@/types/gallery-types";
import { GalleryTabs } from "@/components/Admin/gallery/gallery-tabs";

export const dynamic = 'force-dynamic';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

async function getGalleries(): Promise<Gallery[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/gallery`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch galleries");
      return [];
    }

    const data = await res.json();
    return data.galleries || [];
  } catch (error) {
    console.error("Error fetching galleries:", error);
    return [];
  }
}

async function getGalleryCategories(): Promise<GalleryCategory[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/gallery-category`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch gallery categories");
      return [];
    }

    const data = await res.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching gallery categories:", error);
    return [];
  }
}

export default async function AdminGalleryPage() {
  const galleries = await getGalleries();
  const categories = await getGalleryCategories();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gallery Management</h1>
        <p className="text-gray-600">Manage your gallery images and categories from here.</p>
      </div>

      <GalleryTabs 
        galleries={galleries}
        categories={categories}
      />
    </div>
  );
}
