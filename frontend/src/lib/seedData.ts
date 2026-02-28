import type { Product } from '../backend';

export const CATEGORIES = [
  'All',
  'Mirrors',
  'Windows',
  'Slider Doors',
  'Glass Doors',
  'Glass Ornaments',
  'Partition Walls',
] as const;

export type Category = typeof CATEGORIES[number];

export const CATEGORY_IMAGES: Record<string, string> = {
  'Mirrors': '/assets/generated/product-mirror.dim_600x600.png',
  'Windows': '/assets/generated/product-window.dim_600x600.png',
  'Slider Doors': '/assets/generated/product-slider-door.dim_600x600.png',
  'Glass Doors': '/assets/generated/product-glass-door.dim_600x600.png',
  'Glass Ornaments': '/assets/generated/product-ornament.dim_600x600.png',
  'Partition Walls': '/assets/generated/product-partition.dim_600x600.png',
};

export const SEED_PRODUCTS: Array<{
  id: bigint;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  specs: Array<[string, string]>;
  imagePath: string;
}> = [
  {
    id: BigInt(1),
    name: 'Venetian Arch Mirror',
    category: 'Mirrors',
    shortDescription: 'Elegant arched mirror with a slim champagne gold frame, perfect for entryways and living rooms.',
    fullDescription: 'The Venetian Arch Mirror is a statement piece that brings timeless elegance to any room. Its graceful arched silhouette is framed in a hand-finished champagne gold metal, catching and reflecting light beautifully. Ideal for entryways, living rooms, or as a focal point above a console table. The high-clarity glass ensures a true, undistorted reflection.',
    specs: [
      ['Dimensions', '60 cm × 120 cm'],
      ['Frame Material', 'Powder-coated steel, champagne gold finish'],
      ['Glass Type', 'High-clarity float glass, 5mm'],
      ['Mounting', 'Wall-mounted, horizontal or vertical'],
      ['Weight', '8 kg'],
    ],
    imagePath: '/assets/generated/product-mirror.dim_600x600.png',
  },
  {
    id: BigInt(2),
    name: 'Panoramic Floor Mirror',
    category: 'Mirrors',
    shortDescription: 'Full-length floor mirror with a minimalist matte black frame for modern interiors.',
    fullDescription: 'The Panoramic Floor Mirror offers a full-length reflection in a sleek, minimalist design. The slim matte black frame complements contemporary and transitional interiors alike. Lean it against a wall or mount it securely for a clean, architectural look. The oversized format makes rooms feel larger and more luminous.',
    specs: [
      ['Dimensions', '80 cm × 200 cm'],
      ['Frame Material', 'Aluminum, matte black finish'],
      ['Glass Type', 'Float glass, 6mm, anti-distortion'],
      ['Mounting', 'Freestanding or wall-mounted'],
      ['Weight', '18 kg'],
    ],
    imagePath: '/assets/generated/product-mirror.dim_600x600.png',
  },
  {
    id: BigInt(3),
    name: 'Thermal Casement Window',
    category: 'Windows',
    shortDescription: 'Double-glazed casement window with a slim aluminum frame for superior insulation and clarity.',
    fullDescription: 'The Thermal Casement Window combines modern aesthetics with high-performance insulation. The double-glazed unit features a 16mm argon-filled cavity that significantly reduces heat transfer and noise. The slim aluminum frame maximizes the glass area, flooding your interior with natural light while maintaining structural integrity.',
    specs: [
      ['Dimensions', 'Custom (standard: 90 cm × 120 cm)'],
      ['Frame Material', 'Thermally broken aluminum'],
      ['Glass Type', 'Double-glazed, low-E coating, argon-filled'],
      ['U-Value', '1.2 W/m²K'],
      ['Opening Style', 'Side-hung casement'],
    ],
    imagePath: '/assets/generated/product-window.dim_600x600.png',
  },
  {
    id: BigInt(4),
    name: 'Bay Window System',
    category: 'Windows',
    shortDescription: 'Three-panel bay window system that creates a stunning architectural feature and expands interior space.',
    fullDescription: 'The Bay Window System transforms any room into a light-filled sanctuary. The three-panel configuration — one fixed center panel flanked by two operable side panels — creates a dramatic architectural feature while maximizing ventilation. Each panel is double-glazed with a warm-edge spacer bar for optimal thermal performance.',
    specs: [
      ['Dimensions', 'Custom (standard: 240 cm × 150 cm total)'],
      ['Frame Material', 'uPVC, white or woodgrain finish'],
      ['Glass Type', 'Triple-glazed option available'],
      ['Projection', '45° or 90° bay angle'],
      ['Ventilation', 'Two operable side panels'],
    ],
    imagePath: '/assets/generated/product-window.dim_600x600.png',
  },
  {
    id: BigInt(5),
    name: 'Aria Sliding Door',
    category: 'Slider Doors',
    shortDescription: 'Sleek floor-to-ceiling sliding glass door with a matte aluminum track for seamless indoor-outdoor living.',
    fullDescription: 'The Aria Sliding Door redefines the boundary between interior and exterior spaces. Its floor-to-ceiling glass panels glide effortlessly on a precision-engineered matte aluminum track, creating a seamless connection to your garden or terrace. The soft-close mechanism ensures quiet, smooth operation, while the multi-point locking system provides security.',
    specs: [
      ['Dimensions', 'Custom (standard: 200 cm × 240 cm per panel)'],
      ['Frame Material', 'Thermally broken aluminum, matte finish'],
      ['Glass Type', 'Tempered double-glazed, 8mm + 16mm cavity + 8mm'],
      ['Track System', 'Recessed floor track, soft-close'],
      ['Security', 'Multi-point locking, anti-lift pins'],
    ],
    imagePath: '/assets/generated/product-slider-door.dim_600x600.png',
  },
  {
    id: BigInt(6),
    name: 'Pocket Sliding Door',
    category: 'Slider Doors',
    shortDescription: 'Space-saving pocket sliding door that disappears into the wall for a clean, minimalist aesthetic.',
    fullDescription: 'The Pocket Sliding Door is the ultimate space-saving solution for modern homes. When open, the glass panel slides completely into a concealed wall cavity, leaving a completely unobstructed opening. The frameless design with minimal hardware creates a seamless, architectural look that suits both contemporary and classic interiors.',
    specs: [
      ['Dimensions', 'Custom (standard: 90 cm × 210 cm)'],
      ['Frame Material', 'Frameless, stainless steel hardware'],
      ['Glass Type', 'Tempered clear or frosted, 10mm'],
      ['Wall Cavity', 'Requires 100mm minimum wall depth'],
      ['Handle', 'Recessed pull, brushed stainless'],
    ],
    imagePath: '/assets/generated/product-slider-door.dim_600x600.png',
  },
  {
    id: BigInt(7),
    name: 'Pivot Glass Door',
    category: 'Glass Doors',
    shortDescription: 'Dramatic pivot-hung glass door with a thin black steel frame, making a bold architectural statement.',
    fullDescription: 'The Pivot Glass Door makes an unforgettable first impression. Unlike conventional hinged doors, the pivot mechanism allows the door to rotate on a central axis, creating a dramatic, hotel-lobby aesthetic. The thin black steel frame contrasts beautifully with the clear glass, while the oversized format commands attention and floods the space with light.',
    specs: [
      ['Dimensions', 'Custom (standard: 100 cm × 240 cm)'],
      ['Frame Material', 'Steel, powder-coated matte black'],
      ['Glass Type', 'Tempered clear glass, 12mm'],
      ['Pivot Hardware', 'Floor-to-ceiling pivot system'],
      ['Handle', 'Solid brass bar handle, 60 cm'],
    ],
    imagePath: '/assets/generated/product-glass-door.dim_600x600.png',
  },
  {
    id: BigInt(8),
    name: 'French Glass Door Pair',
    category: 'Glass Doors',
    shortDescription: 'Classic double French doors with divided glass panes and a white-painted timber frame.',
    fullDescription: 'The French Glass Door Pair brings timeless charm and elegance to any home. The traditional divided-light design features multiple glass panes separated by slim timber muntins, creating a classic aesthetic that suits period and contemporary homes alike. The solid timber frame is available in a range of painted or stained finishes.',
    specs: [
      ['Dimensions', 'Custom (standard: 160 cm × 210 cm pair)'],
      ['Frame Material', 'Engineered timber, painted or stained'],
      ['Glass Type', 'Clear float glass, 4mm per pane'],
      ['Pane Configuration', '15-light divided pattern'],
      ['Hardware', 'Brass or chrome lever handles'],
    ],
    imagePath: '/assets/generated/product-glass-door.dim_600x600.png',
  },
  {
    id: BigInt(9),
    name: 'Murano Glass Vase',
    category: 'Glass Ornaments',
    shortDescription: 'Hand-blown decorative glass vase with swirling amber and gold tones, a true artisan centerpiece.',
    fullDescription: 'Inspired by the centuries-old tradition of Murano glassblowing, this decorative vase is a work of art. Each piece is individually hand-blown by skilled artisans, resulting in unique swirling patterns of amber, gold, and clear glass. The organic form and luminous quality make it a stunning centerpiece for dining tables, consoles, or shelving.',
    specs: [
      ['Height', '35 cm'],
      ['Diameter', '18 cm (widest point)'],
      ['Material', 'Hand-blown borosilicate glass'],
      ['Colors', 'Amber, gold, clear (each piece unique)'],
      ['Care', 'Hand wash only'],
    ],
    imagePath: '/assets/generated/product-ornament.dim_600x600.png',
  },
  {
    id: BigInt(10),
    name: 'Crystal Pendant Light',
    category: 'Glass Ornaments',
    shortDescription: 'Cascading crystal glass pendant light that scatters prismatic light throughout the room.',
    fullDescription: 'The Crystal Pendant Light is a breathtaking fusion of art and function. Hundreds of hand-cut crystal glass drops cascade from a brushed brass canopy, scattering prismatic light across walls and ceilings. The adjustable suspension allows it to be hung at the perfect height for dining tables, kitchen islands, or entryways.',
    specs: [
      ['Dimensions', '40 cm diameter × 60 cm drop (adjustable)'],
      ['Material', 'Hand-cut crystal glass, brushed brass frame'],
      ['Bulb Type', 'E27, max 60W (LED compatible)'],
      ['Suspension', 'Adjustable cable, 120 cm max'],
      ['Finish', 'Brushed brass canopy'],
    ],
    imagePath: '/assets/generated/product-ornament.dim_600x600.png',
  },
  {
    id: BigInt(11),
    name: 'Frosted Glass Partition',
    category: 'Partition Walls',
    shortDescription: 'Elegant frosted glass partition wall that divides spaces while maintaining an open, light-filled feel.',
    fullDescription: 'The Frosted Glass Partition offers the perfect balance between privacy and openness. The acid-etched frosted glass diffuses light beautifully while obscuring direct views, making it ideal for home offices, open-plan living areas, or bedroom dividers. The slim aluminum frame system allows for modular configurations to suit any space.',
    specs: [
      ['Dimensions', 'Custom (standard panels: 90 cm × 240 cm)'],
      ['Frame Material', 'Aluminum, anodized silver or black'],
      ['Glass Type', 'Acid-etched frosted tempered glass, 10mm'],
      ['Configuration', 'Single panel or modular system'],
      ['Privacy Level', 'Full privacy, light-transmitting'],
    ],
    imagePath: '/assets/generated/product-partition.dim_600x600.png',
  },
  {
    id: BigInt(12),
    name: 'Steel Frame Glass Wall',
    category: 'Partition Walls',
    shortDescription: 'Industrial-chic steel-framed glass partition wall with a Crittal-style grid pattern.',
    fullDescription: 'The Steel Frame Glass Wall brings the iconic Crittal-style aesthetic into the modern home. The bold black steel grid frames clear glass panels, creating a dramatic industrial-chic partition that defines spaces without closing them off. The structural steel frame is powder-coated for durability, while the clear glass maintains visual connectivity throughout the space.',
    specs: [
      ['Dimensions', 'Custom (standard: 300 cm × 240 cm)'],
      ['Frame Material', 'Structural steel, powder-coated matte black'],
      ['Glass Type', 'Clear tempered glass, 6mm per pane'],
      ['Grid Pattern', 'Crittal-style, 30 cm × 30 cm grid'],
      ['Installation', 'Floor-to-ceiling fixed installation'],
    ],
    imagePath: '/assets/generated/product-partition.dim_600x600.png',
  },
];
