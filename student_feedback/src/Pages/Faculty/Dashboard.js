// pages/faculty/Dashboard.jsx
import React from "react";
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";

const FacultyDashboard = () => {
  return (
    <div className="flex min-h-screen bg-yellow-50">
      <Sidebar />
      <div className="flex-1">
        <Header userRole="faculty" />
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-100 p-6 rounded shadow">
              <p className="text-gray-700">4.3 ⭐</p>
              <h2 className="text-lg font-semibold">Avg. Rating</h2>
            </div>
            <div className="bg-orange-100 p-6 rounded shadow">
              <p className="text-gray-700">300</p>
              <h2 className="text-lg font-semibold">Total Feedback</h2>
            </div>
            <div className="bg-green-100 p-6 rounded shadow">
              <p className="text-gray-700">4</p>
              <h2 className="text-lg font-semibold">Courses Taught</h2>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2">All Feedback Are Anonymous</p>

          <div className="bg-white p-6 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Courses feedback</h2>
            <table className="w-full text-left">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="pb-2">Course ID</th>
                  <th className="pb-2">Course Name</th>
                  <th className="pb-2">Average Rating</th>
                  <th className="pb-2">% Satisfaction</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>CS011</td><td>Data structure</td><td>4.1 ⭐</td><td>75%</td></tr>
                <tr><td>CS02</td><td>Discrete mathematics</td><td>4.3 ⭐</td><td>79%</td></tr>
                <tr><td>CS03</td><td>Operating system</td><td>4.6 ⭐</td><td>88%</td></tr>
                <tr><td>CS04</td><td>Graph theory</td><td>4.8 ⭐</td><td>95%</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Trends</h2>
              <button className="px-3 py-1 bg-blue-500 text-white rounded">Export</button>
            </div>
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">Chart Placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
