import { motion } from 'framer-motion';
import { Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../../components/Animations';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function HouseLeveling() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="House Leveling in Kirksville, MO"
                description="Professional house leveling services by Brian's Foundation Repair. We fix sinking foundations, sloping floors, and structural damage across Northeast Missouri."
            />

            {/* Hero */}
            <section className="bg-primary-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-primary-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">House Leveling Services</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            Our trained, certified, and experienced staff knows how to take care of sinking foundations, sloping floors, and bringing your home back to level.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <h2 className="text-3xl font-display font-bold text-primary-black mb-6">Restoring Your Home's Balance</h2>
                        <div className="space-y-6 text-lg text-primary-gray leading-relaxed">
                            <p>
                                A sinking or unlevel house can lead to severe structural damage over time. Doors sticking, windows that won't open, and sloping floors are key indicators that your home needs leveling.
                            </p>
                            <p>
                                Using industry-leading techniques and equipment, our crew carefully lifts and stabilizes your home, restoring it to its original level and ensuring the safety of your investment.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link to="/free-inspection" className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
                                Get a Leveling Estimate <ArrowRight size={20} />
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
                            <Home className="text-primary-red" />
                            Signs You Need Leveling
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Uneven or sloping floors",
                                "Doors that stick or won't latch",
                                "Cracks in drywall around door frames",
                                "Gaps between walls and the ceiling/floor",
                                "Exterior brick cracking"
                            ].map((sign, i) => (
                                <motion.li variants={fadeUp} key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                                    <span className="text-primary-black">{sign}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
