import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../../components/Animations';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function KirksvilleMO() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Foundation Repair in Kirksville, MO | Brian's Foundation Repair"
                description="Top-rated foundation repair, house leveling, and concrete leveling services in Kirksville, MO. Serving Adair County and surrounding areas."
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
                            <span className="text-sm font-bold uppercase tracking-wider">Serving Kirksville, Missouri</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Expert Foundation Repair in Kirksville, MO</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            Protecting homes and businesses throughout Adair County. Decades of local experience solving Missouri soil issues.
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
                                From historic homes near Truman State University to newer subdivisions on the edge of town, homes in Kirksville face unique challenges due to Missouri's expansive clay soils and shifting weather patterns.
                            </p>
                            <p>
                                When clay soil gets wet, it expands; when it dries out during hot Kirksville summers, it shrinks. This constant movement is the leading cause of cracked foundations, stuck doors, and uneven floors in our area.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-4">
                            {[
                                "Experienced with Adair County soil types",
                                "Fast, local response times",
                                "Permanent fixes, not temporary patches"
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
                            <p className="text-primary-gray text-sm">Lifting and stabilizing older homes across Northeast Missouri.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
