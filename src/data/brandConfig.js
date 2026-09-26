/**
 * Pandith Astrologer - 100% Exact Brand Configuration
 */

import personalDetails from './personalDetails';

export const brandConfig = {
  brandName: personalDetails.websiteName,
  name: personalDetails.pandithName,
  title: `${personalDetails.pandithName}: Best Astrologer in Canada Over 25+ Years`,
  phone: personalDetails.contactNumber,
  phoneRaw: personalDetails.contactNumber.replace(/[^0-9+]/g, ''),
  phoneDisplay: personalDetails.contactNumber,
  email: personalDetails.email,
  address: personalDetails.address,
  mainOffice: personalDetails.address,
  city: "Calgary",
  province: "Alberta",
  country: "Canada",
  whatsapp: personalDetails.whatsappNumber.replace(/[^0-9+]/g, ''),
  whatsappUrl: `https://api.whatsapp.com/send?phone=${personalDetails.whatsappNumber.replace(/[^0-9]/g, '')}`,
  experienceYears: "25+",
  counterYears: "30+",
  clientsSatisfied: "35k +",
  logoUrl: "/images/sacred-icon.svg",
  faviconUrl: "/images/sacred-icon.svg",
  bannerBadge: `${personalDetails.pandithName} best services`,
  disclaimer: `Disclaimer :- The astrology consultation and services offered by ${personalDetails.pandithName} are solely based on his expertise in astrology and the specific circumstances of your situation. Results may vary from person to person.`
};

export default brandConfig;
