import React from 'react';
import { motion } from 'framer-motion';

export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

export function Reveal({ children, className = "", delay = 0, width = "100%" }: { children: React.ReactNode, className?: string, delay?: number, width?: "fit-content" | "100%" }) {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
}
