import React from "react";

const SubjectTable = ({ title, subjects }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <table className="w-full text-left border-collapse">
        <thead className="text-sm text-gray-600 border-b">
          <tr>
            <th className="p-2">Course ID</th>
            <th className="p-2">Course Name</th>
            <th className="p-2">Faculty Name</th>
            <th className="p-2">Add Feedback</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subj, idx) => (
            <tr key={idx} className="border-t text-sm">
              <td className="p-2">{subj.id}</td>
              <td className="p-2">{subj.name}</td>
              <td className="p-2">{subj.faculty}</td>
              <td className="p-2">
                <button className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded">
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;
