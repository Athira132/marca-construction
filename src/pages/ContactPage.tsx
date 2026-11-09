import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Youtube,
  Facebook,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { companyData } from '../data/company';

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number';
    } else if (!/^[0-9+() -]{8,16}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or project description';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Residential Villa',
      location: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const whatsappDirectUrl = `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
    formData.name
      ? `Hello Marca Construction, I am ${formData.name}. I am interested in ${formData.projectType} construction in ${
          formData.location || 'Kerala'
        }. Details: ${formData.message}`
      : companyData.whatsapp.defaultMessage
  )}`;

  return (
    <div className="bg-marca-light min-h-screen pt-24 pb-20">
      <SEO
        title="Contact Us | Start Your Kerala Construction Project"
        description="Get in touch with Marca Construction. Request a site consultation, cost estimation, or discuss your residential villa or commercial project in Kerala."
      />

      {/* Header Banner */}
      <section className="bg-marca-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(111,168,42,0.15)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="badge-editorial-dark inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-marca-gold" />
            <span>Consultation & Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let’s Build Together
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Planning a new residential home, commercial building, or renovation in Kerala? Send us an inquiry below or reach out directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-marca border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-marca-green-100 text-marca-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-marca-textDark">
                  Thank You, {formData.name || 'Valued Client'}!
                </h3>
                <p className="text-sm text-marca-textMuted max-w-md mx-auto leading-relaxed">
                  Your project enquiry has been received. Our architectural team will review your requirements and reach out via phone or email shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continue Discussion on WhatsApp</span>
                  </a>
                  <button
                    onClick={resetForm}
                    className="btn-outline-dark text-xs py-3 px-5"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-2 border-b border-gray-100 pb-4">
                  <h2 className="text-2xl font-bold text-marca-textDark">
                    Project Consultation Form
                  </h2>
                  <p className="text-xs text-marca-textMuted">
                    Please provide your contact information and preliminary project details.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-marca-textDark"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Menon"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-marca-textDark focus:outline-none focus:ring-2 focus:ring-marca-green transition-colors ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-marca-textDark"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98400 00000"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-marca-textDark focus:outline-none focus:ring-2 focus:ring-marca-green transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-marca-textDark"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-marca-textDark focus:outline-none focus:ring-2 focus:ring-marca-green transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold uppercase tracking-wider text-marca-textDark"
                    >
                      Project Category
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-marca-textDark focus:outline-none focus:ring-2 focus:ring-marca-green bg-white"
                    >
                      <option value="Residential Villa">Custom Residential Villa</option>
                      <option value="Contemporary Kerala House">Contemporary Kerala House</option>
                      <option value="Commercial & Retail Space">Small Business / Commercial Space</option>
                      <option value="Structural Renovation">Structural Renovation / Remodelling</option>
                      <option value="Interior Architecture">Turnkey Interior Architecture</option>
                      <option value="Architectural Planning">Architectural 3D Plan & Approvals</option>
                    </select>
                  </div>
                </div>

                {/* Project Location in Kerala */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="location"
                    className="block text-xs font-bold uppercase tracking-wider text-marca-textDark"
                  >
                    Plot Location in Kerala (District / Town)
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Kakkanad, Ernakulam or Palakkad"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-marca-textDark focus:outline-none focus:ring-2 focus:ring-marca-green"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-marca-textDark"
                  >
                    Project Details & Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your plot size, estimated built-up area, desired timeline, or specific architectural preferences..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-marca-textDark focus:outline-none focus:ring-2 focus:ring-marca-green transition-colors ${
                      errors.message ? 'border-red-500 bg-red-50/30' : 'border-gray-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Consultation Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Contact Details & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick WhatsApp Action Card */}
            <div className="p-7 rounded-2xl bg-[#075E54] text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">Instant WhatsApp Chat</h3>
                  <p className="text-xs text-emerald-200">Connect directly with our team</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Need a fast response or want to send your floor plan drawings immediately? Chat with us on WhatsApp.
              </p>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start WhatsApp Consultation</span>
              </a>
            </div>

            {/* Office & Contact Placeholders */}
            <div className="p-7 rounded-2xl bg-white shadow-marca border border-gray-100 space-y-6">
              <h3 className="text-lg font-bold text-marca-textDark border-b border-gray-100 pb-3">
                Office Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-400">
                      Physical Address (Placeholder)
                    </span>
                    <p className="text-gray-700 font-medium mt-0.5">
                      {companyData.address.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-marca-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-400">
                      Phone Number (Placeholder)
                    </span>
                    <a
                      href={`tel:${companyData.phone.raw}`}
                      className="text-gray-700 font-medium hover:text-marca-green mt-0.5 block"
                    >
                      {companyData.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-400">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${companyData.email.primary}`}
                      className="text-gray-700 font-medium hover:text-marca-green mt-0.5 block"
                    >
                      {companyData.email.primary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-marca-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-400">
                      Operating Hours
                    </span>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {companyData.workingHours.weekdays}
                    </p>
                    <p className="text-xs text-gray-600">
                      {companyData.workingHours.saturday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Channels Card */}
            <div className="p-6 rounded-2xl bg-white shadow-marca border border-gray-100 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-gray-400 block">
                Connect On Official Channels
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={companyData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-[#FF0000]" />
                  <span className="text-xs font-bold">YouTube Channel</span>
                </a>

                <a
                  href={companyData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-[#1877F2]" />
                  <span className="text-xs font-bold">Facebook Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section Placeholder */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-gray-200 shadow-marca bg-white">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-marca-green" />
              <h3 className="text-base font-bold text-marca-textDark">
                Service Area & Office Location (Kerala)
              </h3>
            </div>
            <span className="text-xs text-marca-gold-dark font-medium">
              Centrally Serving All Districts in Kerala
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 bg-gray-100 relative">
            <iframe
              title="Marca Construction Kerala Service Area Map"
              src={companyData.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

