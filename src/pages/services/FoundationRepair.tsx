import { motion } from 'framer-motion';
import { ShieldCheck, Hammer, CheckCircle2 } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../../components/Animations';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function FoundationRepair() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Foundation Repair Services in Kirksville, MO"
                description="Expert foundation repair services in Northeast Missouri. We address all types of foundation issues, using unique approaches tailored to your specific needs."
            />

            {/* Hero */}
            <section className="bg-primary-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-primary-black" />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Foundation Repair Experts</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            We address all types of foundation issues. Over the years we have experienced every kind of foundation issue imaginable and use a unique, customized approach rather than a one-size-fits-all solution for your home.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <h2 className="text-3xl font-display font-bold text-primary-black mb-6">A Trusted Approach</h2>
                        <div className="space-y-6 text-lg text-primary-gray leading-relaxed">
                            <p>
                                Foundation problems can be caused by soil conditions, poor drainage, or extreme weather. When you notice cracks in your walls, doors that won't close, or uneven floors, you need an expert evaluation.
                            </p>
                            <p>
                                We don't believe in "one size fits all" solutions. We carefully assess your property's specific conditions and design a custom repair plan that provides long-lasting stability for your home.
                            </p>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                                <span className="text-primary-black font-medium">Bowed Wall Repair & Structural Reinforcement</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                                <span className="text-primary-black font-medium">Underpinning & Pier Installation</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                                <span className="text-primary-black font-medium">Crack Injection and Sealing</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link to="/free-inspection" className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
                                Schedule a Free Inspection
                            </Link>
                        </div>
                    </Reveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <motion.div variants={fadeUp} className="bg-concrete p-8 rounded-2xl">
                            <Hammer className="text-primary-red w-10 h-10 mb-4" />
                            <h3 className="text-xl font-bold font-display text-primary-black mb-2">Custom Solutions</h3>
                            <p className="text-primary-gray">Tailored repairs based on your home's unique structural needs.</p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="bg-concrete p-8 rounded-2xl">
                            <ShieldCheck className="text-primary-red w-10 h-10 mb-4" />
                            <h3 className="text-xl font-bold font-display text-primary-black mb-2">Fully Guaranteed</h3>
                            <p className="text-primary-gray">We stand behind our work, ensuring your foundation remains strong.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
