import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  User,
  FileText,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { companyData } from '../data/company';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
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
    service: 'Interior Works',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
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
      newErrors.message = 'Please provide a brief message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappDirectUrl = `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
    formData.name
      ? `Hello Marca Construction, I am ${formData.name}. I am enquiring about ${formData.service}. Note: ${formData.message}`
      : companyData.whatsapp.defaultMessage
  )}`;

  return (
    <div className="bg-[#F8F9F5] min-h-screen">
      <SEO
        title="Contact Us | Marca Construction"
        description="Contact Marca Construction in Moorkkanadu, Pantheerankavu, Calicut, Kerala. Call 9847943104 or email marcaconstruction01@gmail.com."
      />

      {/* Full-Width Photographic Hero Banner (Edge-to-Edge) */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-marca-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161C]/95 via-[#11161C]/60 to-[#11161C]/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <span className="text-[11px] font-bold uppercase tracking-widest text-marca-gold mb-3 inline-block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal max-w-md mx-auto leading-relaxed">
            Discuss your upcoming project with our team in Calicut.
          </p>
        </div>
      </section>

      {/* Main Clean Contact Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-lg border border-gray-200/80 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-marca-green/10 text-marca-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#11161C]">
                  Thank You, {formData.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received. Our team will review your project details and reach out shortly.
                </p>
                <div className="pt-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    <span>Continue on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-[#11161C]">
                    Project Consultation Form
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Send us your project outline and we will respond promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-bold uppercase tracking-wider text-gray-700"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className={`w-full px-3.5 py-2.5 rounded border text-xs text-[#11161C] focus:outline-none focus:border-marca-green ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-bold uppercase tracking-wider text-gray-700"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9847943104"
                      className={`w-full px-3.5 py-2.5 rounded border text-xs text-[#11161C] focus:outline-none focus:border-marca-green ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-bold uppercase tracking-wider text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 rounded border text-xs text-[#11161C] focus:outline-none focus:border-marca-green ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="service"
                      className="block text-[11px] font-bold uppercase tracking-wider text-gray-700"
                    >
                      Service Category
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-gray-200 text-xs text-[#11161C] focus:outline-none focus:border-marca-green bg-white"
                    >
                      <option value="Interior Works">Interior Works</option>
                      <option value="Roof Works">Roof Works</option>
                      <option value="Plumbing Works">Plumbing Works</option>
                      <option value="Painting Works">Painting Works</option>
                      <option value="Solar Systems">Solar Systems</option>
                      <option value="Carpenter Works">Carpenter Works</option>
                      <option value="Custom Furniture & Epoxy Works">Custom Furniture & Epoxy Works</option>
                      <option value="Electrical Works">Electrical Works</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-bold uppercase tracking-wider text-gray-700"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your project, location in Kerala, and expected timeline..."
                    className={`w-full px-3.5 py-2.5 rounded border text-xs text-[#11161C] focus:outline-none focus:border-marca-green ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#11161C] hover:bg-[#25303D] text-white text-xs uppercase tracking-widest font-semibold rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Exact Company Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-lg border border-gray-200/80 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-marca-gold-dark font-bold block mb-1">
                  Company Information
                </span>
                <h3 className="text-xl font-bold text-[#11161C]">
                  {companyData.name}
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block font-semibold text-[11px]">Contact Person</span>
                    <p className="font-semibold text-gray-900 text-sm">{companyData.contactPerson}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-marca-gold-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block font-semibold text-[11px]">Address</span>
                    <p className="text-gray-800 leading-relaxed font-medium">{companyData.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block font-semibold text-[11px]">Primary Mobile</span>
                    <a
                      href={`tel:${companyData.phone.primaryRaw}`}
                      className="text-[#11161C] font-semibold hover:text-marca-green text-sm block"
                    >
                      +91 {companyData.phone.primary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-marca-gold-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block font-semibold text-[11px]">Office Mobile</span>
                    <a
                      href={`tel:${companyData.phone.officeRaw}`}
                      className="text-[#11161C] font-semibold hover:text-marca-green text-sm block"
                    >
                      +91 {companyData.phone.office}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block font-semibold text-[11px]">Solar System Operation Head</span>
                    <a
                      href={`tel:${companyData.phone.solarHeadRaw}`}
                      className="text-[#11161C] font-semibold hover:text-marca-green text-sm block"
                    >
                      +91 {companyData.phone.solarHead}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block font-semibold text-[11px]">Email</span>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-gray-800 hover:text-marca-green font-medium block"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1 border-t border-gray-100">
                  <FileText className="w-4 h-4 text-marca-gold-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block font-semibold text-[11px]">GST Number</span>
                    <p className="font-mono text-gray-900 font-medium">{companyData.gst}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={companyData.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location */}
            <div className="rounded-lg overflow-hidden border border-gray-200/80 bg-white shadow-sm">
              <iframe
                title="Marca Construction Location Map"
                src={companyData.googleMapsEmbedUrl}
                className="w-full h-48 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
