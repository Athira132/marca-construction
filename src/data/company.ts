/**
 * MARCA CONSTRUCTION - Central Company Configuration & Exact Details
 */

export interface CompanyData {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  contactPerson: string;
  location: string;
  fullAddress: string;
  phone: {
    primary: string; // 9847943104
    primaryRaw: string; // +919847943104
    office: string; // 9946943104
    officeRaw: string; // +919946943104
  };
  whatsapp: {
    number: string; // 919847943104
    link: string; // https://wa.me/919847943104
    defaultMessage: string;
  };
  email: string;
  gst: string;
  social: {
    youtube: string;
    facebook: string;
  };
  googleMapsEmbedUrl: string;
}

export const companyData: CompanyData = {
  name: 'MARCA CONSTRUCTION',
  shortName: 'Marca',
  tagline: 'Building Spaces. Creating Futures.',
  subtitle: 'Thoughtful solutions for homes and businesses.',
  contactPerson: 'Shimjith K.K.',
  location: 'Moorkkanadu, Pantheerankavu, Calicut, Kerala - 673019',
  fullAddress: 'Marca Construction, Moorkkanadu, Pantheerankavu, Calicut, Kerala - 673019',
  phone: {
    primary: '9847943104',
    primaryRaw: '+919847943104',
    office: '9946943104',
    officeRaw: '+919946943104',
  },
  whatsapp: {
    number: '919847943104',
    link: 'https://wa.me/919847943104',
    defaultMessage: 'Hello Marca Construction, I would like to enquire about your construction and architectural services.',
  },
  email: 'marcaconstruction01@gmail.com',
  gst: '32LGSPK8306C1Z8',
  social: {
    youtube: 'https://www.youtube.com/channel/UCzCqGHcOY2YaDGs2l62EBug',
    facebook: 'https://www.facebook.com/profile.php?id=61577669800297',
  },
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4357732598375!2d75.8459426!3d11.2292723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6599b533a1e35%3A0x6b9d6a36f56e9c40!2sPantheeramkavu%2C%20Kerala%20673019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};
