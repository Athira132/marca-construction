import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, User, Mail, Phone, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';
import { companyData } from '../data/company';

export const About: React.FC = () => {
  return (
    <div className="bg-[#F8F9F5] min-h-screen">
      <SEO
        title="About Us | Marca Construction"
        description="Learn about Marca Construction, a Kerala-based construction practice based in Calicut delivering residential, commercial, and trade engineering solutions."
      />

      {/* Full-Cover Photographic Hero Banner */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-marca-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161C]/95 via-[#11161C]/60 to-[#11161C]/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <span className="text-[11px] font-bold uppercase tracking-widest text-marca-gold mb-3 inline-block">
            Practice Profile
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            About Marca Construction
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal max-w-xl mx-auto leading-relaxed">
            Constructing spaces with architectural clarity, verified materials, and disciplined execution.
          </p>
        </div>
      </section>

      {/* Concise Introduction & Core Practice Details */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200/80 p-8 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-4 max-w-3xl">
              <span className="text-[10px] uppercase tracking-widest text-marca-gold-dark font-bold">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#11161C] tracking-tight leading-snug">
                Serving Homeowners and Businesses Across Kerala
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Marca Construction is a construction company headquartered in Moorkkanadu, Pantheerankavu, Calicut. We deliver comprehensive solutions spanning interior architecture, roof and false ceiling engineering, master carpentry, plumbing infrastructure, professional painting, solar power systems, custom furniture, and licensed electrical works.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our approach emphasizes functional design suited to Kerala’s tropical climate, rigorous technical standards, and single-point accountability from planning through final handover.
              </p>
            </div>

            {/* Official Registered Company Details */}
            <div className="pt-6 border-t border-gray-100">
              <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold block mb-4">
                Registered Information & Contact
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-gray-700">
                <div className="space-y-1">
                  <span className="text-gray-400 block font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-marca-green" />
                    Contact Person
                  </span>
                  <p className="font-medium text-[#11161C] text-sm">
                    {companyData.contactPerson}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 block font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-marca-gold-dark" />
                    Office Location
                  </span>
                  <p className="font-medium text-[#11161C] text-sm">
                    {companyData.location}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 block font-semibold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-marca-green" />
                    GST Registration
                  </span>
                  <p className="font-mono font-medium text-[#11161C] text-sm">
                    {companyData.gst}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 block font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-marca-gold-dark" />
                    Primary Mobile
                  </span>
                  <a
                    href={`tel:${companyData.phone.primaryRaw}`}
                    className="font-medium text-[#11161C] hover:text-marca-green-700 text-sm block"
                  >
                    +91 {companyData.phone.primary}
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 block font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-marca-gold-dark" />
                    Office Contact
                  </span>
                  <a
                    href={`tel:${companyData.phone.officeRaw}`}
                    className="font-medium text-[#11161C] hover:text-marca-green-700 text-sm block"
                  >
                    +91 {companyData.phone.office}
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-400 block font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-marca-green" />
                    Email
                  </span>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="font-medium text-[#11161C] hover:text-marca-green-700 text-sm block truncate"
                  >
                    {companyData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Operating across Calicut, Ernakulam, Thrissur, and all Kerala districts.
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-[#11161C] hover:text-marca-green-700"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
