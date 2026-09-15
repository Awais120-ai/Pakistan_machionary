export const site = {
  name: "Pakistan HMTC",
  fullName: "Pakistan Heavy Machinery Training Center",
  email: "pakistanttc1@gmail.com",
  facebook: "https://www.facebook.com/share/1JzbySWyaY/",
  whatsapp: "https://wa.me/923128616980?text=Hello%20Pakistan%20HMTC!%20I%20want%20to%20register%20for%20a%20training.",
  phones: [
    { display: "03128616980", href: "tel:+923128616980" },
    { display: "03419470579", href: "tel:+923419470579" },
    { display: "03115092877", href: "tel:+923115092877" }
  ]
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/our-trainings", label: "Our Trainings" },
  { href: "/get-certificate", label: "Get Certificate" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/blog", label: "Blog" }
] as const;

export const trainings = [
  {
    id: "grader",
    title: "Grader Training",
    image: "/images/grader.jpg",
    alt: "Grader training for road and site leveling",
    short: "Learn precision grading techniques to operate graders efficiently.",
    full: "Learn precision grading techniques to operate graders efficiently. Master leveling surfaces for road construction and build a strong professional foundation."
  },
  {
    id: "trailer",
    title: "Trailer Training",
    image: "/images/truck.jpg",
    alt: "Trailer and heavy vehicle driving training",
    short: "Master the art of driving heavy trailers with confidence.",
    full: "Master the art of driving heavy trailers with confidence. Learn safe transportation techniques for goods and grow as a trusted logistics professional."
  },
  {
    id: "excavator",
    title: "Excavator Training",
    image: "/images/excavator.jpg",
    alt: "Excavator operation training",
    short: "Get hands-on experience in operating excavators.",
    full: "Get hands-on experience operating excavators effectively. Learn digging, trenching, and material handling for construction and excavation projects."
  },
  {
    id: "forklift",
    title: "Forklift Training",
    image: "/images/forklift.jpg",
    alt: "Forklift operator training",
    short: "Train to manage forklifts with accuracy and control.",
    full: "Train to manage forklifts with accuracy and precision. Strengthen warehouse and logistics skills and become a reliable industrial operator."
  },
  {
    id: "crane",
    title: "Mobile Crane Training",
    image: "/images/crane.jpg",
    alt: "Mobile crane lifting operations training",
    short: "Learn to operate mobile cranes safely and efficiently.",
    full: "Learn to operate mobile cranes safely and efficiently. Build expertise in heavy lifting for industrial and construction tasks."
  },
  {
    id: "jcb",
    title: "JCB Training",
    image: "/images/excavator.jpg",
    alt: "JCB and backhoe loader training",
    short: "Specialize in operating JCB machines for versatile construction jobs.",
    full: "Specialize in operating JCB machines for versatile construction jobs. Gain skills in excavation, loading, and multi-purpose equipment work."
  },
  {
    id: "car",
    title: "Car Driving Training",
    image: "/images/car.jpg",
    alt: "Professional car driving training",
    short: "Acquire professional driving skills for safer road journeys.",
    full: "Acquire professional driving skills for safer road journeys. Learn confident techniques for beginners and license-seekers alike."
  },
  {
    id: "loader",
    title: "Loader Training",
    image: "/images/dump-truck.jpg",
    alt: "Loader and material handling training",
    short: "Develop expertise in handling loaders for material transfer.",
    full: "Develop expertise in handling loaders for material transfer. Learn essential skills for construction and industrial operations."
  }
] as const;

export const faqs = [
  {
    question: "How can I enroll at Pakistan HMTC?",
    answer: "Contact us by phone, WhatsApp, or email, or visit the center to complete the registration process."
  },
  {
    question: "What types of machinery do you provide training for?",
    answer: "We offer training for graders, loaders, excavators, mobile cranes, forklifts, trailers, JCB machines, and car driving."
  },
  {
    question: "Do you provide certification after training?",
    answer: "Yes. All trainees receive a certificate upon successful completion of their course."
  },
  {
    question: "How do I ask about fees or batch timing?",
    answer: "Call 03128616980, 03419470579, or 03115092877, or email pakistanttc1@gmail.com for current details."
  }
] as const;

export const posts = [
  {
    slug: "practical-heavy-machinery-training",
    title: "Why Practical Training Matters",
    heading: "Why Practical Heavy Machinery Training Matters",
    date: "2026-08-12",
    displayDate: "12 Aug 2026",
    image: "/images/operator.jpg",
    alt: "Practical operator training on a construction site",
    excerpt: "Classroom theory is useful, but operators grow fastest when they train on real machines.",
    description:
      "Learn why hands-on heavy machinery training at Pakistan HMTC helps students become confident, job-ready operators.",
    paragraphs: [
      "Reading about a machine is not the same as sitting in the cabin, checking the controls, and completing a real task under instructor supervision. Pakistan HMTC is built around that difference.",
      "Hands-on training helps students understand how equipment behaves on uneven ground, how load balance changes, and how to stay calm when a job-site situation is not textbook-perfect. Those lessons are what employers look for.",
      "Our grader, excavator, loader, crane, forklift, trailer, JCB, and car driving programs all follow the same principle: learn the machine by using the machine."
    ]
  },
  {
    slug: "operator-safety-standards",
    title: "Safety Habits Every Operator Needs",
    heading: "Safety Habits Every Operator Needs",
    date: "2026-07-28",
    displayDate: "28 Jul 2026",
    image: "/images/workers.jpg",
    alt: "Trainees learning safety around heavy machinery",
    excerpt: "Safe operators are trusted operators. These habits protect people, machines, and careers.",
    description: "Essential safety habits taught at Pakistan HMTC for heavy machinery and driving trainees.",
    paragraphs: [
      "At Pakistan HMTC, safety is part of every lesson, not a separate afterthought. Students practice walk-around checks, communication with ground staff, and controlled operation before they take on more complex tasks.",
      "These habits protect trainees, equipment, and future employers. They also make a certificate more meaningful, because it represents responsible operating skill."
    ],
    bullets: [
      "Inspect the machine before every session.",
      "Keep a clear view of people and obstacles.",
      "Never rush a lift, trench, or trailer maneuver.",
      "Follow instructor signals and site rules without exception."
    ]
  },
  {
    slug: "career-in-heavy-machinery",
    title: "Building A Career As An Operator",
    heading: "Building A Career As An Operator",
    date: "2026-07-04",
    displayDate: "04 Jul 2026",
    image: "/images/loader.jpg",
    alt: "Industrial equipment used by professional operators",
    excerpt: "A certified skill set in heavy machinery can open doors across construction and logistics.",
    description:
      "How Pakistan HMTC training can support a career in heavy machinery, construction, and logistics operations.",
    paragraphs: [
      "Construction, logistics, warehousing, and infrastructure projects all need people who can operate machines safely and productively. Pakistan HMTC helps students start that path with focused, practical courses.",
      "A trainee might begin with excavator or forklift training, then add trailer, loader, or crane skills as career goals become clearer. A completion certificate documents that the course was finished successfully."
    ]
  }
] as const;

export type PostSlug = (typeof posts)[number]["slug"];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
