export const Dashboard = () => (
    <section className="p-6 flex-1 text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Welcome, Commander</h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-800">
          <p className="text-sm text-gray-600">Vehicles Checked In</p>
          <h3 className="text-2xl font-bold">—</h3>
        </div>
        <div className="bg-white rounded-xl shadow p-4 border-l-4 border-yellow-500">
          <p className="text-sm text-gray-600">Vehicles Checked Out</p>
          <h3 className="text-2xl font-bold">—</h3>
        </div>
        <div className="bg-white rounded-xl shadow p-4 border-l-4 border-green-600">
          <p className="text-sm text-gray-600">Fleet Operational Readiness</p>
          <h3 className="text-2xl font-bold">—</h3>
        </div>
      </div>
    </section>
  );
  