// pages/faculty/Dashboard.jsx
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const FacultyDashboard = () => {

  const { user } = useContext(AuthContext);
  const [averageRating, setAverageRating] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);
  const [theoryCourses, setTheoryCourses] = useState([]);
  const [practicalCourses, setPracticalCourses] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchCoursesWithRatings = async () => {
      try {
        // 1. Fetch theory courses and attach ratings
        const theoryRes = await fetch(`http://localhost:3001/api/faculty/theory-courses/${user.faculty_id}`);
        const theoryCourses = await theoryRes.json();

        const theoryWithRatings = await Promise.all(
          theoryCourses.map(async (course) => {
            const res = await fetch(`http://localhost:3001/api/faculty/avg-theory-rating/${user.faculty_id}/${course.course_id}`);
            const ratingData = await res.json();
            return { ...course, average_rating: ratingData.average_rating , total_feedbacks: ratingData.total_feedbacks };
          })
        );

        // 2. Fetch practical courses and attach ratings
        const practicalRes = await fetch(`http://localhost:3001/api/faculty/practical-courses/${user.faculty_id}`);
        const practicalCourses = await practicalRes.json();

        const practicalWithRatings = await Promise.all(
          practicalCourses.map(async (course) => {
            const res = await fetch(`http://localhost:3001/api/faculty/avg-practical-rating/${user.faculty_id}/${course.course_id}`);
            const ratingData = await res.json();
            return { ...course, average_rating: ratingData.average_rating , total_feedbacks: ratingData.total_feedbacks };
          })
        );
        // 3. Set state
        setTheoryCourses(theoryWithRatings);
        setPracticalCourses(practicalWithRatings);

        const all = [...theoryWithRatings, ...practicalWithRatings];

        // 4. Calculate average rating
        const validRatings = all
          .map((c) => Number(c.average_rating))
          .filter((r) => !isNaN(r));

        const avg =
          validRatings.length > 0
            ? validRatings.reduce((sum, r) => sum + r, 0) / validRatings.length
            : null;

        setAverageRating(avg ? Number(avg.toFixed(2)) : 0);

        // 5. Calculate total courses
        setTotalCourses(all.length);

        // 6. Calculate total feedback
        const totalFeedback = all.reduce((sum, c) => sum + (c.total_feedbacks || 0), 0);
        setTotalFeedbacks(totalFeedback);
      } catch (error) {
        toast.error("Error fetching dashboard data:", error);
      }
    };

    fetchCoursesWithRatings();
  }, [user]);


  return (
    <div className="flex min-h-screen bg-yellow-50">
      <Sidebar />
      <div className="flex-1">
        <Header userRole="faculty" />
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-100 p-6 rounded shadow">
              <p className="text-gray-700">{averageRating+" ⭐"}</p>
              <h2 className="text-lg font-semibold">Avg. Rating</h2>
            </div>
            <div className="bg-orange-100 p-6 rounded shadow">
              <p className="text-gray-700">{totalFeedbacks}</p>
              <h2 className="text-lg font-semibold">Total Feedback</h2>
            </div>
            <div className="bg-green-100 p-6 rounded shadow">
              <p className="text-gray-700">{totalCourses}</p>
              <h2 className="text-lg font-semibold">Courses Taught</h2>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2">All Feedback Are Anonymous</p>


          {/* ===== THEORY COURSES TABLE ===== */}
          <div className="bg-white p-6 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Theory Courses Feedback</h2>
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
                {theoryCourses.map((course, idx) => (
                  <tr key={idx}>
                    <td className="py-2">{course.course_id}</td>
                    <td className="py-2">{course.course_name}</td>
                    <td className="py-2">
                      {course.average_rating != null
                        ? course.average_rating + " ⭐"
                        : "N/A"}
                    </td>
                    <td className="py-2">
                      {course.average_rating != null
                        ? Math.round((course.average_rating / 5) * 100) + "%"
                        : "N/A"}
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>

          {/* ===== PRACTICAL COURSES TABLE ===== */}
          <div className="bg-white p-6 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Practical Courses Feedback</h2>
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
                {practicalCourses.map((course, idx) => (
                  <tr key={idx}>
                    <td className="py-2">{course.course_id}</td>
                    <td className="py-2">{course.course_name}</td>
                    <td className="py-2">
                      {course.average_rating != null
                        ? course.average_rating + " ⭐"
                        : "N/A"}
                    </td>
                    <td className="py-2">
                      {course.average_rating != null
                        ? Math.round((course.average_rating / 5) * 100) + "%"
                        : "N/A"}
                    </td>
                  </tr>
                ))}
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
