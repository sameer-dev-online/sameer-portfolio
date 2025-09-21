"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import portfolioImage from "../../public/sameer-portfolio-image.png";
import megaMallImage from "../../public/mega-mall-image.png";
import trueFeedbackImage from "../../public/true-feedback-image.png"
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Sarah's Life Coaching Website",
    description: "Complete website transformation for a life coach, including booking system and client portal.",
    longDescription: "Sarah was struggling to attract clients with her outdated website. We created a modern, conversion-focused site with integrated booking system. Result: 300% increase in client bookings within 3 months.",
    image: portfolioImage.src,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Booking System"],
    liveLink: "#",
    githubLink: "#",
    category: "Life Coaching",
    featured: true,
  },
  {
    title: "Peak Performance Fitness Coaching",
    description: "Professional website for a fitness trainer with client management and progress tracking features.",
    longDescription: "Michael needed a website that could showcase his expertise and manage his growing client base. We built a comprehensive platform with client portals, progress tracking, and automated scheduling. His revenue doubled within 6 months.",
    image: megaMallImage.src,
    technologies: ["React", "Node.js", "MongoDB", "Payment Integration"],
    liveLink: "#",
    githubLink: "#",
    category: "Fitness Coaching",
    featured: true,
  },

  {
    title: "Executive Leadership Coaching Platform",
    description: "Premium website for executive coaching with advanced client management and assessment tools.",
    longDescription: "James wanted to position himself as a premium executive coach. We created a sophisticated platform with assessment tools, client dashboards, and premium branding. He now attracts Fortune 500 clients regularly.",
    image: trueFeedbackImage.src,
    technologies: ["Next.js", "TypeScript", "Advanced Analytics", "Client Portal"],
    liveLink: "#",
    githubLink: "#",
    category: "Executive Coaching",
    featured: true,
  },


];

const categories = ["All", "Life Coaching", "Fitness Coaching", "Business Coaching", "Executive Coaching"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.00 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Success <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from coaches and trainers who transformed their businesses with our websites
            </p>
          </motion.div>

          {/* Featured Case Studies */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Client Transformations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={`featured-${project.title}`}
                  variants={itemVariants}
                  className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={350}
                          height={350}
                        />
                      </div>
                    </div>

                    {/* Hover overlay with links */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}

                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {hoveredProject === index ? project.longDescription : project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <>
                          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                            +{project.technologies.length - 3}
                          </span>

                        </>
                      )}

                    </div>
                    <div className="w-full text-center p-[20px]">
                      <motion.a
                        href="#contact"
                        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Get Similar Results
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}