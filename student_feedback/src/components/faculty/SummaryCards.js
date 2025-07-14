const SummaryCards = () => (
  <div className="flex flex-col md:flex-row gap-4 mb-4">
    <div className="bg-red-100 p-4 rounded shadow flex-1">
      <p className="text-sm">Avg. Rating</p>
      <h2 className="text-2xl font-bold">4.3 ⭐</h2>
    </div>
    <div className="bg-yellow-100 p-4 rounded shadow flex-1">
      <p className="text-sm">Total Feedback</p>
      <h2 className="text-2xl font-bold">300</h2>
    </div>
    <div className="bg-green-100 p-4 rounded shadow flex-1">
      <p className="text-sm">Courses Taught</p>
      <h2 className="text-2xl font-bold">4</h2>
    </div>
  </div>
);

export default SummaryCards;
