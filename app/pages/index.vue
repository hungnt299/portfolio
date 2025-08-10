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
    url: "https://github.com/yourusername",
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
    </svg>`,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourusername",
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
    </svg>`,
  },
];

const experiences = [
  {
    period: "2023 - Present",
    title: "Senior Front-End Engineer",
    company: "Your Company",
    companyUrl: "https://yourcompany.com",
    description:
      "Leading frontend development initiatives, mentoring junior developers, and implementing best practices for accessibility and performance.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2021 - 2023",
    title: "Front-End Developer",
    company: "Previous Company",
    companyUrl: "https://previouscompany.com",
    description:
      "Developed responsive web applications and collaborated with design teams to create seamless user experiences.",
    technologies: ["Vue.js", "JavaScript", "CSS3", "HTML5"],
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with modern web technologies, featuring responsive design and secure payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    url: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    url: "https://github.com/yourusername/taskapp",
  },
];

const contactInfo = {
  email: "hello@yourname.com",
  location: "San Francisco, CA",
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
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-20">
        <!-- Left Column - Navigation -->
        <div class="lg:col-span-1">
          <div class="sticky top-24">
            <!-- Bio -->
            <div class="mb-16">
              <h2 class="text-4xl font-bold text-white mb-4">Your Name</h2>
              <p class="text-xl mb-6">Software Engineer</p>
              <p class="text-md leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>
            </div>

            <!-- Navigation -->
            <nav class="mb-16">
              <ul class="space-y-3">
                <li v-for="section in sections" :key="section.id">
                  <button
                    @click="scrollToSection(section.id)"
                    :class="[
                      'text-left w-full text-xs font-bold py-3 px-0 transition-all duration-200 hover:text-white relative group',
                      currentSection === section.id
                        ? 'text-white pl-12'
                        : 'text-slate-400 pl-8 hover:pl-8',
                    ]"
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
        <div class="lg:col-span-3">
          <!-- About Section -->
          <section id="about" class="space-y-8 mb-24">
            <h2 class="text-3xl font-bold text-white mb-8">About</h2>
            <p class="text-lg leading-relaxed">
              I'm a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
            </p>
            <p class="text-lg leading-relaxed">
              Currently, I'm a
              <strong class="text-white">Senior Front-End Engineer</strong> at
              <strong class="text-white">Your Company</strong>, specializing in
              modern web technologies and accessibility. I contribute to the
              creation and maintenance of UI components that power our frontend,
              ensuring our platform meets web accessibility standards and best
              practices to deliver an inclusive user experience.
            </p>
            <p class="text-lg leading-relaxed">
              In the past, I've had the opportunity to develop software across a
              variety of settings — from advertising agencies and large
              corporations to start-ups and small digital product studios. I'm
              always eager to learn new technologies and contribute to
              meaningful projects.
            </p>
            <p class="text-lg leading-relaxed">
              In my spare time, I'm usually coding, reading tech blogs,
              exploring new frameworks, or contributing to open-source projects.
              I believe in continuous learning and sharing knowledge with the
              developer community.
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
                  {{ exp.title }}
                </h3>
                <div class="text-slate-400 mb-4">
                  <a
                    :href="exp.companyUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-white transition-colors duration-200"
                  >
                    {{ exp.company }}
                  </a>
                </div>
                <p class="leading-relaxed mb-6">
                  {{ exp.description }}
                </p>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700"
                  >
                    {{ tech }}
                  </span>
                </div>
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
              <div class="flex flex-wrap gap-3 mb-6">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700"
                >
                  {{ tech }}
                </span>
              </div>
              <a
                :href="project.url"
                class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                View Project →
              </a>
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
