import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    duration: "Dec 2025 – Present",
    description: [
      "Working on data preprocessing, data manipulation, and statistical analysis using Python to extract insights from large datasets and support data-driven decision-making.",
      "Contributing to building data visualizations, cleaning workflows, and exploratory analysis, helping transform raw data into meaningful business insights for real-world problem solving.",
      "Building visualizations using Matplotlib and Seaborn to support data-driven insights.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    duration: "Dec 2025 – Present",
    description: [
      "Working on designing, developing, and maintaining responsive web applications using HTML, CSS, JavaScript, and modern frameworks to deliver user-friendly interfaces.",
      "Contributing to front-end and back-end development, debugging, and feature enhancements, helping transform design requirements into functional and scalable web solutions.",
      "Building and integrating interactive UI components, ensuring cross-browser compatibility and performance optimization to support real-world web applications.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
 <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Experience</span>
          </h2>
          </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.role}
              </h3>

              <p className="text-indigo-600 font-medium">
                {exp.company}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                {exp.duration}
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
