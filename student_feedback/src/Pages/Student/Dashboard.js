// pages/student/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubjectTable from "../../components/student/SubjectTable";
import { semesters } from "../../data/subjects";

const StudentDashboard = () => {
  const [selectedSem, setSelectedSem] = useState("1");
  const semesterData = semesters[selectedSem];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header userRole="student" />
        <div className="p-6">
          <div className="flex justify-between items-center my-4">
            <select
              className="border px-4 py-2 rounded bg-white shadow"
              value={selectedSem}
              onChange={(e) => setSelectedSem(e.target.value)}
            >
              {Array.from({ length: 8 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Semester {i + 1}
                </option>
              ))}
            </select>
            <button className="bg-gray-200 px-4 py-2 rounded">Previous</button>
          </div>

          <div className="space-y-6">
            <SubjectTable title="Theory Subjects" subjects={semesterData?.theory || []} />
            <SubjectTable title="Practical Subjects" subjects={semesterData?.practical || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
