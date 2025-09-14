"use client";
import { motion } from "framer-motion";
export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-background scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions designed specifically for coaches and trainers
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🎯",
                title: "Custom Website Design",
                description: "Professional, mobile-responsive websites that reflect your coaching brand and convert visitors into clients.",
                features: ["Mobile-first design", "Brand integration", "Conversion optimization", "Fast loading speeds"]
              },
              {
                icon: "📅",
                title: "Booking & Scheduling Systems",
                description: "Integrated booking systems that allow clients to schedule sessions directly from your website.",
                features: ["Calendar integration", "Automated reminders", "Payment processing", "Client management"]
              },
              {
                icon: "💼",
                title: "Client Portal Development",
                description: "Secure client portals for course materials, progress tracking, and communication.",
                features: ["User authentication", "Progress tracking", "File sharing", "Messaging system"]
              },
              {
                icon: "📈",
                title: "Lead Generation Tools",
                description: "Landing pages and lead magnets designed to capture and convert your ideal coaching clients.",
                features: ["Lead capture forms", "Email integration", "Analytics tracking", "A/B testing"]
              },
              {
                icon: "🛠️",
                title: "Website Maintenance",
                description: "Ongoing support and maintenance to keep your website secure, updated, and performing optimally.",
                features: ["Security updates", "Content updates", "Performance monitoring", "Technical support"]
              },
              {
                icon: "🚀",
                title: "SEO & Performance",
                description: "Search engine optimization and performance improvements to help clients find you online.",
                features: ["Local SEO", "Speed optimization", "Google Analytics", "Search rankings"]
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <motion.div variants={itemVariants} className="bg-secondary/30 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Why Coaches Choose Our Web Development Services
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand the unique challenges coaches and trainers face in building their online presence.
                  Our specialized approach focuses on creating websites that not only look professional but actually
                  help you attract and convert more clients.
                </p>

                {/* Key Benefits */}
                <div className="space-y-4">
                  {[
                    {
                      icon: "⚡",
                      title: "Fast Results",
                      description: "Get your professional website live within 2-4 weeks"
                    },
                    {
                      icon: "💰",
                      title: "ROI Focused",
                      description: "Websites designed to convert visitors into paying clients"
                    },
                    {
                      icon: "🎯",
                      title: "Coach-Specific",
                      description: "Built specifically for coaching and training businesses"
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
                    Get Your Free Consultation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column - Visual */}
              <motion.div variants={itemVariants} className="relative">
                <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold mb-2">Ready to Grow Your Coaching Business?</h4>
                  <p className="text-muted-foreground">Join 100+ coaches who have transformed their online presence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}