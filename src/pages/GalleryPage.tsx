import React, { useState, useMemo } from 'react';
import { Sparkles, Info, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ProjectCard } from '../components/ProjectCard';
import { Lightbox } from '../components/Lightbox';
import {
  projectsData,
  projectCategories,
  ProjectCategory,
  ProjectItem,
} from '../data/projects';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Lightbox prev/next handlers
  const currentIndex = activeProject
    ? filteredProjects.findIndex((p) => p.id === activeProject.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveProject(filteredProjects[currentIndex - 1]);
    } else {
      setActiveProject(filteredProjects[filteredProjects.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setActiveProject(filteredProjects[currentIndex + 1]);
    } else {
      setActiveProject(filteredProjects[0]);
    }
  };

  return (
    <div className="bg-marca-light min-h-screen pt-24 pb-20">
      <SEO
        title="Project Gallery | Architectural Showcase & Designs"
        description="Explore Marca Construction's portfolio of contemporary Kerala residential villas, traditional-modern fusion houses, commercial hubs, and interior architecture."
      />

      {/* Hero Banner */}
      <section className="bg-marca-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(111,168,42,0.12)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="badge-editorial-dark inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-marca-gold" />
            <span>Curated Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Architectural Project Gallery
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Discover our architectural perspectives, contemporary Kerala residences, tropical villa concepts, and commercial spaces. Click any project to inspect full-screen imagery and design specifications.
          </p>
        </div>
      </section>

      {/* Main Gallery Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Transparent Note on Showcase Imagery (Per User Instructions) */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-marca-gold-tint border border-marca-gold/30 flex items-start gap-3.5 text-xs text-marca-textDark">
          <Info className="w-5 h-5 text-marca-gold-dark flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-marca-textDark">
              Architectural Concept & Portfolio Notice:
            </p>
            <p className="text-gray-700 leading-relaxed">
              These curated portfolio entries illustrate our spatial planning, modern tropical aesthetic, and structural possibilities across Kerala. Real-time site photographs and verified project documentation can be seamlessly added in <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-[11px] text-marca-dark">src/data/projects.ts</code> as completed projects are finalized.
            </p>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-marca-textMuted">
            <Filter className="w-4 h-4 text-marca-green" />
            <span>Filter By Category:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-marca-green text-white shadow-marca-green'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Counter */}
        <div className="flex items-center justify-between text-xs text-marca-textMuted mb-6">
          <span>
            Showing <strong className="text-marca-textDark">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
          <span className="text-marca-gold-dark font-medium">Click any card to open architectural lightbox</span>
        </div>

        {/* Responsive Grid of Project Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <p className="text-base text-gray-500">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 btn-primary text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeProject && (
        <Lightbox
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

