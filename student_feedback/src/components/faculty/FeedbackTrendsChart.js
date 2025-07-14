import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'dsa', rating: 6 },
  { name: 'algo', rating: 4 },
  { name: 'descrete', rating: 7 },
  { name: 'dlcd', rating: 5 },
  { name: 'dbms', rating: 8 },
  { name: 'oops', rating: 9 },
  { name: 'sw', rating: 6 },
];

const exportToCSV = (data, filename) => {
  const csvRows = [];

  // Extract headers
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));

  // Extract data rows
  for (const row of data) {
    const values = headers.map(h => JSON.stringify(row[h], (_, v) => v ?? ''));
    csvRows.push(values.join(','));
  }

  // Create and download the file
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


const FeedbackTrendsChart = () => {
    const handleExport = () => {
  exportToCSV(data, 'feedback_trends.csv');
};

return (
  <div className="bg-white p-4 rounded shadow w-full">
    <div className="flex justify-between mb-2">
      <h3 className="font-semibold">Trends</h3>
      <button
        className="border px-2 py-1 rounded text-sm"
        onClick={handleExport}
      >
        📥 Export
      </button>
    </div>
     <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="rating" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  
  </div>
);
}

 






export default FeedbackTrendsChart;
