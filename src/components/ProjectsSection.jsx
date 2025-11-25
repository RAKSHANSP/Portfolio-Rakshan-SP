import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cricket Score Prediction",
    description: "A beautiful Streamlit landing page for score predictions using Machine Learning Algorithms.",
    image: "/projects/image.png",
    tags: ["Python", "Machine Learning", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/RAKSHANSP/CricketScorePrediction",
  },
  {
    id: 2,
    title: "AgriConnect System",
    description:
     "AgriConnect is an interactive platform that offers weather forecasting, product listing, group and private chat, Instagram-style information sharing, and a government updates page to help farmers stay informed and connected.",
    image: "/projects/agriconnect.png",
    tags: ["Angular ","MongoDB","Javascript","Typescript"],
    demoUrl: "#",
    githubUrl: "https://github.com/RAKSHANSP/AgriConnect",
  },
  {
    id: 3,
    title: "MyGovt Scheme",
    description:
      "A simple website that helps users check eligibility and apply for government schemes easily.",
    image: "/projects/GovtScheme.jpeg",
    tags: ["Node.js", "React","Express.js","MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/RAKSHANSP/MyGovtScheme",
  },
  {
    id: 4,
    title: "AgriVision",
    description:
      "AgriVision provides smart crop recommendations along with accurate yield and price predictions to support better farming decisions.",
    image: "/projects/av.webp",
    tags: ["Machine Learning", "Tensorflow","Python", "Predictive Analytics"],
    demoUrl: "#",
    githubUrl: "https://github.com/RAKSHANSP/Agrivision",
  },
  {
    id: 5,
    title: "Employee attrition and Performance",
    description:
      "HR analytics platform leveraging ML to forecast employee turnover and evaluate performance metrics.",
    image: "/projects/image copy 5.png",
    tags: ["Predictive Analytics","Machine Learning", "Python","Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/RAKSHANSP/HR-Analytics",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rithishvellingiri"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
