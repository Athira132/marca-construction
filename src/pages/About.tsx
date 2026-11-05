import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Eye,
  Target,
  ShieldCheck,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="bg-marca-light min-h-screen pt-24 pb-20">
      <SEO
        title="About Us | Kerala Construction & Architectural Excellence"
        description="Learn about Marca Construction, our architectural philosophy, tropical design approach, mission, vision, and core values serving Kerala."
      />

      {/* Page Header */}
      <section className="bg-marca-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,168,42,0.15)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-editorial-dark">About Marca Construction</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Rooted in Kerala, Engineered for Modern Living.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a Kerala-based construction company creating enduring residential homes, bespoke villas, and functional commercial spaces that harmoniously balance contemporary architecture with regional climate resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Company Philosophy & Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-editorial">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-textDark tracking-tight">
                Architectural Integrity for Homeowners & Small Businesses
              </h2>
              <p className="text-base text-marca-textMuted leading-relaxed">
                At Marca Construction, we believe a building is far more than concrete, steel, and mortar. It is a personal sanctuary for a growing family or an operational engine for an enterprising small business.
              </p>
              <p className="text-base text-marca-textMuted leading-relaxed">
                Operating across Kerala, we recognize the imperative to design buildings that naturally breathe in hot, humid summers, resist intense torrential monsoons, and optimize open light without unbearable solar heat gain.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-marca-light border border-gray-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-marca-textDark">Kerala-Specific Design</h4>
                    <p className="text-xs text-marca-textMuted mt-0.5">Engineered for monsoons, cross-ventilation, and local terrain.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-marca-light border border-gray-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-marca-textDark">Client Collaboration</h4>
                    <p className="text-xs text-marca-textMuted mt-0.5">Clear milestone reviews and direct access to project coordinators.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-marca-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Marca Construction Architectural Detail"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-marca-dark/85 backdrop-blur-md border border-white/10 text-white">
                  <p className="text-sm italic">
                    "Precision in structure. Purity in design. Reliability in every handover."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-marca-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 shadow-marca space-y-4">
              <div className="w-12 h-12 rounded-xl bg-marca-green/10 text-marca-green flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-marca-textDark">Our Mission</h3>
              <p className="text-base text-marca-textMuted leading-relaxed">
                To deliver residential and commercial construction services of high architectural distinction, structural durability, and transparent pricing across Kerala, empowering homeowners and business founders to turn their blueprint dreams into enduring realities.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 shadow-marca space-y-4">
              <div className="w-12 h-12 rounded-xl bg-marca-gold/15 text-marca-gold-dark flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-marca-textDark">Our Vision</h3>
              <p className="text-base text-marca-textMuted leading-relaxed">
                To be recognized as a benchmark construction partner in Kerala, renowned for climate-sensitive sustainable architecture, unwavering craftsmanship, and an approachable, client-centered building journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our 5-Step Approach */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="badge-editorial">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-textDark tracking-tight">
              Our Structured Construction Approach
            </h2>
            <p className="text-sm sm:text-base text-marca-textMuted">
              A transparent, step-by-step workflow designed to eliminate stress and deliver complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation & Site Study',
                desc: 'Listening to your vision, inspecting the Kerala plot, orientation, soil condition, and budget parameters.',
              },
              {
                step: '02',
                title: 'Architectural 3D Design',
                desc: 'Crafting tailored floor plans, 3D exterior elevations, and functional spatial layouts for your review.',
              },
              {
                step: '03',
                title: 'Estimation & Approvals',
                desc: 'Detailed itemized BOQ, statutory panchayat/municipal documentation, and milestone timeline finalization.',
              },
              {
                step: '04',
                title: 'Precision Construction',
                desc: 'RCC framing, premium masonry, weatherproofing, electrical & plumbing supervised by experienced engineers.',
              },
              {
                step: '05',
                title: 'Handover & Support',
                desc: 'Rigorous snag list resolution, deep cleaning, key handover, and ongoing structural guidance.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-marca-light border border-gray-100 flex flex-col justify-between space-y-4 hover:border-marca-green/40 transition-colors"
              >
                <div>
                  <span className="text-3xl font-extrabold text-marca-green-600 block">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-marca-textDark mt-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-marca-textMuted leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 lg:py-24 bg-marca-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="badge-editorial-dark">Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Principles That Guide Marca Construction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-marca-slate border border-white/10 space-y-3">
              <ShieldCheck className="w-8 h-8 text-marca-green" />
              <h3 className="text-lg font-bold text-white">Integrity & Clarity</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Clear contracts, honest bill of quantities, and no hidden charges or surprise costs mid-way through construction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-marca-slate border border-white/10 space-y-3">
              <Leaf className="w-8 h-8 text-marca-green" />
              <h3 className="text-lg font-bold text-white">Climate & Sustainability</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Prioritizing natural airflow, rainwater recharge, and energy-conserving architectural techniques suited to Kerala.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-marca-slate border border-white/10 space-y-3">
              <Compass className="w-8 h-8 text-marca-gold" />
              <h3 className="text-lg font-bold text-white">Architectural Craft</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Combining timeless aesthetics with dependable structural engineering for buildings that age gracefully.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-marca-slate border border-white/10 space-y-3">
              <Users className="w-8 h-8 text-marca-gold" />
              <h3 className="text-lg font-bold text-white">Client-Centric Care</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Direct responsiveness, personalized guidance, and respectful communication from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History & Leadership Team - EDITABLE PLACEHOLDERS (Per strict prompt instructions) */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* History Placeholder */}
          <div className="p-8 sm:p-10 rounded-2xl bg-marca-light border-2 border-dashed border-gray-300 space-y-4">
            <div className="flex items-center gap-2 text-marca-gold-dark">
              <Info className="w-5 h-5 text-marca-gold" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Company History Section (Ready for Official Details)
              </span>
            </div>
            <h3 className="text-2xl font-bold text-marca-textDark">
              The Story of Marca Construction
            </h3>
            <p className="text-sm text-marca-textMuted leading-relaxed">
              [Editable Company History Placeholder: Marca Construction was founded with a dedicated focus on elevating residential and small commercial construction standards across Kerala. As official founding milestones, corporate background, and archival records are supplied by the client, they will be showcased here.]
            </p>
            <div className="text-xs text-gray-500 italic">
              Tip: You can edit this text directly in <code className="bg-gray-200 px-1.5 py-0.5 rounded text-gray-800">src/pages/About.tsx</code> without modifying any design code.
            </div>
          </div>

          {/* Team / Leadership Placeholder */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="badge-editorial">Leadership & Engineering</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-marca-textDark">
                Our Leadership Team
              </h3>
              <p className="text-sm text-marca-textMuted">
                [Editable Team Placeholder: The leadership, architects, and site engineers of Marca Construction will be featured here once official profiles are provided.]
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { role: 'Managing Director / Founder', placeholderName: 'Leadership Profile' },
                { role: 'Lead Architect & Designer', placeholderName: 'Architectural Head' },
                { role: 'Senior Structural Engineer', placeholderName: 'Engineering Lead' },
              ].map((member, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-marca-light border border-gray-200 text-center space-y-4"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-marca-green/30 mx-auto flex items-center justify-center text-gray-400">
                    <Users className="w-10 h-10 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-marca-textDark">
                      [{member.placeholderName}]
                    </h4>
                    <p className="text-xs text-marca-green-700 font-semibold mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    [Professional bio, qualifications, and role description will be added here.]
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-marca-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Have a Plot or Project in Mind in Kerala?
          </h3>
          <p className="text-sm text-gray-300">
            Let’s discuss your vision and see how Marca Construction can bring it to life.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary">
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
