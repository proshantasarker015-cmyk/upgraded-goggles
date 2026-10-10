export interface ProductItem {
  id: string;
  name: string;
  bengaliName?: string;
  category: 'plate' | 'angle' | 'channel' | 'girder' | 'hydraulic';
  standardSize: string;
  thickness: string;
  description: string;
  applications: string[];
  features: string[];
}

export interface ClientItem {
  name: string;
  address: string;
  sector: string;
}

export interface ShipyardItem {
  name: string;
  address: string;
  type: 'Shipyard' | 'Media/Supplier';
}

export interface StaffItem {
  sl: number;
  name: string;
  designation: string;
  department: string;
}

export const COMPANY_INFO = {
  name: 'M/S Sraboni Enterprise & Advance Iron Engineering Works',
  shortName: 'Sraboni & Advance Iron',
  proprietor: 'Proshanta Sarker',
  proprietorDesignation: 'Proprietor & Managing Director',
  currentAddress: '52/2 NCG Road, Shyampur, Dhaka -1204, Bangladesh',
  emails: ['Proshantasarker015@gmail.com', 'Srk.shanto@yahoo.com'],
  phones: ['+8801680138031', '+8801915234015'],
  whatsapp: '+8801680138031',
  tradeLicense: 'TRAD/DSCC/011055/2020',
  registrationAuthority: 'Dhaka South City Corporation',
  tin: '451345520330',
  bin: '008455589-0301',
  totalEmployees: 13,
  banks: {
    current: ['BRAC Bank', 'Janata Bank', 'UCB Bank'],
    savings: ['IFIC Bank', 'Bank Asia'],
  },
  financialCapacity: {
    sraboniEnterprise: {
      mortgageAdvance: 'BDT 16,00,000 (Sixteen Lac Taka)',
      cashInvested: 'BDT 70,00,000 (Around Seventy Lac Taka)',
      total: 'BDT 86,00,000',
    },
    advanceIron: {
      mortgageAdvance: 'BDT 7,00,000 (Seven Lac Taka)',
      hydraulicMachineCost: 'BDT 27,00,000 (Twenty Seven Lac Taka)',
      toolsAndAccessories: 'BDT 4,20,000 (Four Lac Twenty Thousand Taka)',
      total: 'BDT 38,20,000',
    },
    combinedTotal: 'BDT 1,24,20,000 (1.24+ Crore Taka)',
  },
  facilities: {
    sraboniEnterprise: {
      dimensions: '40 feet x 28 feet',
      areaSqFt: 1350,
      role: 'Procurement Yard, Raw Steel Inspection & Inventory Depot',
    },
    advanceIron: {
      dimensions: '45 feet x 26 feet',
      areaSqFt: 1480,
      role: 'Heavy Hydraulic Machine Shop, Fabrication & Precision Cutting Yard',
    },
    totalAreaSqFt: 2830,
  },
  machinery: [
    {
      name: 'Hydraulic Press Machine (1200-Ton Capacity)',
      capacity: 'Up to 30mm thickness',
      description: 'Used for heavy plate bending, circular rounding from straight plates, and reverse-straightening of bent or distorted mild steel components.',
      quantity: 1,
      highlight: true,
    },
    {
      name: 'Heavy Duty Grinding Machines',
      capacity: 'Surface finishing & beveling',
      description: 'High-torque industrial grinders for seam prep, slag removal, and burr edge polishing.',
      quantity: 7,
      highlight: false,
    },
    {
      name: 'Industrial Cutting Sets',
      capacity: 'High-precision oxygen-gas cutting',
      description: 'Heavy thermal cutting torches with calibrated gauges for clean dimensional tolerance.',
      quantity: 6,
      highlight: false,
    },
    {
      name: 'Oxygen & Gas Cylinder Batteries',
      capacity: 'Continuous thermal fabrication',
      description: '4 high-pressure Oxygen Cylinders and 4 Industrial Gas Cylinders ensuring uninterrupted operations.',
      quantity: 8,
      highlight: false,
    },
  ],
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'ms-plate',
    name: 'Mild Steel (MS) Plate',
    category: 'plate',
    standardSize: '7 feet by 20 feet (standard sheets)',
    thickness: '4mm to 12mm',
    description: 'High-grade structural mild steel plates sourced primarily from Chittagong shipyard vessels and certified infrastructure projects. Fresh, verified, non-scrap quality.',
    applications: ['Ship hull fabrication', 'River barge flooring', 'Heavy bridge decking', 'Industrial storage tanks'],
    features: ['Chittagong shipyard sourced', 'Uniform metallurgical integrity', 'Tested tensile resilience'],
  },
  {
    id: 'ms-angle',
    name: 'Mild Steel (MS) Angle',
    category: 'angle',
    standardSize: 'Up to 20 feet (5"x3", 7"x3", and standard sizes)',
    thickness: '3mm to 6mm',
    description: 'Structural L-profile mild steel angles ideal for truss frameworks, shipbuilding reinforcement ribs, tower structures, and heavy civil construction.',
    applications: ['Truss building', 'Warehouse rafters', 'Vessel bulkhead framing', 'Transmission towers'],
    features: ['True 90° angular precision', 'Custom length cutting available', 'Heavy load resistance'],
  },
  {
    id: 'cutting-plate',
    name: 'Precision Custom Cutting Plate',
    category: 'plate',
    standardSize: 'Customized to client drawings / dimensions',
    thickness: '4mm to 12mm',
    description: 'Custom-sized steel plates cut to exact job specifications using industrial thermal cutting sets and bevel grinding for ready-to-weld assembly.',
    applications: ['Base plates & gussets', 'Machinery mounting flanges', 'Vessel hatch covers', 'Foundation anchor plates'],
    features: ['Zero-waste custom dimensioning', 'Chamfered/deburred edges', 'Fast workshop turnaround'],
  },
  {
    id: 'u-channel',
    name: 'Structural U-Channel (C-Section)',
    category: 'channel',
    standardSize: 'Up to 20 feet length',
    thickness: '4mm to 8mm',
    description: 'Cold and hot-rolled mild steel U-channels engineered for primary framing, vehicle chassis, ship deck supports, and industrial gantry tracks.',
    applications: ['Crane tracks & gantries', 'Vessel ribbing', 'Trailer chassis framing', 'Industrial mezzanine flooring'],
    features: ['High torsional strength', 'Standard & heavy flange options', 'Clean surface finish'],
  },
  {
    id: 'bit-girder',
    name: 'Bit Girder (Custom Fabricated)',
    category: 'girder',
    standardSize: 'Customized length & flange specifications',
    thickness: '6mm to 12mm',
    description: 'Heavy structural bit girders manufactured for substantial horizontal load transfer in dockyard slipways, warehouses, and crane runaways.',
    applications: ['Overhead crane runway beams', 'Dockyard slipways', 'Heavy industrial shed framing'],
    features: ['Reinforced web thickness', 'Deep bending tolerance', 'Certified welding quality'],
  },
  {
    id: 't-girder',
    name: 'T-Girder (Structural T-Section)',
    category: 'girder',
    standardSize: 'Customized height & flange width',
    thickness: '6mm to 12mm',
    description: 'Robust T-profile structural girders specifically utilized in marine keel reinforcement, bridge stringers, and high-load structural sub-frames.',
    applications: ['Marine keel stringers', 'Cargo hold stiffeners', 'Heavy industrial spans'],
    features: ['High bending modulus', 'Custom flange-to-web ratio', 'High tensile steel composition'],
  },
  {
    id: 'hydraulic-press-forming',
    name: '1200T Hydraulic Bending & Straightening',
    category: 'hydraulic',
    standardSize: 'Up to 30mm thick steel components',
    thickness: 'Up to 30mm',
    description: 'Specialized hydraulic press servicing: precision curve bending, pipe/cylinder rounding from flat plate, and mechanical straightening of deformed heavy beams.',
    applications: ['Curved ship hull plates', 'Heavy pipe shells', 'Restoration of bent girders', 'Cylindrical pressure vessels'],
    features: ['1200-Ton press tonnage', 'Handles up to 30mm thickness', 'Both rounding and unbending'],
  },
];

export const CLIENT_LIST: ClientItem[] = [
  {
    name: 'Mayer Doah Iron Store',
    address: 'Karimullarbag, Shyampur, Dhaka-1204',
    sector: 'Iron & Steel Distribution',
  },
  {
    name: 'M/S Sarder Shipping Lines',
    address: 'Noya Polton, Dhaka',
    sector: 'Inland Shipping & Maritime Cargo',
  },
  {
    name: 'M/S Hawlader Shipping Lines',
    address: 'Chor Kaligonj, Keranigonj',
    sector: 'Dockyard & Marine Vessel Operations',
  },
  {
    name: 'Shikder Navigation',
    address: 'Bikrompur, Dhaka',
    sector: 'River Logistics & Cargo Fleet',
  },
  {
    name: 'M/s Sapla Shipping Lines',
    address: 'Faridpur',
    sector: 'Waterway Transport & Fleet Operations',
  },
  {
    name: 'NB Engineering Works',
    address: 'South Keranigonj, Dhaka',
    sector: 'Heavy Industrial Fabrication',
  },
];

export const SHIPYARDS_AND_SUPPLIERS: ShipyardItem[] = [
  { name: 'Razing Ship Yard', address: 'Chittagong', type: 'Shipyard' },
  { name: 'Four Star Ship Yard', address: 'Chittagong', type: 'Shipyard' },
  { name: 'Raza Field Ship Yard', address: 'Chittagong', type: 'Shipyard' },
  { name: 'Khadija Ship Yard', address: 'Chittagong', type: 'Shipyard' },
  { name: 'Cristal Ship Yard', address: 'Chittagong', type: 'Shipyard' },
  { name: 'M/s Azan Enterprise', address: 'Dhaka', type: 'Media/Supplier' },
  { name: 'M/s Tamim Enterprise', address: 'Chittagong', type: 'Media/Supplier' },
  { name: 'Heart Of Madina', address: 'Chittagong', type: 'Media/Supplier' },
  { name: 'Cumilla Dockyard', address: 'Dhaka', type: 'Media/Supplier' },
  { name: 'Sheikh Iron Traders', address: 'Dhaka', type: 'Media/Supplier' },
];

export const STAFF_MEMBERS: StaffItem[] = [
  { sl: 1, name: 'Biplob Sarker', designation: 'Manager', department: 'Operations & Procurement' },
  { sl: 2, name: 'Bikas Kumar', designation: 'Manager', department: 'Engineering & Client Coordination' },
  { sl: 3, name: 'Sawon Hasan', designation: 'Cutting Specialist', department: 'Thermal Cutting Workshop' },
  { sl: 4, name: 'Ronuzzaman', designation: 'Cutting Specialist', department: 'Thermal Cutting Workshop' },
  { sl: 5, name: 'Maruf Hasan Hira', designation: 'Grinding Specialist', department: 'Surface Prep & Grinding' },
  { sl: 6, name: 'Joynal Miah', designation: 'Grinding Specialist', department: 'Surface Prep & Grinding' },
  { sl: 7, name: 'Sagor Hawlader', designation: 'Senior Fabricator', department: 'Hydraulic Press & Yard' },
  { sl: 8, name: 'Sohel Rana', designation: 'Fabricator', department: 'Hydraulic Press & Yard' },
  { sl: 9, name: 'Anower Hossain', designation: 'Fabricator', department: 'Hydraulic Press & Yard' },
  { sl: 10, name: 'Samim Hasan', designation: 'Fabricator', department: 'Yard & Material Handling' },
  { sl: 11, name: 'Alom', designation: 'Fabricator', department: 'Yard & Material Handling' },
  { sl: 12, name: 'Kobirul Islam', designation: 'Night Security Guard', department: 'Facility Safety & Inventory' },
  { sl: 13, name: 'Harun Mia', designation: 'Night Security Guard', department: 'Facility Safety & Inventory' },
];

export const EXPANSION_TARGETS = [
  {
    title: 'Shipbuilding & Marine Fabrication',
    summary: 'Construction of small & medium-sized commercial, cargo, utility, and work vessels along with dockyard repair and heavy steel fabrication.',
    details: 'Expanding active footprint into Bangladesh’s booming marine logistics sector. Leveraging our direct shipyard connections in Chittagong to supply verified hull-grade plates and assemble inland cargo carriers.',
    status: 'In Progress',
  },
  {
    title: 'Heavy Engineering & High-Capacity Hydraulic Machinery',
    summary: 'Installing next-generation high-tonnage hydraulic presses to scale plate bending, heavy rounding, forming, and large structural fabrication.',
    details: 'Strengthening capacity to undertake mega industrial frameworks, bridge infrastructure components, and deep-draft vessel hull sections.',
    status: 'Planned',
  },
  {
    title: 'Agro-Food Production & Processing',
    summary: 'Strategic diversification into modern agro-food processing facilities and supply chain infrastructure.',
    details: 'Creating resilient, multi-sector operations by investing in agro-processing storage, grain handling equipment, and cold chain structural facilities.',
    status: 'Strategic Initiative',
  },
];
