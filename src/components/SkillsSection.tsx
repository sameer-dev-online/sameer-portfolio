"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Framer Motion", level: 85, icon: "🎭" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 82, icon: "🐘" },
      { name: "REST APIs", level: 92, icon: "🔗" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90, icon: "📝" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Figma", level: 80, icon: "🎨" },
      { name: "Testing", level: 85, icon: "🧪" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
    },
  },
};

const skillVariants: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${Math.min(Math.max(level || 0, 0), 100)}%`,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    },
  }),
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const safeActiveCategory = Math.max(
    0,
    Math.min(activeCategory, skillCategories.length - 1)
  );

  const currentSkills = skillCategories[safeActiveCategory].skills;

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.title}
                  variants={itemVariants}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-4 rounded-lg text-left font-semibold transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                    activeCategory === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card hover:bg-secondary text-card-foreground"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={safeActiveCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-card-foreground">
                {skillCategories[safeActiveCategory].title} Skills
              </h3>

              <div className="space-y-6">
                {currentSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-card-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 rounded-full"
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Extra Info Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "3+ Years",
              subtitle: "Experience",
              description: "Building web applications",
            },
            {
              title: "10,000+ Lines",
              subtitle: "Written Code",
              description: "From simple scripts to complex applications",
            },
            {
              title: "100%",
              subtitle: "Client Satisfaction",
              description: "Delivering quality solutions",
            },
          ].map((stat) => (
            <motion.div
              key={stat.title}
              variants={itemVariants}
              className="text-center p-6 bg-card rounded-xl border border-border"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.title}
              </div>
              <div className="text-lg font-semibold text-card-foreground mb-1">
                {stat.subtitle}
              </div>
              <div className="text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
