/**
 * MARCA CONSTRUCTION - Central Company Configuration & Contact Details
 * 
 * EDIT THIS FILE to update:
 * - Phone numbers, email, physical office address
 * - Social media links (YouTube, Facebook, Instagram, LinkedIn)
 * - WhatsApp enquiry number and default message
 * - Taglines and general brand metadata
 */

export interface CompanyData {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  state: string;
  country: string;
  // Contact details (Edit placeholders below when actual details are provided)
  phone: {
    display: string;
    raw: string; // digits with country code for tel: links
  };
  whatsapp: {
    number: string; // digits with country code e.g. "919840000000"
    defaultMessage: string;
  };
  email: {
    primary: string;
    inquiries: string;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    youtube: string;
    facebook: string;
    instagram: string;
  };
  googleMapsEmbedUrl: string;
}

export const companyData: CompanyData = {
  name: 'MARCA CONSTRUCTION',
  shortName: 'Marca',
  tagline: 'Building Spaces. Creating Futures.',
  subtitle: 'Kerala-based construction company creating modern, climate-resilient residential homes, bespoke villas, and small business spaces across Kerala.',
  state: 'Kerala',
  country: 'India',

  // EDITABLE PLACEHOLDER CONTACT DETAILS:
  phone: {
    display: '+91 (Add Phone Number)',
    raw: '+910000000000', // Update with actual calling number
  },
  whatsapp: {
    number: '919840000000', // Update with WhatsApp active number (country code + 10 digits)
    defaultMessage: 'Hello Marca Construction, I would like to enquire about your construction and architectural services in Kerala.',
  },
  email: {
    primary: 'contact@marcaconstruction.com', // Placeholder: update when confirmed
    inquiries: 'projects@marcaconstruction.com',
  },
  address: {
    line1: '[Office Address Line 1 / Building Name]',
    line2: '[Street / Locality Name]',
    city: '[City / Town]',
    district: '[District]',
    state: 'Kerala',
    pincode: '68XXXX',
    fullAddress: 'Marca Construction, [Office Address Line 1], [City / District], Kerala - [Pincode], India',
  },
  workingHours: {
    weekdays: 'Monday – Friday: 9:00 AM – 6:00 PM',
    saturday: 'Saturday: 9:30 AM – 4:00 PM',
    sunday: 'Sunday: Closed / Site Visits by Prior Appointment',
  },

  // OFFICIAL BRAND SOCIAL LINKS (from brand reference):
  social: {
    youtube: 'https://www.youtube.com/channel/UCzCqGHcOY2YaDGs2l62EBug',
    facebook: 'https://www.facebook.com/profile.php?id=61577669800297',
    instagram: 'https://www.instagram.com/', // Optional placeholder
  },

  // Google Maps Embed (Default centered on Kerala, can be replaced with exact office pin)
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005473.0135334468!2d75.14878536894532!3d10.538127041703643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbeddd764d!2sKerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

