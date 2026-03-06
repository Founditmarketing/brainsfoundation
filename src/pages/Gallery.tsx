import { motion } from 'framer-motion';
import { Reveal, staggerContainer, fadeUp } from '../components/Animations';
import SEO from '../components/SEO';

export default function Gallery() {
    // We renamed 10 project images: project-1.jpg through project-10.jpg
    const projectImages = Array.from({ length: 10 }, (_, i) => `/project-${i + 1}.jpg`);

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Project Gallery | Brian's Foundation Repair"
                description="View our past foundation repair, house leveling, and concrete leveling projects in Kirksville and Northeast Missouri."
            />

            {/* Hero */}
            <section className="bg-primary-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-primary-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Work in Action</h1>
                        <p className="text-xl text-primary-gray leading-relaxed max-w-2xl mx-auto">
                            Browse our gallery to see the quality and dedication we bring to every job site in Northeast Missouri.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {projectImages.map((src, idx) => (
                        <motion.div
                            variants={fadeUp}
                            key={idx}
                            className={`relative group overflow-hidden rounded-2xl bg-gray-100 ${
                                // Make some images span 2 columns/rows for a masonry feel
                                idx === 0 || idx === 5 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'
                                }`}
                        >
                            <img
                                src={src}
                                alt={`Brian's Foundation Repair Project ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="text-white font-bold tracking-wider uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-md bg-black/20">
                                    View Details
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
