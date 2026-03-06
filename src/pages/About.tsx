import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '../components/Animations';
import SEO from '../components/SEO';

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="About Brian's Foundation Repair"
                description="Learn about our family-owned business, serving the Northeast Missouri area with reliable foundation repair services for over 30 years."
            />

            {/* Hero */}
            <section className="bg-primary-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-primary-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">About Our Company</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            A local, family-owned business dedicated to bringing trust and structural integrity back to your home.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Story */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center p-4">
                            <img
                                src="/brian.JPG"
                                alt="Brian, Owner of Brian's Foundation Repair"
                                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-sm"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h2 className="text-sm font-bold text-primary-red uppercase tracking-widest mb-4">Our Story</h2>
                        <h3 className="text-3xl font-display font-bold text-primary-black mb-6">Deep Roots in Northeast Missouri</h3>
                        <div className="space-y-6 text-lg text-primary-gray leading-relaxed">
                            <p>
                                We are a family-owned business with deep roots in Northeast Missouri. Our team brings decades of combined experience, a strong work ethic, and a dedication to quality workmanship that comes from our agricultural background in Knox County. We are deeply involved in our local community and have attended the Crossing Church in Kirksville for years.
                            </p>
                            <p>
                                Before starting Brian's Foundation Repair, our founder worked for two different foundation repair companies in the greater Kansas City area, mastering the foundation repair trade. We took the best solutions from both companies and combined them to create the comprehensive approach we use today.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-concrete px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-primary-black mb-4">Why Choose Us?</h2>
                        <p className="text-xl text-primary-gray max-w-2xl mx-auto">
                            We stand by our core values of honesty, hard work, and customer satisfaction on every single job.
                        </p>
                    </Reveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                                <Award className="text-primary-red w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary-black mb-3">Decades of Experience</h3>
                            <p className="text-primary-gray leading-relaxed">
                                With 30 years in the industry, there's no foundation problem we haven't seen and successfully repaired.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="text-primary-red w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary-black mb-3">Fully Insured & Local</h3>
                            <p className="text-primary-gray leading-relaxed">
                                We are a fully insured, local business. We treat your property with the same respect we treat our own.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle2 className="text-primary-red w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary-black mb-3">Custom Approach</h3>
                            <p className="text-primary-gray leading-relaxed">
                                We don't sell you things you don't need. We correctly diagnose the problem and provide a tailored solution.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
