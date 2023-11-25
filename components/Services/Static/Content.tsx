"use client";

import { motion } from "framer-motion";
import { title } from "@/components/primitives";

const StaticServiceContent = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center 5"
            >
                <div className="cnt">
                    <h1 className={title()}>Pros</h1> 
                    <ul>
                        <li>Fast</li>
                        <li>Secure</li>
                        <li>SEO-friendly</li>
                        <li>Easy to maintain</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}

export default StaticServiceContent;