import { motion } from 'framer-motion';
import { MapPin, ArrowDownToLine, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../../components/Animations';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function QuincyIL() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Foundation Repair in Quincy, IL | Brian's Foundation Repair"
                description="Top-rated foundation repair, house leveling, and concrete leveling services in Quincy, IL. Serving the Gem City and Adams County."
            />

            {/* City Hero */}
            <section className="bg-primary-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-primary-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 bg-primary-red/20 text-white px-4 py-2 rounded-full mb-6 border border-primary-red/50">
                            <MapPin size={16} />
                            <span className="text-sm font-bold uppercase tracking-wider">Serving Quincy, Illinois</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Expert Foundation Repair in Quincy, IL</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            Protecting homes and businesses throughout the Gem City and Adams County with permanent, custom foundation solutions.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Local Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <h2 className="text-3xl font-display font-bold text-primary-black mb-6">Protecting the Gem City</h2>
                        <div className="space-y-6 text-lg text-primary-gray leading-relaxed">
                            <p>
                                Quincy's beautiful setting along the Mississippi River means homes are constantly fighting moisture and soil movement. Whether you own a historic home near the East End Historic District or a modern property, a strong foundation is crucial.
                            </p>
                            <p>
                                If you've noticed cracked concrete driveways, a settling foundation, or doors that won't close quite right, we can help. We provide Adams County residents with honest assessments and permanent repairs.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-4">
                            {[
                                "Experienced with river-town soil fluctuations",
                                "Serving both residential and commercial properties",
                                "Cost-effective concrete leveling alternatives"
                            ].map((sign, i) => (
                                <motion.li variants={fadeUp} key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                                    <span className="text-primary-black font-semibold">{sign}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <Link to="/free-inspection" className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
                                Schedule a Free Inspection <ArrowRight size={20} />
                            </Link>
                        </div>
                    </Reveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <motion.div variants={fadeUp} className="bg-concrete p-8 rounded-2xl flex gap-6 items-center">
                            <Hammer className="text-primary-red w-12 h-12 shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold font-display text-primary-black mb-1">Foundation Repair</h3>
                                <p className="text-primary-gray text-sm">Custom solutions for bowed walls and settling footings.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeUp} className="bg-concrete p-8 rounded-2xl flex gap-6 items-center">
                            <ArrowDownToLine className="text-primary-red w-12 h-12 shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold font-display text-primary-black mb-1">Concrete Slab Jacking</h3>
                                <p className="text-primary-gray text-sm">Cost-effective lifting for sunken driveways and patios.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
