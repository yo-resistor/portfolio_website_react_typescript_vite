const projects = [
  { title: "Project 1", description: "A cool project.", link: "#" },
  { title: "Project 2", description: "Another awesome project.", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
