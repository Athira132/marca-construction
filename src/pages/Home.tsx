import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Shield,
  Layers,
  Sparkles,
  Award,
  PhoneCall,
  Clock,
  Hammer,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { Lightbox } from '../components/Lightbox';
import { servicesData } from '../data/services';
import { projectsData, ProjectItem } from '../data/projects';
import { companyData } from '../data/company';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredServices = servicesData.filter((s) => s.featured).slice(0, 3);
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="bg-marca-light min-h-screen">
      <SEO
        title="Home | Building Spaces. Creating Futures."
        description="Marca Construction is a premier Kerala-based builder crafting modern contemporary residential villas, homes, and small business spaces."
      />

      {/* 1. Flagship Hero Section */}
      <Hero />

      {/* 2. Key Pillars Ticker / Value Bar */}
      <section className="bg-marca-slate text-white border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="w-10 h-10 rounded-lg bg-marca-green/20 text-marca-green flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold tracking-tight">Kerala Climate Design</h3>
                <p className="text-xs text-gray-400">Natural air & monsoon defense</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="w-10 h-10 rounded-lg bg-marca-gold/20 text-marca-gold flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold tracking-tight">Turnkey Execution</h3>
                <p className="text-xs text-gray-400">Concept plan to key handover</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="w-10 h-10 rounded-lg bg-marca-green/20 text-marca-green flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold tracking-tight">Rigorous Quality</h3>
                <p className="text-xs text-gray-400">Premium materials & structural audit</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="w-10 h-10 rounded-lg bg-marca-gold/20 text-marca-gold flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold tracking-tight">Milestone Transparency</h3>
                <p className="text-xs text-gray-400">Clear schedules & budget clarity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Introduction Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Left Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-marca-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
                  alt="Marca Construction Architecture Kerala"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-marca-dark/80 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-semibold text-marca-green uppercase tracking-wider block">
                    Our Philosophy
                  </span>
                  <p className="text-sm font-medium mt-1">
                    "Every space we build is designed to live in harmony with Kerala’s tropical beauty and your long-term aspirations."
                  </p>
                </div>
              </div>
              {/* Brand Accent Box */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-marca-gold text-marca-dark p-4 rounded-xl shadow-xl font-bold text-xs uppercase tracking-wider">
                Kerala Construction Specialist
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-marca-green"></span>
                <span className="badge-editorial">About Marca Construction</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-marca-textDark tracking-tight leading-tight">
                Crafting Enduring Spaces with Architectural Purpose.
              </h2>

              <p className="text-base sm:text-lg text-marca-textMuted leading-relaxed">
                Marca Construction is a Kerala-based construction company dedicated to serving homeowners and small businesses. We merge contemporary spatial design with deep awareness of Kerala’s coastal climate, heavy monsoons, and the desire for light-filled, airy sanctuaries.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-marca-textDark">Customized Architectural Homes</h4>
                    <p className="text-xs text-marca-textMuted">Tailored floor plans prioritizing ventilation, courtyards, and family privacy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-marca-textDark">Small Business & Commercial Real Estate</h4>
                    <p className="text-xs text-marca-textMuted">Commercial suites, retail stores, and clinic spaces built for high performance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-marca-textDark">Honest, Milestone-Driven Construction</h4>
                    <p className="text-xs text-marca-textMuted">Clear step-by-step billing, transparent material specifications, and dedicated site supervision.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link to="/about" className="btn-primary">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline-dark">
                  <span>Our Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Services Section */}
      <section className="py-20 lg:py-28 bg-marca-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-marca-gold"></span>
                <span className="text-xs uppercase font-bold tracking-widest text-marca-gold-dark">
                  Comprehensive Capabilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-textDark tracking-tight">
                Our Core Construction Services
              </h2>
              <p className="text-sm sm:text-base text-marca-textMuted">
                From initial architectural blueprints to final turnkey keys, we provide specialized construction services tailored to Kerala properties.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-marca-green hover:text-marca-green-700 transition-colors self-start md:self-auto"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Project Showcase */}
      <section className="py-20 lg:py-28 bg-marca-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="badge-editorial-dark">
                <Sparkles className="w-3.5 h-3.5 text-marca-gold" />
                <span>Architectural Portfolio Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Featured Architectural Designs
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                Explore our design aesthetic, spatial concepts, and architectural visions across Kerala.
              </p>
            </div>

            <Link
              to="/gallery"
              className="btn-primary self-start md:self-auto"
            >
              <span>View Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

          {/* Portfolio Note */}
          <div className="mt-12 text-center text-xs text-gray-400 bg-white/5 border border-white/10 rounded-xl p-4 max-w-2xl mx-auto">
            <span className="font-semibold text-marca-gold">Note:</span> These portfolio entries represent our architectural design language and project archetypes. Real-time site photographs can be uploaded directly to the project gallery.
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="badge-editorial">Why Marca Construction</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-textDark tracking-tight">
              Built on Trust, Engineered for Excellence
            </h2>
            <p className="text-sm sm:text-base text-marca-textMuted">
              Constructing a home or commercial building in Kerala requires specific engineering expertise to withstand seasonal deluges, humidity, and coastal weather.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-7 rounded-2xl bg-marca-light border border-gray-100 hover:border-marca-green/40 transition-all duration-300 space-y-4">
              <span className="w-12 h-12 rounded-xl bg-marca-green/10 text-marca-green flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold text-marca-textDark">
                Kerala Climate Resilience
              </h3>
              <p className="text-xs sm:text-sm text-marca-textMuted leading-relaxed">
                Roofing slopes, moisture barriers, and ventilation channels engineered for heavy monsoon rains and high tropical humidity.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-marca-light border border-gray-100 hover:border-marca-gold/40 transition-all duration-300 space-y-4">
              <span className="w-12 h-12 rounded-xl bg-marca-gold/15 text-marca-gold-dark flex items-center justify-center">
                <Award className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold text-marca-textDark">
                Premium Brand Materials
              </h3>
              <p className="text-xs sm:text-sm text-marca-textMuted leading-relaxed">
                Only tested, high-grade TMT steel, certified cement, waterproof adhesives, and verified teak/hardwood selections are used.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-marca-light border border-gray-100 hover:border-marca-green/40 transition-all duration-300 space-y-4">
              <span className="w-12 h-12 rounded-xl bg-marca-green/10 text-marca-green flex items-center justify-center">
                <Hammer className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold text-marca-textDark">
                End-to-End Handover
              </h3>
              <p className="text-xs sm:text-sm text-marca-textMuted leading-relaxed">
                From initial 3D visualization to municipal approvals, foundation, structural framework, and interior joinery.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-marca-light border border-gray-100 hover:border-marca-gold/40 transition-all duration-300 space-y-4">
              <span className="w-12 h-12 rounded-xl bg-marca-gold/15 text-marca-gold-dark flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold text-marca-textDark">
                Transparent Cost Estimates
              </h3>
              <p className="text-xs sm:text-sm text-marca-textMuted leading-relaxed">
                Itemized Bill of Quantities (BOQ) with no hidden overheads. You always know the exact schedule and stage-wise investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Strong Call to Action Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-marca-dark via-marca-slate to-marca-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-marca-green/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="badge-editorial-dark">
            Begin Your Construction Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build Your Dream Space in Kerala?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are planning a modern family residence, an ancestral home renovation, or a commercial space, our team is ready to assist you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-primary text-base px-8 py-4 shadow-marca-green w-full sm:w-auto"
            >
              <span>Schedule a Free Site Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.phone.raw}`}
              className="btn-secondary text-base px-8 py-4 border-white/20 text-white w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-marca-gold" />
              <span>Call Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

