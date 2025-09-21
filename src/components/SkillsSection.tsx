"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import male1 from "../../public/Testimonials_photos/Male1.jpeg";
import male2 from "../../public/Testimonials_photos/Male2.jpeg";
import male3 from "../../public/Testimonials_photos/Male3.jpeg";
import female1 from "../../public/Testimonials_photos/Female1.jpg";
import female2 from "../../public/Testimonials_photos/Female2.jpg";
import female3 from "../../public/Testimonials_photos/Female3.jpg";
const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Life Coach",
    business: "Mindful Transformations",
    image: female1,
    rating: 5,
    testimonial: "Working with this team transformed my coaching business completely. My new website has increased my client bookings by 300% in just 3 months. The automated booking system saves me 15 hours per week!",
    result: "300% increase in bookings",
    location: "Austin, TX"
  },
  {
    name: "Michael Chen",
    title: "Fitness Trainer",
    business: "Peak Performance Coaching",
    image: male1,
    rating: 5,
    testimonial: "I was struggling to attract clients online. The new website not only looks amazing but actually converts visitors into paying clients. My revenue has doubled since launching!",
    result: "Revenue doubled",
    location: "San Francisco, CA"
  },
  {
    name: "Emily Rodriguez",
    title: "Business Coach",
    business: "Success Strategies",
    image: female2,
    rating: 5,
    testimonial: "The team understood exactly what my coaching business needed. The website perfectly represents my brand and the client portal has streamlined my entire coaching process.",
    result: "Streamlined operations",
    location: "Miami, FL"
  },
  {
    name: "David Thompson",
    title: "Career Coach",
    business: "Career Catalyst",
    image: male3,
    rating: 5,
    testimonial: "Professional, responsive, and results-driven. My website now ranks #1 on Google for career coaching in my city. The lead generation tools are incredible!",
    result: "#1 Google ranking",
    location: "Seattle, WA"
  },
  {
    name: "Lisa Park",
    title: "Wellness Coach",
    business: "Holistic Health Hub",
    image: female3,
    rating: 5,
    testimonial: "The booking system and client management features have revolutionized how I run my practice. I can focus on coaching instead of administrative tasks.",
    result: "10+ hours saved weekly",
    location: "Denver, CO"
  },
  {
    name: "James Wilson",
    title: "Executive Coach",
    business: "Leadership Excellence",
    image: male2,
    rating: 5,
    testimonial: "My new website positions me as the premium executive coach I am. The professional design and testimonials section have helped me attract Fortune 500 clients.",
    result: "Fortune 500 clients",
    location: "New York, NY"
  }
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

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.00 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how we've helped coaches and trainers transform their businesses with professional websites
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>

            <div className="relative" key={`testimonial-container-${currentTestimonial}`}>
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <motion.div
                  className="mb-6"
                  key={currentTestimonial}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={`${testimonials[currentTestimonial].name} - ${testimonials[currentTestimonial].title}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Testimonial Content */}
                <motion.blockquote
                  className="text-lg lg:text-xl text-card-foreground mb-6 leading-relaxed italic max-w-4xl"
                  key={`testimonial-${currentTestimonial}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  "{testimonials[currentTestimonial].testimonial}"
                </motion.blockquote>

                {/* Client Info and Result */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                  {/* Client Info */}
                  <div className="text-center">
                    <div className="font-bold text-card-foreground text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-primary font-semibold">{testimonials[currentTestimonial].title}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].business}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</div>
                  </div>

                  {/* Result Badge */}
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap shadow-md">
                    {testimonials[currentTestimonial].result}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  onClick={prevTestimonial}
                  className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={nextTestimonial}
                  className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "100+",
              subtitle: "Happy Coaches",
              description: "Successfully launched websites",
            },
            {
              title: "300%",
              subtitle: "Average Growth",
              description: "In client bookings after launch",
            },
            {
              title: "98%",
              subtitle: "Client Satisfaction",
              description: "Would recommend our services",
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
