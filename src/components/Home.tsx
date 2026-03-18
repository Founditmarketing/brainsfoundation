import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, MapPin, CheckCircle2, Home as HomeIcon, Hammer, ArrowDownToLine } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from './Animations';
import SEO from './SEO';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="bg-white min-h-screen relative font-sans text-gray-900">
      <SEO
        title="Trusted Foundation Repair in Your Area"
        description="Brian’s Foundation Repair offers reliable foundation repair, concrete leveling, and house leveling services. With years of experience and a trusted crew, we deliver lasting results and peace of mind."
      />

      {/* Sticky Instant Quote CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="tel:6604233468" className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-red-900/30 flex items-center gap-2 transition-transform hover:scale-105">
          Call (660) 423-3468
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-image.png"
            alt="Beautiful rural Missouri home with a solid foundation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Very light gradient just to ensure the white text pops slightly, but keeping it bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-12 md:pt-8 md:pb-16">
          <div className="max-w-2xl bg-black/20 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-xl sm:rounded-full bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm mb-6 backdrop-blur-lg shadow-sm max-w-full"
            >
              <Award size={16} className="text-white shrink-0" />
              <span className="leading-tight">Serving Northeast Missouri & Surrounding Areas</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6 drop-shadow-md"
            >
              Trusted Foundation Repair Serving <span className="text-primary-red drop-shadow-sm">Kirksville & Quincy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white font-medium mb-8 max-w-xl leading-relaxed drop-shadow-md"
            >
              Call a foundation repair company you can trust for any of your foundation repair, house leveling, or concrete leveling needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Link to="/free-inspection" className="w-full sm:w-auto text-center bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                Get a Free Inspection
              </Link>
              <Link to="/services" className="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-primary-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 sm:mx-auto max-w-5xl rounded-xl shadow-xl shadow-black/5 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Award className="text-primary-red w-10 h-10 mx-auto md:mx-0" />
            <div>
              <div className="font-display font-bold text-primary-black">30 Years</div>
              <div className="text-sm text-primary-gray">Experience</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <ShieldCheck className="text-primary-red w-10 h-10 mx-auto md:mx-0" />
            <div>
              <div className="font-display font-bold text-primary-black">Thousands</div>
              <div className="text-sm text-primary-gray">Of Repair Projects</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <CheckCircle2 className="text-primary-red w-10 h-10 mx-auto md:mx-0" />
            <div>
              <div className="font-display font-bold text-primary-black">Licensed</div>
              <div className="text-sm text-primary-gray">& Fully Insured</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <HomeIcon className="text-primary-red w-10 h-10 mx-auto md:mx-0" />
            <div>
              <div className="font-display font-bold text-primary-black">Top-Notch</div>
              <div className="text-sm text-primary-gray">Dedicated Crew</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-3xl mx-auto border-b border-transparent">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-black mb-4">Our Services</h2>
            <p className="text-primary-gray text-lg">With years of experience and a top-notch crew, we can get you taken care of!</p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeUp} className="bg-concrete rounded-2xl p-8 flex flex-col justify-between group hover:bg-primary-black transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10">
                  <HomeIcon className="text-primary-red group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-black mb-4 group-hover:text-white">House Leveling</h3>
                <p className="text-primary-gray group-hover:text-white/70 leading-relaxed">
                  Our trained, certified, and experienced staff knows how to take care of sinking foundations, leaky basements, bowed walls, and more!
                </p>
              </div>
              <Link to="/services/house-leveling" className="flex items-center gap-2 text-primary-black font-semibold group-hover:text-primary-red transition-colors mt-8">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeUp} className="bg-concrete rounded-2xl p-8 flex flex-col justify-between group hover:bg-primary-black transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10">
                  <Hammer className="text-primary-red group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-black mb-4 group-hover:text-white">Foundation Repair</h3>
                <p className="text-primary-gray group-hover:text-white/70 leading-relaxed">
                  We address all types of foundation issues. Over the years we have experienced every kind of foundation issue imaginable and use a unique, customized approach rather than a one-size-fits-all solution for your home.
                </p>
              </div>
              <Link to="/services/foundation-repair" className="flex items-center gap-2 text-primary-black font-semibold group-hover:text-primary-red transition-colors mt-8">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeUp} className="bg-concrete rounded-2xl p-8 flex flex-col justify-between group hover:bg-primary-black transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10">
                  <ArrowDownToLine className="text-primary-red group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-black mb-4 group-hover:text-white">Concrete Leveling</h3>
                <p className="text-primary-gray group-hover:text-white/70 leading-relaxed">
                  Changes in soil make concrete sink and crack. We perform slab jacking for both residential and commercial properties. Free estimates available!
                </p>
              </div>
              <Link to="/services/concrete-leveling" className="flex items-center gap-2 text-primary-black font-semibold group-hover:text-primary-red transition-colors mt-8">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-concrete overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
                <img src="/1.jpg" alt="About Brian's Foundation Repair" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-red text-white p-8 rounded-2xl shadow-xl hidden md:block border-4 border-concrete">
                <div className="text-4xl font-display font-bold mb-1">30+</div>
                <div className="text-sm font-medium uppercase tracking-widest">Years Experience</div>
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2 relative" delay={0.2}>
              <div className="relative z-10">
                <h2 className="text-sm font-bold text-primary-red uppercase tracking-widest mb-4">About Us</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary-black mb-6 leading-tight">
                  Experienced, Local, <br />And <span className="text-primary-red">Dedicated.</span>
                </h3>
                <div className="space-y-6 text-primary-gray text-lg leading-relaxed">
                  <p>
                    We are a family-owned business with deep roots in Northeast Missouri. Our team brings decades of combined experience, a strong work ethic, and a dedication to quality workmanship that comes from our agricultural background in Knox County. We are deeply involved in our local community and have attended the Crossing Church in Kirksville for years.
                  </p>
                  <p>
                    Before starting Brian's Foundation Repair, our founder worked for two different foundation repair companies in the greater Kansas City area, mastering the foundation repair trade. We took the best solutions from both companies and combined them to create the comprehensive approach we use today at Brian's Foundation Repair.
                  </p>
                </div>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary-red font-bold hover:text-red-700 transition-colors mt-8">
                  More About Our Story <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-primary-black text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-red/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 border-b border-transparent">
            <h2 className="text-sm font-bold text-primary-red uppercase tracking-widest mb-4">Our Reviews</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">What Our Customers Say</h3>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative hover:bg-white/10 transition-colors">
              <div className="text-primary-red text-6xl absolute top-4 right-6 opacity-20 font-serif">"</div>
              <div className="flex text-primary-red mb-6">
                {"★★★★★".split("").map((star, i) => <span key={i} className="text-xl">{star}</span>)}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic relative z-10">
                Brian and his crew were absolutely fantastic. It was amazing to watch them work. The quote was right on with what we ended up paying. He also took the time to educate us on exactly what he was doing through the process. Super friendly crew. Hard, honest workers. We are so grateful to be able to move forward with further home projects, knowing we now have a solid foundation.
              </p>
              <div className="font-bold font-display">— Verified Customer</div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative hover:bg-white/10 transition-colors">
              <div className="text-primary-red text-6xl absolute top-4 right-6 opacity-20 font-serif">"</div>
              <div className="flex text-primary-red mb-6">
                {"★★★★★".split("").map((star, i) => <span key={i} className="text-xl">{star}</span>)}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic relative z-10">
                This man and his company are excellent, both in the work they do and the value of that work. They are professional, efficient, and respectful. They did 4 long days work, with the crew working tirelessly to complete the work. They repaired a foundation wall, leveled the foundation, and leveled the floors throughout our home. The cost was very reasonable.
              </p>
              <div className="font-bold font-display">— Verified Customer</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
