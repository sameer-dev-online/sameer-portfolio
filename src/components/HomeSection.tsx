"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import devImage from "../../public/developer_image.png"
import my_image from "../../public/my_profile_image.jpg"
import Image from "next/image";

export default function HomeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
            }}
            animate={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
            <div className="w-full h-full rounded-full bg-background overflow-hidden">
              <Image
                src={my_image}
                alt="Profile picture of Sameer Dev"
                width={128}
                height={128}
                className="w-full h-full object-fill"
                priority
              />
            </div>
          </div>

        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I`m{" "}
          <span className="gradient-text">Sameer Dev</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 text-muted-foreground"
        >
          Full-Stack MERN + Next.js Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 text-muted-foreground leading-relaxed"
        >
          I build modern, scalable web applications with a focus on clean code,
          performance, and exceptional user experiences. Let`s create something amazing together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}