
// src/Pages/Admin/Dashboard.js
import React from "react";
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
//import { Card, CardContent } from "@/components/ui/card"; // if using shadcn/ui
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const professors = [
  { name: "Prof x", votes: 90, course: "CS1101" },
  { name: "Prof y", votes: 108, course: "CS2103" },
  { name: "Prof z", votes: 87, course: "CS3204" },
  { name: "Prof a", votes: 115, course: "EE1002" },
  { name: "Prof b", votes: 201, course: "ME3201" },
];

const trendData = [
  { date: "2025-08-01", rating: 5 },
  { date: "2025-08-02", rating: 3 },
  { date: "2025-08-03", rating: 4 },
  { date: "2025-08-04", rating: 4 },
  { date: "2025-08-05", rating: 6 },
  { date: "2025-08-06", rating: 7 },
  { date: "2025-08-07", rating: 5 },
];

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header userRole="admin" />

        <div className="p-6 space-y-6">
          {/* Top Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-6 rounded-xl shadow text-center font-semibold text-lg">
              Professors ⬇️
            </div>
            <div className="bg-pink-100 p-6 rounded-xl shadow text-center font-semibold text-lg">
              Courses Offered ⬇️
            </div>
            <div className="bg-green-100 p-6 rounded-xl shadow text-center font-semibold text-lg">
              Choose Date 📅
            </div>
          </div>

          {/* Lower Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Professors with highest ratings */}
            <div className="bg-white rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold mb-3">
                Professors with highest ratings today:
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-gray-600">
                    <th className="text-left py-2">Professor (Votes)</th>
                    <th className="text-left py-2">Most Preferred Course</th>
                  </tr>
                </thead>
                <tbody>
                  {professors.map((prof, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2">{prof.name} ({prof.votes})</td>
                      <td className="py-2">{prof.course}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Daily feedback trends chart */}
            <div className="bg-white rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold mb-3">
                Daily Feedback Trends Chart:
              </h2>
              <LineChart width={400} height={250} data={trendData}>
                <Line type="monotone" dataKey="rating" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
