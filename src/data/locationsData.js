/**
 * Regional Locations & City Hubs in Canada
 * Provides city-specific landing content, localized keywords & testimonials
 */

import brandConfig from './brandConfig';

export const locationsData = [
  {
    id: "calgary",
    slug: "calgary",
    city: "Calgary",
    province: "Alberta",
    image: "/images/locations/calgary.jpg",
    isHeadquarters: true,
    tagline: "Best Astrologer & Psychic Spiritual Healer in Calgary, AB",
    description: `${brandConfig.name} offers trusted in-person and confidential remote Vedic astrology consultations across Calgary, including Downtown Calgary, Beltline, Saddleridge, Taradale, Shawnessy, and surrounding Alberta regions.`,
    address: "700 2nd St SW, Calgary, AB T2P 2W2, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Get Ex Love Back in Calgary",
      "Husband and Wife Problem Solution in Calgary",
      "Black Magic Removal in Calgary",
      "Psychic Reading in Calgary",
      "Negative Energy Removal in Calgary"
    ],
    reviewSnippet: {
      author: "Harpreet & Aman S.",
      location: "Calgary, AB",
      text: `We were facing severe marriage problems and on the verge of divorce. ${brandConfig.name}'s remedies in Calgary brought mutual understanding back into our home. Truly blessed.`
    }
  },
  {
    id: "edmonton",
    slug: "edmonton",
    city: "Edmonton",
    province: "Alberta",
    image: "/images/locations/edmonton.jpg",
    tagline: "Top Renowned Indian Astrologer & Love Problem Specialist in Edmonton",
    description: `Serving Mill Woods, Strathcona, Windermere, Clareview, and all of greater Edmonton with authentic Vedic horoscope reading, love reunion rituals, and dark magic removal.`,
    address: "10111 104 Ave NW, Edmonton, AB T5J 0J4, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Ex Love Back in Edmonton",
      "Love Marriage Specialist in Edmonton",
      "Black Magic Removal in Edmonton",
      "Negative Energy Removal in Edmonton",
      "Curse & Voodoo Removal in Edmonton"
    ],
    reviewSnippet: {
      author: "Davinder K.",
      location: "Edmonton, AB",
      text: `${brandConfig.name}'s psychic reading was 100% accurate regarding my career and relationship. The negative energy around my business vanished in just one week.`
    }
  },
  {
    id: "toronto",
    slug: "toronto",
    city: "Toronto",
    province: "Ontario",
    image: "/images/locations/toronto.jpg",
    tagline: "Experienced Indian Vedic Astrologer in Toronto & GTA",
    description: `Providing high-precision Vedic Kundli consultations, psychic readings, and spiritual cleansing across Downtown Toronto, North York, Scarborough, and Etobicoke.`,
    address: "100 King St W, Toronto, ON M5X 1A9, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Indian Astrologer in Toronto",
      "Horoscope Reading Toronto",
      "Relationship Consultation Toronto",
      "Spiritual Healing Toronto",
      "Career & Business Astrology Toronto"
    ],
    reviewSnippet: {
      author: "Michael & Priya T.",
      location: "Toronto, ON",
      text: `${brandConfig.name} is truly one of the most compassionate and insightful astrologers in Toronto. His birth chart analysis gave us total direction.`
    }
  },
  {
    id: "vancouver",
    slug: "vancouver",
    city: "Vancouver",
    province: "British Columbia",
    image: "/images/locations/vancouver.jpg",
    tagline: "Premier Psychic Reader & Spiritual Healer in Vancouver & Surrey",
    description: `Guiding clients across Greater Vancouver, Surrey, Burnaby, Richmond, and Langley with profound Vedic astrology, chakra balancing, and life path illumination.`,
    address: "700 W Georgia St, Vancouver, BC V7Y 1G5, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Psychic Reading Vancouver",
      "Love Spell Caster Vancouver",
      "Spiritual Healing Vancouver",
      "Business Growth Astrologer Vancouver",
      "Palmistry & Face Reading Vancouver"
    ],
    reviewSnippet: {
      author: "Elena R.",
      location: "Vancouver, BC",
      text: `The psychic insights on my soulmate were uncanny. Three months after my reading with ${brandConfig.name}, I met the exact person described.`
    }
  },
  {
    id: "mississauga",
    slug: "mississauga",
    city: "Mississauga",
    province: "Ontario",
    image: "/images/locations/mississauga.jpg",
    tagline: "Best Astrologer & Vashikaran Specialist in Mississauga",
    description: `Extensive astrology services for residents of Mississauga, Hurontario, Meadowvale, Port Credit, and Malton seeking love problem resolution and peace of mind.`,
    address: "100 City Centre Dr, Mississauga, ON L5B 2C9, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Love Problem Solution Mississauga",
      "Get Ex Back in Mississauga",
      "Black Magic Removal Mississauga",
      "Aura Cleansing Mississauga",
      "Family Dispute Astrology Mississauga"
    ],
    reviewSnippet: {
      author: "Joah M.",
      location: "Mississauga, ON",
      text: `I was going through a painful period of separation. ${brandConfig.name}'s positive guidance helped my partner realize their mistake and return home.`
    }
  },
  {
    id: "brampton",
    slug: "brampton",
    city: "Brampton",
    province: "Ontario",
    image: "/images/locations/brampton.jpg",
    tagline: "Trusted Vedic Astrologer & Kundli Milan Expert in Brampton",
    description: `Offering confidential consultations for families, young professionals, and couples across Brampton, Springdale, Goreway, and Mount Pleasant.`,
    address: "25 Peel Centre Dr, Brampton, ON L6T 3R5, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Kundli Milan & Marriage Brampton",
      "Ex Love Reunion Brampton",
      "Evil Eye (Nazar) Removal Brampton",
      "Spiritual Puja & Shanti Brampton",
      "Court Case & Immigration Astrology Brampton"
    ],
    reviewSnippet: {
      author: "Simranjit S.",
      location: "Brampton, ON",
      text: `The best astrologer in Brampton without a doubt. He told me things about my past that no one else could have known and provided simple, effective remedies.`
    }
  },
  {
    id: "montreal",
    slug: "montreal",
    city: "Montreal",
    province: "Quebec",
    image: "/images/locations/montreal.jpg",
    tagline: "Renowned Indian Astrologer & Energy Cleansing in Montreal",
    description: `Confidential bilingual astrology consultations for Montreal, Laval, Longueuil, and West Island residents seeking spiritual peace and love reconciliation.`,
    address: "1000 Rue de la Gauchetière O, Montréal, QC H3B 4W5, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Astrologer in Montreal",
      "Love Reconciliation Montreal",
      "Negative Energy Cleansing Montreal",
      "Horoscope Analysis Montreal"
    ],
    reviewSnippet: {
      author: "Marc-Andre L.",
      location: "Montreal, QC",
      text: `Very warm and attentive master. His spiritual cleansing rituals brought peace back into my home after months of strange disturbances.`
    }
  },
  {
    id: "ottawa",
    slug: "ottawa",
    city: "Ottawa",
    province: "Ontario",
    image: "/images/locations/ottawa.jpg",
    tagline: "Vedic Astrology & Career Prosperity Guide in Ottawa",
    description: `Trusted consultations for Ottawa-Gatineau, Nepean, Kanata, and Orleans focusing on career breakthroughs, marriage stability, and protection from negative energies.`,
    address: "50 O'Connor St, Ottawa, ON K1P 6L2, Canada",
    phone: brandConfig.phone,
    popularServices: [
      "Career Astrology Ottawa",
      "Marriage Guidance Ottawa",
      "Psychic Predictions Ottawa",
      "Vedic Healing Ottawa"
    ],
    reviewSnippet: {
      author: "Sunita G.",
      location: "Ottawa, ON",
      text: `${brandConfig.name} predicted my government promotion down to the exact month. His astrological mastery is unmatched.`
    }
  }
];

export default locationsData;
