import React from 'react';
import { MapPin, ArrowUpRight, Layers } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-marca hover:shadow-marca-lg transition-all duration-300 flex flex-col"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-marca-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-marca-dark/80 backdrop-blur-md text-marca-gold border border-marca-gold/30">
            {project.category}
          </span>
        </div>

        {/* Expand Action Icon on Hover */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="w-10 h-10 rounded-full bg-marca-green text-white flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-medium text-marca-textMuted">
            <MapPin className="w-3.5 h-3.5 text-marca-green" />
            <span>{project.location}</span>
          </div>
          <h3 className="text-lg font-bold text-marca-textDark group-hover:text-marca-green-600 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-marca-textMuted line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-marca-textMuted">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-marca-gold-dark" />
            <span>{project.builtUpArea}</span>
          </span>
          <span className="font-semibold text-marca-dark group-hover:text-marca-green flex items-center gap-0.5">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

