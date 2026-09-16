export interface Project {
  id: string;
  projectNumber: string;
  name: string;
  category: string;
  type: string;
  description: string;
  image: string;
  location: string;
  year: string;
  scope: string;
  area: string;
  quote?: string;
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  subtitle: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  rating: number;
}

export const studioBrand = {
  name: "Studio Ayla",
  tagline: "Interiors that reflect you.",
  supportingLine: "Personalised interiors and custom lighting designed around you.",
  email: "studioayladesign@gmail.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  pinterest: "https://pinterest.com",
  year: 2026,
  highlightStatement: "We design calm, intentional interiors that balance light, material, and the way a room is actually lived in.",
  introCopy: "Studio Ayla is an interior design studio centred on individuality. We bring together thoughtful spatial design, expressive materials, and custom lighting to create spaces that reflect your personality and the way you live. From the overall layout to a signature light fixture, each element is designed to feel distinctly yours.",
  coreValue: {
    label: "OUR CORE VALUE",
    heading: "Individuality",
    statement: "Expressing each client’s personality through personalised interiors and custom lighting.",
  },
  aboutCopy: {
    heading: "Interiors that reflect you.",
    highlight: "We design calm, intentional interiors that balance light, material, and the way a room is actually lived in.",
    paragraph1: "We believe true luxury is deeply personal. Rather than applying fleeting trends or imposing a rigid house aesthetic, Studio Ayla starts with an intimate understanding of who you are and how you inhabit space.",
    paragraph2: "Custom lighting is at the heart of our practice. From one-of-a-kind sculptural luminaires to ambient circadian glows, our fixtures are designed, prototyped, and handcrafted with master artisans to bring distinct soul and warmth to every space.",
    stats: [
      { label: "Bespoke Commissions", value: "40+" },
      { label: "Custom Fixtures Designed", value: "85+" },
      { label: "Client Satisfaction", value: "100%" },
    ],
  },
};

export const projectsData: Project[] = [
  {
    id: "project-01",
    projectNumber: "Project 01",
    name: "The Wisteria Dining Atelier & Rose Onyx Lounge",
    category: "Hospitality & Architecture",
    type: "Bespoke Hospitality Lounge",
    description: "An evocative fine dining interior featuring cascading pink wisteria foliage canopies, polished rose marble slabs, and custom blackened steel pendant lamps.",
    image: "/images/botanical-wisteria-lounge.jpg",
    location: "Mayfair Grand Dining Club",
    year: "2026",
    scope: "Botanical Canopy Engineering, Rose Marble Selection, Center Water Basin & Ambient Pendant Lighting",
    area: "4,800 sq.ft",
    quote: "A sensory botanical dreamscape uniting cascading wisteria, polished rose onyx, and warm acoustic curves.",
    features: [
      "Overhead botanical wisteria and cascading foliage canopy integrated with acoustic baffles",
      "Bookmatched rose quartz and marble flooring with mirror-polished bronze inlays",
      "Central circular reflective water basin planter with integrated submerged uplighting",
      "Curved mauve velvet dining shells with slender brass stiletto legs",
    ],
  },
  {
    id: "project-02",
    projectNumber: "Project 02",
    name: "The Lumina Master Dressing Suite & Chandelier",
    category: "Residential & Lighting",
    type: "Bespoke Dressing Suite & Luminaire",
    description: "A luxury master walk-in dressing suite with precision smoked glass cabinetry, fluted walnut joinery, and a signature helical crystal ribbon luminaire.",
    image: "/images/dressing-suite-chandelier.jpg",
    location: "Mayfair Private Residence",
    year: "2025",
    scope: "Custom Luminaire Engineering, Smoked Glass Wardrobes, Center Island Millwork & Circadian Lighting",
    area: "850 sq.ft",
    quote: "A sculptural celebration of bespoke dressing rituals, warm indirect shelf illumination, and crystal reflection.",
    features: [
      "Custom hand-formed infinity crystal ribbon chandelier with dynamic warm dimming",
      "Integrated backlit smoked-glass wardrobe enclosures with acoustic soft-close seals",
      "Bespoke fluted walnut center island with dual-sided velvet-lined jewelry drawers",
      "Monolithic matte charcoal vanity return and brushed brass hanging rails",
    ],
  },
  {
    id: "project-03",
    projectNumber: "Project 03",
    name: "The Harvest Culinary Atelier & Artisan Lounge",
    category: "Commercial & Hospitality",
    type: "Biophilic Culinary Space",
    description: "An immersive hospitality interior uniting hammered copper floating stations, geometric terracotta tile flooring, and acoustic timber ceiling canopies.",
    image: "/images/culinary-atelier-copper.jpg",
    location: "Soho Social House",
    year: "2025",
    scope: "Spatial Zoning, Sculptural Copper Counters, Terracotta Patterning & Artisan Joinery",
    area: "3,200 sq.ft",
    quote: "Harmonizing raw terracotta, warm copper reflections, and live culinary storytelling in a social atelier.",
    features: [
      "Bespoke brushed copper and terrazzo food preparation island stations",
      "Terracotta geometric tile patterning inspired by Mediterranean artisan craft",
      "Suspended overhead architectural metal gantry with warm integrated downward spots",
      "Custom woven upholstered dining nooks and acoustic timber ceiling lattice",
    ],
  },
  {
    id: "project-04",
    projectNumber: "Project 04",
    name: "Artisan Pavilion & Parametric Bamboo Canopy",
    category: "Hospitality & Architecture",
    type: "Hospitality & Cafe Architecture",
    description: "An architectural cafe combining an undulating parametric woven bamboo ceiling canopy with terracotta tiles, fluted walnut service counter, and ceramic screens.",
    image: "/images/parametric-bamboo-cafe.jpg",
    location: "Kyoto Botanical Quarter",
    year: "2026",
    scope: "Parametric Ceiling Design, Fluted Timber Counter, Custom Bar Seating & Terracotta Flooring",
    area: "2,400 sq.ft",
    quote: "Sculpting bamboo and terracotta into a breathtaking sensory canopy that filters natural daylight.",
    features: [
      "Parametric undulating woven bamboo ceiling canopy sculpted for acoustic warmth",
      "Custom curved fluted walnut service bar with brass footrails and indirect under-counter glow",
      "Perforated terracotta breeze block screen walls creating dramatic shadow plays",
      "Handcrafted timber-framed bar seating and floating mezzanine lounge",
    ],
  },
  {
    id: "project-05",
    projectNumber: "Project 05",
    name: "Moksha Arana Botanical Sanctuary & Lounge",
    category: "Wellness & Hospitality",
    type: "Biophilic Wellness Lounge",
    description: "A contemplative wellness resort entrance and sensory courtyard connecting indoor botanical gardens, rammed-earth textures, and custom glowing pathway bollards.",
    image: "/images/moksha-arana-sanctuary.jpg",
    location: "Moksha Arana Wellness Retreat",
    year: "2026",
    scope: "Biophilic Architecture, Sensory Courtyard, Rammed Earth Textures & Ambient Pathway Glow",
    area: "6,500 sq.ft",
    quote: "A tranquil sanctuary designed around natural earth pigments, indoor tropical palm groves, and restorative calm.",
    features: [
      "Indoor tropical palm grove integrated with natural volcanic stone riverbed",
      "Rammed earth textured feature wall with bespoke bronze dimensional signage",
      "Terracotta walkway tiles with concealed linear in-ground guide lighting",
      "Floating timber lounge platforms and sculptural acoustic fabric canopy",
    ],
  },
];

export const servicesData: Service[] = [
  {
    id: "interior-design",
    number: "01",
    title: "Interior Design",
    description: "Thoughtful spatial planning and interior concepts tailored to each client.",
    deliverables: [
      "Spatial zoning & floorplan optimization",
      "Concept moodboards & material palettes",
      "3D spatial visualizations & walkthroughs",
      "Art curation & finishing touches",
    ],
  },
  {
    id: "residential-interiors",
    number: "02",
    title: "Residential Interiors",
    description: "Personalised homes designed around lifestyle, comfort and individuality.",
    deliverables: [
      "Full private residence renovations",
      "Kitchen & sanctuary bath design",
      "Custom dressing rooms & joinery",
      "Acoustic & sensory atmosphere planning",
    ],
  },
  {
    id: "commercial-interiors",
    number: "03",
    title: "Commercial Interiors",
    description: "Distinctive spaces designed to communicate the identity of a business.",
    deliverables: [
      "Boutique hospitality & restaurant spaces",
      "Executive offices & creative studios",
      "Brand storytelling through architecture",
      "Durable high-touch material curation",
    ],
  },
  {
    id: "custom-lighting",
    number: "04",
    title: "Custom Lighting",
    description: "Bespoke lighting concepts and signature fixtures designed specifically for the space.",
    deliverables: [
      "Signature luminaire design & prototyping",
      "Circadian & atmospheric lighting layout",
      "Artisan glass, brass & stone fabrication",
      "Architectural cove & concealed fixture detailing",
    ],
  },
  {
    id: "bespoke-design",
    number: "05",
    title: "Bespoke Design",
    description: "Unique interior elements developed specifically around the client and project.",
    deliverables: [
      "One-of-a-kind furniture pieces",
      "Custom millwork & architectural screens",
      "Bespoke hardware & metal detailing",
      "Textile commission & rug design",
    ],
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-01",
    title: "The Wisteria Botanical Dining Club",
    category: "Hospitality & Architecture",
    subtitle: "Cascading botanical wisteria canopy, polished rose onyx, and blackened steel pendant lamps.",
    image: "/images/botanical-wisteria-lounge.jpg",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: "gal-02",
    title: "The Lumina Master Dressing Suite",
    category: "Residential & Lighting",
    subtitle: "Infinity helical crystal ribbon luminaire and smoked glass cabinetry.",
    image: "/images/dressing-suite-chandelier.jpg",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: "gal-03",
    title: "The Harvest Culinary Atelier",
    category: "Commercial & Hospitality",
    subtitle: "Floating brushed copper counter stations with geometric terracotta tiles.",
    image: "/images/culinary-atelier-copper.jpg",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: "gal-04",
    title: "Artisan Bamboo Pavilion",
    category: "Hospitality & Architecture",
    subtitle: "Parametric woven bamboo acoustic ceiling canopy & fluted timber bar.",
    image: "/images/parametric-bamboo-cafe.jpg",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: "gal-05",
    title: "Moksha Arana Sensory Courtyard",
    category: "Wellness & Hospitality",
    subtitle: "Indoor tropical palm grove, volcanic stone riverbed, and rammed earth pigments.",
    image: "/images/moksha-arana-sanctuary.jpg",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-01",
    quote: "Studio Ayla didn’t just design our home; they translated the way our family lives into a spatial sanctuary. The custom helical lighting in our dressing suite is an absolute work of art.",
    author: "Elena Rostova",
    role: "Private Residence Client",
    project: "Mayfair Townhouse & Dressing Suite",
    location: "London, UK",
    rating: 5,
  },
  {
    id: "test-02",
    quote: "The wisteria canopy and rose onyx dining room have completely redefined the atmosphere of our social club. Every guest stops in amazement the moment they step through the entrance.",
    author: "Marcus Sterling",
    role: "Founding Director",
    project: "Mayfair Grand Dining Club",
    location: "London, UK",
    rating: 5,
  },
  {
    id: "test-03",
    quote: "Studio Ayla’s sensitivity to organic materials and lighting is peerless. The woven bamboo ceiling and terracotta palette create an acoustic serenity that is deeply restorative.",
    author: "Sora Takahashi",
    role: "Hospitality Curator",
    project: "Kyoto Botanical Pavilion",
    location: "Kyoto, Japan",
    rating: 5,
  },
];
