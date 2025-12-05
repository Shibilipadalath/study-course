export default function AdminServicesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Services Management</h1>
        <p className="text-gray-600">Manage your services from here.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">All Services</h2>
          <button className="px-4 py-2 bg-[#CF6943] text-white rounded-lg hover:bg-[#b95c3b] transition-colors font-medium">
            Add New Service
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-gray-500 text-center py-8">Service management interface will be implemented here.</p>
        </div>
      </div>
    </div>
  );
}

