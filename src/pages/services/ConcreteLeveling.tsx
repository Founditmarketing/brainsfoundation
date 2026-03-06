import { motion } from 'framer-motion';
import { ArrowDownToLine, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../../components/Animations';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function ConcreteLeveling() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Concrete Leveling Services in Kirksville, MO"
                description="Professional concrete leveling and slab jacking for residential and commercial properties. We fix sunken driveways, sidewalks, and patios."
            />

            {/* Hero */}
            <section className="bg-primary-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-primary-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Concrete Leveling & Slab Jacking</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            Changes in soil make concrete sink and crack. We perform expert slab jacking for both residential and commercial properties to eliminate trip hazards and restore curb appeal.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <h2 className="text-3xl font-display font-bold text-primary-black mb-6">Don't Replace It—Raise It!</h2>
                        <div className="space-y-6 text-lg text-primary-gray leading-relaxed">
                            <p>
                                Tearing out and pouring new concrete is expensive, messy, and time-consuming. Concrete leveling (also known as slab jacking or mud jacking) is a cost-effective alternative that restores your sunken concrete in hours, not days.
                            </p>
                            <p>
                                By injecting a specialized mixture beneath the slab, we can gently raise it back to its original position. This process fills the voids caused by soil erosion, stabilizing the soil underneath to prevent future sinking.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link to="/free-inspection" className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
                                Request a Free Estimate <ArrowRight size={20} />
                            </Link>
                        </div>
                    </Reveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-concrete p-10 rounded-3xl"
                    >
                        <h3 className="text-2xl font-display font-bold text-primary-black mb-6 flex items-center gap-3">
                            <ArrowDownToLine className="text-primary-red" />
                            Common Areas We Lift
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "Driveways",
                                "Sidewalks & Walkways",
                                "Patios & Porches",
                                "Garage Floors",
                                "Pool Decks",
                                "Basement Floors",
                                "Steps & Stairs",
                                "Commercial Slabs"
                            ].map((area, i) => (
                                <motion.li variants={fadeUp} key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                                    <span className="text-primary-black">{area}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
