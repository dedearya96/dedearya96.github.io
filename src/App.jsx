
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  Database,
  Download,
  Globe,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Palette,
  Smartphone,
  Sparkles,
  Terminal,
  X,
  BriefcaseBusiness,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const skills = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["PHP", "JavaScript", "TypeScript", "C#", "Dart", "Go", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers3,
    items: [
      "Laravel", "React.js", "Next.js", "Vue.js", "Nuxt.js",
      "Flutter", "Angular", "Nest.js", "Express.js",
      "CodeIgniter", "Adonis.js", "Bootstrap", "Tailwind CSS",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "Firebase", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Tools & Development",
    icon: Terminal,
    items: ["REST API", "Postman", "Insomnia", "Git", "GitHub", "GitLab", "Hosting"],
  },
  {
    title: "Design & Productivity",
    icon: Palette,
    items: ["UI/UX Design", "Adobe Photoshop", "CorelDRAW", "Microsoft Office"],
  },
  {
    title: "IT & Hardware",
    icon: Monitor,
    items: [
      "Operating System Installation",
      "Software Installation",
      "PC Troubleshooting",
      "Android Troubleshooting",
      "Printer Troubleshooting",
    ],
  },
];

const certificates = [
  "Web Developer",
  "Computer Assembly – Prakerja",
  "Mastering Mobile Programming (Android)",
  "DOT (Office)",
];

const qualities = [
  "Communication",
  "Discipline",
  "Teamwork",
  "Hard Work",
  "Creativity",
  "Responsible",
];

const education = [
  {
    school: "ITB STIKOM BALI",
    degree: "Bachelor of Information Systems",
    period: "2015 — 2019",
    detail: "GPA 3.56 / 4.00",
    highlight: "Cumlaude",
    icon: GraduationCap,
  },
  {
    school: "State Vocational High School 1 Manggis",
    degree: "Computer and Network Engineering",
    period: "2012 — 2015",
    icon: Monitor,
  },
  {
    school: "State Junior High School 2 Manggis",
    degree: "Junior High School",
    period: "2009 — 2012",
    icon: GraduationCap,
  },
  {
    school: "State Elementary School 2 Ngis",
    degree: "Elementary School",
    period: "2003 — 2009",
    icon: GraduationCap,
  },
];

const techIcons = [
  "php", "laravel", "javascript", "typescript",
  "react", "nextjs", "vue", "flutter",
  "nodejs", "mysql", "postgres", "firebase",
  "python", "git", "github", "tailwind",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 top-[40%] h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#080D18]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-xl font-black tracking-tight">
            DEDEARYA<span className="text-sky-400">.DEV</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm text-slate-400 transition hover:text-sky-400"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-semibold text-sky-300 transition hover:bg-sky-400 hover:text-slate-950 md:flex"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden bg-transparent"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0B1220] px-6 py-5 md:hidden">
            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-3 text-slate-300"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen scroll-mt-24 items-center px-6 pb-20 pt-32 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              SOFTWARE ENGINEER & DEVELOPER
            </div>

            <p className="mb-4 text-lg font-medium text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
              I Gede Arya
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Widnyana Putra
              </span>
            </h1>

            <h2 className="mt-8 text-xl font-semibold text-slate-200 md:text-2xl">
              Full Stack Developer
              <span className="text-sky-400"> & </span>
              Software Engineer
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              I design and develop digital solutions through modern web
              technologies and mobile applications. Passionate about
              transforming ideas into functional, scalable, and meaningful
              digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full bg-sky-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-sky-300"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/CV-Arya.pdf"
                download
                className="flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-sky-400 hover:text-sky-300"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <a
                href="https://github.com/dedearya96"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition hover:text-sky-400"
              >
               <Code2 size={22} />
              </a>
              <a
                href="mailto:arya.widnyana96@gmail.com"
                aria-label="Email"
                className="text-slate-400 transition hover:text-sky-400"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://wa.me/6282236292106"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-slate-400 transition hover:text-sky-400"
              >
                <MessageCircle size={22} />
              </a>
              <span className="h-6 w-px bg-white/10" />
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={15} className="text-sky-400" />
                Bali, Indonesia
              </span>
            </div>
          </motion.div>

          {/* Developer visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-[90px]" />

            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#17243A] to-[#0C1423] p-7 shadow-2xl shadow-blue-950/40">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="font-mono text-xs text-slate-500">
                  developer.js
                </span>
              </div>

              <div className="space-y-5 py-8 font-mono text-sm">
                <p className="text-slate-500">// A little about me</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">developer</span>{" "}
                  = {"{"}
                </p>
                <div className="space-y-3 pl-5">
                  <p>
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"Arya"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-300">"Full Stack"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-300">"Building"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">focus:</span>{" "}
                    <span className="text-emerald-300">"Innovation"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">mindset:</span>{" "}
                    <span className="text-emerald-300">"Keep Learning"</span>
                  </p>
                </div>
                <p className="text-sky-300">{"}"}</p>
                <div className="rounded-xl border border-sky-400/20 bg-sky-400/5 p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs text-sky-300">
                    <Sparkles size={14} /> CURRENT FOCUS
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    Creating impactful digital experiences with technology.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-500">
                <span>Based in Bali, Indonesia</span>
                <span className="text-sky-400">v.2026</span>
              </div>
            </div>

            <div className="absolute -right-5 top-16 rounded-xl border border-white/10 bg-[#111D30] p-4 shadow-xl">
              <Code2 className="text-sky-400" size={27} />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#111D30] p-4 shadow-xl">
              <Smartphone className="text-indigo-400" size={27} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative scroll-mt-24 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              eyebrow="01 — Introduction"
              title="About Me"
              description="A developer driven by curiosity, creativity, and a passion for technology."
            />

            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 md:p-10">
                <h3 className="mb-5 text-2xl font-bold">
                  Turning Ideas Into
                  <span className="text-sky-400"> Digital Solutions.</span>
                </h3>
                <p className="leading-8 text-slate-400">
                  I am an Information Systems graduate from ITB STIKOM BALI
                  with a strong interest in software engineering and digital
                  product development.
                </p>
                <p className="mt-5 leading-8 text-slate-400">
                  My technical interests include full stack web development,
                  mobile application development, database management,
                  REST API integration, and user interface design.
                </p>
                <p className="mt-5 leading-8 text-slate-400">
                  I enjoy learning new technologies, solving technical
                  challenges, and creating applications that provide
                  meaningful value to users.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-sky-500/10 to-transparent p-6">
                  <GraduationCap className="mb-5 text-sky-400" size={30} />
                  <p className="text-3xl font-black">3.56</p>
                  <p className="mt-2 text-sm text-slate-400">GPA / 4.00</p>
                </div>
                <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-indigo-500/10 to-transparent p-6">
                  <Award className="mb-5 text-indigo-400" size={30} />
                  <p className="text-xl font-black">Cumlaude</p>
                  <p className="mt-2 text-sm text-slate-400">Academic Predicate</p>
                </div>
                <div className="col-span-2 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
                  <Globe className="mb-4 text-sky-400" size={27} />
                  <h4 className="font-bold">Based in Indonesia</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    Bali, Indonesia · Open to collaboration and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative scroll-mt-24 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              eyebrow="02 — Technical Expertise"
              title="Skills & Technologies"
              description="Technologies and tools listed in my technical skill set."
            />

            <div className="mb-10 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 md:p-10">
              <h3 className="mb-7 text-lg font-bold">Technology Ecosystem</h3>
              <div className="flex flex-wrap items-center gap-5">
                {techIcons.map((tech) => (
                  <img
                    key={tech}
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt={tech}
                    title={tech}
                    className="h-11 w-11 transition duration-300 hover:-translate-y-2 hover:scale-110"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-sky-400/[0.04]"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-5 text-lg font-bold">{skill.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2 text-xs text-slate-300 transition hover:border-sky-400/30 hover:text-sky-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative scroll-mt-24 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              eyebrow="03 — Academic Background"
              title="Education"
              description="My educational journey and academic background."
            />

            <div className="relative ml-3 space-y-8 border-l border-sky-400/20 pl-8">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.school}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:border-sky-400/30"
                  >
                    <div className="absolute -left-[41px] top-8 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#080D18] bg-sky-400" />
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <Icon size={20} className="text-sky-400" />
                          <span className="text-sm font-medium text-sky-300">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">{item.school}</h3>
                        <p className="mt-2 text-sm text-slate-400">
                          {item.degree}
                        </p>
                        {item.detail && (
                          <p className="mt-3 text-sm font-semibold text-sky-300">
                            {item.detail} · {item.highlight}
                          </p>
                        )}
                      </div>
                      {index === 0 && (
                        <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                          Graduated
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              eyebrow="04 — Professional Development"
              title="Certificates"
              description="Training and certifications included in my professional profile."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-sky-400/40 hover:bg-sky-400/[0.04]"
                >
                  <Award className="mb-6 text-sky-400" size={30} />
                  <h3 className="font-semibold leading-7">{certificate}</h3>
                  <div className="mt-5 flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 size={15} />
                    Certificate listed in CV
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal qualities */}
      <section className="relative px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#13213A] to-[#0B1220] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Beyond Technology
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                Personal Qualities
              </h2>
              <p className="mt-5 leading-8 text-slate-400">
                Strong personal values are an important part of creating
                meaningful work and collaborating with others.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {qualities.map((quality) => (
                <div
                  key={quality}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-sky-400" />
                  {quality}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-24 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              05 — Get In Touch
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Let's Build Something
              <span className="block bg-gradient-to-r from-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Amazing Together.
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl leading-8 text-slate-400">
              Have a project, collaboration, or opportunity in mind?
              Feel free to reach out. I'd love to connect with you.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:arya.widnyana96@gmail.com"
                className="flex items-center gap-3 rounded-full bg-sky-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-sky-300"
              >
                <Mail size={19} />
                Send Me an Email
                <ArrowUpRight size={17} />
              </a>
              <a
                href="https://wa.me/6282236292106"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>
            </div>

            <div className="mt-12 flex justify-center gap-5">
              <a
                href="https://github.com/dedearya96"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-4 text-slate-400 transition hover:border-sky-400 hover:text-sky-400"
              >
                <Code2 size={21} />
              </a>
              <a
                href="https://official.trafaline.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-4 text-slate-400 transition hover:border-sky-400 hover:text-sky-400"
              >
                <Globe size={21} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <a href="#home" className="text-lg font-black">
            DEDEARYA<span className="text-sky-400">.DEV</span>
          </a>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} I Gede Arya Widnyana Putra. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-sky-400"
          >
            Back to top <ArrowDown className="rotate-180" size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
