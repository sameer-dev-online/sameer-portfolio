"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PricingSection() {
  const [starterPrice, setStarterPrice] = useState<number>(100);
  const [standardPrice, setStandardPrice] = useState<number>(200);
  const [premiumPrice, setPremiumPrice] = useState<number>(500);
  const [starterPkrPrice, setStarterPkrPrice] = useState<string>("25,000");
  const [standardPkrPrice, setStandardPkrPrice] = useState<string>("35,000");
  const [premiumPkrPrice, setPremiumPkrPrice] = useState<string>("50,000");
  const [currency, setCurrency] = useState<string>("PKR");
useEffect(() => {
  (async()=> {
     const res = await fetch('/api/location');
     const data = await res.json();
     setCurrency(data?.currency);
  })()
},[]);
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`);
  //     const data= await res.json(); 
  //     console.log(data.usd.pkr);
  //     setStarterPkrPrice(Math.round(data.usd.pkr * starterPrice));
  //     setStandardPkrPrice(Math.round(data.usd.pkr * standardPrice));
  //     setPremiumPkrPrice(Math.round(data.usd.pkr * premiumPrice));
      
  //   })(); 
  // }, [currency, starterPrice, standardPrice, premiumPrice]);

  
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

  const pricingPlans = [
    {
      name: "Starter",
      price: currency === "PKR" ? `PKR ${starterPkrPrice}` : `$${starterPrice}`,
      description: "Perfect for new coaches getting started online",
      features: [
        "4-page professional website",
        "Responsive Design (mobile + tablet friendly)",
        "Contact form",
        "Social media integration",
        "Ui Animations",
        "Hosting & Domain included (1st year). Renewal charges apply annually",
        "1 month support",
        "Basic SEO setup"
      ],
      popular: false,
      cta: "Get Started",
      timeline: "3-5 days delivery"
    },
    {
      name: "Standard",
      price: currency === "PKR" ? `PKR ${standardPkrPrice}` : `$${standardPrice}`,
      description: "Most popular choice for established coaches",
      features: [
        "5-page custom website (Home, About, Services, Contact, Blog)",
        "Responsive Design (mobile + tablet friendly)",
        "Animations",
        "Custom Branding (colors, fonts, logo placement)",
        "Contact Form / WhatsApp / Email Integration",
        "Email automation setup",
        "Advanced SEO optimization",
        "3 months support",
        "1 Round of Revisions",
        "Hosting & Domain included (1st year). Renewal charges apply annually",
        "Google Analytics setup"
      ],
      popular: true,
      cta: "Most Popular",
      timeline: "5-7 days delivery"
    },
    {
      name: "Premium",
      price: currency === "PKR" ? `PKR ${premiumPkrPrice}` : `$${premiumPrice}`,
      description: "Complete solution for scaling coaching businesses",
      features: [
        "Custom website (Next.js + Tailwind + ShadCN + Framer Motion)",
        "Authentication system (login for students/clients)",
        "Admin dashboard (manage content, blog, events, courses)",
        "Payment integration (Stripe/PayPal)",
        "Booking system (Calendly, Zoom integration, or custom)",
        "CMS / Content upload (headless CMS or your own panel)",
        "Monthly maintenance plan (optional $50/month)",
        "Domain and hosting charges not included in this package.",

      ],
      popular: false,
      cta: "Go Premium",
      timeline: "10-15 days delivery"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background scroll-mt-20 md:scroll-mt-24">
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
              Investment <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your coaching business. All packages include our 30-day money-back guarantee.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${plan.popular
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border hover:border-primary/50'
                  }`}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-2">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="text-sm text-primary font-semibold mt-2">{plan.timeline}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-colors duration-200 block ${plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Not sure which package is right for you?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Book a free 30-minute consultation call where we'll discuss your specific needs and recommend the best solution for your coaching business.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Money Back Guarantee */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-green-800 font-semibold">30-Day Money-Back Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
