// / pages/admin/Dashboard.jsx
import React from "react";
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-yellow-50">
      <Sidebar />
      <div className="flex-1">
        <Header userRole="admin" />
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button className="bg-blue-100 text-lg p-6 rounded shadow">Professors ⌄</button>
            <button className="bg-red-100 text-lg p-6 rounded shadow">Courses offered ⌄</button>
            <button className="bg-green-100 text-lg p-6 rounded shadow">Choose date 📅</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Professors with highest ratings today:</h2>
              <table className="w-full text-left">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="pb-2">Name of Professor (No. of votes)</th>
                    <th className="pb-2">Most preferred course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Prof x (90)</td><td>CS1101</td></tr>
                  <tr><td>Prof y (108)</td><td>CS2103</td></tr>
                  <tr><td>Prof z (87)</td><td>CS3204</td></tr>
                  <tr><td>Prof a (115)</td><td>EE1002</td></tr>
                  <tr><td>Prof b (201)</td><td>ME3201</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Daily feedback trends chart:</h2>
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">Chart Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;