<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentSection = ref("about");

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/hungnt299",
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
    </svg>`,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hungnt299",
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/hungnt299",
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
    </svg>`,
  },
];

const experiences = [
  {
    period: "March 2024 - Aug 2025",
    title: "Lead Engineer",
    company: "Dayone Software Technology Ltd",
    companyUrl: "#",
    description:
      "Frontend team management with full-stack collaboration, DevOps deployment support, code review, and technical ideation",
    technologies: [],
    employmentType: "Full-time",
    workMode: "Official",
  },
  {
    period: "March 2021 - March 2024",
    title: "BOD | Full Stack Engineer",
    company: "QASOFT Solution",
    companyUrl: "#",
    description:
      "Technical leadership and end-to-end project management: from client consultation, requirement analysis, solution design to full-stack implementation and development team coordination",
    technologies: [],
    employmentType: "Full-time",
    workMode: "Official",
  },
  {
    period: "June 2023 - Dec 2023",
    title: "Frontend Developer",
    company: "NEC Vietnam Co Ltd",
    companyUrl: "#",
    description:
      "Developed responsive web interfaces, implemented API integrations, and optimized user experience design",
    technologies: [],
    employmentType: "Full-time",
    workMode: "Onsite",
  },
  {
    period: "Dec 2021 - June 2022",
    title: "Frontend Developer",
    company: "Pax Creation Co Ltd",
    companyUrl: "#",
    description:
      "Developed responsive web interfaces, implemented API integrations, and optimized user experience design",
    technologies: [],
    employmentType: "Full-time",
    workMode: "Onsite",
  },
];

const projects = [
  {
    title: "Multi-Platform Gaming Web Application (Frontend)",
    description:
      "Multi-platform gaming web application targeting European markets with casino games, sports betting, and social gaming features. Built with Vue.js 3/Nuxt.js 3 supporting multiple domains and brands through unified architecture.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Laravel",
      "TypeScript",
      "Tailwind CSS",
      "Strapi CMS",
      "Docker",
      "Kubernetes",
      "AWS",
      "Cloudflare",
      "Google Analytics",
      "New Relic",
      "Pusher",
      "Twilio",
      "i18n",
    ],
    responsibilities: [
      "Designed scalable component-based architecture for multiple gaming domains",
      "Developed features for gaming management, sports betting, and social interactions",
      "Implemented multi-language support (13+ languages) and domain-specific configurations",
      "Optimized performance through lazy loading, code splitting, and caching strategies",
      "Integrated real-time features (live chat, notifications) and analytics systems",
    ],
    url: "#",
  },
  {
    title: "Misa (Full-Stack)",
    description:
      "A comprehensive enterprise system for managing accounting, human resources, and business operations. The system includes multiple functional modules such as enterprise management covering accounting, HR, orders, and asset management, debt tracking, inventory, tools, reporting, and integration with tax systems. Features a real-time dashboard to track work progress and order status across departments.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Laravel",
      "Vuetify",
      "Tailwind CSS",
      "CSS",
      "Pusher",
    ],
    responsibilities: [
      "Developed features for both frontend and backend across various business modules",
      "Built analytics dashboards for real-time task and order tracking",
      "Implemented responsive UI and synchronized backend API data flow",
      "Collaborated with QA and BA teams for testing, feedback, and final delivery",
    ],
    url: "#",
  },
  {
    title: "Motion Care - AI Health Monitoring System (Frontend)",
    description:
      "An AI-based health monitoring system where users record posture videos guided by the app. Frontend captures body key points (joints, limbs) and draws visual markers (dots/lines) over the body. Coordinates are sent to the backend for analysis of health conditions and improvement suggestions. Used in physiotherapy, posture correction, and preventive care.",
    technologies: ["React.js", "Vue.js", "NestJS", "Ant Design", "KonvaJS"],
    responsibilities: [
      "Built UI flow to guide users through motion recording sessions",
      "Implemented canvas drawing (KonvaJS) for real-time posture tracking",
      "Extracted and normalized coordinate data for backend consumption",
      "Worked closely with AI/backend teams to visualize results and feedback",
    ],
    url: "#",
  },
  {
    title: "Shiftgate - Luxury Car Marketplace (Frontend)",
    description:
      "Luxury imported car marketplace platform connecting buyers and sellers in Japan. Frontend provides advanced search filters by brand, price, year, and mileage with responsive design. Vehicle data and user interactions are processed through secure APIs for inventory management.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Nest.js",
      "HTML",
      "CSS",
      "Vuetify",
      "Google Analytics",
    ],
    responsibilities: [
      "Built comprehensive UI/UX for vehicle browsing and detailed product pages",
      "Implemented advanced filtering system and search functionality using Vue.js/Nuxt.js",
      "Developed user authentication, registration flows, and member dashboard features",
    ],
    url: "#",
  },
];

const contactInfo = {
  email: "hungnt299@gmail.com",
  phone: "+84 377072672",
  location: "Vuon Lai Street, District 12, HCMC",
  available: "Available for new opportunities",
};

// Function to scroll to section
const scrollToSection = (sectionId) => {
  currentSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Function to copy text to clipboard
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    // You could add a toast notification here if desired
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
};

// Function to check which section is currently in view
const checkActiveSection = () => {
  const sectionElements = sections
    .map((section) => ({
      id: section.id,
      element: document.getElementById(section.id),
    }))
    .filter((item) => item.element);

  if (sectionElements.length === 0) return;

  // Find the section that is currently most visible
  let activeSection = sections[0].id;
  let minDistance = Infinity;

  sectionElements.forEach((section) => {
    const rect = section.element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;

    // Calculate distance from section center to viewport center
    const sectionCenter = elementTop + rect.height / 2;
    const viewportCenter = window.scrollY + window.innerHeight / 2;
    const distance = Math.abs(sectionCenter - viewportCenter);

    if (distance < minDistance) {
      minDistance = distance;
      activeSection = section.id;
    }
  });

  if (currentSection.value !== activeSection) {
    currentSection.value = activeSection;
  }
};

// Throttle function for scroll performance
let ticking = false;
const throttledCheckActiveSection = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      checkActiveSection();
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", throttledCheckActiveSection);
  // Initial check
  checkActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", throttledCheckActiveSection);
});
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-400 font-inter">
    <div class="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-12">
      <div class="flex flex-col md:flex-row gap-16 lg:gap-20">
        <!-- Left Column - Navigation -->
        <div class="w-full md:w-[48%]">
          <div class="sticky top-24">
            <!-- Bio -->
            <div class="mb-16">
              <h2 class="text-4xl font-bold text-white mb-4">Ngo Thanh Hung</h2>
              <p class="text-xl">Software Engineer</p>
              <p class="text-md leading-relaxed max-w-xs">
                Code. Lead. Deliver.
              </p>
              <div class="flex flex-col gap-2 mt-16">
                <div>
                  <a
                    href="/Ngo-Thanh-Hung-CV.pdf"
                    target="_blank"
                    class="text-cyan-300 text-sm hover:text-cyan-500 transition-colors duration-200 font-medium"
                  >
                    View resume →
                  </a>
                </div>
                <div>
                  <a
                    href="/Ngo-Thanh-Hung-Recommendation-Letter.pdf"
                    target="_blank"
                    class="text-cyan-300 text-sm hover:text-cyan-500 transition-colors duration-200 font-medium"
                  >
                    View Recommendation Letter →
                  </a>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <nav class="mb-16">
              <ul class="space-y-3">
                <li v-for="section in sections" :key="section.id">
                  <button
                    :class="[
                      'text-left w-full hover:cursor-pointer text-xs font-bold py-3 px-0 transition-all duration-200 hover:text-white relative group',
                      currentSection === section.id
                        ? 'text-white pl-12'
                        : 'text-slate-400 pl-8 hover:pl-8',
                    ]"
                    @click="scrollToSection(section.id)"
                  >
                    <!-- Horizontal line for active/hover state -->
                    <div
                      :class="[
                        'absolute left-0 top-1/2 transform -translate-y-1/2 h-px bg-white transition-all duration-200',
                        currentSection === section.id
                          ? 'opacity-100 w-10'
                          : 'opacity-60 w-6',
                      ]"
                    />

                    {{ section.label.toUpperCase() }}
                  </button>
                </li>
              </ul>
            </nav>

            <!-- Social Links -->
            <div class="flex space-x-6">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-2xl hover:text-white transition-colors duration-200"
                :title="link.name"
              >
                <span v-html="link.icon" />
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column - Content -->
        <div class="w-full md:w-[52%]">
          <!-- About Section -->
          <section id="about" class="space-y-8 mb-24">
            <h2 class="text-3xl font-bold text-white mb-8">About</h2>
            <p class="text-lg leading-relaxed">
              I'm an experienced Full-Stack Software Engineer with 5 years of
              hands-on experience in designing, developing, and deploying
              scalable web applications and enterprise systems. I have strong
              expertise in both frontend and backend development using modern
              JavaScript frameworks (Vue.js, Nuxt.js, React.js, Next.js) and
              robust backend stacks (Laravel, Node.js, NestJS).
            </p>
            <p class="text-lg leading-relaxed">
              Currently, I'm a
              <strong class="text-white">Lead Engineer</strong> at
              <strong class="text-white">Dayone Software Technology Ltd</strong
              >, where I lead frontend team management with full-stack
              collaboration, DevOps deployment support, code review, and
              technical ideation. I specialize in modern web technologies and
              have proven ability to lead cross-functional teams, architect
              efficient solutions, and deliver high-quality software in
              fast-paced, agile environments.
            </p>
            <p class="text-lg leading-relaxed">
              Previously, I served as
              <strong class="text-white">BOD | Full Stack Engineer</strong> at
              <strong class="text-white">QASOFT Solution</strong>, where I
              provided technical leadership and end-to-end project management:
              from client consultation, requirement analysis, solution design to
              full-stack implementation and development team coordination.
            </p>
            <p class="text-lg leading-relaxed">
              I'm adept at leveraging DevOps tools and cloud infrastructure to
              optimize application performance and deployment. My experience
              spans across various industries including gaming, enterprise
              systems, healthcare, and e-commerce platforms. I'm always eager to
              learn new technologies and contribute to meaningful projects that
              make a real impact.
            </p>
          </section>

          <!-- Experience Section -->
          <section id="experience" class="space-y-12 mb-24">
            <h2 class="text-3xl font-bold text-white mb-8">Experience</h2>
            <div
              v-for="exp in experiences"
              :key="exp.period"
              class="border-l-2 border-slate-700 pl-8"
            >
              <div class="mb-6">
                <div class="text-sm text-slate-400 mb-3">{{ exp.period }}</div>
                <h3 class="text-xl font-semibold text-white mb-2">
                  {{ exp.company }}
                </h3>
                <div class="text-slate-400 mb-4">
                  <a
                    :href="exp.companyUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-white transition-colors duration-200"
                  >
                    {{ exp.title }}
                  </a>
                </div>
                <div
                  v-if="exp.employmentType || exp.workMode"
                  class="flex flex-wrap items-center gap-2 mb-4"
                >
                  <span
                    v-if="exp.employmentType"
                    class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border border-emerald-700/60 bg-emerald-900/30 text-emerald-300 tracking-wide"
                  >
                    {{ exp.employmentType }}
                  </span>
                  <span
                    v-if="exp.workMode"
                    class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border border-cyan-700/60 bg-cyan-900/30 text-cyan-300 tracking-wide"
                  >
                    {{ exp.workMode }}
                  </span>
                </div>
                <p class="leading-relaxed mb-6">
                  {{ exp.description }}
                </p>
                <!-- <div class="flex flex-wrap gap-3">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="px-4 py-2 bg-slate-800 text-cyan-300 text-sm rounded-lg border border-slate-700 font-medium"
                  >
                    {{ tech }}
                  </span>
                </div> -->
              </div>
            </div>
          </section>

          <!-- Projects Section -->
          <section id="projects" class="space-y-12 mb-24">
            <h2 class="text-3xl font-bold text-white mb-8">Projects</h2>
            <div
              v-for="project in projects"
              :key="project.title"
              class="border border-slate-800 rounded-lg p-8 hover:border-slate-700 transition-colors duration-200"
            >
              <h3 class="text-xl font-semibold text-white mb-4">
                {{ project.title }}
              </h3>
              <p class="leading-relaxed mb-6">
                {{ project.description }}
              </p>
              <div
                v-if="
                  project.responsibilities && project.responsibilities.length
                "
                class="mb-6"
              >
                <h4 class="text-lg font-semibold text-white mb-3">
                  Responsibilities
                </h4>
                <ul
                  class="list-disc list-inside space-y-2 text-slate-300 text-sm"
                >
                  <li v-for="item in project.responsibilities" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-4 py-2 bg-slate-800 text-cyan-300 text-xs rounded-lg border border-slate-700 font-medium"
                >
                  {{ tech }}
                </span>
              </div>
              <!-- <a
                :href="project.url"
                class="inline-flex text-sm items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                View Project →
              </a> -->
            </div>
          </section>

          <!-- Contact Section -->
          <section id="contact" class="space-y-8">
            <h2 class="text-3xl font-bold text-white mb-8">Contact</h2>
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <span class="text-slate-400 text-xl">📧</span>
                <a
                  :href="`mailto:${contactInfo.email}`"
                  class="text-lg text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {{ contactInfo.email }}
                </a>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-xl">📱</span>
                <button
                  @click="copyToClipboard(contactInfo.phone)"
                  class="text-lg text-slate-400 hover:text-cyan-300 transition-colors duration-200 cursor-pointer"
                  title="Click to copy phone number"
                >
                  {{ contactInfo.phone }}
                </button>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-xl">📍</span>
                <span class="text-lg">{{ contactInfo.location }}</span>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-xl">💼</span>
                <span class="text-lg text-green-400">{{
                  contactInfo.available
                }}</span>
              </div>
            </div>

            <p class="text-lg leading-relaxed mt-12">
              I'm always interested in hearing about new opportunities and
              interesting projects. Whether you have a question or just want to
              say hi, feel free to reach out!
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-inter {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}

/* Smooth transitions for section changes */
section {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
