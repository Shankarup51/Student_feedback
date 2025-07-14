const courseData = [
  { id: 'CS011', name: 'Data structure', rating: 75 },
  { id: 'CS02', name: 'Discrete mathematics', rating: 79 },
  { id: 'CS03', name: 'Operating system', rating: 88 },
  { id: 'CS04', name: 'Graph theory', rating: 95 },
];

const getColor = (rating) => {
  if (rating >= 90) return 'bg-orange-400';
  if (rating >= 80) return 'bg-purple-400';
  if (rating >= 70) return 'bg-green-400';
  return 'bg-blue-400';
};

const CourseFeedbackBars = () => (
  <div className="bg-white p-4 rounded shadow w-full">
    <h3 className="font-semibold mb-2">Courses feedback</h3>
    {courseData.map((course) => (
      <div key={course.id} className="mb-3">
        <div className="flex justify-between text-sm">
          <span>{course.id} {course.name}</span>
          <span>{course.rating}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded">
          <div className={`${getColor(course.rating)} h-2 rounded`} style={{ width: `${course.rating}%` }} />
        </div>
      </div>
    ))}
  </div>
);

export default CourseFeedbackBars;
