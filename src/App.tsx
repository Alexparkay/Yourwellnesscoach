import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Leaf, 
  Star, 
  ArrowRight, 
  Award, 
  ChevronRight, 
  Dumbbell, 
  Shield,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { Section } from './components/Section';
import { FloatingBubbles, BackgroundText, DecorativeCircles } from './components/Background';
import { ImageCard } from './components/ImageCard';
import { ScheduleForm } from './components/ScheduleForm';
import { TestimonialCard } from './components/TestimonialCard';
import { TestimonialModal } from './components/TestimonialModal';

// Rest of the App.tsx file remains exactly the same
const App: React.FC = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Local Café Owner",
      content: "Aki's holistic approach to wellness completely changed how I manage my busy café life. His guidance has been invaluable!",
      fullStory: "Running a café meant long hours and constant stress. Aki helped me see that self-care isn't selfish - it's essential. His practical approach and genuine care made all the difference. Through his coaching, I learned to prioritize my wellbeing without sacrificing my business. His understanding of the challenges faced by small business owners made his guidance particularly valuable. Now I have more energy, better focus, and I'm actually enjoying my work again.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      rating: 5,
      achievements: [
        "Created a sustainable morning routine",
        "Improved energy levels throughout the day",
        "Better work-life balance",
        "Reduced stress and anxiety"
      ]
    },
    {
      name: "Mark Anderson",
      role: "Construction Worker",
      content: "Aki understood the physical demands of my job and created a program that actually works. He's a genuinely great coach who cares.",
      fullStory: "Working in construction takes a toll on your body, and Aki immediately understood my challenges. His background in recovery and wellness meant he could offer practical solutions that fit my lifestyle. What sets him apart is how he combines physical wellness with mental strength training. Thanks to his coaching, I've developed better movement patterns and recovery strategies that work with my schedule. He's not just a coach, he's become a trusted mentor.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      rating: 5,
      achievements: [
        "Improved physical resilience",
        "Better sleep quality",
        "Enhanced recovery techniques",
        "More energy for family time"
      ]
    },
    {
      name: "Emma Davis",
      role: "Working Mum",
      content: "Aki's supportive approach made all the difference. He understood my challenges as a working mum and helped me find realistic solutions.",
      fullStory: "Juggling a full-time job with three kids felt impossible, but Aki's compassionate approach changed everything. He helped me see that small changes could make a big impact. What I appreciate most about Aki is his ability to adapt the program to fit my busy life. He never made me feel guilty about missing a session - instead, he helped me find ways to integrate wellness into my daily routine. His coaching has benefited not just me, but my whole family.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      rating: 5,
      achievements: [
        "Created family-friendly healthy routines",
        "Improved stress management",
        "Better time management",
        "Increased daily energy"
      ]
    }
  ];

  const wellnessServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "1-to-1 Coaching",
      description: "Personalized coaching sessions tailored to your unique needs and goals. We work together to create a customized wellness plan that fits your lifestyle.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80"
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-500" />,
      title: "Habit Transformation",
      description: "Identify and transform negative habits into positive, sustainable behaviors. Learn proven techniques for lasting lifestyle changes.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80"
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-500" />,
      title: "Mindset Development",
      description: "Develop a growth mindset and overcome limiting beliefs. Build mental resilience and emotional intelligence for long-term success.",
      image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-500" />,
      title: "Lifestyle Integration",
      description: "Learn to seamlessly integrate wellness practices into your daily routine. Create sustainable changes that enhance your quality of life.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-slate-50">
      <div className="fixed top-4 left-4 z-50 transition-all duration-300">
        <img
          src="/images/logo.svg"
          alt="Your Wellness Coach Logo"
          className={`h-16 w-auto transition-all duration-300 brightness-0 invert`}
        />
      </div>
      {showSchedule ? (
        <Section className="min-h-screen py-20">
          <BackgroundText text="SCHEDULE" />
          <DecorativeCircles variant="blue" />
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => setShowSchedule(false)}
              className="mb-8 text-blue-500 hover:text-blue-600 flex items-center gap-2 font-heading"
            >
              ← Back to Home
            </button>
            <h2 className="text-4xl font-bold text-center mb-12">Begin Your Journey</h2>
            <ScheduleForm />
          </div>
        </Section>
      ) : (
        <>
          {/* Hero Section */}
          <Section className="min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-0">
            <FloatingBubbles />
            <DecorativeCircles variant="primary" />
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
                alt="Wellness background"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/95 to-purple-900/95" />
            </div>
            <BackgroundText text="TRANSFORM" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                  Transform Your Life Through
                  <span className="block text-blue-300">Mindful Wellness</span>
                </h1>
                <p className="hero-subtitle text-gray-200 mb-8">
                  Ready to make real, lasting changes? Let's work together to improve your mental wellbeing, 
                  develop a healthier relationship with food, and create a lifestyle that actually works for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-heading font-semibold transition-all hover:scale-105 hover:shadow-lg"
                    onClick={() => setShowSchedule(true)}
                  >
                    <ArrowRight className="w-5 h-5" />
                    Book Free Consultation
                  </button>
                  <button 
                    className="flex items-center justify-center gap-2 text-blue-300 border-2 border-blue-300 px-8 py-4 rounded-lg text-lg font-heading font-semibold hover:bg-blue-300/10 transition-all"
                    onClick={() => {
                      const testimonialSection = document.getElementById('testimonials');
                      if (testimonialSection) {
                        testimonialSection.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    <Star className="w-5 h-5" />
                    Success Stories
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative md:block h-[600px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80"
                  alt="Wellness transformation"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent" />
              </motion.div>
            </div>
          </Section>

          {/* Services Section */}
          <Section transition="up" pattern="waves" className="py-32 bg-white">
            <DecorativeCircles variant="blue" />
            <BackgroundText text="TRANSFORM" />
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Your Path to Wellness
              </h2>
              <p className="section-subtitle text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Experience a transformative journey that goes beyond traditional fitness coaching. 
                Our comprehensive approach focuses on sustainable lifestyle changes, mindset development, 
                and lasting habit formation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {wellnessServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all h-[400px]"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="relative h-full p-8 flex flex-col z-10">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 text-white" })}
                        </div>
                        <div>
                          <h3 className="service-title font-bold mb-3 text-white">{service.title}</h3>
                          <p className="text-gray-200">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Testimonials Section */}
          <Section id="testimonials" className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            <DecorativeCircles variant="light" />
            <BackgroundText text="STORIES" />
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">
                Transformation Stories
              </h2>
              <p className="text-center text-gray-300 mb-16">Click on any story to read the full transformation journey</p>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSelectedTestimonial(index)} 
                    className="cursor-pointer group relative"
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-blue-500/10 backdrop-blur-sm rounded-2xl z-10 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-heading">
                        Click to Read Full Story
                      </div>
                    </div>
                    <TestimonialCard {...testimonial} delay={index * 0.2} />
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* About Section */}
          <Section transition="up" pattern="curves" className="py-32 bg-white">
            <DecorativeCircles variant="blue" />
            <BackgroundText text="JOURNEY" />
            <BackgroundText text="EVOLVE" />
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Aki</h2>
                  <p className="section-subtitle text-gray-700 mb-12">
                    Hey, I'm Aki! I've spent the last decade helping people like you make positive changes 
                    that stick. I believe in keeping things simple and real - whether it's finding peace of mind, 
                    making better food choices, or building lasting habits. Through my work, including founding 
                    Renati Recovery, I've learned that lasting change happens when we focus on what works for you.
                  </p>
                  <div className="space-y-6 mb-12">
                    {[
                      { icon: <Award className="w-7 h-7 text-blue-500" />, text: "Certified Wellness Coach" },
                      { icon: <Brain className="w-7 h-7 text-blue-500" />, text: "Mental Health Specialist" },
                      { icon: <Shield className="w-7 h-7 text-blue-500" />, text: "Nutrition & Habits Expert" },
                      { icon: <Dumbbell className="w-7 h-7 text-blue-500" />, text: "10+ Years Experience" }
                    ].map((credential, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all"
                      >
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                          {credential.icon}
                        </div>
                        <span className="text-lg font-heading text-gray-800">{credential.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center mb-12">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                      <div className="flex justify-center">
                        {/* Removed Granade logo section */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
                    <img
                      src="/images/coach-aki.jpg"
                      alt="Coach Aki"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full" />
                </div>
              </div>
            </div>
          </Section>

          {/* Online Coaching Access Section */}
          <Section transition="down" pattern="zigzag" className="py-32 bg-gray-50">
            <DecorativeCircles variant="blue" />
            <BackgroundText text="ACCESS" />
            <div className="max-w-3xl mx-auto px-4">
              <div className="space-y-12">
                {/* Online Coaching Info */}
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">Online Coaching Access</h2>
                  <p className="text-gray-700">
                    Get personalized support when it works for you. Weekly one-hour video sessions 
                    during weekdays, plus ongoing WhatsApp support to keep you on track.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-500" />
                      </div>
                      <span className="text-gray-800">Online Sessions Worldwide</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-500" />
                      </div>
                      <span className="text-gray-800">Weekday sessions + 24/7 WhatsApp support</span>
                    </div>
                  </div>
                </div>

                {/* Laptop Image */}
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
                  alt="Online coaching"
                  className="rounded-xl shadow-lg w-full aspect-video object-cover"
                />

                {/* Workbook Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Included Workbooks</h3>
                  <p className="text-gray-600">
                    Access practical workbooks covering mental wellness, nutrition guidance, and habit-building strategies.
                  </p>
                </div>

                {/* Workbook Image */}
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
                  alt="Wellness Workbooks"
                  className="rounded-xl shadow-lg w-full aspect-video object-cover"
                />
              </div>
            </div>
          </Section>

          {/* Call to Transform Section */}
          <Section transition="up" pattern="waves" className="py-20 bg-white">
            <DecorativeCircles variant="blue" />
            <div className="max-w-5xl mx-auto px-4 text-center">
              <div className="bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-blue-100 relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at ${50 + (i * 20)}% ${50 + (i * 10)}%, rgba(96, 165, 250, 0.1) 0%, transparent 60%)`,
                          animation: `pulse ${8 + i}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0" 
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      opacity: 0.5
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Ready to Transform Your Life?
                  </h2>
                  <p className="section-subtitle text-gray-600 mb-12 max-w-2xl mx-auto">
                    Take the first step towards a healthier, more balanced lifestyle. 
                    Our personalized coaching approach will help you create lasting change.
                  </p>
                  <button 
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-heading font-semibold transition-all hover:scale-105 hover:shadow-lg mx-auto group"
                    onClick={() => setShowSchedule(true)}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Schedule Your Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden">
            <DecorativeCircles variant="light" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Your Wellness Coach</h3>
                  <p className="text-gray-300">
                    Transforming lives through mindful wellness coaching, specializing in mental health, 
                    nutrition, and sustainable habits.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Contact</h4>
                  <p className="text-gray-300">Online Coaching</p>
                  <p className="text-gray-300">info@yourwellnesscoach.co.uk</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                  <div className="flex items-center space-x-6">
                    <a 
                      href="https://www.instagram.com/renatirecovery/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.renatirecovery.co.uk/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <img
                        src="/images/granade-logo.png"
                        alt="Renati Recovery"
                        className="h-8 w-auto opacity-90 hover:opacity-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
                <p>&copy; 2024 Your Wellness Coach. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}

      {selectedTestimonial !== null && (
        <TestimonialModal
          testimonial={testimonials[selectedTestimonial]}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </div>
  );
};

export default App;