import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../../components/Animations';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function KeokukIA() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Foundation Repair in Keokuk, IA | Brian's Foundation Repair"
                description="Trusted foundation repair, house leveling, and concrete leveling services in Keokuk, IA. Serving Lee County and the Tri-State area."
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
                            <span className="text-sm font-bold uppercase tracking-wider">Serving Keokuk, Iowa</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Expert Foundation Repair in Keokuk, IA</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            Delivering massive structural integrity to homes and businesses throughout Lee County and the Tri-State bluffs.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Local Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <h2 className="text-3xl font-display font-bold text-primary-black mb-6">Local Experts You Can Trust</h2>
                        <div className="space-y-6 text-lg text-primary-gray leading-relaxed">
                            <p>
                                Situated right on the Mississippi River, Keokuk homes deal with intense moisture fluctuations, elevated water tables, and the topographical challenges of river bluff construction.
                            </p>
                            <p>
                                When the heavy soils in Lee County become saturated, the resulting hydrostatic pressure can buckle basement walls and crack concrete slabs. When the soil dries, footings can lose their bearing and sink. We diagnose these precise geographical challenges and engineer permanent foundation repair solutions.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-4">
                            {[
                                "Experienced with Tri-State river valley soils",
                                "Fast, dedicated response across Lee County",
                                "Permanent foundation fixes, fully guaranteed"
                            ].map((sign, i) => (
                                <motion.li variants={fadeUp} key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary-red shrink-0 mt-1" />
                                    <span className="text-primary-black font-semibold">{sign}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <Link to="/free-inspection" className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
                                Get a Free Estimate <ArrowRight size={20} />
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
                            <h3 className="text-xl font-bold font-display text-primary-black mb-2">Foundation Repair</h3>
                            <p className="text-primary-gray text-sm">Bowed walls, cracked blocks, and sinking foundations fixed right.</p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="bg-concrete p-8 rounded-2xl">
                            <ShieldCheck className="text-primary-red w-10 h-10 mb-4" />
                            <h3 className="text-xl font-bold font-display text-primary-black mb-2">House Leveling</h3>
                            <p className="text-primary-gray text-sm">Lifting and stabilizing older homes across the Tri-State area.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
