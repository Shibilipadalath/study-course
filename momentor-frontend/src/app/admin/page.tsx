export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to the admin panel. Manage your content from here.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Services</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#CF6943]/10 flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Blogs</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Gallery Items</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">48</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <span className="text-2xl">🖼️</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Users</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#CF6943] hover:bg-[#CF6943]/5 transition-colors text-left">
            <p className="font-medium text-gray-900">Add New Service</p>
            <p className="text-sm text-gray-600 mt-1">Create a new service</p>
          </button>
          <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#CF6943] hover:bg-[#CF6943]/5 transition-colors text-left">
            <p className="font-medium text-gray-900">Write Blog Post</p>
            <p className="text-sm text-gray-600 mt-1">Create a new blog entry</p>
          </button>
          <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#CF6943] hover:bg-[#CF6943]/5 transition-colors text-left">
            <p className="font-medium text-gray-900">Upload Gallery Image</p>
            <p className="text-sm text-gray-600 mt-1">Add new gallery item</p>
          </button>
        </div>
      </div>
    </div>
  );
}

