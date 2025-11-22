// Mock data for Zafar Imam's Portfolio

export const personalInfo = {
  name: "Zafar Imam",
  title: "Full-Stack Mobile & Web Developer",
  subtitle: "Building Modern Mobile Apps & Dynamic Websites",
  description: "10+ years of expertise in creating and launching high-quality mobile applications and dynamic websites. Specialized in cross-platform mobile development (Android, iOS, Flutter, KMP, React Native) and modern web development (landing pages, MVPs, full-stack applications) with robust architecture patterns.",
  email: "zafarimam512@gmail.com",
  phone: "+91 78349 08329",
  linkedin: "https://www.linkedin.com/in/zafarimam77/",
  github: "https://github.com/ZafarQuaere",
  profileImage: "https://customer-assets.emergentagent.com/job_techforge-portfolio/artifacts/w3zrf3jm_ProfilePic.png"
};

export const skills = {
  mobile: [
    { name: "Android Development", level: 95, category: "Mobile" },
    { name: "iOS Development", level: 80, category: "Mobile" },
    { name: "Flutter", level: 85, category: "Mobile" },
    { name: "React Native", level: 82, category: "Mobile" },
    { name: "Kotlin Multiplatform", level: 78, category: "Mobile" }
  ],
  web: [
    { name: "React.js", level: 90, category: "Web" },
    { name: "Next.js", level: 85, category: "Web" },
    { name: "Node.js", level: 88, category: "Web" },
    { name: "HTML/CSS", level: 95, category: "Web" },
    { name: "JavaScript/TypeScript", level: 90, category: "Web" }
  ],
  architecture: [
    { name: "MVVM", level: 90, category: "Architecture" },
    { name: "MVP", level: 85, category: "Architecture" },
    { name: "Clean Architecture", level: 88, category: "Architecture" },
    { name: "Microservices", level: 80, category: "Architecture" }
  ],
  tools: [
    { name: "Git", level: 95, category: "Tools" },
    { name: "Firebase", level: 88, category: "Tools" },
    { name: "MongoDB", level: 82, category: "Tools" },
    { name: "Docker", level: 75, category: "Tools" }
  ]
};

export const projects = [
  // Mobile Apps
  {
    id: 1,
    title: "Uncle Delivery",
    description: "A logistics and delivery app connecting users with local drivers for on-demand parcel and goods transportation. Features real-time tracking, instant booking, and secure payment options.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&h=400&fit=crop&crop=center",
    tech: ["Android", "Kotlin", "Firebase", "Google Maps", "Payment Gateway"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.uncledelivery",
    category: "Mobile App",
    type: "mobile"
  },
  {
    id: 2,
    title: "TOD - Watch Football & Movies",
    description: "A subscription-based streaming platform offering live sports and a library of movies and TV shows. Provides high-quality streaming, personalized recommendations, and multi-device support.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop&crop=center",
    tech: ["Android", "Kotlin", "ExoPlayer", "REST API", "JWT"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.tod.streaming",
    category: "Mobile App",
    type: "mobile"
  },
  {
    id: 3,
    title: "Ulta Beauty",
    description: "A beauty retail app allowing users to shop for cosmetics, skincare, and fragrances with exclusive deals and virtual try-on features. Integrates loyalty program and personalized product recommendations.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop&crop=center",
    tech: ["Android", "Java", "AR Core", "E-commerce", "Payment Integration"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.ulta.beauty",
    category: "Mobile App",
    type: "mobile"
  },
  {
    id: 4,
    title: "Ghatna Chakra",
    description: "An educational app focused on exam preparation, particularly for competitive exams in India. Offers study materials, quizzes, and mock tests with detailed analytics.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=center",
    tech: ["Android", "Kotlin", "SQLite", "Analytics", "PDF Viewer"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.ghatnachakra.exam",
    category: "Mobile App",
    type: "mobile"
  },
  {
    id: 5,
    title: "Toyota Link",
    description: "Connected car app designed to enhance driving experience by providing vehicle diagnostics, remote control features, and navigation tools for Toyota vehicles.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
    tech: ["Android", "IoT", "Bluetooth", "Maps SDK", "Vehicle API"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.toyota.link",
    category: "Mobile App",
    type: "mobile"
  },
  {
    id: 6,
    title: "Lexus Inform",
    description: "Premium connected car application for Lexus vehicles with advanced diagnostics, remote control capabilities, and concierge services integration.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&h=400&fit=crop&crop=center",
    tech: ["Android", "Kotlin", "IoT", "Premium UI", "Cloud Integration"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.lexus.inform",
    category: "Mobile App",
    type: "mobile"
  },
  // Websites
  {
    id: 7,
    title: "Gopal Herbals",
    description: "Premium e-commerce website for ayurvedic and herbal products. Features modern design, product catalog, secure checkout, and customer testimonials with responsive design.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    tech: ["React", "Node.js", "MongoDB", "Payment Gateway", "SEO"],
    liveUrl: "https://gopalherbals.com/",
    category: "E-commerce",
    type: "website"
  },
  {
    id: 8,
    title: "Love Acharya",
    description: "Professional astrology and spiritual guidance website with elegant design, service booking system, and interactive consultation features.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    liveUrl: "https://love-acharya.ueniweb.com/",
    category: "Professional Services",
    type: "website"
  },
  {
    id: 9,
    title: "Longines Spirit Landing",
    description: "Premium luxury watch landing page with stunning visuals, product showcase, and sophisticated user experience. Features smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=400&fit=crop&crop=center",
    tech: ["React", "GSAP", "CSS3", "WebGL", "Responsive Design"],
    liveUrl: "https://www.longines.com/en-in/landing-page/spirit-zulu-time-1925",
    category: "Landing Page",
    type: "website"
  },
  {
    id: 10,
    title: "Crounse Portfolio",
    description: "Modern professional portfolio website with clean design, project showcase, and contact integration. Built with performance and SEO optimization in mind.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.crounse.com/",
    category: "Portfolio",
    type: "website"
  }
];

export const experience = [
  {
    id: 1,
    position: "Associate Staff Engineer",
    company: "Nagarro",
    duration: "November 2021 - Present",
    description: [
      "Spearheaded development of cross-platform mobile applications using Flutter, React Native, and native Android/iOS",
      "Led full-stack web development projects including landing pages, MVPs, and enterprise applications",
      "Engineered scalable solutions with modern architecture patterns (MVVM, Clean Architecture, Microservices)",
      "Mentored development teams on mobile and web technologies, conducting regular code reviews"
    ]
  },
  {
    id: 2,
    position: "Lead Engineer",
    company: "HCL Technologies Pvt Ltd",
    duration: "November 2017 - October 2021",
    description: [
      "Led development teams working on both mobile applications and web platforms",
      "Implemented cross-platform solutions using Flutter and React Native for faster time-to-market",
      "Designed and developed responsive websites and landing pages with modern web technologies",
      "Optimized application performance and maintained CI/CD pipelines for mobile and web projects"
    ]
  },
  {
    id: 3,
    position: "Mobile & Web Application Developer",
    company: "Optiontown",
    duration: "April 2016 - November 2017",
    location: "Delhi",
    description: [
      "Developed and maintained Android applications and responsive web interfaces",
      "Created landing pages and promotional websites with focus on conversion optimization",
      "Collaborated with design and backend teams to integrate APIs and third-party services",
      "Participated in agile development processes and cross-platform project delivery"
    ]
  },
  {
    id: 4,
    position: "Mobile & Web Developer",
    company: "Quaere-e-Technologies Pvt Ltd",
    duration: "September 2015 - April 2016",
    location: "NOIDA",
    description: [
      "Built mobile applications from concept to deployment on Google Play Store and App Store",
      "Developed static and dynamic websites using modern web technologies",
      "Designed and implemented user interfaces following Material Design and web accessibility guidelines",
      "Integrated third-party libraries and services for enhanced mobile and web functionality"
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Cross-Platform Mobile Development: Flutter vs React Native vs KMP",
    excerpt: "Comparing modern cross-platform frameworks and when to choose each for your mobile app development needs.",
    date: "2024-01-15",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&h=300&fit=crop&crop=center",
    tags: ["Flutter", "React Native", "KMP", "Mobile Development"]
  },
  {
    id: 2,
    title: "Building High-Converting Landing Pages: A Developer's Guide",
    excerpt: "Essential techniques for creating landing pages that convert visitors into customers using modern web technologies.",
    date: "2023-12-20",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop&crop=center",
    tags: ["Web Development", "Landing Pages", "Conversion Optimization"]
  },
  {
    id: 3,
    title: "From MVP to Production: Full-Stack Development Best Practices",
    excerpt: "Lessons learned from building scalable applications from prototype to production across mobile and web platforms.",
    date: "2023-11-10",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop&crop=center",
    tags: ["Full-Stack", "MVP", "Best Practices", "Scalability"]
  }
];

export const certifications = [
  {
    name: "Oracle Certified JSE 6 Programmer",
    issuer: "Oracle",
    id: "oc1375277",
    date: "2015"
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "2024"
  }
];

export const education = {
  degree: "B.Tech (Computer Science)",
  institution: "JNTU Hyderabad",
  year: "2015"
};