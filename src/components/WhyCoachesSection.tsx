"use client"
import { motion } from "framer-motion";

export default function WhyCoachesSection() {
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

  const painPoints = [
    {
      icon: "😰",
      title: "Struggling to Attract New Clients",
      description: "Your current website isn't converting visitors into paying clients, leaving money on the table.",
      stat: "73% of coaches struggle with client acquisition"
    },
    {
      icon: "📱",
      title: "Outdated, Non-Mobile Website",
      description: "Your website looks unprofessional on mobile devices, driving away potential clients.",
      stat: "60% of users browse on mobile"
    },
    {
      icon: "⏰",
      title: "Manual Booking Headaches",
      description: "Spending hours on back-and-forth emails to schedule sessions instead of coaching.",
      stat: "Save 10+ hours per week"
    },
    {
      icon: "🔍",
      title: "Invisible on Google",
      description: "Potential clients can't find you online when searching for coaching services in your area.",
      stat: "90% of clients search online first"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Increase Revenue by 40%",
      description: "Professional websites convert 3x more visitors into paying clients"
    },
    {
      icon: "⚡",
      title: "Automate Client Booking",
      description: "Let clients book and pay for sessions 24/7 without your involvement"
    },
    {
      icon: "🎯",
      title: "Attract Ideal Clients",
      description: "Target your perfect coaching clients with strategic messaging and design"
    },
    {
      icon: "📈",
      title: "Build Credibility & Trust",
      description: "Professional online presence that positions you as the expert you are"
    }
  ];

  return (
    <section id="why-coaches" className="py-20 bg-secondary/30">
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
              Why Coaches Need <span className="gradient-text">Professional Websites</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't let an outdated website hold back your coaching business. Here's what you're missing without a professional online presence.
            </p>
          </motion.div>

          {/* Pain Points Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-red-600">
              Common Problems Coaches Face Without Professional Websites
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{point.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-800 mb-2">{point.title}</h4>
                      <p className="text-red-700 mb-3 leading-relaxed">{point.description}</p>
                      <div className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full inline-block">
                        {point.stat}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-12 text-green-600">
              Transform Your Business with a Professional Website
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-green-800 mb-2">{benefit.title}</h4>
                      <p className="text-green-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-4 left-4 text-6xl">💻</div>
                <div className="absolute top-8 right-8 text-4xl">📈</div>
                <div className="absolute bottom-4 left-8 text-5xl">🎯</div>
                <div className="absolute bottom-8 right-4 text-3xl">✨</div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Transform Your Coaching Business?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of successful coaches who have grown their businesses with professional websites.
                  Get your free consultation today and see how we can help you attract more clients.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Your Free Website Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
