export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: 'car' | 'motorcycle';
  year?: string;
  badge?: string;
  type: string;
  transmission: 'Auto' | 'Manual' | 'CVT';
  seats: number;
  engine: string;
  fuelEfficiency: string;
  fuelType: string;
  luggageOrStorage: string;
  features: string[];
  rateDay: number;
  rate3Days: number;
  rateWeek: number;
  deposit: number;
  image: string;
  popularFor: string;
  color: string;
  isAvailableToday: boolean;
  highlightSpecs: { label: string; value: string }[];
}

export const VEHICLES: Vehicle[] = [
  // ================= KERETA SEWA (CARS) =================
  {
    id: 'myvi-15h',
    name: 'Perodua Myvi 1.5 H',
    brand: 'Perodua',
    model: 'Myvi 1.5 H (The King)',
    category: 'car',
    year: '2023-2024',
    badge: 'Paling Laris #1',
    type: 'Hatchback Kompak',
    transmission: 'Auto',
    seats: 5,
    engine: '1.5L Dual VVT-i (102 hp)',
    fuelEfficiency: '20.1 km/L',
    fuelType: 'Petrol (Sangat Jimat)',
    luggageOrStorage: '2-3 Beg Sederhana (277L)',
    features: [
      'Touchscreen Infotainment & Bluetooth Audio',
      'Kamera Undur & Sensor Parking Depan/Belakang',
      'Sistem Push Start & Keyless Smart Entry',
      'Eco Idle Jimat Petrol Semasa Lampu Merah',
      'Penyaman Udara Dingin & Wangi'
    ],
    rateDay: 130,
    rate3Days: 120,
    rateWeek: 105,
    deposit: 100,
    image: '/vehicles/myvi-15h.png',
    popularFor: 'Bandar Ipoh, Cafe Hopping, Jalan Selesa & Jimat',
    color: 'Glittering Silver / Granite Grey',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '1.5L Dual VVT-i' },
      { label: 'Transmisi', value: '4-Speed E-AT' },
      { label: 'Penggunaan', value: '20.1 km/L' },
      { label: 'Ruang', value: '5 Tempat Duduk' }
    ]
  },
  {
    id: 'saga-blm',
    name: 'Proton Saga BLM',
    brand: 'Proton',
    model: 'Saga BLM 1.3',
    category: 'car',
    year: 'Sedan Bajet',
    badge: 'Bajet Paling Mesra',
    type: 'Sedan Bajet',
    transmission: 'Auto',
    seats: 5,
    engine: '1.3L CamPro IAFM 4-Cylinder',
    fuelEfficiency: '16.5 km/L',
    fuelType: 'Petrol',
    luggageOrStorage: '413L Bonet Luas & Dalam',
    features: [
      'Penyaman Udara Sejuk Beku Tradisi Proton',
      'Bonet 413L Muat 3 Beg Besar & Kotak',
      'Pemanduan Stabil & Senyap di Lebuhraya',
      'Radio USB / Aux Audio System',
      'Kadar Sewaan Paling Murah di Pasaran Ipoh'
    ],
    rateDay: 90,
    rate3Days: 85,
    rateWeek: 75,
    deposit: 100,
    image: '/vehicles/saga-blm.jpg',
    popularFor: 'Pelajar, Urusan Ringkas Sekitar Ipoh, Bajet Jimat',
    color: 'Solid White',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '1.3L CamPro' },
      { label: 'Transmisi', value: 'Auto' },
      { label: 'Boot', value: '413 Liter Luas' },
      { label: 'Sesuai', value: 'Bajet Pelajar / Jimat' }
    ]
  },
  {
    id: 'axia-10-se-2017',
    name: 'Perodua Axia 1.0 SE 2017',
    brand: 'Perodua',
    model: 'Axia 1.0 SE (Facelift)',
    category: 'car',
    year: '2017 SE Edition',
    badge: 'Juara Parkir & Jimat',
    type: 'Hatchback Bandar',
    transmission: 'Auto',
    seats: 5,
    engine: '1.0L 1KR-VE VVT-i',
    fuelEfficiency: '21.6 km/L',
    fuelType: 'Petrol (Ultra Jimat)',
    luggageOrStorage: '260L Boot Kompak',
    features: [
      'Sensor Sudut Depan & Belakang Asal Kilang',
      'Bodykit SE Sporty dengan Lampu Projektor',
      'Radius Pusingan Kecil (Sangat Mudah Parking)',
      'Audio CD/USB/Bluetooth Sambungan Pantas',
      'Enjin VVT-i Lancar & Jimat Belanja Minyak'
    ],
    rateDay: 100,
    rate3Days: 95,
    rateWeek: 85,
    deposit: 100,
    image: '/vehicles/axia-10-se-2017.jpg',
    popularFor: 'Concubine Lane, Lorong Pekan Lama, Mudah Masuk Parkir',
    color: 'Ebony Black / Midnight Blue',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '1.0L VVT-i' },
      { label: 'Transmisi', value: '4-Speed Auto' },
      { label: 'Penggunaan', value: '21.6 km/L' },
      { label: 'Kelebihan', value: 'Mudah Parking' }
    ]
  },
  {
    id: 'bezza-13x',
    name: 'Perodua Bezza 1.3 X',
    brand: 'Perodua',
    model: 'Bezza 1.3 X Dual VVT-i',
    category: 'car',
    year: '2022-2023',
    badge: 'Bonet Gergasi 508L',
    type: 'Sedan Kompak Eksekutif',
    transmission: 'Auto',
    seats: 5,
    engine: '1.3L 1NR-VE Dual VVT-i (94 hp)',
    fuelEfficiency: '21.0 km/L',
    fuelType: 'Petrol (EEV Certified)',
    luggageOrStorage: '508L Boot Terbesar (4 Beg Bagasi)',
    features: [
      'Bonet 508L Terbaik Dalam Kelasnya untuk Bagasi',
      'Push Start Button & Keyless Smart Entry',
      'Sistem Audio Bluetooth & Kawalan Stereng',
      'Vehicle Stability Control (VSC) & Traction Control',
      'Ruang Kaki Penumpang Belakang Sangat Luas'
    ],
    rateDay: 130,
    rate3Days: 120,
    rateWeek: 105,
    deposit: 100,
    image: '/vehicles/bezza-13x.png',
    popularFor: 'Pelancong Datang dengan Beg Besar, Keluarga Kecil',
    color: 'Ocean Blue / Ivory White',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '1.3L Dual VVT-i' },
      { label: 'Boot', value: '508 Liter (Mega)' },
      { label: 'Penjimatan', value: '21.0 km/L' },
      { label: 'Keselamatan', value: 'VSC + 2 Airbags' }
    ]
  },
  {
    id: 'alza-15-se',
    name: 'Perodua Alza 1.5 SE',
    brand: 'Perodua',
    model: 'Alza 1.5 SE (7-Seater MPV)',
    category: 'car',
    year: 'MPV 7-Tempat Duduk',
    badge: 'Pilihan Keluarga 7-Seat',
    type: 'MPV 7-Seater',
    transmission: 'Auto',
    seats: 7,
    engine: '1.5L 3SZ-VE DVVT DOHC',
    fuelEfficiency: '14.8 km/L',
    fuelType: 'Petrol',
    luggageOrStorage: 'Susunan Fleksibel 7 Kerusi / Lipat Baris 3',
    features: [
      '7 Tempat Duduk Selesa untuk Seisi Keluarga',
      'Penyaman Udara Double Blower untuk Belakang',
      'Kerusi Baris ke-2 & ke-3 Boleh Lipat Rata',
      'Lampu Kabus Depan & Spoiler Belakang Sporty',
      'Sangat Sesuai Rombongan Kenduri & Lost World Tambun'
    ],
    rateDay: 160,
    rate3Days: 150,
    rateWeek: 135,
    deposit: 150,
    image: '/vehicles/alza-15-se.jpg',
    popularFor: 'Famili Ramai, Kenduri Kahwin, Lost World Tambun, Cameron',
    color: 'Mystical Purple / Glittering Silver',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Muatan', value: '7 Penumpang' },
      { label: 'Enjin', value: '1.5L DVVT' },
      { label: 'Aircond', value: 'Double Blower' },
      { label: 'Kategori', value: 'MPV Serbaguna' }
    ]
  },
  {
    id: 'saga-13-vvt-advance',
    name: 'Proton Saga 1.3 VVT Advance',
    brand: 'Proton',
    model: 'Saga 1.3 VVT Advance (Facelift)',
    category: 'car',
    year: '2022-2023',
    badge: 'Pemanduan Mantap',
    type: 'Sedan Moden',
    transmission: 'Auto',
    seats: 5,
    engine: '1.3L VVT 4-Cylinder DOHC (95 hp)',
    fuelEfficiency: '17.2 km/L',
    fuelType: 'Petrol',
    luggageOrStorage: '420L Boot Lapang',
    features: [
      'Skrin Sentuh Infotainment & Kamera Undur',
      'Transmisi 4-Speed Hyundai Torque Converter Lancar',
      'Ride & Handling Proton Mantap di Selekoh & Highway',
      'Lampu Siang LED Day-Time Running Lights',
      'Kabin Senyap dengan Penebat Bunyi Dipertingkat'
    ],
    rateDay: 120,
    rate3Days: 110,
    rateWeek: 95,
    deposit: 100,
    image: '/vehicles/saga-13-vvt-advance.jpg',
    popularFor: 'Pemanduan Lebuhraya, Outstation & Perjalanan Santai',
    color: 'Rosewood Maroon / Snow White',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '1.3L VVT' },
      { label: 'Skrin', value: 'Touchscreen + Cam' },
      { label: 'Handling', value: 'Tuning Lotus' },
      { label: 'Boot', value: '420 Liter' }
    ]
  },
  {
    id: 'x50-flagship-2026',
    name: 'Proton X50 Flagship 2026',
    brand: 'Proton',
    model: 'X50 Flagship (2026 Facelift)',
    category: 'car',
    year: '2026 Edisi Flagship',
    badge: 'Luxury Turbo SUV',
    type: 'Compact SUV Mewah',
    transmission: 'Auto',
    seats: 5,
    engine: '1.5L TGDi Turbocharged (177 hp / 255 Nm)',
    fuelEfficiency: '15.5 km/L',
    fuelType: 'Petrol (Turbo Kuat)',
    luggageOrStorage: '330L Boot + Pintu Belakang Elektrik',
    features: [
      'Bumbung Kaca Panoramik Buka Automatik (Sunroof)',
      'Kamera 360° HD 3D Pandangan Menyeluruh',
      'Level 2 Autonomous ADAS & Adaptive Cruise Control',
      'Pemanduan Turbo 177hp Sangat Bertenaga & Sporty',
      'Kusyen Kulit Dua Tona Premium & Skrin 10.25 Inci'
    ],
    rateDay: 230,
    rate3Days: 215,
    rateWeek: 190,
    deposit: 200,
    image: '/vehicles/x50-flagship-2026.png',
    popularFor: 'VIP, Gaya Bergaya, Majlis Rasmi, Staycation Mewah',
    color: 'Passion Red / Jet Grey',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Kuasa', value: '177 HP Turbo' },
      { label: 'Bumbung', value: 'Panoramic Sunroof' },
      { label: 'Kamera', value: '360° 3D Camera' },
      { label: 'Gearbox', value: '7-Speed Dual Clutch' }
    ]
  },
  {
    id: 'aruz-15-advanced',
    name: 'Perodua Aruz 1.5 Advanced',
    brand: 'Perodua',
    model: 'Aruz 1.5 AV (7-Seater SUV)',
    category: 'car',
    year: '7-Seat SUV Tinggi',
    badge: 'SUV 7-Seater Gagah',
    type: 'SUV 7-Seater',
    transmission: 'Auto',
    seats: 7,
    engine: '1.5L 2NR-VE Dual VVT-i (102 hp)',
    fuelEfficiency: '15.6 km/L',
    fuelType: 'Petrol (EEV)',
    luggageOrStorage: '514L (Kerusi Baris 3 Lipat) / 213L',
    features: [
      'Ground Clearance Tinggi 220mm Bebas Banjir & Lubang',
      '6 Beg Udara & Sistem Keselamatan Pintar ASA 2.0',
      'Built-in SmartTAG Terbina & Pembaca Kad Tol',
      'Double Blower Aircond Salur Bumbung untuk Penumpang Belakang',
      'Tempat Duduk Kulit Penuh Premium & Roof Rails'
    ],
    rateDay: 180,
    rate3Days: 165,
    rateWeek: 150,
    deposit: 150,
    image: '/vehicles/aruz-15-advanced.jpg',
    popularFor: 'Famili 7 Orang, Gua Tempurung, Tambun, Jalan Berbukit',
    color: 'Granite Grey / Electric Blue',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Muatan', value: '7 Penumpang' },
      { label: 'Tinggi', value: '220mm Ketinggian' },
      { label: 'Keselamatan', value: '6 Beg Udara + ASA' },
      { label: 'SmartTAG', value: 'Built-in Reader' }
    ]
  },
  {
    id: 'axia-10-g-2023',
    name: 'Perodua Axia 1.0 G 2023',
    brand: 'Perodua',
    model: 'All-New Axia 1.0 G (DNGA Platform)',
    category: 'car',
    year: '2023-2025 All-New',
    badge: 'Generasi Baru DNGA',
    type: 'Hatchback Serba Baharu',
    transmission: 'CVT',
    seats: 5,
    engine: '1.0L 1KR-VE dengan Gear D-CVT',
    fuelEfficiency: '25.3 km/L (Ultra Eco)',
    fuelType: 'Petrol (Paling Jimat Malaysia)',
    luggageOrStorage: '265L Boot Lapang & Lantai Luas',
    features: [
      'Platform DNGA Baharu – Pemanduan Senyap & Sangat Stabil',
      'Transmisi D-CVT Gearbox Teramat Halus & Tanpa Sentakan',
      'Rekod Minyak 25.3 km/L (Isi RM30 Jalan Sepanjang Minggu)',
      'Vehicle Stability Control (VSC) & Hill Start Assist',
      'Kabin Luas Gaya Kereta Segmen-B dengan Kerusi Ergonomik'
    ],
    rateDay: 110,
    rate3Days: 100,
    rateWeek: 90,
    deposit: 100,
    image: '/vehicles/axia-10-g-2023.png',
    popularFor: 'Solo Traveler, Pasangan, Jimat Petrol Maksimum, Moden',
    color: 'Coral Blue / Ivory White',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Platform', value: 'DNGA Baharu' },
      { label: 'Gearbox', value: 'D-CVT Halus' },
      { label: 'Minyak', value: '25.3 km/L' },
      { label: 'Tahun', value: 'Model 2023-2025' }
    ]
  },

  // ================= MOTOR SEWA (MOTORCYCLES) =================
  {
    id: 'aveta-nova-250-2026',
    name: 'Aveta Nova 250 2026',
    brand: 'Aveta',
    model: 'Nova 250 Maxi Touring (2026)',
    category: 'motorcycle',
    year: '2026 Flagship Baru',
    badge: 'Maxi Scooter 250cc',
    type: 'Maxi Scooter 250cc',
    transmission: 'Auto',
    seats: 2,
    engine: '250cc 4-Valve Liquid-Cooled (24 hp)',
    fuelEfficiency: '32 km/L',
    fuelType: 'Petrol (Tangki Besar 13L)',
    luggageOrStorage: 'Ruang Bawah Tempat Duduk Muat Beg & Barangan',
    features: [
      '2 Biji Topi Keledar (Helmet) Disediakan Percuma',
      'Sistem Brek Cakera Depan & Belakang Dual-Channel ABS',
      'Skrin Paparan Digital TFT Penuh dengan Navigasi',
      'Windshield Penghadang Angin Tinggi (Sangat Selesa)',
      'Port USB Fast Charging untuk Telefon Pintar'
    ],
    rateDay: 110,
    rate3Days: 100,
    rateWeek: 85,
    deposit: 100,
    image: '/vehicles/aveta-nova-250-2026.png',
    popularFor: 'Touring Ipoh-Kuala Kangsar, Pemanduan Gagah & Bergaya',
    color: 'Matte Titanium / Stealth Black',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '250cc Liquid-Cooled' },
      { label: 'Brek', value: 'Dual ABS Disc' },
      { label: 'Tangki', value: '13 Liter (Jauh)' },
      { label: 'Helmet', value: '2x Disediakan Free' }
    ]
  },
  {
    id: 'ego-avantiz',
    name: 'Yamaha Ego Avantiz',
    brand: 'Yamaha',
    model: 'Ego Avantiz 125cc Fi',
    category: 'motorcycle',
    year: 'Model Terkini',
    badge: 'Lincah & Senang Kendali',
    type: 'Skuter Automatik 125cc',
    transmission: 'Auto',
    seats: 2,
    engine: '125cc Blue Core Fuel Injection (9.4 hp)',
    fuelEfficiency: '45.0 km/L (Ultra Jimat)',
    fuelType: 'Petrol',
    luggageOrStorage: 'Kotak Bawah Pelana 14L',
    features: [
      '2 Biji Helmet Bersih Disediakan Percuma',
      'Lampu Hadapan LED Terang Rekaan Tajam & Moden',
      'Badan Ringan (96 kg) – Teramat Mudah Dikendali',
      'Parkir Percuma di Hampir Semua Tempat Tumpuan Ipoh',
      'Kunci Keselamatan Magnetik & Brek Kunci Parking'
    ],
    rateDay: 60,
    rate3Days: 55,
    rateWeek: 45,
    deposit: 50,
    image: '/vehicles/ego-avantiz.jpg',
    popularFor: 'Food Hunt Ipoh, Pasar Malam, Parking Mudah Bebas Jam',
    color: 'Cyan Metallic / Silver Gloss',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '125cc Blue Core' },
      { label: 'Berat', value: '96 kg Ringan' },
      { label: 'Jimat', value: '45 km/L' },
      { label: 'Kelebihan', value: 'Senang Selit Trafik' }
    ]
  },
  {
    id: 'yamaha-nvx-v3-2026',
    name: 'Yamaha NVX V3 2026',
    brand: 'Yamaha',
    model: 'NVX 155 V3 VVA (2026 Facelift)',
    category: 'motorcycle',
    year: '2026 Sport Edisi',
    badge: 'Sport Scooter 155cc VVA',
    type: 'Sport Scooter Berkuasa',
    transmission: 'Auto',
    seats: 2,
    engine: '155cc VVA Liquid-Cooled 4-Valve (15.1 hp)',
    fuelEfficiency: '38.5 km/L',
    fuelType: 'Petrol (Blue Core VVA)',
    luggageOrStorage: 'Ruang Bawah Pelana 24.5L Sangat Luas',
    features: [
      '2 Biji Topi Keledar Berkualiti Disediakan Percuma',
      'Sistem Kunci Pintar Keyless (Smart Key System)',
      'Teknologi Variable Valve Actuation (VVA) Laju & Punchy',
      'Skrin Paparan Digital LCD Moden dengan Y-Connect',
      'Tayar Belakang Lebar 140mm Tubeless Cengkaman Mantap'
    ],
    rateDay: 85,
    rate3Days: 80,
    rateWeek: 70,
    deposit: 70,
    image: '/vehicles/yamaha-nvx-v3-2026.jpg',
    popularFor: 'Peminat Sport Scooter, Laju, Bergaya & Sangat Selesa',
    color: 'Racing Blue / Matt Dark Grey',
    isAvailableToday: true,
    highlightSpecs: [
      { label: 'Enjin', value: '155cc VVA Liquid' },
      { label: 'Kunci', value: 'Smart Keyless' },
      { label: 'Underseat', value: '24.5 Liter Luas' },
      { label: 'Tayar', value: '140mm Lebar Sporty' }
    ]
  }
];

export const IPOH_PICKUP_LOCATIONS = [
  { 
    id: 'ktm-ipoh', 
    name: 'Stesen Keretapi Ipoh (KTM ETS)', 
    description: 'Pintu utama / ruang letak kereta stesen KTM Ipoh',
    deliveryTime: '5-10 minit',
    tag: 'Paling Popular'
  },
  { 
    id: 'terminal-amanjaya', 
    name: 'Terminal Bas Amanjaya (Meru Raya)', 
    description: 'Platform ketibaan / ruang menunggu luar terminal',
    deliveryTime: '15-20 minit',
    tag: 'Hab Bas Ekspres'
  },
  { 
    id: 'airport-ipoh', 
    name: 'Lapangan Terbang Sultan Azlan Shah (Ipoh Airport)', 
    description: 'Balai ketibaan luar lapangan terbang',
    deliveryTime: '10-15 minit',
    tag: 'Penerbangan Masuk'
  },
  { 
    id: 'hotel-homestay', 
    name: 'Hotel / Homestay Sekitar Bandar Ipoh', 
    description: 'Lobi hotel atau alamat homestay anda di sekitar Ipoh',
    deliveryTime: 'Mengikut jadual anda',
    tag: 'Pintu ke Pintu'
  },
  { 
    id: 'tambun', 
    name: 'Kawasan Sunway Lost World of Tambun', 
    description: 'Pintu masuk / resort / homestay sekitar Tambun',
    deliveryTime: '15 minit',
    tag: 'Kawasan Percutian'
  },
  { 
    id: 'self-pickup', 
    name: 'Self Pickup (Lokasi Ain - Ipoh)', 
    description: 'Ambil terus di lokasi kami di Ipoh tanpa caj penghantaran',
    deliveryTime: 'Sedia diambil',
    tag: 'Percuma'
  },
];

export const CONTACT_INFO = {
  name: 'Nurul Ain',
  businessName: 'Kereta & Motor Sewa Ipoh - Ain',
  whatsappRaw: '60195312251',
  whatsappFormatted: '+60 19-531 2251',
  instagramHandle: '@keretasewaipoh.ain',
  instagramUrl: 'https://instagram.com/keretasewaipoh.ain',
  email: 'nurulainmk2023@gmail.com',
  city: 'Ipoh, Perak, Malaysia',
  operationHours: 'Isnin - Ahad: 8:00 AM - 10:00 PM (WhatsApp 24/7)',
  note: 'Operasi & Penghantaran di sekitar Kawasan IPOH Sahaja'
};

export const CUSTOMER_TESTIMONIALS = [
  {
    id: 1,
    name: 'Hafiz & Keluarga',
    from: 'Kuala Lumpur (Naik ETS)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    vehicleRented: 'Perodua Bezza 1.3 X',
    rating: 5,
    date: 'Semalam',
    chatPreview: 'Salam Cik Ain, terima kasih banyak! Sampai je stesen ETS Ipoh, kereta dah siap tunggu kat depan pintu. Kereta wangi gila, aircond sejuk beku. Bonet 508L tu memang muat semua beg kami berempat. Nanti datang Ipoh lagi memang cari Ain!',
    badge: 'Penyewa ETS Terverifikasi'
  },
  {
    id: 2,
    name: 'Kevin & Sarah',
    from: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    vehicleRented: 'Yamaha NVX V3 2026',
    rating: 5,
    date: '3 hari lepas',
    chatPreview: 'Renting the NVX from Ain was the best decision for our Ipoh food trip! Cruising Concubine Lane and searching for dim sum without parking stress was super easy. Free clean helmets provided, fast response on WhatsApp. 10/10 service!',
    badge: 'Pelancong Antarabangsa'
  },
  {
    id: 3,
    name: 'Puan Zubaidah & Rombongan',
    from: 'Butterworth, Pulau Pinang',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    vehicleRented: 'Perodua Alza 1.5 SE (7-Seater)',
    rating: 5,
    date: 'Minggu lepas',
    chatPreview: 'Alhamdulillah sewa Alza untuk kenduri anak saudara di Meru. Muat 7 orang dengan selesa, aircond belakang sejuk. Paling saya puji, deposit RM150 terus Cik Ain transfer balik petang tadi lepas pulangkan kereta. Sangat amanah dan jujur!',
    badge: 'Sewa Famili & Kenduri'
  },
  {
    id: 4,
    name: 'Danial Haziq',
    from: 'Student Politeknik Ungku Omar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    vehicleRented: 'Perodua Axia 1.0 G 2023',
    rating: 5,
    date: 'Bulan ini',
    chatPreview: 'Sewa Axia baharu ni untuk family datang konvo. Minyak memang tak luak langsung, isi RM20 pusing Ipoh dari pagi sampai malam. Cik Ain bagi diskaun sewa 3 hari, urusan WhatsApp seminit je siap!',
    badge: 'Kadar Mesra Mahasiswa'
  }
];

export function buildWhatsAppLink(params: {
  vehicleName: string;
  category?: 'car' | 'motorcycle';
  startDate?: string;
  startTime?: string;
  durationDays?: number;
  pickupLocation?: string;
  notes?: string;
  customerName?: string;
}) {
  const greeting = "Salam / Hai Cik Ain, saya nak tanya tentang sewaan kenderaan di Ipoh:";
  const vehicleLine = `🚗/🛵 Kenderaan: *${params.vehicleName}*`;
  const dateLine = params.startDate ? `📅 Tarikh Mula: ${params.startDate}` : '';
  const timeLine = params.startTime ? `⏰ Masa Anggaran: ${params.startTime}` : '';
  const durationLine = params.durationDays ? `⏳ Tempoh Sewa: ${params.durationDays} hari` : '';
  const locationLine = params.pickupLocation ? `📍 Lokasi Ambil/Hantar: ${params.pickupLocation}` : '📍 Lokasi: Sekitar Ipoh';
  const nameLine = params.customerName ? `👤 Nama Penyewa: ${params.customerName}` : '';
  const noteLine = params.notes ? `📝 Nota Tambahan: ${params.notes}` : '';
  const closing = "Boleh tolong semak availability dan sebut harga (quotation)? Terima kasih Cik Ain!";

  const parts = [greeting, '', vehicleLine, dateLine, timeLine, durationLine, locationLine, nameLine, noteLine, '', closing].filter(Boolean);
  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
}
