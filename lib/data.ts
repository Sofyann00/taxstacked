import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Personal Tax Return Filing",
    description: "Complete personal tax return preparation and filing service. Includes income analysis, deduction optimization, and compliance review.",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070",
    category: "Personal Tax"
  },
  {
    id: 2,
    name: "Business Tax Planning",
    description: "Strategic tax planning for businesses. Includes tax efficiency analysis, future planning, and compliance strategies.",
    price: 5000000,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    category: "Business Tax"
  },
  {
    id: 3,
    name: "Tax Audit Support",
    description: "Professional support during tax audits. Includes documentation preparation, representation, and audit response strategy.",
    price: 7500000,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    category: "Audit Support"
  },
  {
    id: 4, 
    name: "Corporate Tax Compliance",
    description: "Comprehensive corporate tax compliance service. Includes monthly and annual tax calculations, reporting, and filing.",
    price: 10000000,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070",
    category: "Corporate Tax"
  },
  {
    id: 5,
    name: "International Tax Advisory",
    description: "Expert advice on international tax matters. Includes cross-border transactions, transfer pricing, and treaty applications.",
    price: 15000000,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    category: "International Tax"
  },
  {
    id: 6,
    name: "Tax Consultation Session",
    description: "One-on-one consultation with tax experts. Includes personalized advice and strategy discussion for your specific situation.",
    price: 1000000,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070",
    category: "Consultation"
  },
  {
    id: 7,
    name: "VAT Registration & Filing",
    description: "Complete VAT service including registration, periodic filing, and compliance management.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070",
    category: "VAT Services"
  },
  {
    id: 8,
    name: "Tax Documentation Review",
    description: "Thorough review of tax documentation and records. Includes compliance check and optimization recommendations.",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070",
    category: "Documentation"
  },
  {
    id: 9,
    name: "Tax Dispute Resolution",
    description: "Professional assistance in resolving tax disputes. Includes negotiation with tax authorities and appeal preparation.",
    price: 8000000,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070",
    category: "Dispute Resolution"
  },
  {
    id: 10,
    name: "Estate Tax Planning",
    description: "Comprehensive estate tax planning service. Includes succession planning, wealth transfer strategies, and tax optimization.",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?q=80&w=2070",
    category: "Estate Planning"
  },
  {
    id: 11,
    name: "Startup Tax Package",
    description: "Tailored tax services for startups. Includes initial setup, compliance planning, and growth strategy.",
    price: 4000000,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070",
    category: "Startup Services"
  },
  {
    id: 12,
    name: "Tax Health Check",
    description: "Comprehensive review of current tax position. Includes risk assessment and optimization opportunities.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    category: "Assessment"
  },
  {
    id: 13,
    name: "Monthly Tax Accounting",
    description: "Regular monthly tax accounting service. Includes bookkeeping, tax calculations, and periodic reporting.",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=2070",
    category: "Tax Accounting"
  },
  {
    id: 14,
    name: "Tax Training Workshop",
    description: "Educational workshop on tax regulations and compliance. Perfect for business owners and accounting staff.",
    price: 5000000,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
    category: "Training"
  },
  {
    id: 15,
    name: "Basic Tax Q&A Session",
    description: "30-minute online consultation session for basic tax questions. Perfect for individuals with simple tax queries.",
    price: 100000,
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=2070",
    category: "Basic Consultation"
  },
  {
    id: 16,
    name: "Tax Form Review",
    description: "Quick review and verification of your self-prepared tax forms before submission. Includes basic error checking and simple recommendations.",
    price: 200000,
    image: "https://images.unsplash.com/photo-1554224155-8947e087e2eb?q=80&w=2070",
    category: "Form Review"
  }
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
