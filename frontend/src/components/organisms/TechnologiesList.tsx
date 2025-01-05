import React from "react";

interface TechnologiesListProps {
  title?: string;
}

const TechnologiesList: React.FC<TechnologiesListProps> = ({
  title = "Technologies Used",
}) => {
  const technologies = [
    "React",
    "TypeScript",
    "Apollo Client",
    "Vite",
    "TailwindCSS",
    "DaisyUI",
    "Flask",
    "GraphQL",
  ];

  return (
    <div className="bg-white p-8 max-w-lg mx-auto rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-2 gap-4" role="list" aria-label={title}>
        {technologies.map((tech, index) => (
          <button
            key={index}
            className="py-2 px-4 bg-purple-500 bg-opacity-80 text-white rounded-full text-sm font-medium hover:bg-opacity-100 transition duration-200 ease-in-out"
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesList;