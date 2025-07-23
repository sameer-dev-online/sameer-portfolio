"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import devImage from "../../public/developer_image.png"
export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                
                {/* Placeholder for profile image */}
                <Image
                  src={devImage}
                  alt="Sameer Dev"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl object-fill"
                />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Full-Stack Developer & Problem Solver
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am Sameer Dev, a passionate full-stack developer specializing in the MERN stack and Next.js.
                  I love building performant, scalable, and user-friendly web applications that solve real-world problems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach combines clean code, modern design principles, and a strong focus on user experience.
                  With experience in both frontend and backend development, I enjoy tackling complex challenges
                  and collaborating with teams to deliver impactful solutions.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  {
                    icon: "💡",
                    title: "Innovation-Driven",
                    description: "Always exploring new technologies and best practices"
                  },
                  {
                    icon: "🎯",
                    title: "Detail-Oriented",
                    description: "Focused on writing clean, maintainable code"
                  },
                  {
                    icon: "🤝",
                    title: "Collaborative",
                    description: "Strong communication and teamwork skills"
                  }
                ].map((point) => (
                  <motion.div
                    key={point.title}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
                  >
                    <span className="text-2xl">{point.icon}</span>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">
                        {point.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Let`s Work Together
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}