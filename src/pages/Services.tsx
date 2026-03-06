import { motion } from 'framer-motion';
import { ShieldCheck, Hammer, ArrowDownToLine, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, staggerContainer, fadeUp } from '../components/Animations';
import SEO from '../components/SEO';
import { CompareSlider } from '../components/CompareSlider';

export default function Services() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Our Services | Brian's Foundation Repair"
                description="Comprehensive foundation repair, house leveling, and concrete leveling services in Kirksville and Northeast Missouri."
            />

            {/* Hero */}
            <section className="bg-primary-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-primary-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Expert Foundation Services</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            With over 30 years of experience, we provide custom, long-lasting solutions for all your structural and concrete needs.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Reveal className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-primary-red uppercase tracking-widest mb-4">See The Difference</h2>
                    <h3 className="text-3xl font-display font-bold text-primary-black mb-6">Quality You Can Trust</h3>
                    <p className="text-lg text-primary-gray">
                        Drag the slider to see how we lift sinking concrete back to its original position, restoring both safety and curb appeal.
                    </p>
                </Reveal>

                <Reveal delay={0.2} className="mb-24">
                    <CompareSlider
                        beforeImage="/before-repair.jpg"
                        afterImage="/after-repair.jpg"
                    />
                </Reveal>

                <Reveal className="mb-16">
                    <h2 className="text-3xl font-display font-bold text-primary-black mb-6 border-b-2 border-primary-red inline-block pb-2">Our Core Services</h2>
                </Reveal>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Service 1 */}
                    <motion.div variants={fadeUp} className="bg-concrete rounded-2xl p-8 flex flex-col justify-between group hover:bg-primary-black transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10">
                                <ShieldCheck className="text-primary-red group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-primary-black mb-4 group-hover:text-white">House Leveling</h3>
                            <p className="text-primary-gray group-hover:text-white/70 leading-relaxed">
                                Take care of sinking foundations, sloping floors, and more. Restore your home to level.
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
                                We address all types of foundation issues using unique and custom approaches.
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
                                Slab jacking for residential and commercial properties to fix sinking concrete and trip hazards.
                            </p>
                        </div>
                        <Link to="/services/concrete-leveling" className="flex items-center gap-2 text-primary-black font-semibold group-hover:text-primary-red transition-colors mt-8">
                            Learn More <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>

            </section>
        </div>
    );
}
