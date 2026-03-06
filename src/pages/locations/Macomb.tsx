import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../../components/Animations';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function MacombIL() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Foundation Repair in Macomb, IL | Brian's Foundation Repair"
                description="Professional foundation repair, house leveling, and concrete leveling services in Macomb, IL. Serving McDonough County and West-Central Illinois."
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
                            <span className="text-sm font-bold uppercase tracking-wider">Serving Macomb, Illinois</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Expert Foundation Repair in Macomb, IL</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            Protecting homes and businesses throughout McDonough County. Decades of experience solving West-Central Illinois structural issues.
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
                                From historic neighborhoods near Western Illinois University to sprawling rural properties in McDonough County, homes in Macomb are susceptible to foundation shifts triggered by the region's dense soil composition and freeze-thaw cycles.
                            </p>
                            <p>
                                As temperatures drop and moisture freezes beneath your footing, the resulting hydrostatic pressure can crack basements and bow structural walls. Conversely, intense summer heat causes the soil to shrink, removing support. We specialize in stabilizing homes against these exact regional forces.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-4">
                            {[
                                "Experienced with West-Central Illinois soil types",
                                "Fast, local response times for Macomb property owners",
                                "Permanent structural reinforcement and leveling"
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
                            <p className="text-primary-gray text-sm">Lifting and stabilizing older homes across Illinois and Missouri.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
